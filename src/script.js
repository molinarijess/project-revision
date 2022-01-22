let apiKey = "1f17ba351ee112a37d7633ae135f9016";
let initialCity = "London";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${initialCity}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(function (response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}ºC`;
  document.querySelector(
    "#weather-description"
  ).innerHTML = `${response.data.weather[0].description}`;
});

let searchNewCity = document.querySelector("#search-new-city");
searchNewCity.addEventListener("search", function (event) {
  event.preventDefault();
  let displaySearchInput = document.querySelector("#city");
  let city = searchNewCity.value;
  displaySearchInput.innerHTML = `${city}`;
  if (city === "") {
    displaySearchInput.innerHTML = initialCity;
  }
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
    city ? city : initialCity
  }&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(function (response) {
    displaySearchInput.innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = `${Math.round(
      response.data.main.temp
    )}ºC`;
    document.querySelector(
      "#weather-description"
    ).innerHTML = `${response.data.weather[0].description}`;
  });
});

function showCurrentDate() {
  let now = new Date();
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  document.querySelector("#current-date").innerHTML = `${
    weekDays[now.getDay()]
  }, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  document.querySelector("#current-time").innerHTML = `${hour}:${minutes}`;
  setTimeout(showCurrentDate, 1000);
}

showCurrentDate();
