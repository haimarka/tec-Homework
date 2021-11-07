const { ObjectID } = require("bson");
const mongoDB = require("mongodb");
const { object } = require("webidl-conversions");
const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;

const mongoUrl = "mongodb://localhost:27017";

MongoClient.connect(mongoUrl,(err,db)=>{
    if(err){
        console.log(err);
    }
    const dbo = db.db("blog");
    // createCollections(dbo,"haim");
    // insertToCollection(dbo,"authors",newObj);
    // let newObj = { name: "Company Inc", address: "Highway 37" };
    // returnAllDocuments(dbo,"posts");
    // let docsArray = [
    //     {name: "haim",age:28,posts: ["hello"]},
    //     {name: "smuel",age:28,posts: ["world"]},
    //     {name: "nadav",age:28,posts: ["there"]},
    // ];
    // insertDocumenst(dbo,docsArray,"posts");
    // insertDocumenst(dbo,docsArray,"authors");
    // deleteDocById(dbo,"posts",ObjectId("617e81412b38d032f7149e89"));
    // updateDocById(dbo,"posts",ObjectID("617e81412b38d032f7149e88"));
    // sortByName(dbo,"authors");
    // addIdToAuthorsPosts(dbo,"posts",("617e81412b38d032f7149e87"),("617e81412b38d032f7149e87"));
    //1
    // addPostsId(dbo,("617d9d148361166d69f83fcb"),("617d9a118361166d69f83fc0"),("617d9a118361166d69f83fc1"));
    //2
    // logAuthorsWithPosts(dbo,("617e81412b38d032f7149e88"));
    //3
    // logAuthorsUnderForty(dbo);
    //4
    // logAuthorsAboveForty(dbo);
    //5
    // logBetweenAges(dbo);
    //6
    // logThreeAges(dbo);
    //7
    // logAllAuthorsWithoutId(dbo);
    //8
    // logAllAuthorsName(dbo);




})

// function thet create a collection and log it

// function createCollections(db,collectionName){
//     db.createCollection(collectionName,(err,coll)=>{
//         if(err) throw err
//         console.log(coll);
//     })
// }

// functions thet create a new object and add it to the collection

// function insertToCollection(db,collectionName,newObj){
// db.collection(collectionName).insertOne(newObj, function(err, obj) {
//   if (err) throw err;
//   console.log(obj);
//   console.log("1 document inserted");
// });

// };

// function thet find all documents and log it

    // function returnAllDocuments(db,collectionName){
    //     db.collection(collectionName).find({}).toArray(function(err, docs) {
    //       if (err) throw err;
    //       console.log(docs);
    //     });
    // };

// function insertDocumenst(db,docsArray,collectionName){
//     db.collection(collectionName).insertMany(docsArray, function(err, array) {
//         if (err) throw err;
//         console.log(array);
//         console.log("documents inserted");
//       });
// }

// function deleteDocById(db,collectionName,documentId){
//     db.collection(collectionName).deleteOne({_id: ObjectID(documentId)}, function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         console.log("delete document");
//       });
// }

// function updateDocById(db,collectionName,documentId){
//     db.collection(collectionName).updateOne({_id: ObjectID(documentId)},{ $set: { name : "jonas" }}, function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         console.log("delete document");
//       });
// }

// function sortByName(db,collectionName){
//     db.collection(collectionName).find({}).sort({ name : -1}).toArray(function(err, abcLine) {
//       if (err) throw err;
//       console.log(abcLine);
//     });
// };


// function addIdToAuthorsPosts(db,collectionName,documentId,postId){postId
//     db.collection(collectionName).updateOne({_id: ObjectID(documentId)},{ $push: { posts : postId }}, function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         console.log("delete document");
//       });
// }


    // homework

    //1
    // function addPostsId(db,id1,id2,id3){
    //     db.collection("posts").updateMany({_id: ObjectID(id1)},{$push: {posts:  [id2, id3]}},function (err, idArray){
    //         if(err) throw err;
    //         console.log(idArray);
    //         console.log("update documents !");
    //     });
    // }

    //2
    // function logAuthorsWithPosts(db,author1){
    //     db.collection("posts").find({_id: ObjectID(author1)}).toArray(function (err,authorsId){
    //         if(err)throw err;
    //         console.log(authorsId);
    //     });
    // };

    //2 practice 
    // db.collection("posts").find({_id: ObjectID(author1)}).toArray(function (err,docs){
    //     if(err)throw err;
    //     docs.forEach(element => {
    //         if(element.posts.length){
    //             console.log(element);
    //         }
    //     });
    // });
    
    //3
    // function logAuthorsUnderForty(db){
    //     db.collection("authors").find({age: {$lt: 40}}).toArray(function(err,authorsAge){
    //         if(err)throw err;
    //         console.log(authorsAge);
    //     })
    // }
    //4
    // function logAuthorsAboveForty(db){
    //     db.collection("authors").find({age: {$gt: 40}}).toArray(function(err,authorsAge){
    //         if(err)throw err;
    //         console.log(authorsAge);
    //     });
    // };
    //5
    // function logBetweenAges(db){
    //     db.collection("authors").find({age: {$gt: 20,$lt: 60}}).toArray(function(err,ages){
    //         if(err) throw err;
    //         console.log(ages);
    //     });
    // };
    //6
    // function logThreeAges(db){
    //     db.collection("authors").find({age: {$gt: 20,$lt: 60}}).limit(3).toArray(function(err,ages){
    //         if(err) throw err;
    //         console.log(ages);
    //     });
    // };
    //7
    // function logAllAuthorsWithoutId(db){
    //     db.collection("authors").find({},{ projection: {name: 1,_id:0,age: 1,author:1}}).toArray(function(err,docs){
    //         if(err)throw err;
    //         console.log(docs);
    //     });
    // };
    //8
    // function logAllAuthorsName(db){
    //     db.collection("authors").find({},{ projection: {name: 1,_id:0}}).toArray(function(err,docs){
    //         if(err)throw err;
    //         console.log(docs);
    //     });
    // };
    

