const express = require("express");
const app = express();
const { response, json } = require("express");
const PORT = 8081;

app.use(express.json());

const comments = []

app.get("/", (req, res) => {
  res.send(`<h1>hi my name is haim</h1>`);
});

app.get("/comments", (req, res) => {
  res.send(comments)
});

app.get("/comments/:id",(req,res)=>{
  const id = req.params.id;
  res.send(comments);
  let commenTs = comments.find(element=> element.id == req.params.id);
  return commenTs ? res.send(commenTs) : res.sendStatus(404);
});

let freeId = 0;

app.post("/comments",(req,res)=>{
  const name = req.body.name;
  const body = req.body.body;
  const mail = req.body.mail;
  if(name != undefined){
    const singleComment = {name: name, body:body ,mail:mail ,id:freeId};
    comments.push(singleComment);
    // res.send(singleComment);
    freeId++;
    return res.sendStatus(201);
  }
  res.sendStatus(404)
});

app.delete("/comments/:id",(req,res)=>{
  let commenTs = comments.findIndex(element=> element.id == req.params.id);
  if(commenTs == -1){
    return res.sendStatus(404)
  }
  comments.splice(commenTs,1);
  // res.send(comments);
  res.sendStatus(200);
});

app.patch("/comments/:id",(req,res)=>{
  const singleComment = comments.find(element => element.id == req.params.id);
  singleComment.name = req.body.name,singleComment.body = req.body.body,singleComment.mail = req.body.mail;
  singleComment ? res.send(comments) : res.send(404);
})

app.listen(PORT,()=>{
  console.log(`listening to ${PORT}`);
});

