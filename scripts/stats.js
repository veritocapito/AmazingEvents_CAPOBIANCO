import { requestData, searchFuture, searchPast } from "./functions.js";

const tbody1 = document.getElementById('allEvents');
const tbody2 = document.getElementById('futureEvents');
const tbody3 = document.getElementById('pastEvents');

const {currentDate, events} = await requestData();

console.log(events);


function loadStats(){
    
    drawTable1(calculateMaxPercentageAttendance(events), calculateMinPercentageAttendance(events), calculateMaxCapacity(events), tbody1)
    
    const future = searchData(searchFuture(events, currentDate));
    const past = searchData(searchPast(events, currentDate));
    
    drawTables(future["categories"], future["revenues"], future["percentages"], tbody2);
    drawTables(past["categories"], past["revenues"], past["percentages"], tbody3);
}

loadStats()





//obtiene el nombre del evento con mayor porcentaje de asistencia y lo retorna
function calculateMaxPercentageAttendance(array) {
    let attendance = 0;
    let itemMaxAttendance = '';

    for (let item of array) {
      let percentageAttendance = (item.assistance || item.estimate) / item.capacity * 100;
        if (percentageAttendance > attendance) {
        attendance = percentageAttendance;
        itemMaxAttendance = item.name;
        } 
    }
    console.log(itemMaxAttendance);
    return itemMaxAttendance;
}

//obtiene el nombre del evento con menor porcentaje de asistencia y lo retorna
function calculateMinPercentageAttendance(array) {
    let attendance = Infinity;
    let itemMinAttendance = '';

    for (let item of array) {
      let percentageAttendance = (item.assistance || item.estimate) / item.capacity * 100;
        if (percentageAttendance < attendance) {
            console.log(attendance);
        attendance = percentageAttendance;
        itemMinAttendance = item.name;
        } 
    }

    console.log(itemMinAttendance);
    return itemMinAttendance;
}

//obtiene el nombre del evento con mayor capacidad
function calculateMaxCapacity(array) {
    let maxCapacity = 0;
    let itemMaxCapacity = '';

    for (let item of array) {
        if (item.capacity > maxCapacity) {
        maxCapacity = item.capacity;
        itemMaxCapacity = item.name;
        }
    }
console.log(itemMaxCapacity);
    return itemMaxCapacity;
}

//dibuja la tabla de Events Statistics
function drawTable1(itemMaxAttendance, itemMinAttendance, itemMaxCapacity, container){
    const tr = document.createElement('tr');
        tr.className="myTable";
        tr.innerHTML = `
        <td>${itemMaxAttendance}</td>
        <td>${itemMinAttendance}</td>
        <td>${itemMaxCapacity}</td>
        `;
    container.appendChild(tr);
}


//obtiene las categorias, ganancias y porcentajes
function searchData(array){
    const categories = [];
    const revenues = [];
    const percentages = [];
    
    array.forEach( item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
            revenues[item.category] = 0;
            percentages[item.category] = 0;
    }

    const attendance = item.assistance || item.estimate;
        revenues[item.category] += (item.price * attendance) ;
        percentages[item.category] += attendance;
    }) 

    categories.forEach(category => {
    const capacity = array.filter(item => item.category === category)
        .reduce((total, item) => total + item.capacity, 0);

        percentages[category] = (percentages[category] / capacity * 100).toFixed(2);
    })
    return {categories, revenues , percentages};
}


//dibuja la tabla de Events Statistics by category
function drawTables(categories, revenues, percentages, container){
    for (let category of categories){
        const tr = document.createElement('tr');
        tr.className="myTable";
        tr.innerHTML= `
            <td class="style=width: 18rem;">${category}</td>
            <td>$ ${revenues[category].toFixed(2)}</td>
            <td>${percentages[category]} %</td>
        `;
        container.appendChild(tr);
    }
}