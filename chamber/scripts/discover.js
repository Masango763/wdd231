import { places } from '../data/discover.mjs';

// Set footer dates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// LocalStorage Visit Logic
const messageElement = document.getElementById('visitor-message');
const msToDays = 84600000;
let today = Date.now();
let lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    let daysBetween = Math.floor((today - parseInt(lastVisit)) / msToDays);
    
    if (daysBetween < 1) {
        messageElement.textContent = "Back so soon! Awesome!";
    } else {
        let plural = daysBetween === 1 ? "" : "days";
        messageElement.textContent = `You last visited ${daysBetween} ${plural} ago.`;
    }
}
localStorage.setItem('lastVisit', today);

// Display Places from imported module data
function displayPlaces(items) {
    const container = document.getElementById('cards-container');
    
    items.forEach(place => {
        let card = document.createElement('article');
        card.className = 'discover-card';
        
        card.innerHTML = `
            <h2>${place.title}</h2>
            <figure>
                <img src="${place.image}" alt="${place.title}" loading="lazy" width="300" height="200">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button class="learn-more">Learn More</button>
        `;
        
        container.appendChild(card);
    });
}

displayPlaces(places);
