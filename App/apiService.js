const baseUrl = 'http://192.168.0.10:3000/library';

function getLibrary() {
  try {
    return fetch(baseUrl)
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

function addToLibrary(chordData) {
  try {
    return fetch(baseUrl, {
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
    return fetch(`${baseUrl}/${_id}`, {
      method: 'DELETE',
    })
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

function updateComment(_id, comment) {
  try {
    return fetch(`${baseUrl}/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment }),
    })
      .then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLibrary, addToLibrary, removeFromLibrary, updateComment,
};
