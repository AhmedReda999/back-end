const express = require('express');
const Content = require('../models/Content');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Get content data
router.get('/', authMiddleware, async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update content
router.put('/:id', authMiddleware, async (req, res) => {
  const { text } = req.body;
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, { text });
    res.json({ success: true, content });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete content
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Content deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
