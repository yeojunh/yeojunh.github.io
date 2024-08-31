import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../navbar";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const picturePath = "https://images.unsplash.com/photo-1631801803313-1a4f3b8e9d7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI4NjN8MHwxfGFsbHwxf";
        
    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "20%" : undefined}>
                    {/* <UserWidget picturePath={picturePath} /> */}
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    {/* <Mypostwidget></Mypostwidget> */}
                    {/* <PostWidget></PostWidget> */}
                </Box>

            {/* RIGHT SIDE */}
            {isNonMobileScreens && (
                <Box flexBasis="26%">
                </Box>
            )}
            </Box>
        </Box>
    )
}

export default HomePage;