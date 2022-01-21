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
  let currentDate = document.querySelector("#current-date");
  let currentTime = document.querySelector("#current-time");
  let hour = now.getHours();
  let minutes = now.getMinutes();

  currentDate.innerHTML = `${weekDays[now.getDay()]}, ${now.getDate()} ${
    months[now.getMonth()]
  } ${now.getFullYear()}`;
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  currentTime.innerHTML = `${hour}:${minutes}`;
  setTimeout(showCurrentDate, 1000);
}

let searchNewCity = document.querySelector("#search-new-city");
searchNewCity.addEventListener("search", function (event) {
  event.preventDefault();
  let displaySearchInput = document.querySelector("#city");
  let city = searchNewCity.value.toUpperCase();
  displaySearchInput.innerHTML = `${city}`;
  if (city === "") {
    displaySearchInput.innerHTML = "LONDON";
  }
});

showCurrentDate();
