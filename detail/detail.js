import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener('load', async() => {

    const data = new URLSearchParams(window.location.search);
    const dogID = data.get('id');

    const dogs = await getDog(dogID);
    
    const dogsEl = renderDogDetail(dogs);

    dogDetailContainer.append(dogsEl);
});


// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
