const MongoDB = require("mongodb"),
    MongoClient = MongoDB.MongoClient,
    ObjectId = MongoDB.ObjectId,
    MongoUrl = "mongodb://localhost:27017",
    dbName = "jsonplaceholders",
    todos = "todos";

function findSingleDoc(req,res){
    MongoClient.connect(MongoUrl).then((db)=>{
        const ID = req.params.id
        dbo = db.db(dbName)
        dbo.collection(todos).findOne({_id:ObjectId(ID)}).then((doc)=>{
            res.send(doc)
            db.close()
        })
    })
    .catch((err)=>{
        throw err
    })
}


function findDocs(req,res) {
    MongoClient.connect(MongoUrl)
        .then((db) => {
            dbo = db.db(dbName)
            dbo.collection(todos).find({}).toArray().then((docs) => {
                res.send(docs)
                db.close();
            })
        })
        .catch((err) => {
            throw err
        })
}

function postDocument(req,res){
    MongoClient.connect(MongoUrl).then((db)=>{
        const document = req.body;
        dbo = db.db(dbName)
        dbo.collection(todos).insertOne(document).then((doc)=>{
            res.send(doc)
            db.close()
        })
    })
    .catch((err)=>{
        throw err
    })
}

function deleteDocsById(req,res){
    MongoClient.connect(MongoUrl).then((db)=>{
        const ID = req.params.id;
        dbo = db.db(dbName)
        dbo.collection(todos).deleteOne({_id: ObjectId(ID)}).then((docId)=>{
            res.send(docId)
            db.close()
        })
    })
    .catch((err)=>{
        throw err
    })
}

function updateSingleDocument(req,res){
    MongoClient.connect(MongoUrl).then((db)=>{
        const ID = req.params.id
        const updateDoc = req.body
        dbo = db.db(dbName)
        dbo.collection(todos).updateOne({_id: ObjectId(ID)},{$set: updateDoc}).then((doc)=>{
            res.send(doc)
            db.close()
        })
    })
    .catch((err)=>{
        throw err
    })
}


module.exports = {findSingleDoc, findDocs, postDocument, deleteDocsById, updateSingleDocument}

