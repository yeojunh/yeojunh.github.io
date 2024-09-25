import React from "react";
import { useTheme } from "@emotion/react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "../../../state";

const ThemeSwitchButton = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const dark = theme.palette.neutral.dark;

  return (
    <IconButton onClick={() => dispatch(setMode())}>
      {theme.palette.mode === "dark" ? (
        <DarkMode sx={{ color: dark, fontSize: "25px" }} />
      ) : (
        <LightMode sx={{ color: dark, fontSize: "25px" }} />
      )}
    </IconButton>
  );
};

export default ThemeSwitchButton;
