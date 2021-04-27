const ChordStore = require('../models/chordStore');
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

function addSlashes(suffix) {
  let res = '';
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === 'S') res += '/';
    else res += suffix[i];
  }
  return res;
}

function addHashes(suffix) {
  let res = '';
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === 'H') res += '#';
    else res += suffix[i];
  }
  return res;
}

async function getChord(req, res) {
  try {
    const { key, suffix } = req.params;
    const chord = await ChordStore.find({ key: addHashes(key), suffix: addSlashes(suffix) });
    res.status(200).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}



module.exports = { getLibrary, addToLibrary, removeFromLibrary, updateComment, getChord };