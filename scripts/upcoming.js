import data from "./amazing.js";
import { createCards, searchFuture, createCheckbox, inputFilter, categoryFilter } from "./functions.js";


const futureEventsContainer = document.getElementById('cards-next');
const catContainer = document.getElementById('checkContainer');
const searchInput = document.getElementById('card-search');
const searchContainer = document.getElementById('navbarSearchDropdown');


searchInput.addEventListener('input', superFilter);

searchContainer.addEventListener('change', superFilter);


function superFilter(){
    let firstFilter = inputFilter(searchFuture(data), searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, futureEventsContainer);
}

createCards(searchFuture(data), futureEventsContainer);
createCheckbox(searchFuture(data), catContainer)