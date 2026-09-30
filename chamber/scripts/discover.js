import { places } from "../data/discover.mjs";

const container = document.querySelector("#cards-container");

if (container) {
  places.forEach((place) => {
    const card = document.createElement("figure");
    card.classList.add("discover-card");

    card.innerHTML = `
      <h2>${place.title}</h2>
      <img src="${place.image}" alt="${place.title}" loading="lazy" width="300" height="200">
      <address>${place.address}</address>
      <p class="desc">${place.description}</p>
      <button class="learn-more">Learn More</button>
    `;

    // Add click event for the Learn More button
    const button = card.querySelector(".learn-more");
    const descP = card.querySelector(".desc");
    
    button.addEventListener("click", () => {
      if (descP.style.display === "none") {
        descP.style.display = "block";
        button.textContent = "Learn More";
      } else {
        // Toggle expanded detail or alert/modal style view as desired
        alert(`Explore more about ${place.title} located at ${place.address}. Enjoy your visit to Harare!`);
      }
    });

    container.appendChild(card);
  });
}

// Visitor message logic using localStorage
const visitorMessage = document.querySelector("#visitor-message");
if (visitorMessage) {
  const lastVisit = localStorage.getItem("last-visit-date");
  const now = Date.now();
  
  if (!lastVisit) {
    visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysBetween = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (daysBetween < 1) {
      visitorMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      visitorMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitorMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }
  localStorage.setItem("last-visit-date", now.toString());
}

// Footer date logic
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = `Last Modification: ${document.lastModified}`;
}
