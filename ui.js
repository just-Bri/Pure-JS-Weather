class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.humidity = document.getElementById("w-humidity");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp}° F`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}mph @ ${
      weather.wind.deg
    } degrees`;
  }
}
