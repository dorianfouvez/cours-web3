const mongoose = require('mongoose');

if (process.argv.length < 3 || process.argv.length > 5) {
    console.log(`Please provide the password as an argument: 
    \n\tnode mongo.js <password>
    \n\tor
    \n\tnode mongo.js <password> <name> <number>`);
    process.exit(1);
}

const password = process.argv[2];
let name;
let number;
if(process.argv.length > 3){
    name = process.argv[3];
    number = process.argv[4];
}

const url =
  `mongodb+srv://react_courses:${password}@cluster0.ezt7n.mongodb.net/phonebook-app?retryWrites=true`;

mongoose.connect(url).catch(e => print(e));

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    }
});

const Person = mongoose.model('Person', personSchema);

if(process.argv.length > 3){
    const person = new Person({
      name: name,
      number: number,
    });
    
    person.save().then(result => {
      console.log(`added ${name} with number ${number} to phonebook`);
      mongoose.connection.close();
    });
} else {
    Person.find({})
    .then(result => {
        console.log("Phonebook:");
        result.forEach(person => {
          console.log(person.name + "\t" + person.number);
        });
        mongoose.connection.close();
    });
}