/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".numValue").innerHTML = genRanNum();
  document.querySelector(".card").classList.add(genRanSuit());
};

let genRanNum = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let ranNum = Math.floor(Math.random() * number.length);
  return number[ranNum];
};

let genRanSuit = () => {
  let suit = ["diams", "spade", "hearts", "clubs"];
  let ranSuit = Math.floor(Math.random() * suit.length);
  return suit[ranSuit];
};
