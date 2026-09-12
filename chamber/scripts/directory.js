document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("members-container");
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");

  async function fetchMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Failed to fetch member data");
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      console.error(error);
      container.innerHTML = `<p class="error">Unable to load business directory members at this time.</p>`;
    }
  }

  function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("section");
      card.className = "member-card";

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} Logo" loading="lazy" width="100" height="100">
        <div class="member-info">
          <h3>${member.name}</h3>
          <p class="member-category"><strong>Category:</strong> ${member.category}</p>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
        <div class="member-badge ${member.membership.toLowerCase()}">${member.membership} Member</div>
      `;
      container.appendChild(card);
    });
  }

  gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
    gridBtn.classList.add("active-view");
    listBtn.classList.remove("active-view");
  });

  listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
    listBtn.classList.add("active-view");
    gridBtn.classList.remove("active-view");
  });

  fetchMembers();
});
