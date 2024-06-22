require("dotenv").config({ path: __dirname + "/./../App/.env" });
const router = require("./router");
const express = require("express");
const uploadChords = require("./uploadChords")

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.use(router);

uploadChords()

app.listen(PORT, () => {
  console.log(`this is a server on http://localhost:${PORT}`);
});
