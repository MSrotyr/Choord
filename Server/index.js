require("dotenv").config({ path: __dirname + "/./../App/.env" });

const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const router = require("./router");
app.use(router);

app.listen(PORT, () => {
  console.log(`this is a server on http://localhost:${PORT}`);
});
