const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;
const router = require('./router');
app.use(router);

app.listen(port, () => {
  console.log(`this is a server on http://localhost:${port}`);
});

