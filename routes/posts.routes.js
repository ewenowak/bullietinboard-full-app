const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post.find()
      .sort({ publishedDate: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  console.log(req.body);
  try {
    const { title, description, user, publishedDate, actualizationDate} = req.body;
    const newPost = new Post({
      title: title,
      description: description,
      user: user,
      publishedDate: publishedDate,
      actualizationDate: actualizationDate,
    });
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;