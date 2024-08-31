import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null, 
    token: null, 
    posts: [],
};

export const authSlice = createSlice({
    name: "auth", 
    initialState, 
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; 
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts; 
        }, 
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) 
                    return action.payload.post;
                return post; 
            });
            state.posts = updatedPosts;
        }
    }
})

export const { setMode, setTypewriterPause, setPosts, setPost } = authSlice.actions; 
export default authSlice.reducer;