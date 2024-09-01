const Post = require('../models/postModel')

//CRUD RESTful API
//1.READ: Get All posts: http://localhost:3000/api/posts/
const getPosts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const posts = await Post.findAllPost(Number(page), Number(limit));
        console.log(posts)
        return res.status(200).json({posts})
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Failed to retrieve posts.', error });
    }
}

//2.CREATE: Crerate posts: http://localhost:3000/api/posts/
const createPost = async (req, res) => {
    const { title, content, user_id } = req.body
    try {
        await Post.createPost(title, content, user_id)
        console.log(title, content, user_id)
        return res.status(201).json({ status: true, message: 'Create posts successfully!.' })
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Internal Server Error.', error })
    }
}

//3.READ: Get posts ById: http://localhost:3000/api/posts/:id
const getPostsById = async (req, res) => {
    const { id } = req.params
    try {
        const posts = await Post.findPostById(id)
        console.log(posts)
        return res.status(200).json({ status: true, message: 'Get posts ById successfully!.', posts })

    } catch (error) {
        return res.status(500).json({ status: false, message: 'Internal Server Error.', error })
    }
}

//4.UPDATE: Update posts: http://localhost:3000/api/posts/:id
const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, content, user_id } = req.body
    try {
        const result = await Post.updatePost(id, title, content, user_id)
        console.log(result);
        return res.status(200).json({ status: true, message: 'Updated posts successfully!.' })
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Internal Server Error.' })
    }
}

//5.DELETE: Delete posts: http://localhost:3000/api/posts/:id
const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        await Post.deletePost(id)
        return res.status(200).json({ status: true, message: 'Deleted posts successfully!.' })
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Internal Server Error.' })
    }
}

module.exports = { getPosts, createPost, getPostsById, updatePost, deletePost }