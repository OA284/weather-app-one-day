const apikey = "55adb2d6ecbf755bad5b1e196a10e306";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
const weatherText = document.querySelector(".weatherText");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    if(city == "" || response.status == 404){
        document.querySelector(".city").innerHTML = "--";
        document.querySelector(".temp").innerHTML = "--°C";
        document.querySelector(".humidity").innerHTML = "--%";
        document.querySelector(".wind").innerHTML = "-- Km/h";
    
        weatherText.classList.replace("d-none", "d-block");
        weatherIcon.classList.replace("d-block", "d-none");
    }
    else{
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        
        if (data.weather [0].main == "Clouds"){
            weatherIcon.src = "image/clouds.png";
            weatherText.classList.replace("d-block", "d-none");
            weatherIcon.classList.replace("d-none", "d-block");
        }
        else if (data.weather [0].main == "Clear"){
            weatherIcon.src = "image/clear.png";
            weatherText.classList.replace("d-block", "d-none");
            weatherIcon.classList.replace("d-none", "d-block");
        }
        else if (data.weather [0].main == "Rain"){
            weatherIcon.src = "image/rain.png";
            weatherText.classList.replace("d-block", "d-none");
            weatherIcon.classList.replace("d-none", "d-block");
        }
        else if (data.weather [0].main == "Drizzle"){
            weatherIcon.src = "image/drizzle.png";
            weatherText.classList.replace("d-block", "d-none");
            weatherIcon.classList.replace("d-none", "d-block");
        }
        else if (data.weather [0].main == "Mist"){
            weatherIcon.src = "image/mist.png";
            weatherText.classList.replace("d-block", "d-none");
            weatherIcon.classList.replace("d-none", "d-block");
        }
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
