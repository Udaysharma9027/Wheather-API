const express = require("express");
const app = express();
const https = require("https");

app.get("/" , function(req , res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Noida%20&appid=26c5d1903c829695c595bb8b7412f7b4&";
  https.get(url , function(respons){
    console.log(respons.statusCode);
    respons.on("data" , function(data){
       const WheatherData = JSON.parse(data);
       const temp = WheatherData.main.temp;
       const icon = WheatherData.weather[0].icon;
       const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";

       res.write("<h1> The Wheather in Noida is" + temp + "degree celcius</h1>");
       res.write("<img src=" +imageUrl+ ">")
       res.send();
    });
  });

});
app.listen(4555 , function(){

  console.log("The Port Starting using 4555 ");
});
