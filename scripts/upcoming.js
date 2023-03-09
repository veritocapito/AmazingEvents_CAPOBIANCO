import data from "./amazing.js";
import { createCards, searchFuture } from "./functions.js";


let futureEventsContainer = document.getElementById('cards-next');

createCards(searchFuture(data), futureEventsContainer);
