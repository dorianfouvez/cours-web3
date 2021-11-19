const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}

const password = process.argv[2];

const url =
  `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/phonebook-app?retryWrites=true`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
});

const Note = mongoose.model('Person', personSchema);

const note = new Note({
  id: 1,
  name: "Arto Hellas",
  number: "040-123456",
});

note.save().then(result => {
  console.log('person saved!');
  mongoose.connection.close();
});