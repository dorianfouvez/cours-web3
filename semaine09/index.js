require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./modules/middlewares/logger_middleware').logger;
const personsRoutes = require('./routes/persons');
//let persons = require('./db/persons');
const Person = require('./models/person');
const errorHandler = require('./errorHandler');

app.use(express.json());

app.use(logger);

app.use("/api/persons", personsRoutes);

app.get('/info', (request, response) => {
  Person.find({}).then(persons => {
    response.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `);
  })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(errorHandler);