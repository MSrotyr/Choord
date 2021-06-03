const ChordStore = require("../models/chordStore");

async function getLibrary(req, res) {
  try {
    res.status(201).send(req.user.library);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function addToLibrary(req, res) {
  try {
    const user = req.user;
    user.library.push(req.body);
    const chord = user.library[user.library.length - 1];
    await user.save();
    res.status(201).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function removeFromLibrary(req, res) {
  try {
    const user = req.user;
    const chord = user.library.id(req.params._id).remove();
    await user.save();
    res.status(200).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function updateComment(req, res) {
  try {
    const user = req.user;
    const chord = user.library.id(req.params._id);
    chord.comment = req.body.comment;
    user.save();
    console.log(req.body.comment);
    res.status(200).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

function addSlashes(suffix) {
  let res = "";
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === "S") res += "/";
    else res += suffix[i];
  }
  return res;
}

function addHashes(suffix) {
  let res = "";
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === "H") res += "#";
    else res += suffix[i];
  }
  return res;
}

async function getChord(req, res) {
  try {
    const { key, suffix } = req.params;
    const chord = await ChordStore.find({
      key: addHashes(key),
      suffix: addSlashes(suffix),
    });
    res.status(200).send(chord);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  getLibrary,
  addToLibrary,
  removeFromLibrary,
  updateComment,
  getChord,
};
