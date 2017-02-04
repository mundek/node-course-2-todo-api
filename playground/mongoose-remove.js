const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '58965871ec0ce354e0e60f5f'}).then((todo) => {
  
});

Todo.findByIdAndRemove('58965871ec0ce354e0e60f5f').then((todo) => {
  console.log(todo);
});