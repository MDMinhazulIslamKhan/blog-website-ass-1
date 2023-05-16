import express from "express";
import { createBlog, getAllBlogs, getBlogDetails } from "../../../controllers/public/index.js";

const router = express.Router();

// All Blogs
router.get('/getAllBlogs', getAllBlogs);

// Blog Details
router.get('/blogDetails/:id', getBlogDetails);

// Create Blog
router.post('/createBlog', createBlog);

export default router;