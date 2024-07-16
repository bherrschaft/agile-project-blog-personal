const express = require('express');
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
} = require('../controllers/postController');

const router = express.Router();

router.post('/posts', createPost);
router.get('/posts', getPosts);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);
router.post('/posts/:id/like', likePost);

module.exports = router;
