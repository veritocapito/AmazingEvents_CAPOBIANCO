
export function createCards(array, container) {
    let fragmento = document.createDocumentFragment();
    for (let item of array){
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
    
    container.appendChild(fragmento);

}


function searchFuture(myData){
    let nextEventAux = [];
    nextEventAux = myData.events.filter( item => Date.parse(item.date) > Date.parse(myData.currentDate));
    return nextEventAux;
}

function searchPast(myData){
    let pastEventAux = [];
    pastEventAux = myData.events.filter( item => Date.parse(item.date) < Date.parse(myData.currentDate));
    return pastEventAux;
}

export { searchFuture, searchPast };



/*export function searchPast(){
    let pastEventAux = [];
    for (let i = 0; i < data.events.length; i++) {
        if(data.events[i].date < data.currentDate){
            pastEventAux.push(data.events[i]);
        }
    }
    return pastEventAux;
}

export function searchFuture(){
    let nextEventAux = [];
    for (let i = 0; i < data.events.length; i++) {
        if(data.events[i].date > data.currentDate){
            nextEventAux.push(data.events[i]);
        }
    }
    return nextEventAux;
}*/

/* Alternativa sin usar funciones de Array como filter
function upcEvArray(events) {
    let upcEv = [];
    for (let event of events) {
        if (Date.parse(event.date) > Date.parse(date)) {
            upcEv.push(event);
        }
    }
    return upcEv;
}
*/