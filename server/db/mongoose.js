const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise = global.Promise;

//Db connected via mLab
// mongoose.connect('mongodb://admin:admin@ds233895.mlab.com:33895/node-todo-api')

module.exports = {
  mongoose
};