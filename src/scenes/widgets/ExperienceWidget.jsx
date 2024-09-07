import { Typography, useTheme, Box } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import React from "react";

const ExperienceWidget = ({ 
    title, 
    startDate, 
    endDate, 
    description,
    picturePath,
    size = "150px"
}) => {
    const { palette } = useTheme(); 
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const formattedStartDate = startDate.replace(/ /g, '\u00A0');
    const formattedEndDate = endDate.replace(/ /g, '\u00A0');

    return (
        <Box>
            <img 
                width={size}
                height="auto"
                alt="logo"
                src={picturePath}
                style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
            />
            <Box pb="0.5rem" />
            <FlexBetween >
                <Typography color={main}>
                    {title}
                </Typography>
                <Typography color={medium} sx={{ textAlign: "left" }}>
                {formattedStartDate}&nbsp;-<br />{formattedEndDate}
                </Typography>
            </FlexBetween>
            <Typography color={medium} sx={{ m: "0.5rem 0", wordBreak: "break-word" }}>
                {description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </Typography>

        </Box>
    )
}

export default ExperienceWidget;