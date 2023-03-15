import data from "./scripts/amazing.js";
import { createCards, createCheckbox, inputFilter, categoryFilter } from "./scripts/functions.js";


const eventsHome = document.getElementById('cards-home');
const catContainer = document.getElementById('checkContainer');
const searchInput = document.getElementById('card-search');
const searchContainer = document.getElementById('navbarSearchDropdown');


searchInput.addEventListener('input', superFilter);

searchContainer.addEventListener('change', superFilter);


function superFilter(){
    let firstFilter = inputFilter(data.events, searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, eventsHome);
}


createCards(data.events, eventsHome)
createCheckbox(data.events, catContainer)