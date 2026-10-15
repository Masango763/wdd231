document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".discover-grid") || document.querySelector("#discover-container");

  if (container) {
    fetch("data/discover.json")
      .then(response => response.json())
      .then(items => {
        container.innerHTML = "";
        items.forEach((item, index) => {
          const card = document.createElement("section");
          card.classList.add("discover-card");
          card.classList.add(`card-${index + 1}`);
          card.innerHTML = `
            <h2>${item.title}</h2>
            <figure>
              <img src="${item.photo}" alt="${item.title}" loading="lazy">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>${item.button}</button>
          `;
          container.appendChild(card);
        });
      })
      .catch(error => console.error("Error loading discover data:", error));
  }
});
