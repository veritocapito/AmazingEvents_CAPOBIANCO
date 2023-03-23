
import { requestData, createCards, searchFuture, createCheckbox, inputFilter, categoryFilter } from "./functions.js";


const futureEventsContainer = document.getElementById('cards-next');
const catContainer = document.getElementById('checkContainer');
const searchInput = document.getElementById('card-search');
const searchContainer = document.getElementById('navbarSearchDropdown');


searchInput.addEventListener('input', superFilter);

searchContainer.addEventListener('change', superFilter);
//ejecuta las funciones para pintar las tarjetas de eventos futuros en un contenedor
const {currentDate, events} = await requestData();
function start(){
    createCards(searchFuture(events, currentDate), futureEventsContainer);
    createCheckbox(events, catContainer);
}

start()

//ejecuta el filtro combinado por input y por chechbox
function superFilter(){
    let firstFilter = inputFilter(searchFuture(events, currentDate), searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, futureEventsContainer);
}

