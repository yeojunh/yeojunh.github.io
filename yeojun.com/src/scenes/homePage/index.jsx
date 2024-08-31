import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidget";
import PostsWidget from "../widgets/PostsWidget";
import NewPostWidget from "../widgets/NewPostWidget";
import ExperiencesWidget from "../widgets/ExperiencesWidget";
import FootnoteWidget from "../widgets/FootnoteWidget";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const picturePath = "assets/yeojun.jpeg";
    
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
                    <UserWidget picturePath={picturePath} />
                    <FootnoteWidget />
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "45%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <NewPostWidget picturePath={picturePath} />
                    <PostsWidget />
                </Box>

            {/* RIGHT SIDE */}
            <Box flexBasis="25%">
                <ExperiencesWidget />
            </Box>
            </Box>
        </Box>
    )
}

export default HomePage;