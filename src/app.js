/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#domain").innerHTML = generateExcuse();
  console.log(generateExcuse);
};
let generateExcuse = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let whoPronoun = Math.floor(Math.random() * pronoun.length);
  let actAdj = Math.floor(Math.random() * adj.length);
  let whatNoun = Math.floor(Math.random() * noun.length);

  return pronoun[whoPronoun] + adj[actAdj] + noun[whatNoun] + ".com";
};
