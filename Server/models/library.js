const mongoose = require('./');
const chordSchema = require('../schemas/chordSchema');

const Library = mongoose.model('Library', chordSchema);

module.exports = Library;