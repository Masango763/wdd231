const membersContainer = document.querySelector('#members-container');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayMembers(members) {
    if (!membersContainer) return;
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        // Handle both absolute URLs and local image paths
        const imageSrc = member.image.startsWith('http') ? member.image : `images/${member.image}`;

        card.innerHTML = `
            <img src="${imageSrc}" alt="${member.name} Logo" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p class="membership-level">Level: ${member.membershipLevel}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        membersContainer.appendChild(card);
    });
}

if (gridButton && listButton && membersContainer) {
    gridButton.addEventListener('click', () => {
        membersContainer.classList.add('grid');
        membersContainer.classList.remove('list');
        gridButton.classList.add('active-view');
        listButton.classList.remove('active-view');
    });

    listButton.addEventListener('click', () => {
        membersContainer.classList.add('list');
        membersContainer.classList.remove('grid');
        listButton.classList.add('active-view');
        gridButton.classList.remove('active-view');
    });
}

getMembers();
