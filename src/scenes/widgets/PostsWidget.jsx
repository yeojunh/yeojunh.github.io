import PostWidget from "./PostWidget"
import posts from "../../data/posts"

const PostsWidget = () => {
    return (
        <>
            {posts.map(
                ({
                    postId,
                    title,
                    content,
                    date,
                    githubLink,
                    projectLink,
                    picturePath,
                    iconName
                }) => (
                    <PostWidget 
                        key={postId}
                        postId={postId}
                        title={title}
                        content={content}
                        date={date}
                        githubLink={githubLink}
                        projectLink={projectLink}
                        picturePath={picturePath}
                        iconName={iconName}
                    />
                )
            )}
        </>
    )
}

export default PostsWidget;