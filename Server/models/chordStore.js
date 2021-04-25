const mongoose = require('./');
const chordSchema = require('../schemas/chordSchema');

const ChordStore = mongoose.model('ChordStore', chordSchema);

module.exports = ChordStore;