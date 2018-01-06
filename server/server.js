const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});