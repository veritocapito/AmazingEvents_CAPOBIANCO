import data from "./scripts/amazing.js";
import { createCards } from "./scripts/functions.js";

console.log(data);

const eventsHome = document.getElementById('cards-home');

let cards = createCards(data.events, eventsHome)


