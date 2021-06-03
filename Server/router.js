const router = require("express").Router();
const {
  getLibrary,
  addToLibrary,
  removeFromLibrary,
  updateComment,
  getChord,
} = require("./controllers/chordController");
const userMiddleWare = require("./userMiddleWare");

router.get("/library/:userId", (req, res) => {
  userMiddleWare(req, res, getLibrary);
});
router.post("/library/:userId", (req, res) => {
  userMiddleWare(req, res, addToLibrary);
});
router.delete("/library/:userId/:_id", (req, res) => {
  userMiddleWare(req, res, removeFromLibrary);
});
router.patch("/library/:userId/:_id", (req, res) => {
  userMiddleWare(req, res, updateComment);
});

router.get("/chordstore/:key/:suffix", getChord);

module.exports = router;
