var env = process.env.NODE_ENV || 'development';
console.log('env ******', env);
if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp' ;
} else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest' ;
} else {
  process.env.MONGODB_URI = 'mongodb://admin:admin@ds233895.mlab.com:33895/node-todo-api';
}