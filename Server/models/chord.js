const mongoose = require('./');

const chordSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  suffix: {
    type: String,
    required: true,
  },
  frets: {
    type: [Number],
    required: true
  },
  fingers: {
    type: [Number],
    required: true
  },
  barres: {
    type: [Number],
    required: true
  },
  midi: {
    type: [Number],
    required: true
  },
  capo: Boolean,
});

const Chords = mongoose.model('Chord', chordSchema);

module.exports = Chords;