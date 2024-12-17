import React from "react";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";

const NewPostWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const light = palette.neutral.light;

  return (
    <WidgetWrapper>
      <Typography variant="h5" sx={{ color: dark }}>
        Currently working on...
      </Typography>
      <FlexBetween>
        <UserImage size="40px" />
        <Box
          margin="1rem"
          sx={{
            width: "100%",
            backgroundColor: light,
            borderRadius: "2rem",
            padding: "1rem 1.5rem",
          }}
        >
          <Typography sx={{ color: dark }}>
            - Full stack web + extension app <br />
            - Godot game development <br />
          </Typography>
        </Box>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default NewPostWidget;
