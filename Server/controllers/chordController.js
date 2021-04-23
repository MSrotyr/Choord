const Chords = require('../models/chord');

async function getLibrary(req, res) {
  try {
    const chords = await Chords.find();
    res.status(201).send(chords);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}

async function addToLibrary(req, res) {
  try {
    const chord = await Chords.create(req.body);
    res.status(201).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}

module.exports = { getLibrary, addToLibrary };