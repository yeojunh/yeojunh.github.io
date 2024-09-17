import { Typography, useTheme, Box } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import React from "react";
import PropTypes from "prop-types";

const ExperienceWidget = ({
  title,
  startDate,
  endDate,
  description,
  website,
  picturePath,
  size = "150px",
}) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const primaryDark = palette.primary.dark;

  const formattedStartDate = startDate.replace(/ /g, "\u00A0");
  const formattedEndDate = endDate.replace(/ /g, "\u00A0");

  return (
    <Box>
      <img
        width={size}
        height="auto"
        alt="logo"
        src={picturePath}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          cursor: "pointer",
        }}
        onClick={() => window.open(website, "_blank")}
      />
      <Box pb="0.5rem" />
      <FlexBetween>
        <Typography
          color={main}
          sx={{
            "&:hover": {
              color: primaryDark,
              cursor: "pointer",
            },
          }}
          onClick={() => window.open(website, "_blank")}
        >
          {title}
        </Typography>
        <Typography color={medium} sx={{ textAlign: "left" }}>
          {formattedStartDate}&nbsp;-
          <br />
          {formattedEndDate}
        </Typography>
      </FlexBetween>
      <Typography
        color={medium}
        sx={{ m: "0.5rem 0", wordBreak: "break-word" }}
      >
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );
};

ExperienceWidget.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  picturePath: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default ExperienceWidget;
