require("dotenv").config({ path: __dirname + "/./../App/.env" });
const router = require("./router");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(router);

app.listen(PORT, () => {
  console.log(`this is a server on http://localhost:${PORT}`);
});
