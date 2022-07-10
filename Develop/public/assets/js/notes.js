const fs = require('fs');
const path = require('path');

// create new note
const newNote = (note, notesArr) => {
  notesArr.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArr }, null, 2)
  );
};

// find note by id
const findId = (id, notesArr) => {
  const result = notesArr.filter(note => note.id === id) [0];
  return result;
};

