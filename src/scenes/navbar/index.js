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
    DarkMode, 
    LightMode, 
    EmojiEmotions,
    Menu, Close
} from "@mui/icons-material"; 
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setMode } from "../../state";
import { useReward } from 'react-rewards';

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { reward } = useReward('rewardId', 'confetti', {
        angle: 180,
        startVelocity: window.innerWidth / 40 + 5,
        lifetime: 300
    });  

    const theme = useTheme(); 
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default; 
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt; 
    
    return (
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
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
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ?
                            (<DarkMode sx={{ fontSize: "25px" }}/>
                        ) : (
                        <LightMode sx={{ color: dark, fontSize: "25px "}}/>
                        )}
                    </IconButton>
                    {/* <IconButton onClick={() => navigate("/graphics-project")}>
                        <Interests sx={{ fontSize: "25px"}} />
                    </IconButton> */}
                    {/* <Help sx={{ fontSize: "25px" }}/> */}
                    <IconButton onClick={reward} >
                        <span id="rewardId" />
                        <EmojiEmotions sx={{ color: dark, fontSize: "25px"}}/>
                    </IconButton>
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
                    width="75px"
                    backgroundColor={background}
                >
                    {/* CLOSE ICON */}
                    <Box display="flex" justifyContent="flex-end" p="1rem">
                        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                            <Close />
                        </IconButton>
                    </Box>

                    {/* MENU ITEMS */}
                    <FlexBetween 
                        display="flex" 
                        flexDirection="column" 
                        justifyContent="center" 
                        alignItems="center" 
                        gap="3rem"
                    >
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ?
                            (<DarkMode sx={{ fontSize: "25px" }}/>
                        ) : (
                        <LightMode sx={{ color: dark, fontSize: "25px "}}/>
                        )}
                    </IconButton>
                    {/* <Interests sx={{ fontSize: "25px"}} /> */}
                        {/* <Help sx={{ fontSize: "25px"}} /> */}
                        <IconButton onClick={reward} >
                            <span id="rewardId" />
                            <EmojiEmotions sx={{ color: dark, fontSize: "25px"}}/>
                        </IconButton>
                    </FlexBetween>
                </Box>
            )}
        </FlexBetween>
        )
    }

export default Navbar;