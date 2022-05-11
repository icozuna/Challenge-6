let weather = {
  apiKey: "875d8b2bc5669857900a5eb3c0830a8c",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=875d8b2bc5669857900a5eb3c0830a8c"
    )
      .then((Response) => Response.json())
      .then((data) => console.log(data));
  },
};
