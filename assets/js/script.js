
// API Key
var apiKey = "9c5e768389d1fb88a2f113178aa99b43";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

// Current Date
var today = dayjs();

// Variables
var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("searchbutton");
var clearBtn = document.getElementById("clear");

var cityName = document.getElementById("city");
var weatherIcon = document.getElementById("weather-icon");
var nextDays = document.getElementById("upcoming-day");
var forecast = document.getElementById("forecast");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");

var history = document.getElementById("history");
var searchHistory = [];

// Current Weather
function checkWeather(cityInput) {
    var queryUrl = apiUrl + cityInput + `&appid=${apiKey}` + "&units=metric";

    fetch(queryUrl)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {

            // Weather Data
            console.log('data', data)
            cityName.textContent = data.name;
            temperature.innerHTML = Math.round(data.main.temp) + "°C";
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = data.wind.speed + " kph";

            // Weather Icon
            var iconcode = data.weather.id
            var iconUrl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
            weatherIcon.src = iconUrl;
        })
}


searchBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    var event = searchInput.value;
    checkWeather(event);
})
