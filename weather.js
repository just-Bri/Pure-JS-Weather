class Weather {
  constructor(city) {
    this.apiKey = "855cc538e8d34e77083786311e4ec562";
    this.city = city;
  }
  // Fetch Weather
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${
        this.apiKey
      }&units=imperial&#176;`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change Location
  changeLocation(city) {
    this.city = city;
  }
}
