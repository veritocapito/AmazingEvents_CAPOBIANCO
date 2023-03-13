import data from "./amazing.js";

console.log(document);

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const event = data.events.find(item => item._id == id);

let div = document.querySelector('.container')
div.innerHTML = `
<div class="row gap-2 d-flex flex-wrap justify-content-around">
    <div class="col-xs-12 col-md-5 align-self-center">
        <img src="${event.image}" class="img-data rounded" alt="${event.name}">
    </div>
    <div class="col-xs-12 col-md-6">
        <table class="table table-striped datatable table-hover rounded">
            <thead class="text-center">
                <tr class="fs-5 text-primary">
                    <th scope="col" colspan="2">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <td>${event.name}</td>
                </tr>
                <tr>
                    <th scope="row">Date</th>
                    <td>${event.date}</td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>${event.description}</td>
                </tr>
                <tr>
                    <th scope="row">Category</th>
                    <td>${event.category}</td>
                </tr>
                <tr>
                    <th scope="row">Place</th>
                    <td>${event.place}</td>
                </tr>
                <tr>
                    <th scope="row">Capacity</th>
                    <td>${event.capacity}</td>
                </tr>
                <tr>
                    <th scope="row">Assistance or Estimate</th>
                    <td>${event.assistance == undefined ? event.estimate : event.assistance}</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>$${event.price}.-</td>
                </tr>
            </tbody>
            <tfoot>
                <th scope="col" colspan="2" class="text-center">
                <a href="../index.html" class="btn nav-link" >go back</a></th>
            </tfoot>
        </table>
    </div>
</div>
`

