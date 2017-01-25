var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoApp');

module.exports = {
    mongoose: mongoose
};

// above, ES6 simplified
// module.exports = {mongoose};
