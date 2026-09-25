document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("weather-date");
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }

    const lat = -17.8292;
    const lon = 31.0522;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b6907d289e10d714a6e88b30761fae22`;

    const currentTemp = document.getElementById("current-temp");
    const weatherDesc = document.getElementById("weather-desc");
    const forecastContainer = document.getElementById("forecast-container");

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (currentTemp && data.main) {
                currentTemp.textContent = Math.round(data.main.temp);
            }
            if (weatherDesc && data.weather) {
                const desc = data.weather[0].description;
                weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
            }
        })
        .catch(error => {
            console.error("Weather fetch failed:", error);
            if (currentTemp) currentTemp.textContent = "24";
            if (weatherDesc) weatherDesc.textContent = "Sunny and Pleasant";
        });
});
