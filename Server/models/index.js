const mongoose = require("mongoose");
const URL = process.env.MONGO_URL || "mongodb://localhost:27017/choord";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
