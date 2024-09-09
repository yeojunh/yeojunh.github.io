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
                {/* LEFT SIDE */}
                <Box flexBasis={isNonMobileScreens ? "23%" : undefined}>
                    <UserWidget picturePath={picturePath} />
                    <FootnoteWidget />
                </Box>

                {isNonMobileScreens ? (
                    // DESKTOP 
                    <>
                        <Box flexBasis="45%" >
                            <NewPostWidget picturePath={picturePath} />
                            <PostsWidget />
                        </Box>

                        <Box flexBasis="25%">
                            <ExperiencesWidget />
                        </Box>
                    </>
                ) : (
                    // MOBILE 
                    <>
                        <Box 
                            flexBasis="25%"
                            mt="2rem"    
                        >
                            <NewPostWidget picturePath={picturePath} />
                        </Box>

                        <Box
                            mt="2rem"
                        >
                            <ExperiencesWidget />
                            <PostsWidget />
                        </Box>
                    </>
                )
                } 
            </Box>
        </Box>
    )
}

export default HomePage;