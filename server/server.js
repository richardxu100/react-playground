const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/public')));

let dummy_todos = [{
  text: 'hi rich',
  id: 123111,
}, {
  text: 'bye rich',
  id: 145500,
}];

app.get('/todos', (req, res) => {  
  res.send(dummy_todos);
});

app.delete('/todos', (req, res) => {
  console.log('the message:', req.body);
  const { id } = req.body;
  dummy_todos = dummy_todos.filter(todo => todo.id !== id);
  res.status(200).send();
});

app.post('/todos', (req, res) => {
  console.log('what they sent me', req.body);
  dummy_todos.push(req.body.body.newTodo);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});