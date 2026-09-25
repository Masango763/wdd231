document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("weather-date");
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }

    const currentTemp = document.getElementById("current-temp");
    const weatherDesc = document.getElementById("weather-desc");
    const forecastContainer = document.getElementById("forecast-container");

    const lat = -17.8292;
    const lon = 31.0522;
    const apiKey = "b6907d289e10d714a6e88b30761fae22";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    function loadFallbackWeather() {
        if (currentTemp) currentTemp.textContent = "24";
        if (weatherDesc) weatherDesc.textContent = "Sunny and pleasant";
        if (forecastContainer) {
            forecastContainer.innerHTML = "<p style='font-size: 0.85rem; margin:0;'>3-Day: Sat 25°C | Sun 26°C | Mon 24°C</p>";
        }
    }

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Weather network response failed");
            return response.json();
        })
        .then(data => {
            if (currentTemp && data.list && data.list[0].main) {
                currentTemp.textContent = Math.round(data.list[0].main.temp);
            }
            if (weatherDesc && data.list && data.list[0].weather) {
                const desc = data.list[0].weather[0].description;
                weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
            }
            if (forecastContainer && data.list) {
                const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
                let forecastHTML = "<p style='font-size: 0.85rem; font-weight: bold; margin-bottom: 0.3rem;'>3-Day Forecast:</p><div class='forecast-flex'>";
                dailyForecasts.forEach(day => {
                    const date = new Date(day.dt * 1000);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const temp = Math.round(day.main.temp);
                    forecastHTML += `<div class='forecast-item'><span>${dayName}</span><br><strong>${temp}°C</strong></div>`;
                });
                forecastHTML += "</div>";
                forecastContainer.innerHTML = forecastHTML;
            }
        })
        .catch(error => {
            console.warn("Using weather fallback:", error);
            loadFallbackWeather();
        });
});
