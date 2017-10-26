const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Db connected via mLab
// mongoose.connect('mongodb://dennyfauzan:mongolab0901@ds233895.mlab.com:33895/node-todo-api')

module.exports = {
  mongoose
};