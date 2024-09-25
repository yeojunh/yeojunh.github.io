import React from "react";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import UserImage from "../../components/UserImage";
import { Box, useTheme, Typography, Divider, Link } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  EmailRounded,
  LocationOnSharp,
  SchoolRounded,
  WorkRounded,
} from "@mui/icons-material";

const UserWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <UserImage />
          <Box>
            <Typography variant="h4" color={dark} fontWeight="500">
              Yeojun Han
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnSharp fontSize="large" sx={{ color: main }} />
          <Typography color={main}>Vancouver, BC</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <SchoolRounded fontSize="large" sx={{ color: main }} />
          <Typography color={main}>Computer Science @ UBC</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <WorkRounded fontSize="large" sx={{ color: main }} />
          <Typography color={main}>SWE @ Microsoft</Typography>
        </Box>
      </Box>

      <Divider />
      {/* THIRD ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Profiles
        </Typography>

        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LinkedIn fontSize="large" sx={{ color: main }} />
          <Typography
            color={medium}
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            <Link
              href="https://www.linkedin.com/in/yeojun/"
              variant="inherit"
              color={main}
              target="_blank"
            >
              LinkedIn
            </Link>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <GitHub fontSize="large" sx={{ color: main }} />
          <Typography
            color={medium}
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            <Link
              href="https://github.com/yeojunh/"
              variant="inherit"
              color={main}
              target="_blank"
            >
              GitHub
            </Link>
          </Typography>
        </Box>
      </Box>
      <Divider />
      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Contact
        </Typography>
        <Box display="flex" alignItems="center" gap="1rem">
          <EmailRounded fontSize="large" sx={{ color: main }} />
          <Typography
            color={medium}
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            <Link
              href="mailto:hello@yeojun.com"
              variant="inherit"
              color={main}
              target="_blank"
            >
              hello@yeojun.com
            </Link>
          </Typography>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
