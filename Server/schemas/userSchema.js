const mongoose = require("../models/index");
const chordSchema = require("./chordSchema");

const userSchema = new mongoose.Schema({
  _id: String,
  library: {
    type: [chordSchema],
    default: [],
  },
});

module.exports = userSchema;
