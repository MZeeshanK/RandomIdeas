const express = require('express');
const ideas = require('../ideas');
const Idea = require('../model/Idea');
const router = express.Router();

router.get('/', async (req, res) => {
  const ideas = await Idea.find();
  res.json({ success: true, data: ideas });
});

router.get('/:id', async (req, res) => {
  const idea = await Idea.findById(req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resourse not found' });
  }

  res.json({ success: true, data: idea });
});

router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  const idea = await Idea.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        text: req.body.text || idea.text,
        tag: req.body.tag || idea.tag,
      },
    },
    { new: true }
  );

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resourse not found' });
  }

  res.json({ success: true, data: idea });
});

router.delete('/:id', async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
