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

// edit note
const editNote = (changedNote, notesArr) => {
  const index = notesArr.findIndex(note => note.id === changedNote.id);
  
  // replace changed note with existing note
  notesArr.splice(index, 1);
  notesArr.splice(index, 0, changedNote);

  // sync changed note with db
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArr }, null, 2)
  )

};

// delete note
const deleteNote = (note, notesArr) => {
  // delete note by id
  const index = notesArr.indexOf(note);
  notesArr.splice(index, 1);

  // replace db with new arr
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({  notes: notesArr }, null, 2)
  );
};

module.exports = { newNote, findId, editNote, deleteNote };