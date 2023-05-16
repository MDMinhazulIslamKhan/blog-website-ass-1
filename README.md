# **3WIP-B2 Backend Project-1 (Blog [Website](https://blog-website-ass-1.vercel.app))**

##  **Simple blog website backend with MVC pattern. Website's end points are:**

#### Get all blogs (get route) ####
- /v1/public/getAllBlogs [Website Link](https://blog-website-ass-1.vercel.app/v1/public/getAllBlogs)
#### Get blog details(get route) ####
- /v1/public/blogDetails/:id (here use individual blogs id which is automatically create by mongoDB)
#### Create blog(post route) ####
- /v1/public/createBlog (post your data from body request. And must give this data: userName, blogTitle blogDescription.)
#### Delete blog(delete route) ####
- /v1/public/deleteBlog:id (here use individual blog's id which is automatically create by mongoDB)

---
###  **Used technology:**

- express
- mongoose
- dotenv
