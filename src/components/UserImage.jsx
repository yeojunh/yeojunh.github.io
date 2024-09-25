import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const UserImage = ({ size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="Profile picture"
        src="assets/yeojun.jpeg"
      />
    </Box>
  );
};

UserImage.propTypes = {
  size: PropTypes.string,
};

export default UserImage;
