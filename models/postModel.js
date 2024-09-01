const db = require('../config/db')

//CRUD RESTful API for posts table with MySQL
//1.READ: Get All posts with pagination: http://localhost:3000/api/posts/
const findAllPost = async (page, limit) => {
    try {
        const offset = (page - 1) * limit;
        const sql = 'SELECT * FROM posts ORDER BY id DESC LIMIT ? OFFSET ?'
        const [rows] = await db.query(sql, [limit, offset]);
        return rows
    } catch (err) {
        console.log(err)
    }
}

//2.CREATE: Create a post: http://localhost:3000/api/posts/
const createPost = async (title, content, user_id) => {
    try {
        const sql = 'INSERT INTO posts(title, content, user_id) VALUES (?, ?, ?)'
        const [rows] = await db.query(sql, [title, content, user_id])
        return rows
    } catch (error) {
        console.log(err)
    }
}

//3.READ: Get posts ById: http://localhost:3000/api/posts/:id
const findPostById = async (id) => {
    try {
        const sql = 'SELECT * FROM posts where id=?'
        const [rows] = await db.query(sql, [id]);
        return rows
    } catch (err) {
        console.log(err)
    }
}

//4.PUT: Update a post: http://localhost:3000/api/posts/:id
const updatePost = async (id, title, content, user_id) => {
    try {
        const sql = 'UPDATE posts SET title = ?, content = ?, user_id = ? WHERE id = ?';
        const [rows] = await db.query(sql, [title, content, user_id, id])
        return rows
    } catch (err) {
        console.log(err);
    }
}

//5.DELET: Delet a post: http://localhost:3000/api/posts/:id
const deletePost = async (id) => {
    try {
        const sql = 'DELETE FROM posts WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows
    } catch (err) {
        console.log(err);
    }
}

module.exports = { findAllPost, createPost, findPostById, updatePost, deletePost }