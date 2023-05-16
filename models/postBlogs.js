import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    blogTitle: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
});

const PostBlog = mongoose.model("BlogPosts", blogSchema);

export default PostBlog;