import React, { useState, useEffect } from "react";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useTheme } from "@emotion/react";
import { IconButton, Typography, Box } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import { GitHub, LinkOutlined } from "@mui/icons-material";
import iconMapping from "../../utils/iconMapping";

const PostWidget = ({ 
    title, 
    content, 
    date, 
    githubLink,
    projectLink,
    picturePaths,
    embedPath,
    iconName
}) => {
    const { palette } = useTheme(); 
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const dark = palette.neutral.dark;
    const primary = palette.primary.main;
    const IconComponent = iconMapping[iconName];
    const [isWideImage, setIsWideImage] = useState(true);
    const [showIntro, setShowIntro] = useState(true);
    const [currImageIndex, setCurrImageIndex] = useState(0);

    const handleImageLoad = (event) => {
        const { naturalWidth, naturalHeight } = event.target;
        setIsWideImage(naturalWidth > naturalHeight);
    };

    const handleInteraction = () => {
        setShowIntro(false);
    };

    const togglePicture = () => {
        setCurrImageIndex((prevIndex) => 
            (prevIndex + 1) % picturePaths.length
        );
    };

    useEffect(() => {
        const overlay = document.getElementById('intro-overlay');
        if (overlay) {
            overlay.addEventListener('click', handleInteraction);
            overlay.addEventListener('touchstart', handleInteraction);
        }

        return () => {
            if (overlay) {
                overlay.removeEventListener('click', handleInteraction);
                overlay.removeEventListener('touchstart', handleInteraction);
            }
        };
    }, []);

    return (
        <WidgetWrapper m="2rem 0"> 
            <Box>
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        color={dark}
                        variant="h4"
                        fontWeight="500"
                    >
                        {title}
                    </Typography>
                    </Box>
                    {IconComponent && 
                        (
 <a href={projectLink ? projectLink : githubLink} target="_blank" rel="noopener noreferrer">
                                <IconComponent sx={{ color: primary }} />
                            </a>
                        )
                    }
                </FlexBetween>
                <FlexBetween>
                    <Typography pt="0.1rem" color={medium} fontSize="0.75rem">
                        {date}
                    </Typography>
                </FlexBetween>
            </Box>

            <Typography color={main} sx={{ m: "1rem 0", wordBreak: "break-word" }}>
                {content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </Typography>
            {picturePaths && (
                <img 
                    width={isWideImage ? "100%" : "auto"}
                    height={isWideImage ? "auto" : "500px"}
                    alt="post"
                    style={{ 
                        display: 'block', 
                        margin: 'auto', 
                        maxHeight: '500px', 
                        maxWidth: '100%',
                        borderRadius: '0.75rem', 
                        objectFit: 'contain', 
                        cursor: picturePaths.length > 1 ? 'pointer' : 'default'
                    }}
                    src={picturePaths[currImageIndex]}
                    onLoad={handleImageLoad}
                    onClick={picturePaths.length > 1 ? togglePicture : null}
                />
            )}
            {embedPath && (
                <Box position="relative">
                    {showIntro && (
                        <Box
                            id="intro-overlay"
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgcolor="rgba(0, 0, 0, 0.4)"
                            color="white"
                            borderRadius="0.75rem"
                            zIndex="10"
                            sx={{ userSelect: 'none' }}
                        >
                            Click or tap to begin
                        </Box>
                    )}
                    <iframe
                        id="interactive-iframe"
                        src={embedPath}
                        style={{
                            display: 'block',
                            margin: 'auto',
                            border: 'none',
                            width: '100%',
                            height: '400px',
                            borderRadius: '0.75rem'
                        }}
                        title="Interactive Embed"
                    />
                </Box>
            )}
            <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                    {/* LINK */}
                    {githubLink && (
                        <FlexBetween gap="0.3rem">
                            <IconButton>
                                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                    <GitHub sx={{ color: dark }}/>  
                                </a>
                            </IconButton>
                        </FlexBetween>
                    )}
                    {projectLink && (
                        <FlexBetween gap="0.3rem">
                            <IconButton>
                                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                    <LinkOutlined sx={{ color: dark }}/>  
                                </a>
                            </IconButton>
                        </FlexBetween>
                    )}
                </FlexBetween>
            </FlexBetween>
        </WidgetWrapper>
    );
};

export default PostWidget;