const router = require('express').Router();
const chordController = require('./controllers/chordController');

router.get('/library', chordController.getLibrary);
router.post('/library', chordController.addToLibrary);
router.delete('/library/:_id', chordController.removeFromLibrary);
router.patch('/library/:_id', chordController.updateComment);

router.get('/chordstore/:key/:suffix', chordController.getChord);

module.exports = router;