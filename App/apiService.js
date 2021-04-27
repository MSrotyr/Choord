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

function removeSlashes(suffix) {
  let res = '';
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === '/') res += 'S';
    else res += suffix[i];
  }
  return res;
}

function removeHashes(suffix) {
  let res = '';
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === '#') res += 'H';
    else res += suffix[i];
  }
  return res;
}

async function getChord(key, suffix) {
  try {
    return fetch(`${baseUrlChordStore}/${removeHashes(key)}/${removeSlashes(suffix)}`)
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getLibrary, addToLibrary, removeFromLibrary, updateComment, getChord,
};
