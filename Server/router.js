const router = require("express").Router();
const chordController = require("./controllers/chordController");

router.get("/library/:userId", chordController.getLibrary);
router.post("/library/:userId", chordController.addToLibrary);
router.delete("/library/:userId/:_id", chordController.removeFromLibrary);
router.patch("/library/:userId/:_id", chordController.updateComment);

router.get("/chordstore/:key/:suffix", chordController.getChord);

module.exports = router;
