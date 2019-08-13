// init weather obj
const weather = new Weather("Miami", "us");

// event listener on load
document.addEventListener("DOMContentLoaded", getWeather);

weather.changeLocation("Boston", "us");

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}

// Data
// desc = description
// feelsLike = temp
// humidity = humidity
// wind = wind.speed and wind.deg
