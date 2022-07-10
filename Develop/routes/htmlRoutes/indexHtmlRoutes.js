const path = require('path');
const indexHtmlRoutes = require('express').IndexHtmlRoutes();

indexHtmlRoutes.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

indexHtmlRoutes.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = indexHtmlRoutes;