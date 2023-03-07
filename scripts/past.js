import data from "./amazing.js";

console.log(data);

function searchPast(){
    let pastEventAux = [];
    for (let i = 0; i < data.events.length; i++) {
        if(data.events[i].date < data.currentDate){
            pastEventAux.push(data.events[i]);
        }
    }
    return pastEventAux;
}

const eventsPast = document.getElementById('cards-past');
let fragmento = document.createDocumentFragment();
let pastEvents = [];
pastEvents=searchPast();
console.log(pastEvents);

for (let item of pastEvents){
    let div = document.createElement('div');
    div.className='card m-3';
    div.style='width: 18rem;';
    div.innerHTML=`        
        <img src="${item.image}" class="card-img-top card-img" alt="card-image">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
        </div>
        <div class="card-footer d-flex gap-3">
            <p class="card-text mt-2 pt-1">Price $${item.price}.-</p>
            <a href="./details.html" class="btn btn-book pt-2">Book Now!</a>
        </div>
    `;
    fragmento.appendChild(div);
}

eventsPast.appendChild(fragmento);

