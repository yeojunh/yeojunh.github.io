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
                    picturePaths,
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
                        picturePaths={picturePaths}
                        embedPath={embedPath}
                        iconName={iconName}
                    />
                )
            )}
        </>
    )
}

export default PostsWidget;