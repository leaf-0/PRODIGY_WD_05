const apiKey="d7a4713f379f1a02959eb5a0774bbad6";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatheric = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data = await response.json();
        
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";


        if (data.weather[0].main == "Clouds"){
            weatheric.src ="images/clouds.png";
        }
        
        else if(data.weather[0].main == "Clear"){
            weatheric.src = "images/clear.png";
        }
        
        else if(data.weather[0].main == "Mist"){
            weatheric.src = "images/mist.png";
        }
        
        else if(data.weather[0].main == "Rain"){
            weatheric.src = "images/rain.png";
        }
        
        else if(data.weather[0].main == "Drizzle"){
            weatheric.src = "images/drizzle.png";
        
        }
        
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";

    }



}


searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
