const url = 'data/members.json';
const cards = document.querySelector('#members-container');

async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

getMembersData();

const displayMembers = (members) => {
    cards.innerHTML = '';
    members.forEach((member) => {
        let card = document.createElement('section');
        card.classList.add('member-card');

        let portrait = document.createElement('img');
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');

        let name = document.createElement('h3');
        name.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = member.address;

        let phone = document.createElement('p');
        phone.textContent = member.phone;

        let website = document.createElement('a');
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = 'Visit Website';

        let level = document.createElement('p');
        level.textContent = `Level: ${member.membershipLevel}`;
        level.classList.add('membership-level');

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);
    });
};

// View Switcher Functionality
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

if (gridButton && listButton && cards) {
    gridButton.addEventListener('click', () => {
        cards.classList.add('grid');
        cards.classList.remove('list');
        gridButton.classList.add('active-view');
        listButton.classList.remove('active-view');
    });

    listButton.addEventListener('click', () => {
        cards.classList.add('list');
        cards.classList.remove('grid');
        listButton.classList.add('active-view');
        gridButton.classList.remove('active-view');
    });
}
