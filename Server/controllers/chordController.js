const Chords = require('../models/chord');

async function getLibrary(req, res) {
  res.send('hello get');
}

async function addToLibrary(req, res) {
  // console.log(req.body);

  const chord = { ...chord, position: chord.position }
  try {
    const chord Chords.create()
  }

  res.send('hello post');
}

module.exports = { getLibrary, addToLibrary };