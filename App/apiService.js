const baseUrl = 'http://192.168.0.10:3000/library';

function getLibrary() {
  return fetch(baseUrl)
    .then((data) => data.json());
}

function addToLibrary() {

}

function removeFromLibrary() {

}

module.exports = { getLibrary, addToLibrary, removeFromLibrary };
