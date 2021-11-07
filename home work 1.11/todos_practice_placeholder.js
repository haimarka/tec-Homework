console.log("app is loading");
const express = require("express"),
    app = express(),
    PORT = 8080;
  

app.use(express.json());
const exportitions = require("./functionsPage");

app.get("/todos", (req, res) => {
    exportitions.findDocs(req,res)
});

app.get("/todos/:id", (req, res) => {
    exportitions.findSingleDoc(req,res)
});

app.post("/todos",(req,res)=>{
    exportitions.postDocument(req,res)
});

app.delete("/todos/:id",(req,res)=>{
    exportitions.deleteDocsById(req,res)
});

app.patch("/todos/:id",(req,res)=>{
    exportitions.updateSingleDocument(req,res)
})

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})