const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const { verifyToken, authorizeRoles } = require('../middlewares/authMiddleware')

//CRUD RESTful API
//1.READ: Method GET, Get All posts: http://localhost:3000/api/posts/
router.get('/', verifyToken, authorizeRoles(['Admin', 'User']), postController.getPosts)

//2.CREATE: Method POST, Ceate a posts: http://localhost:3000/api/posts/
router.post('/', verifyToken, authorizeRoles(['Admin', 'User']), postController.createPost)

//3.READ: Method GET, Get posts ById: http://localhost:3000/api/posts/:id
router.get('/:id', verifyToken, authorizeRoles(['Admin', 'User']), postController.getPostsById)

//4.UPDATE: Update a posts: http://localhost:3000/api/posts/:id
router.put('/:id', verifyToken, authorizeRoles(['Admin', 'User']), postController.updatePost)

//5.DELETE: Delete a posts: http://localhost:3000/api/posts/:id
router.delete('/:id', verifyToken, authorizeRoles(['Admin', 'User']), postController.deletePost)

module.exports = router