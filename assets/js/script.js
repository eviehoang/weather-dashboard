
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
var forecast = document.getElementById("five-days");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var icon = document.getElementById("icon");

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
            var icon = data.weather[0].icon;
            var image = document.createElement("img");
            image.src = "https://openweathermap.org/img/w/" + icon + ".png";
            weatherIcon.append(image);

        })
}

// Forecast
function getForecast(cityInput) {
    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + `&appid=${apiKey}` + "&units=metric";
    fetch(forecastUrl)
        .then(function (response) {
            console.log(response)
            return response.json();
        })

        .then(function (data) {
            console.log('data', data)

            for (i = 0; i < 5; i++) {
                var icon = data.list[i].weather[0].icon;
                var card = `<div class="card mb-3 m-1" style="max-width: 18rem; background-color: #e3f2fd;">
                        <div class="card-body">
                        <img src ="https://openweathermap.org/img/w/`+ icon +`.png"></img>
                        <p> Temp: ` + data.list[i].main.temp + ` °C </p>
                        <p> Humidity:` + data.list[i].main.humidity + `</p>
                        <p> Wind: ` + data.list[i].wind.speed + ` </p>
                        </div>
                    </div>`;

                forecast.innerHTML = card;
            }
        })
}

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    var event = searchInput.value;
    checkWeather(event);
    getForecast(event);
})
