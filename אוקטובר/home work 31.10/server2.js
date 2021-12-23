
const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const ObjectID = mongoDB.ObjectId;

const mongoUrl = "mongodb://localhost:27017";
MongoClient.connect(mongoUrl,(err,db)=>{
    if(err){
        console.log(err);
    }
    const dbo = db.db("blog");

    switch (process.argv[2]) {
            case "add":
                insertToCollection(dbo,"posts",newObj);
                let newObj = {tittle: "jaki", discript: "big",posts: []};
            break;
            case "update":
                updateDocById(dbo,"posts",ObjectID("617e81412b38d032f7149e88"));
            break;
            case "delete":
                deleteDocById(dbo,"posts",ObjectID("617e81412b38d032f7149e88"));
            break;
            case "single":
                logSingleDocument(dbo,"posts",ObjectID("617d9d518361166d69f83fcc"));
            break;
            default:
                logAllDocuments(dbo,"posts");
            break;
    }


});


// function insertToCollection(db,collectionName,newObj){
// db.collection(collectionName).insertOne(newObj, function(err, obj) {
//   if (err) throw err;
//   console.log(obj);
//   console.log("1 document inserted");
// });


// function updateDocById(db,collectionName,documentId){
//     db.collection(collectionName).updateOne({_id: ObjectID(documentId)},{ $set: { tittle : "hello" ,discript: "small", posts: ["hay"]}}, function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         console.log("update document");
//       });
// }

// function deleteDocById(db,collectionName,documentId){
//     db.collection(collectionName).deleteOne({_id: ObjectID(documentId)}, function(err, ID) {
//         if (err) throw err;
//         console.log(ID);
//         console.log("delete document");
//       });
// }

// function logSingleDocument(db,collectionName,document){
//     db.collection(collectionName).findOne({_id: ObjectID(document)}, function(err, doc) {
//         if (err) throw err;
//         console.log(doc);
        
//       });
// }

// function logAllDocuments(db,collectionName){
//     db.collection(collectionName).find({}).toArray(function(err, array) {
//         if (err) throw err;
//         console.log(array);
//     });
// };