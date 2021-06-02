const mongoose = require("./");
const userSchema = require("../schemas/userSchema");

const Users = mongoose.model("User", userSchema);

module.exports = Users;
