import { requestData, searchFuture, searchPast } from "./functions.js";

const statsContainer = document.getElementById('stats');
const table1 = document.getElementById('allEvents');
const tbody2 = document.getElementById('futureEvents');
const table3 = document.getElementById('pastEvents');

const {currentDate, events} = await requestData();

console.log(events);

function loadStats(){
    statsFuture(events)

}

loadStats()



//calcula las ganancias y porcentaje de asistencia por categoria
function statsFuture(array){
    let categories = []
    let revenues = []
    let percentage = []

    array.forEach( item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
        revenues[item.category] += item.price * item.estimate;
        percentage[item.category] += item.estimate / item.capacity * 100;
    })
    console.log(categories);
    console.log(revenues);
    console.log(percentage);
    return {categories, revenues, percentage};

}


//muestra los ingresos por categoria de un array en un contenedor
function showRevenues(array, container){

    let categoriesArray
    console.log(categoriesArray);
    let col = '';
    categoriesArray.forEach(item => {
        col += ` 
        <tr>
            <td>${item}</td>
        </tr>`
        console.log(col);
    })
    container.innerHTML = col;
}
/*          ` 
        <tr>
            <td>${item}</td>
        </tr>`
        <td>${item.place}</td>
        <td>${(item.estimate / item.capacity *100) }</td>*/