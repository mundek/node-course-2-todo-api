const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
// const {Todo} =  require('./../server/models/todo');
const {User} =  require('./../server/models/user');

// CHALLENGE
// Query the users collection

var id = '588a6cf29c05ebd2294ceae7';

User.findById(id).then((userById) => {
  if (!userById) {
    return console.log('ID not found');
  }
  console.log('UserById', userById);
}).catch((e) => console.log(e));


// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//   completed: false
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todoById) => {
//   if (!todoById) {
//     return console.log('ID not found');
//   }
//   console.log('TodoById', todoById);
// }).catch((e) => console.log(e));

// User.findById
