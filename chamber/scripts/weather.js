// Function to update real-time day, date, year, and live time
function updateDateTime() {
    const dateElement = document.querySelector('#weather-date');
    if (!dateElement) return;

    const now = new Date();
    
    // Format date: e.g., Thursday, Sep 17, 2026
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);
    
    // Format time: e.g., 04:15:22 AM
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

    dateElement.innerHTML = `${formattedDate}<br><span style="font-size: 0.9rem; opacity: 0.85;">${formattedTime}</span>`;
}

// Run immediately and update every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Fetch live weather from OpenWeatherMap API (Harare: Lat -17.8292, Lon 31.0522)
const weatherTemp = document.querySelector('#weather-temp');
const weatherDesc = document.querySelector('#weather-desc');

async function getLiveWeather() {
    const lat = -17.8292;
    const lon = 31.0522;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a5c1a7d6537bf42d634208a0ffbe7d47`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const formattedDesc = description.replace(/\b\w/g, l => l.toUpperCase());

            if (weatherTemp) weatherTemp.textContent = `${temp}°C`;
            if (weatherDesc) weatherDesc.textContent = formattedDesc;
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.log('Using fallback live weather simulation:', error);
        if (weatherTemp) weatherTemp.textContent = '24°C';
        if (weatherDesc) weatherDesc.textContent = 'Sunny and Pleasant';
    }
}

getLiveWeather();
