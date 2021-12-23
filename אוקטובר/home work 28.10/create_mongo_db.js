const express = require("express");
const app = express();
const PORT = 8080;

var MongoClient = require('Mongodb').MongoClient;
var url = "mongodb://localhost:27017/blog";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
  // db.db("blog").collection("authors").find({}).toArray(function(err, result) {
  //   if (err) throw err;
  // console.log("authors documents");
  // console.log(result);
    
  // });
  
  // db.db("blog").collection("posts").find({}).toArray(function(err, result) {
  //   if (err) throw err;
  // console.log("posts documents");
  // console.log(result);
  // db.close();
  // });

  // function priteCollection(singleCollection){
  //   db.db("blog").collection(singleCollection).find({}).toArray(function(err, result) {
  //     if (err) throw err;
  //   console.log("posts documents");
  //   console.log(result);
  //   db.close();
  //   });
  // }

  // priteCollection("posts");

  // db.authors.find({posts: {$exists: true}},{name: 0, age: 0})
  // db.posts.find({author: {$exists: true}},{tittle: 0,discription: 0})

});

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
})