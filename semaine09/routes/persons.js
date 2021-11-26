const express = require('express');
const Person = require('../models/person');

const router = express.Router();

router.get('/', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons);
    });
});

router.get('/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        //response.json(person);
        if(person){
            response.send(person);
        } else {
            //response.status(404).end(); // Default message
            response.status(404).send(`<center><h1>Error 404</h1>Person with id ${id} not found !</center>`); // Overriding message
        }
    });
});

router.delete('/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error));
});

const isNameAlreadyExist = async (name) => {
    const persons = await Person.find({ name: name });
    if(persons && persons.length > 0){
        console.log(true);
        return true;
    } else {
        return false;
    }
}
  
router.post('/', async (request, response) => {
    const body = request.body;

    if (!body.name) {
        return response.status(422).json({ 
          error: 'name is missing' 
        });
    };
    if (!body.number) {
        return response.status(422).json({ 
          error: 'number is missing' 
        });
    };
    
    const person = new Person({
        name:  body.name,
        number: body.number,
    });

    if (await isNameAlreadyExist(body.name)) {
        Person.find({ name: body.name }).then(result => {
            console.log(result);
            console.log(result[0]._id.toString());
            Person.findByIdAndUpdate(result[0]._id.toString(), { number: person.number })
            .then(beforeUpdatePerson => {
                response.json(beforeUpdatePerson);
            })
            .catch(error => next(error));
        });
    }else {
        person.save().then(savedPerson => {
            response.json(savedPerson);
        });
    }
    
});

module.exports = router;