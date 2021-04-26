const ChordStore = require('./models/chordStore');
const rawData = require('./rawData.json');

const chords = rawData.chords;

function upload() {
  let i = 0
  for (let musicalKey of Object.keys(chords)) {
    for (let nestChord of chords[musicalKey]) {
      if (musicalKey === 'C') i++
      for (let chordPosition of nestChord.positions) {
        const chord = {
          key: nestChord.key,
          suffix: nestChord.suffix,
          ...chordPosition
        }
        ChordStore.create(chord);
      }
    }
  }
}

upload();
console.log('Done');