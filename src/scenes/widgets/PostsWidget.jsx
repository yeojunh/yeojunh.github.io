import PostWidget from "./PostWidget"
import posts from "../../data/posts"

const PostsWidget = () => {
    return (
        <>
            {posts.map(
                ({
                    title,
                    content,
                    date,
                    githubLink,
                    projectLink,
                    picturePath,
                    embedPath,
                    iconName
                }, index) => (
                    <PostWidget 
                        key={index}
                        title={title}
                        content={content}
                        date={date}
                        githubLink={githubLink}
                        projectLink={projectLink}
                        picturePath={picturePath}
                        embedPath={embedPath}
                        iconName={iconName}
                    />
                )
            )}
        </>
    )
}

export default PostsWidget;