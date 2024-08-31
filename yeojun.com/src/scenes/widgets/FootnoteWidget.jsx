import { Typography } from "@mui/material"
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const FootnoteWidget = () => {
    const { palette } = useTheme(); 
    const medium = palette.neutral.medium;

    return (
        <div>
            <Typography color={medium} variant="h6" sx={{ m: "0.5rem 1rem", wordBreak: "break-word" }}>
                This website is built with React, Material-UI, and GitHub Pages. 
                The source code is available on{" "}
                <Link 
                    href="https://github.com/yeojunh/yeojunh.github.io" 
                    target="_blank" rel="noopener noreferrer"                       
                    style={{ color: medium }}
                >
                    GitHub
                </Link>
                .
            </Typography>
        </div>
    )
}

export default FootnoteWidget;