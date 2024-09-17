import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import MonoTypography from "../../components/MonoTypography";
import { GitHub, LinkedIn } from "@mui/icons-material";

const LandingPage = () => {
  const backgroundColor = "#b3cee5";
  const textColor = "#418ed1";
  const aboutColor = "white";

  const titleSize = "calc(3rem + 0.5vw)";
  const headerSize = "calc(1.25rem + 0.5vw)";
  const textSize = "calc(0.8rem + 0.5vw)";

  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100vh",
        maxHeight: "100%",
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: textSize,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ color: aboutColor, display: "inline-block" }}>
        <MonoTypography sx={{ fontSize: titleSize, fontWeight: "bold" }}>
          Yeojun Han
        </MonoTypography>
        <MonoTypography>ubc computer science</MonoTypography>
        <MonoTypography>swe & ml</MonoTypography>
      </Box>

      <Box sx={{ m: "3rem" }}>
        <MonoTypography
          sx={{ fontSize: headerSize, fontWeight: "bold", mb: "10px" }}
        >
          {">> "}
          <Link
            to="/home"
            style={{
              fontFamily: "Menlo, monospace",
              color: textColor,
            }}
          >
            portfolio
            {/* -- portfolio -- */}
          </Link>
          {" <<"}
        </MonoTypography>
      </Box>

      <Box>
        <IconButton to="https://www.linkedin.com/in/yeojun/" target="_blank">
          <LinkedIn sx={{ color: textColor, fontSize: headerSize }} />
        </IconButton>
        <IconButton to="https://github.com/yeojunh" target="_blank">
          <GitHub sx={{ color: textColor, fontSize: headerSize }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LandingPage;
