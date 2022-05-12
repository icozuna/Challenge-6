var date = "2022-05-12";
var format = "LLLL";
var result = moment(date).format(format);
document.querySelector("#date").innerText = date;

let weather = {
  apiKey: "875d8b2bc5669857900a5eb3c0830a8c",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { dt } = data;
    console.log(name, icon, description, temp, humidity, speed, dt);
    document.querySelector(".city").innerText = "Weather in " + name + date;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = " wind speed " + speed + " mph";
    document.querySelector(".dt").innerText = dt;
  },
};
