const mongoose = require("../models/index");
const chordSchema = require("./chordSchema");

const userSchema = new mongoose.Schema({
  library: [chordSchema],
});

module.exports = userSchema;
