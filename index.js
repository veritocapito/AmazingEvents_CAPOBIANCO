import { createCards, createCheckbox, inputFilter, categoryFilter } from "./scripts/functions.js";


const eventsHome = document.getElementById('cards-home');
const catContainer = document.getElementById('checkContainer');
const searchInput = document.getElementById('card-search');
const searchContainer = document.getElementById('navbarSearchDropdown');


searchInput.addEventListener('input', superFilter);
searchContainer.addEventListener('change', superFilter);


//realiza la peticion asincrona para poder trabajar con los datos del json
async function requestCards(){
    let data = await fetch("./assets/amazing.json")
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    })
                    .catch((error) => console.log(error));
                    console.log(data)
    return data;

}

const data = await requestCards();
//ejecuta las funciones para pintar las tarjetas en un contenedor
function start(){
    createCards(data.events, eventsHome);
    createCheckbox(data.events, catContainer);
}

start()

//ejecuta el filtro combinado por input y por chechbox
function superFilter(){
    let firstFilter = inputFilter(data.events, searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, eventsHome);
}

