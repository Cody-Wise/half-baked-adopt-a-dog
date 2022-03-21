import { getDogs, searchDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const dogInputEl = document.querySelector('#searchBox');
const searchButtonEl = document.querySelector('#submit');
// const a = document.createElement('a');

window.addEventListener('load', async() => {

    const dogs = await getDogs();

    for (let dog of dogs){
        const dogsEl = renderDogCard(dog);

        dogListContainer.append(dogsEl);
    }

});



searchButtonEl.addEventListener('click', async() => {

    dogListContainer.textContent = '';

    const name = dogInputEl.value;
    
    const dogResponse = await searchDogs(name);
  console.log(dogResponse);
    // window.location.href = `./detail/?name=${name}`;

    const dogsEl = renderDogCard(dogResponse);

    dogListContainer.append(dogsEl);

    dogInputEl.value = '';


});

// on load
// fetch all dogs
// render and append all dog cards to the container