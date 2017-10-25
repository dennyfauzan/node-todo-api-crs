const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '59f0954f85cd580b164ee1b1';
var idUser = '59f052cbfa977406e9ae95d8';

User.findById(idUser)
.then((user) => {
  if(!user){
    return console.log('Unable to find User');
  }
  console.log(user);
})
.catch((e)=>{
  console.log(e)
});

// if(!ObjectID.isValid(id)){
//   console.log('ID is not Valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// If you want to find one document by something other than ID i'd Recommend using findOne
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if(!todo){
//    return console.log('Id Not Found');
//   }
//   console.log('Todo', todo);
// });

// if you wanna find one document by ID recommend findById
// Todo.findById(id)
// .then((todo)=>{
//   if(!todo){
//    return console.log('Id Not Found');
//   }
//   console.log('Todo by ID', todo);
// })
// .catch((e)=>{
//   console.log(e);
// })