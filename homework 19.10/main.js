// express_pre_3_1

// __dirname הוא מודול שמייצג את הפס עד לתיקיה שעיילה אנו רוצים לעבוד  

// express_pre_3_2

// path.join() הוא מודול שמייצג את הדרך שבה ניתן להעביר מידע 

// Mead_nath_weather_location_web_server 


console.log("app is loading");
const express = require("express");
const path = require("path"), app = express() , PORT = 8083;
const publicPath = path.join(__dirname,"public");
const axios = require("axios");
const hbs = require("hbs");
const viewPath = path.join(__dirname,"templates","views");
const partialPath = path.join(__dirname,"templates","partial");
app.set("view engine","hbs");
app.set("views",viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicPath));

app.get("/city1",(req,res)=>{
  const cityName = `${req.query.city1}`;
  const APIkey = "4be58b6ef34254cc7a37af635d92c515";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;
  
  axios
  .get(url)
  .then((response)=>{
    console.log(response.data.coord.lon);
    console.log(response.data.coord.lat);
    res.send(`city name: ${cityName}<br>lon: ${response.data.coord.lon}<br>lat: ${response.data.coord.lat}`)
  })
  .catch((err)=>{
    res.render(`<h1>ERROR: You Must Provide a City Name !</h1><br><img src="https://cdn.pixabay.com/photo/2017/10/16/23/02/brooklyn-2858985_960_720.jpg">`)
  })
  console.log(req.query);
})

app.get("/",(req,res)=>{
  res.render("index", {somekey: "blabla"})
});

app.get("/about",(req,res)=>{
  res.render("about", {somekey: "blabla"})
});

app.get("/help",(req,res)=>{
  res.render("help", {somekey: "blabla"})
});

// app.get("*",(req,res)=>{
//   res.render(`<h1>ERROR: You Must Provide a City Name !</h1><br><img src="https://cdn.pixabay.com/photo/2017/10/16/23/02/brooklyn-2858985_960_720.jpg">`)
// });

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});




