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
      <p>${place.description}</p>
      <button class="learn-more">Learn More</button>
    `;

    const button = card.querySelector(".learn-more");
    button.addEventListener("click", () => {
      alert(`Learn more about ${place.title} at ${place.address}.`);
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

// Dynamic Real-Time Upcoming Event & Countdown (Next Month)
const currentDate = new Date();
const targetYear = currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
const targetMonth = (currentDate.getMonth() + 1) % 12;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const targetMonthName = monthNames[targetMonth];

const dynamicEventText = document.querySelector("#dynamic-event-text");
if (dynamicEventText) {
  dynamicEventText.innerHTML = `Join us for the Annual Chamber Hackathon in <strong>${targetMonthName} ${targetYear}</strong> at the Harare Innovation Hub!`;
}

const eventDate = new Date(targetYear, targetMonth, 15, 9, 0, 0).getTime();
const countdownTimer = document.querySelector("#countdown-timer");

function updateCountdown() {
  if (!countdownTimer) return;
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdownTimer.textContent = "The event is underway or has concluded!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownTimer.innerHTML = `⏱️ <strong>${days}d ${hours}h ${minutes}m ${seconds}s</strong> remaining`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const rsvpBtn = document.querySelector("#rsvp-btn");
if (rsvpBtn) {
  rsvpBtn.addEventListener("click", () => {
    const email = prompt("Enter your email address to secure your ticket for the Annual Chamber Hackathon:");
    if (email && email.includes("@")) {
      alert(`Success! Confirmation invite sent to ${email}. See you in ${targetMonthName}!`);
    } else if (email !== null) {
      alert("Please enter a valid email address.");
    }
  });
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
