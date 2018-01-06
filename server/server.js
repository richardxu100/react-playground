const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('/todos', (req, res) => {
  const dummy_todos = [{
    text: 'hi rich',
    id: 123111,
  }, {
    text: 'bye rich',
    id: 145500,
  }];
  res.send(dummy_todos);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});