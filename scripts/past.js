
import { requestData, createCards, searchPast, createCheckbox, inputFilter, categoryFilter } from "./functions.js";


const pastEventContainer = document.getElementById('cards-past');
const catContainer = document.getElementById('checkContainer');
const searchInput = document.getElementById('card-search');
const searchContainer = document.getElementById('navbarSearchDropdown');


searchInput.addEventListener('input', superFilter);

searchContainer.addEventListener('change', superFilter);

const {currentDate, events} = await requestData();
//ejecuta las funciones para pintar las tarjetas de eventos pasados en un contenedor
function start(){
    createCards(searchPast(events, currentDate), pastEventContainer);
    createCheckbox(events, catContainer);
}

start()

//ejecuta el filtro combinado por input y por chechbox
function superFilter(){
    let firstFilter = inputFilter(searchPast(events, currentDate), searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, pastEventContainer);
}


