import React, { useState } from "react";
import ProjectWidget from ".//ProjectWidget";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useTheme } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import { GitHub, LinkOutlined } from "@mui/icons-material";

const PostWidget = ({ 
    title, 
    content, 
    date, 
    githubLink,
    projectLink,
    picturePath,
    iconName
}) => {
    const { palette } = useTheme(); 
    const main = palette.neutral.main;
    const dark = palette.neutral.dark;
    const [isWideImage, setIsWideImage] = useState(true);

    const handleImageLoad = (event) => {
        const { naturalWidth, naturalHeight } = event.target;
        setIsWideImage(naturalWidth > naturalHeight);
    };

    return (
        <WidgetWrapper m="2rem 0"> 
            <ProjectWidget  
                title={title} 
                subtitle={date} 
                iconName={iconName}
            />
            <Typography color={main} sx={{ m: "1rem 0", wordBreak: "break-word" }}>
                {content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </Typography>
            {picturePath && (
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
                        objectFit: 'contain' 
                    }}
                    src={`${picturePath}`}
                    onLoad={handleImageLoad}
                />
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