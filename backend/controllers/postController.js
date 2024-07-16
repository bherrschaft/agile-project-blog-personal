const { Post } = require('../models');

const createPost = async (req, res) => {
  try {
    const { content, tags, author } = req.body;
    const post = await Post.create({ content, tags, author });
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating post' });
  }
};

const getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const offset = (page - 1) * limit;
    console.log(`Fetching posts with offset ${offset} and limit ${limit}`);
    const posts = await Post.findAll({ offset, limit });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    await Post.update({ content }, { where: { id } });
    res.json({ message: 'Post updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
};

const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    post.likes += 1;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error liking post' });
  }
};

module.exports = { createPost, getPosts, updatePost, deletePost, likePost };
