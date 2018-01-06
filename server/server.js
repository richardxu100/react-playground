const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
const app = express();

const routes = require('./routes');

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/public')));

routes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});