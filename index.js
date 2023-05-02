import { createCheckbox, inputFilter, categoryFilter } from "./scripts/functions.js";


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

//dado un array pinta las cartas en un contenedor
function createCards(array, container) {
    container.innerHTML = '';
    if (array.length == 0){
        container.innerHTML = `<p class="display-6 fw-bolder" style="padding: 2rem; height: 54vh">No matches found, try again!</p>`
        return;
    }
    let fragmento = document.createDocumentFragment();
    for (let item of array){
        let div = document.createElement('div');
        div.className='card m-3';
        div.style='width: 18rem; height: 25rem; gap: 0.5rem;';
        div.innerHTML=`        
            <img src="${item.image}" class="card-img-top p-1 card-img" alt="card-image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
            </div>
            <div class="card-footer d-flex gap-3">
                <p class="card-text mt-2 pt-1">Price $${item.price}.-</p>
                <a href="./pages/details.html?id=${item._id}" class="btn btn-book pt-2">More Info</a>
            </div>
        `;
        fragmento.appendChild(div);
    }    
    container.appendChild(fragmento);
}