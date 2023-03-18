
import { createCards, searchFuture, createCheckbox, inputFilter, categoryFilter } from "./functions.js";


const futureEventsContainer = document.getElementById('cards-next');
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
    createCards(searchPast(data), futureEventsContainer);
    createCheckbox(data.events, catContainer);
}

start()

function superFilter(){
    let firstFilter = inputFilter(searchFuture(data), searchInput.value);
    let secondFilter = categoryFilter(firstFilter);
    createCards(secondFilter, futureEventsContainer);
}

