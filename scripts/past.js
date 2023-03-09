import data from "./amazing.js";
import { createCards, searchPast } from "./functions.js";

console.log(data);

const pastEventContainer = document.getElementById('cards-past');

let pastEvents = searchPast();
let card = createCards(pastEvents, pastEventContainer);



