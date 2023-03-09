import data from "./amazing.js";
import { createCards, searchPast } from "./functions.js";


let pastEventContainer = document.getElementById('cards-past');

createCards(searchPast(data), pastEventContainer);



