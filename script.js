var date = moment().format(" dddd, MMMM Do YYYY, h:mm:ss a");
var format = "LLLL";
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
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = " wind speed " + speed + " mph";
    document.querySelector(".input").addEventListener("click", function () {
      data.search();
    });
  },
  search: function () {
    this.fetchWeather(document.querySelector(".input").value);
  },
};
document.querySelector(".button").addEventListener("click", function () {
  weather.search();
});

weather.fetchWeather("Little Rock");
/*var submit = document.getElementById("click-me");
Element.addEventListener("click", function onClick() {
  document.getElementById("#click-me").innerHTML = "Submit";
});

// from mask script
/*let covid = {
  apiKey: "597eafececmsh3c6a5faae1071d3p16f675jsnb3d0baf19e06",
  fetchCovid: function (state) {
    fetch(
      "https://covid-19-statistics.p.rapidapi.com/reports?city_name=Autauga&region_province=Alabama&iso=USA&region_name=US&q=US%20Alabama&date=2020-04-16" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayState(data));
  },
};*/
