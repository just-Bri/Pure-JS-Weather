class Weather {
  constructor(city, country) {
    this.apiKey = "52ff88f74b2120afa52e31a815120576";
    this.city = city;
    this.country = country;
  }
  // Fetch Weather
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}`
    );
    const responseData = await response;
    return responseData;
  }

  // Change Location
  changeLocation(city) {
    this.city = city;
  }
}
