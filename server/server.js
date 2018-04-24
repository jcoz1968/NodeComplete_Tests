const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.status(200).send('Hello world!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo app v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Alan',
      age: 27
    },
    {
      name: 'Brenna',
      age: 20
    },
    {
      name: 'Chris',
      age: 37
    }
  ])
});

app.listen(3000);

module.exports.app = app;
