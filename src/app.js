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

let dominio = "";

//Creo el loop

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      const loopedpronoun = pronoun[i];
      const loopedadj = adj[j];
      const loopednoun = noun[k];

      let loopedDominio =
        loopedpronoun + loopedadj + loopednoun + ".com" + "<br>";
      dominio += loopedDominio;
    }
  }
}

// Modifico el html

document.querySelector("p").innerHTML = dominio;
