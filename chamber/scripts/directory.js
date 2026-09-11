document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("members-container");
  const gridBtn = document.getElementById("grid");
  const listBtn = document.getElementById("list");

  async function getMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Failed to load JSON");
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      console.error("Error fetching directory members:", error);
    }
  }

  function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="100" height="100">
        <h3>${member.name}</h3>
        <p class="tagline">${member.description || ''}</p>
        <p class="address">${member.address}</p>
        <p class="phone">${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      `;

      container.appendChild(card);
    });
  }

  gridBtn.addEventListener("click", () => {
    container.classList.add("grid-view");
    container.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    container.classList.add("list-view");
    container.classList.remove("grid-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });

  getMembers();
});
