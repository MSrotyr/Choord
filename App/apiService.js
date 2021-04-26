const baseUrlLibrary = 'http://192.168.0.10:3000/library';
const baseUrlChordStore = 'http://192.168.0.10:3000/chordstore';

function getLibrary() {
  try {
    return fetch(baseUrlLibrary)
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

function addToLibrary(chordData) {
  try {
    return fetch(baseUrlLibrary, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chordData),
    })
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

function removeFromLibrary(_id) {
  try {
    return fetch(`${baseUrlLibrary}/${_id}`, {
      method: 'DELETE',
    })
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

function updateComment(_id, comment) {
  try {
    return fetch(`${baseUrlLibrary}/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment }),
    })
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

async function getChord(key, suffix) {
  try {
    console.log(`${baseUrlChordStore}/${key}/${suffix}`);
    return fetch(`${baseUrlChordStore}/${key}/${suffix}`)
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLibrary, addToLibrary, removeFromLibrary, updateComment, getChord,
};
