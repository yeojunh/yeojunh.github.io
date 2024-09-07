import React from "react";
import { Divider } from "@mui/material";
import ExperienceWidget from "./ExperienceWidget";
import experiences from "../../data/experiences";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useTheme } from "@emotion/react";

const ExperiencesWidget = () => {
    const { palette } = useTheme(); 

    return (
        <WidgetWrapper>
            {experiences.map((experience, index) => (
                <React.Fragment key={index}>
                    <ExperienceWidget 
                        title={experience.title}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                        picturePath={palette.mode === "dark" ? experience.picturePath : experience.altPicturePath} 
                    />
                    {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
                </React.Fragment>
            ))}
        </WidgetWrapper>
    );
};

export default ExperiencesWidget;