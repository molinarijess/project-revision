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
  currentTime.innerHTML = `${hour}:${minutes}`;
  if (hour < 10) {
    currentTime.innerHTML = `0${hour}`;
  }
  if (minutes < 10) {
    currentTime.innerHTML = `0${minutes}`;
  }
  setTimeout(showCurrentDate, 1000);
}
showCurrentDate();
