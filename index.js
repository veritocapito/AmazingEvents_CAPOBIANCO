import data from "./scripts/amazing.js";

console.log(data);

const eventsHome = document.getElementById('cards-home');
let fragmento = document.createDocumentFragment();

for (let evento of data.events){
    let div = document.createElement('div');
    div.className='card m-3';
    div.style='width: 18rem;';
    div.innerHTML=`        
        <img src="${evento.image}" class="card-img-top card-img" alt="Cinema">
        <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
        </div>
        <div class="card-footer d-flex gap-3">
            <p class="card-text mt-2 pt-1">Price $${evento.price}.-</p>
            <a href="./pages/details.html" class="btn btn-book pt-2">Book Now!</a>
        </div>
    `;
    fragmento.appendChild(div);
}

eventsHome.appendChild(fragmento);