const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET alle Projekte
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ein einzelnes Projekt
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Projekt nicht gefunden' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST neues Projekt erstellen
router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    technologies: req.body.technologies,
    githubUrl: req.body.githubUrl,
    liveUrl: req.body.liveUrl,
    imageUrl: req.body.imageUrl,
    featured: req.body.featured
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;