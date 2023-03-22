
import { requestData, createCards, searchPast, createCheckbox, inputFilter, categoryFilter } from "./functions.js";


const pastEventContainer = document.getElementById('cards-past');
const catContainer = document.getElementById('checkContainer');
const searchInput = document.getElementById('card-search');
const searchContainer = document.getElementById('navbarSearchDropdown');


searchInput.addEventListener('input', superFilter);

searchContainer.addEventListener('change', superFilter);

const {currentDate, events} = await requestData();
function start(){
    createCards(searchPast(events, currentDate), pastEventContainer);
    createCheckbox(events, catContainer);
}

start()

function superFilter(){
    let firstFilter = inputFilter(searchPast(events), searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, pastEventContainer);
}


