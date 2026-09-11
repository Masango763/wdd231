document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("members-container");
  const gridBtn = document.getElementById("grid");
  const listBtn = document.getElementById("list");

  async function getMembers() {
    try {
      const response = await fetch("data/members.json?v=" + new Date().getTime());
      if (!response.ok) throw new Error("Failed to fetch members data");
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      console.error("Error loading chamber directory:", error);
    }
  }

  function getLevelName(level) {
    switch(level) {
      case 3: return "Gold Member";
      case 2: return "Silver Member";
      default: return "Member";
    }
  }

  function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("member-card");

      card.innerHTML = `
        <div class="card-header">
          <h3 class="member-name">${member.name}</h3>
          <p class="tagline">${member.description || ''}</p>
        </div>
        <div class="card-body">
          <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="80" height="80">
          <p class="membership-badge">${getLevelName(member.membershipLevel)}</p>
          <p class="address">${member.address}</p>
          <p class="phone">${member.phone}</p>
          <a href="${member.website}" target="_blank" rel="noopener noreferrer" class="website-link">Website</a>
        </div>
      `;

      container.appendChild(card);
    });
  }

  gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });

  getMembers();
});
