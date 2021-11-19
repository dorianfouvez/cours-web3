const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());

morgan.token('body', function getBody (req) {
    return JSON.stringify(req.body);
});

// Middleware   =>  https://expressjs.com/fr/guide/using-middleware.html
app.use(function (req, res, next) {
    const email = req.header("X-USER-EMAIL");
    if(email) req.currentUser = { email };
    next();
});

morgan.token('x-user-email', function getEmail (req) {
    return JSON.stringify(req.currentUser);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body :x-user-email')); // tiny =>     :method :url :status :res[content-length] - :response-time ms

let persons = [
    {
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.get('/api/persons', (request, response) => {
    response.json(persons);
});

app.get('/info', (request, response) => {
    response.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `);
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);

    if(person){
        response.send(person);
    } else {
        //response.status(404).end(); // Default message
        response.status(404).send(`<center><h1>Error 404</h1>Person with id ${id} not found !</center>`); // Overriding message
    }
});

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id !== id);
  
    response.status(204).end();
});

const generateId = () => {
    const max = 999999;
    const id = Math.floor(Math.random() * max + 5432);

    const personsFinded = persons.find(person => person.id === id);
    if(personsFinded){
        return generateId();
    }
    return id;
}
  
app.post('/api/persons', (request, response) => {
    const body = request.body;
  
    if (!body.content) {
      return response.status(422).json({ 
        error: 'content missing' 
      });
    };
    if (!body.content.name) {
        return response.status(422).json({ 
          error: 'name is missing' 
        });
    };
    if (persons.find(person => person.name === body.content.name)) {
        return response.status(422).json({ 
          error: 'name must be unique and is already in use' 
        });
    };
    if (!body.content.number) {
        return response.status(422).json({ 
          error: 'number is missing' 
        });
    };

    const person = { 
        "id": generateId(),
        "name":  body.content.name, 
        "number":  body.content.number,
    };
  
    persons = persons.concat(person);
  
    response.json(person);
});



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});