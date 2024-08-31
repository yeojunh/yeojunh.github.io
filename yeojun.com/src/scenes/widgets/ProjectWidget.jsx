import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import iconMapping from "../../utils/iconMapping";

const ProjectWidget = ({ title, subtitle, iconName }) => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.primary.main;
    const medium = palette.neutral.medium;
  
    const IconComponent = iconMapping[iconName];

    return (
        <Box>
            <FlexBetween gap="1rem">
                <Box>
                <Typography
                    color={dark}
                    variant="h4"
                    fontWeight="500"
                >
                    {title}
                </Typography>
                </Box>
                {IconComponent && <IconComponent sx={{ color: main }} />}
            </FlexBetween>
            <FlexBetween>
                <Typography color={medium} fontSize="0.75rem">
                    {subtitle}
                </Typography>
            </FlexBetween>
        </Box>
    )
}

export default ProjectWidget;