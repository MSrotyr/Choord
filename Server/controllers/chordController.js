const Chords = require('../models/chord');

async function getLibrary(req, res) {
  res.send('hello get');
}

async function addToLibrary(req, res) {
  res.send('hello post');
}

module.exports = { getLibrary, addToLibrary };