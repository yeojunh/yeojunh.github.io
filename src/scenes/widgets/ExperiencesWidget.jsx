import React from "react";
import { Divider, Typography } from "@mui/material";
import ExperienceWidget from "./ExperienceWidget";
import experiences from "../../data/experiences";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useTheme } from "@emotion/react";

const ExperiencesWidget = () => {
    const { palette } = useTheme(); 
    const dark = palette.neutral.dark;

    return (
        <WidgetWrapper>
            <Typography variant="h5" mb="1rem" sx={{ color: dark }}>Experiences</Typography>
            {experiences.map((experience, index) => (
                <React.Fragment key={index}>
                    <ExperienceWidget 
                        title={experience.title}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                        website={experience.website}
                        picturePath={palette.mode === "dark" ? experience.picturePath : experience.altPicturePath} 
                    />
                    {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
                </React.Fragment>
            ))}
        </WidgetWrapper>
    );
};

export default ExperiencesWidget;