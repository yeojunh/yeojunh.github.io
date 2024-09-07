import WidgetWrapper from "../../components/WidgetWrapper";
import { useTheme } from "@emotion/react";
import { Typewriter } from "react-simple-typewriter";
import { Box, Typography } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";

const NewPostWidget = () => {
    const { palette } = useTheme(); 
    const dark = palette.neutral.dark;
    const light = palette.neutral.light;

    return (
        <WidgetWrapper>
            <Typography variant="h5" sx={{ color: dark }}>About me</Typography>
            <FlexBetween>
                <UserImage size="40px" />
                <Box 
                    margin="1rem"
                    sx={{
                        width: "100%",
                        backgroundColor: light,
                        borderRadius: "2rem",
                        padding: "1rem 2rem"
                    }}
                >
                    <Typewriter 
                        words={[
                            "ubc computer science", 
                            "swe & ml enthusiast"
                        ]}
                        loop={0}
                        cursor={true}
                        cursorBlinking={true}
                    />
                </Box>
            </FlexBetween>
        </WidgetWrapper>
    )
}

export default NewPostWidget;