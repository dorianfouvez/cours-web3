const express = require('express');
let persons = require('../db/persons');

const router = express.Router();

router.get('/', (request, response) => {
    response.json(persons);
});

router.get('/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);

    if(person){
        response.send(person);
    } else {
        //response.status(404).end(); // Default message
        response.status(404).send(`<center><h1>Error 404</h1>Person with id ${id} not found !</center>`); // Overriding message
    }
});

router.delete('/:id', (request, response) => {
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
  
router.post('/', (request, response) => {
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

module.exports = router;