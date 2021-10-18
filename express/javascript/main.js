console.log("hi");

//1 express

// const express = require("express");
// const path = require("path");
// const app = express();

// const PORT = 8080;

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"index.html",));
// });

// app.get("*",(req,res)=>{
//     res.send(`page not exist`);
// });

// app.listen(PORT);

//2 web server 1.5

const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"));
});

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.get("/courses",(req,res)=>{
    res.sendFile(path.join(__dirname,"courses.html"));
});

app.get("/mentoring",(req,res)=>{
    res.sendFile(path.join(__dirname,"mentoring.html"));
});

app.get("/testimonials",(req,res)=>{
    res.sendFile(path.join(__dirname,"testimonials.html"));
});

app.get("/events",(req,res)=>{
    res.sendFile(path.join(__dirname,"events.html"));
});

app.get("*",(req,res)=>{
    res.send(`page not exist`);
});

app.listen(PORT);





