function page() {
    // API Key
    var apiKey = "9c5e768389d1fb88a2f113178aa99b43";

    // Variables
    var citySearch = document.getElementById("location");
    var searchBtn = document.getElementById("searchbutton");
    var clearnBtn = document.getElementById("clear");

    var cityName = document.getElementById("city");
    var weatherIcon = document.getElementById("weather-icon");
    var nextDays = document.getElementById("upcoming-day");
    var forecast = document.getElementById("forecast");
    var temperature = document.getElementById("temperature");
    var humidity = document.getElementById("humidity");
    var wind = document.getElementById("wind");

    // Get Current Weather
    function getWeather(byCity) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "byCity" + "&appid=" + apiKey;

        fetch(queryURL)
            .then(function (response) {
                console.log(response)
                
                var today = dayjs();
                cityName.innerHTML = response.data.name + "(" + today + ")";
                var icon = response.data.weahter[0].icon;
                weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
                temperature.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
                humidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
                wind.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";


            })
            .then(function (data) {
                console.log('data', data)
            })
    }

    // Search Get
    searchBtn.addEventListener("click", function () {
        var searched = citySearch.value;
        getWeather(searched);
        searchHistory.push(searched);
        localStorage.setItem("search", JSON.stringify(searched));
        rendersearched();
    })
}
page();