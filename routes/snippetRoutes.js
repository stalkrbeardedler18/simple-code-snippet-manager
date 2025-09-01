const express = require('express');
const router = express.Router();
const Snippet = require('../models/snippet');

// Create a new snippet
router.post('/', async (req, res) => {
  const snippet = new Snippet(req.body);
  try {
    const savedSnippet = await snippet.save();
    res.status(201).json(savedSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all snippets
router.get('/', async (req, res) => {
  try {
    const snippets = await Snippet.find();
    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;