
import { createCards, searchPast, createCheckbox, inputFilter, categoryFilter } from "./functions.js";


const pastEventContainer = document.getElementById('cards-past');
const catContainer = document.getElementById('checkContainer');
const searchInput = document.getElementById('card-search');
const searchContainer = document.getElementById('navbarSearchDropdown');


searchInput.addEventListener('input', superFilter);

searchContainer.addEventListener('change', superFilter);

async function requestCards(){
    let data = await fetch("../assets/amazing.json")
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    })
                    .catch((error) => console.log(error));
                    console.log(data)
    return data;

}

const data = await requestCards();
function start(){
    createCards(searchPast(data), pastEventContainer);
    createCheckbox(data.events, catContainer);
}

start()

function superFilter(){
    let firstFilter = inputFilter(searchPast(data), searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, pastEventContainer);
}


