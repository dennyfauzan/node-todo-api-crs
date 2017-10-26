const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove()
// Todo.remove({}).then((result) => {
//   console.log(result)
// });


// Todo.findOneAndRemove

// Todo.findOneAndRemove({_id: '59f1a0c83ae415addbd2659f'}).then((todo) => {
    console.log(todo);
// });

//Todo.findByIdAndRemove

// Todo.findByIdAndRemove('59f1a0c83ae415addbd2659f').then((todo) => {
//   console.log(todo);
// })