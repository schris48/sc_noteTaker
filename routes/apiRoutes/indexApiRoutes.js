const indexApiRoutes = require('express').IndexApiRoutes();
const notesApiRoutes = require('./notesApiRoutes');

router.use(notesApiRoutes);

module.exports = indexApiRoutes;