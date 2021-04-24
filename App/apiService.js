const baseUrl = 'http://192.168.0.10:3000/library';

function getLibrary() {
  return fetch(baseUrl)
    .then((data) => data.json());
}

function addToLibrary(chordData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chordData)
  })
    .then((data) => data.json());
}

function removeFromLibrary() {

}

function updateComment(comment) {
  return fetch(baseUrl, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment })
  })
    .then((data) => data.json());
}

module.exports = { getLibrary, addToLibrary, removeFromLibrary, updateComment };
