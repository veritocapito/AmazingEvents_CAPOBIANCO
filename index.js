import data from "./scripts/amazing.js";
import { createCards } from "./scripts/functions.js";


let eventsHome = document.getElementById('cards-home');

createCards(data.events, eventsHome)

const form = document.forms[0]
const searchInput = document.getElementById('card-search').value;
const cards = document.getElementsByClassName('.card');
const searchButton = document.getElementById('search')


form.addEventListener('submit', (e)=> { 
    e.preventDefault();
    console.log('Search');
})

searchButton.addEventListener('click', ()=>{
    elements=array.forEach( (element, i) => {
        if (element.target.value == searchInput.toLowerCase()) {
            console.log(element.target.value);
            cards[i].classList.remove('hide');
        } else {
            cards[i].classList.add('hide');
            console.log(cards);
        } container.appendChild(elements)}
    );
});

function searchEvent(array, container){
    let elements = [];
    console.log(searchInput);
    

}

searchEvent(data.events, eventsHome)


