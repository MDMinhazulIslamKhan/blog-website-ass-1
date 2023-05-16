import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlogDetails } from "../../../controllers/public/index.js";

const router = express.Router();

// All Blogs
router.get('/getAllBlogs', getAllBlogs);

// Blog Details
router.get('/blogDetails/:id', getBlogDetails);

// Create Blog
router.post('/createBlog', createBlog);

// Delete Blog
router.delete('/deleteBlog/:id', deleteBlog);

export default router;