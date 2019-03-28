import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const pokemons = [
  { id: 25, name: "Pikachu", type: [5], img: "/img/pikachu-2.svg" },
  { id: 63, name: "Abra", type: [11], img: "/img/abra.svg" },
  { id: 69, name: "Bellsprout", type: [4, 8], img: "/img/bellsprout.svg" },
  { id: 1, name: "Bulbasaur", type: [4, 8], img: "/img/bulbasaur.svg" },
  { id: 4, name: "Charmander", type: [2], img: "/img/charmander.svg" },
  { id: 133, name: "Eevee", type: [1], img: "/img/eevee.svg" },
  { id: 7, name: "Squirtle", type: [3], img: "/img/squirtle.svg" },
  { id: 39, name: "Jigglypuff", type: [18, 1], img: "/img/jigglypuff.svg" },
  { id: 52, name: "Meowth", type: [1], img: "/img/meowth.svg" },
  { id: 54, name: "Psyduck", type: [3], img: "/img/psyduck.svg" },
  { id: 143, name: "Snorlax", type: [1], img: "/img/snorlax.svg" },
  { id: 48, name: "Venonat", type: [12, 8], img: "/img/venonat.svg" },
  { id: 16, name: "Pidgey", type: [10, 1], img: "/img/pidgey.svg" },
  { id: 19, name: "Rattata", type: [1], img: "/img/rattata.svg" },
  { id: 56, name: "Mankey", type: [7], img: "/img/mankey.svg" },
  { id: 147, name: "Dratini", type: [16], img: "/img/dratini.svg" }
];

const types = [
  { id: 0, name: "any" },
  { id: 1, name: "normal" },
  { id: 2, name: "fire" },
  { id: 3, name: "water" },
  { id: 4, name: "grass" },
  { id: 5, name: "electric" },
  { id: 6, name: "ice" },
  { id: 7, name: "fighting" },
  { id: 8, name: "poison" },
  { id: 9, name: "ground" },
  { id: 10, name: "flying" },
  { id: 11, name: "psychic" },
  { id: 12, name: "bug" },
  { id: 13, name: "rock" },
  { id: 14, name: "ghost" },
  { id: 15, name: "dark" },
  { id: 16, name: "dragon" },
  { id: 17, name: "steel" },
  { id: 18, name: "fairy" }
];

ReactDOM.render(
  <App pokemons={pokemons} types={types} />,
  document.getElementById("root")
);

serviceWorker.unregister();
