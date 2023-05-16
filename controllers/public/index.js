import mongoose from "mongoose";
import PostBlog from "../../models/postBlogs.js";

// blog post controller
export const createBlog = async (req, res) => {
    const blog = req.body;

    const newBlog = new PostBlog({ ...blog })
    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {

        res.status(409).json({ message: error });
    }
};

// get all blogs controller
export const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await PostBlog.find();
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

// get individual blog controller
export const getBlogDetails = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No blog with that id');
    try {
        const selectedBlog = await PostBlog.findById(id);
        res.status(200).json(selectedBlog);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

// delete individual blog controller
export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No blog with that id');

    await PostBlog.findByIdAndRemove(id);
    res.json({ message: 'Delete Successful' });
};