import React from "react";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import {
    Box,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { 
    Menu,
    Close,
} from "@mui/icons-material";
import { useState } from "react";
import ThemeSwitchButton from "./navItems/ThemeSwitchButton";
import ConfettiButton from "./navItems/ConfettiButton";

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const navigate = useNavigate(); 
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    return (
        <FlexBetween padding="1rem 11%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => navigate("/")}
                    sx={{
                        "&:hover": {
                            color: primaryLight,
                            cursor: "pointer",
                        },
                    }}
                >
                    yeojun.com
                </Typography>
            </FlexBetween>

            {/* DESKTOP NAV */}
            {isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <ThemeSwitchButton />
                    {/* <FeatureFlagButton /> */}
                    <ConfettiButton />
                </FlexBetween>
            ) : (
                <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                    <Menu />
                </IconButton>
            )}

            {/* MOBILE NAV */}
            {!isNonMobileScreens && isMobileMenuToggled && (
                <Box
                    position="fixed"
                    right="0"
                    bottom="0"
                    height="100%"
                    zIndex="10"
                    width="10%"
                    backgroundColor={background}
                >
                    {/* MENU ITEMS */}
                    <FlexBetween 
                        mt="2rem"
                        display="flex" 
                        flexDirection="column" 
                        justifyContent="center" 
                        alignItems="center" 
                        gap="3rem"
                    >
                        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                            <Close />
                        </IconButton>
                        <ThemeSwitchButton />
                        {/* <FeatureFlagButton /> */}
                        <ConfettiButton />
                    </FlexBetween>
                </Box>
            )}
        </FlexBetween>
        )
    }

export default Navbar;