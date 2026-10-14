// OpenWeatherMap API Configuration for Harare, Zimbabwe
const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace with your key if needed, or leave active fetch logic
const lat = "-17.8292";
const lon = "31.0522";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        document.getElementById('weather-data').innerHTML = "<p>Weather data currently unavailable.</p>";
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-data');
    
    const temp = Math.round(data.main.temp);
    const tempMax = Math.round(data.main.temp_max);
    const tempMin = Math.round(data.main.temp_min);
    const humidity = data.main.humidity;
    const desc = data.weather[0].description;
    const locationName = data.name;
    
    // Format current date and time
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    weatherContainer.innerHTML = `
        <div class="weather-info">
            <p><strong>Location:</strong> ${locationName}</p>
            <p><strong>Date & Time:</strong> ${dateString}, ${timeString}</p>
            <p class="weather-temp-num"><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>High / Low:</strong> ${tempMax}°C / ${tempMin}°C</p>
            <p class="weather-condition"><strong>Condition:</strong> ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
        </div>
    `;
}

// Fetch and Display Company Spotlights from JSON
async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const members = await response.json();
            displaySpotlights(members);
        }
    } catch (error) {
        console.log("Error loading members data:", error);
        document.getElementById('spotlights-container').innerHTML = "<p>Company spotlights unavailable.</p>";
    }
}

function displaySpotlights(members) {
    const spotlightsContainer = document.getElementById('spotlights-container');
    spotlightsContainer.innerHTML = "";

    // Filter members for Gold (2) or Silver (3) membership levels
    const qualifiedMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);

    // Randomly select 2 to 3 members
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-spotlight-card');
        
        const levelName = member.membershipLevel === 2 ? 'Silver Member' : 'Gold Member';

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><em>"${member.otherInfo || 'Proud Chamber Member'}"</em></p>
            <img src="images/${member.image}" alt="${member.name} Logo" style="max-width: 100px; height: auto;">
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p class="membership-badge"><strong>Level:</strong> ${levelName}</p>
        `;
        spotlightsContainer.appendChild(card);
    });
}

// Initialize functions on page load
apiFetch();
getSpotlights();
