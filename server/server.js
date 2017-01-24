var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoApp');

// User model
// set up email property - require it and trim it
// set the type = String, min length: 1

var User = mongoose.model('User', {
  email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
  }
});

var newUser = new User({
    email: 'user@userland.org'
});

newUser.save().then((doc) => {
  console.log('Saved user.', doc);
}, (e) => {
  console.log('Unable to save user', e);
});

// var newTodo = new Todo({
//     text: 'Eat dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo.', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// var newTodo = new Todo({
//     text: 'Exercise'
//     // completed: true,
//     // completedAt: 123
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo.', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });