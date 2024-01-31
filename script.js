let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let ampmValue = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12;

  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  mins.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  ampm.innerHTML = ampmValue;
}, 1000);
