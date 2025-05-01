require("dotenv").config()
const axious = require("axios")

async function getWeather(city){
    try{
        const API_KEY = process.env.API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        console.log(url)
        const response = await axious.get(url)
        const data = response.data

        console.log(`\n\nweather in ${city} :`)
        console.log(`Temprature = ${data.main.temp}`)
        console.log(`Weather    = ${data.weather[0].description}`)
        console.log(`Humidity   = ${data.main.humidity}`)
        console.log(`Wind Speed = ${data.main.speed}`)
    }
    catch(error){
        console.error("Error : ❌ : ",error.response ? error.response.data : error.message)
    }
}

let city = process.argv[2] || "New York"
getWeather(city)
