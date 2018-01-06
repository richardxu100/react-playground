let dummy_todos = [
  {
    text: 'hi rich',
    id: 123111
  },
  {
    text: 'bye rich',
    id: 145500
  }
];

module.exports = app => {
  app.get('/todos', (req, res) => {
    res.send(dummy_todos);
  });

  app.delete('/todos', (req, res) => {
    // console.log('the message:', req.body);
    const { id } = req.body;
    dummy_todos = dummy_todos.filter(todo => todo.id !== id);
    res.status(200).send();
  });

  app.post('/todos', (req, res) => {
    // console.log('what they sent me', req.body);
    dummy_todos.push(req.body.body.newTodo);
    res.status(200).send();
  });
};
