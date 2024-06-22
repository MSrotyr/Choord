import { LOCAL_IP_ADDRESS } from "@env";
import { PORT } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

async function makeId() {
  try {
    const id = uuidv4();
    await AsyncStorage.setItem("userId", id);
    return id;
  } catch (err) {
    console.log(err);
  }
}

async function readId() {
  try {
    const userId = await AsyncStorage.getItem("userId");
    if (userId === null) {
      return makeId();
    }
    return userId;
  } catch (err) {
    console.log(err);
  }
}

const baseUrlLibrary = `http://${LOCAL_IP_ADDRESS}:${PORT}/library`;
const baseUrlChordStore = `http://${LOCAL_IP_ADDRESS}:${PORT}/chordstore`;

async function getLibrary() {
  userId = await readId();
  try {
    return fetch(`${baseUrlLibrary}/${userId}`).then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

async function addToLibrary(chordData) {
  userId = await readId();
  try {
    return fetch(`${baseUrlLibrary}/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chordData),
    }).then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

async function removeFromLibrary(_id) {
  userId = await readId();
  try {
    return fetch(`${baseUrlLibrary}/${userId}/${_id}`, {
      method: "DELETE",
    }).then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

async function updateComment(_id, comment) {
  userId = await readId();
  try {
    return fetch(`${baseUrlLibrary}/${userId}/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    }).then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

function removeSlashes(suffix) {
  let res = "";
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === "/") res += "S";
    else res += suffix[i];
  }
  return res;
}

function removeHashes(suffix) {
  let res = "";
  for (let i = 0; i < suffix.length; i++) {
    if (suffix[i] === "#") res += "H";
    else res += suffix[i];
  }
  return res;
}

async function getChord(key, suffix) {
  try {
    return fetch(
      `${baseUrlChordStore}/${removeHashes(key)}/${removeSlashes(suffix)}`
    ).then((data) => data.json());
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLibrary,
  addToLibrary,
  removeFromLibrary,
  updateComment,
  getChord,
};
