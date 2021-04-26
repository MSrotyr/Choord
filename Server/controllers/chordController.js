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

async function getChord(req, res) {
  try {
    const { key, suffix } = req.params;
    const chord = await ChordStore.findOne({ key, suffix });
    res.status(200).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
}

function stringToArr(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      if (str[i + 1] === ',' || !str[i + 1]) arr.push(parseInt(str[i]))
      else {
        arr.push(parseInt(str.slice(i, i + 2)));
        i++;
      }
    }
  }
  return arr;
}

module.exports = { getLibrary, addToLibrary, removeFromLibrary, updateComment, getChord };