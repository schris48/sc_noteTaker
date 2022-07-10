const indexApiRoutes = require('express').IndexApiRoutes();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db.json');

indexApiRoutes.get('/notes', (req, res) => {
  // if id exists edit note, else edit existing note
  if (!req.body.id) {
    req.body.id = uuidv4();
    newNote(req.body, notes);
  } else {
    editNote(req.body, notes);
  }

  res.json(req.body);
});

indexApiRoutes.delete('/notes/:id', (req, res) => {
  const note = findById(req.params.id, notes);

  deleteNote(note, notes);
  res.json();
});

module.exports = indexApiRoutes;