import data from "./scripts/amazing.js";
import { createCards } from "./scripts/functions.js";


let eventsHome = document.getElementById('cards-home');

createCards(data.events, eventsHome)

let button = document.getElementById('search');

button.addEventListener('click', (e)=> { 
    e.preventDefault();
    console.log('Click!');})


