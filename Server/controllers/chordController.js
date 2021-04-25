const Library = require('../models/library');

async function getLibrary(req, res) {
  try {
    const chords = await Library.find();
    res.status(201).send(chords);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}

async function addToLibrary(req, res) {
  try {
    const chord = await Library.create(req.body);
    res.status(201).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}

async function removeFromLibrary(req, res) {
  try {
    const chord = await Library.findOneAndDelete({ _id: req.params._id });
    res.status(200).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}

async function updateComment(req, res) {
  try {
    const chord = await Library.findOneAndUpdate({ _id: req.params._id },
      { comment: req.body.comment }, { new: true });
    res.status(200).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}

module.exports = { getLibrary, addToLibrary, removeFromLibrary, updateComment };