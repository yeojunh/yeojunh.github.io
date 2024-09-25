import React from "react";
import { PsychologyAlt } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { setFlag } from "../../../state";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

const FeatureFlagButton = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;

  const flag = useSelector((state) => state.flag);

  return (
    <IconButton onClick={() => dispatch(setFlag())}>
      {flag === "off" ? (
        <PsychologyAlt sx={{ color: dark, fontSize: "25px" }} />
      ) : (
        <PsychologyAlt sx={{ color: dark, fontSize: "25px " }} />
      )}
    </IconButton>
  );
};

export default FeatureFlagButton;
