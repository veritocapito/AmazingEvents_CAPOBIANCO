export async function requestData(){
    let data = await fetch("../assets/amazing.json")
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    })
                    .catch((error) => console.log(error));
                    console.log(data)
    return data;

}

export function createCards(array, container) {
    container.innerHTML = '';
    if (array.length == 0){
        container.innerHTML = `<p class="display-6 fw-bolder" style="padding: 2rem; height: 54vh">No matches found, try again!</p>`
        return;
    }
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
                <a href="../pages/details.html?id=${item._id}" class="btn btn-book pt-2">More Info</a>
            </div>
        `;
        fragmento.appendChild(div);
    }    
    container.appendChild(fragmento);
}

export function createCheckbox(array, container){
    let categories = array.map(item => item.category);
    let categoriesCount = new Set(categories);
    let categoriesArray = Array.from(categoriesCount);
    let checkboxes = '';
    categoriesArray.forEach(item => {
        checkboxes += `
        <label class="text-light search">
        <input type="checkbox" name="${item.toLowerCase()}" value="${item.toLowerCase()}"
        id="${item.toLowerCase()}">${item}</label>`
    })
    container.innerHTML = checkboxes;
}

export function inputFilter(array, text){
    let arrayAux = array.filter(item => item.name.toLowerCase().
    includes(text.toLowerCase().trim()));
    return arrayAux;
}

export function categoryFilter(array){
    let checkboxesCaptured = document.querySelectorAll('input[type="checkbox"]');
    let checkboxesArray = Array.from(checkboxesCaptured);
    let checkboxesChecked = checkboxesArray.filter( item => item.checked);
    //console.log(checkboxesChecked);
    let checkboxesMaped = checkboxesChecked.map( item => item.value);
    console.log(checkboxesMaped);

    if (checkboxesChecked.length > 0 ){
        let filteredCategories = array.filter( item => checkboxesMaped.includes(item.category.toLowerCase()));
        return filteredCategories;
    } 
    return array;
}

export function searchFuture(myData, date){
    let nextEventAux = [];
    nextEventAux = myData.filter( item => Date.parse(item.date) > Date.parse(date));
    return nextEventAux;
}

export function searchPast(myData, date){
    let pastEventAux = [];
    pastEventAux = myData.filter( item => Date.parse(item.date) < Date.parse(date));
    return pastEventAux;
}

