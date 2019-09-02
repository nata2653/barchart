"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
  let number;
  const myArray = [
    "20",
    "10",
    "24",
    "25",
    "32",
    "34",
    "21",
    "20",
    "10",
    "24",
    "25",
    "32",
    "34",
    "21",
    "20",
    "10",
    "24",
    "25",
    "32",
    "34",
    "21",
    "20",
    "10",
    "24",
    "25",
    "32",
    "34",
    "21",
    "10",
    "24",
    "25",
    "32",
    "34",
    "21",
    "20",
    "10",
    "24",
    "25",
    "32",
    "34"
  ];
  document.querySelectorAll(".bar").forEach((bar, i) => {
    bar.style.height = myArray[i] + "vh";
  });
  setInterval(function() {
    number = Math.floor(Math.random() * 36);
    myArray.push(number);
    console.clear();
    console.log(myArray);
    if (myArray.length > 40) {
      myArray.shift();
    }
    document.querySelectorAll(".bars").forEach((bar, i) => {
      bar.style.height = myArray[i] + "vh";
    });
  }, 200);
}
