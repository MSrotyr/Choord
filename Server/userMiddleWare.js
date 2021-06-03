const Users = require("./models/user");

async function userMiddleWare(req, res, next) {
  const { userId } = req.params;
  let user = await Users.findById(userId);
  if (!user) {
    user = await Users.create({ _id: userId });
  }
  req.user = user;
  next(req, res);
}

module.exports = userMiddleWare;
