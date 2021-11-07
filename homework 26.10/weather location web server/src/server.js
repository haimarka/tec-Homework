const express = require("express");
const path = require("path");
const PORT = 8080;
const app = express();
const axios = require("axios");

const hbs = require("hbs");
const viewPath = path.join(__dirname,"..","templates","views");
const partialPath = path.join(__dirname,"..","templates","partial");
app.set("view engine","hbs");
app.set("views",viewPath);
hbs.registerPartials(partialPath);

app.get("/city",(req,res)=>{
    const cityName = req.query.city;
    const API_KEY = process.env.SUGER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    axios
    .get(url)
    .then(function(response){
        if(response.status == 200){
            // console.log(response.data);
            res.render("index",{city: `city: ${response.data.name}`,lon: `lon : ${response.data.coord.lon}`,lat: `lat:${response.data.coord.lat}`});
            
        }
    })
    .catch(function(err){
        res.send(err);
    })
});

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about",{somekey2: "this is about"});
});

app.get("/help",(req,res)=>{
    res.render("help",{somekey3: "this is help"});
});

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
});