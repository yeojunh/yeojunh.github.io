import React from "react";
import { useTheme } from "@emotion/react";
import { EmojiEmotions } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useReward } from "react-rewards";

const ConfettiButton = () => {
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;

  const { reward } = useReward("rewardId", "confetti", {
    angle: 180,
    startVelocity: window.innerWidth / 40 + 5,
    lifetime: 300,
  });

  return (
    <IconButton onClick={reward}>
      <span id="rewardId" />
      <EmojiEmotions sx={{ color: dark, fontSize: "25px" }} />
    </IconButton>
  );
};

export default ConfettiButton;
