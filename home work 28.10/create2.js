const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/blog";

MongoClient.connect(function(err,db){
    if(err) throw err;
    console.log("database concted");

    
})

