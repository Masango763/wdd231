// Display real-time current day, date, and year
const dateElement = document.querySelector('#weather-date');
if (dateElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('en-US', options);
}

// Fetch live weather from OpenWeatherMap API (using public Harare coordinates: Lat -17.8292, Lon 31.0522)
const weatherTemp = document.querySelector('#weather-temp');
const weatherDesc = document.querySelector('#weather-desc');

async function getLiveWeather() {
    const lat = -17.8292;
    const lon = 31.0522;
    // Using a reliable open weather public endpoint or fallback mockup if API key is not yet set
    const apiKey = 'a_valid_or_placeholder_key'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a5c1a7d6537bf42d634208a0ffbe7d47`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            // Capitalize description words
            const formattedDesc = description.replace(/\b\w/g, l => l.toUpperCase());

            if (weatherTemp) weatherTemp.textContent = `${temp}°C`;
            if (weatherDesc) weatherDesc.textContent = formattedDesc;
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.log('Using fallback live weather simulation:', error);
        if (weatherTemp) weatherTemp.textContent = '25°C';
        if (weatherDesc) weatherDesc.textContent = 'Sunny and Pleasant';
    }
}

getLiveWeather();
