/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Me aburroooo!");
};

//Defino las posibles combinaciones
let pronoun = ["the", "our"];

let adj = ["great", "big"];

let noun = ["jogger", "racoon"];

//Creo una funcion que randomiza

function random(len) {
  return Math.floor(Math.random() * len);
}

// organizo el dominio

const dominio =
  pronoun[random(pronoun.length)] +
  " " +
  adj[random(pronoun.length)] +
  " " +
  noun[random(noun.length)] +
  ".com";

// Elijo el HTML que quiero modificar

document.querySelector("p").innerText = dominio;
