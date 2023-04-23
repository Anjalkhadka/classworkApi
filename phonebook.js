const express = require('express');
const app = express();
const port = 3000;

const persons = [
  {
    "id": 1,
    "name": "Kiran Rana",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Pratik Bhusal",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Jon Doe",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

// GET /persons
app.get('/persons', (req, res) => {
  res.json(persons);
});

// GET /persons/:id
app.get('/persons/:id', (req, res) => {
  const person = persons.find(p => p.id === parseInt(req.params.id));
  if (!person) return res.status(404).send('Person not found.');
  res.json(person);
});

// POST /persons
app.post('/persons', (req, res) => {
  const person = {
    id: persons.length + 1,
    name: req.body.name,
    number: req.body.number
  };
  persons.push(person);
  res.send(person);
});

// PUT /persons/:id
app.put('/persons/:id', (req, res) => {
  const person = persons.find(p => p.id === parseInt(req.params.id));
  if (!person) return res.status(404).send('Person not found.');
  person.name = req.body.name;
  person.number = req.body.number;
  res.send(person);
});

// DELETE /persons/:id
app.delete('/persons/:id', (req, res) => {
  const person = persons.find(p => p.id === parseInt(req.params.id));
  if (!person) return res.status(404).send('Person not found.');
  const index = persons.indexOf(person);
  persons.splice(index, 1);
  res.send(person);
});

app.listen(port, () => {
  console.log(`Phonebook app listening at http://localhost:${port}`);
});
