const container = document.querySelector('#members-container');
const gridBtn = document.querySelector('#grid-view');
const listBtn = document.querySelector('#list-view');

async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Data fetch failed');
    const members = await response.json();
    displayMembers(members);
  } catch (err) {
    console.error('Error loading member data:', err);
    container.innerHTML = `<p>Unable to load member directory at this time.</p>`;
  }
}

function displayMembers(members) {
  container.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('article');
    card.className = 'member-card';
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} Logo" loading="lazy" width="100" height="100">
      <h3>${member.name}</h3>
      <p class="member-desc">${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

if (gridBtn && listBtn) {
  gridBtn.addEventListener('click', () => {
    container.className = 'grid-layout';
    gridBtn.classList.add('active-view');
    listBtn.classList.remove('active-view');
  });

  listBtn.addEventListener('click', () => {
    container.className = 'list-layout';
    listBtn.classList.add('active-view');
    gridBtn.classList.remove('active-view');
  });
}

document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;

loadMembers();
