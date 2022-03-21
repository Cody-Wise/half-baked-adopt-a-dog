import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

window.addEventListener('load', async() => {

    const dogs = await getDogs();

    for (let dog of dogs){
        const dogsEl = renderDogCard(dog);

        dogListContainer.append(dogsEl);
    }

});
// on load
// fetch all dogs
// render and append all dog cards to the container