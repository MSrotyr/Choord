const router = require('express').Router();
const chordController = require('./controllers/chordController');

router.get('/library', chordController.getLibrary);
router.post('/library', chordController.addToLibrary);
router.delete('/library/:id', chordController.removeFromLibrary);

module.exports = router;