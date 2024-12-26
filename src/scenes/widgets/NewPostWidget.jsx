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
        About me
      </Typography>
      <FlexBetween style={{ alignItems: "flex-start" }}>
        <Box style={{ marginTop: "1.25rem" }}>
          <UserImage size="40px" />
        </Box>
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
            Hi, I&apos;m Yeojun (&quot;yuh-jun&quot;) and I&apos;m a 5th year
            Computer Science student at the University of British Columbia.
            I&apos;m interested in computer vision, applications of ML, and
            developer tools. I&apos;ve previously worked on both internal and
            customer-facing developer tools at Microsoft and Ansys.
            <br />
            <br />
            When I&apos;m not coding, I like to travel ✈️, watch the sunset 🌅,
            and go surfing 🏄‍♀️. Bonus points for surfing during sunset while on
            vacation.
          </Typography>
        </Box>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default NewPostWidget;
