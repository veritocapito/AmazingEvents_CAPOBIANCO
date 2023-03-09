import data from "./amazing.js";
import { createCards, searchFuture } from "./functions.js";

console.log(data);

const futureEventsContainer = document.getElementById('cards-next');

let nextEvents = searchFuture();
let cards = (createCards(nextEvents, futureEventsContainer));
