// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
   if (err) {
     return console.log('Unable to connect to MongoDB server');
   }
    console.log('Connected to MongoDB server');

  //  db.collection('Todos').findOneAndUpdate({_id: new ObjectID("59f02fc57e1fb7dc13660adc")},{
  //    $set: {
  //      text: 'iam the updated one'
  //    }
  //  }, {
  //    returnOriginal: false
  //  }).then((result) => {
  //    console.log(result);
  //  })

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID("59f019dd7e1fb7dc1366070b")}, 
    {
      $inc:{age:2},
      $set:{name:'Denny update'}
    },
    {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  })


    //db.close();
 });
