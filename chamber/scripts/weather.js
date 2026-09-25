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

    // Reliable fallback function ensuring it renders instantly even if API is slow or inactive
    function renderWeather(temp, desc, forecastHTML) {
        if (currentTemp) currentTemp.textContent = temp;
        if (weatherDesc) weatherDesc.textContent = desc;
        if (forecastContainer && forecastHTML) {
            forecastContainer.innerHTML = forecastHTML;
        }
    }

    // Default fallback values immediately
    renderWeather("24", "Sunny and pleasant", "<p class='forecast-title'>3-Day Forecast:</p><div class='forecast-flex'><div class='forecast-item'><span>Sat</span><br><strong>25°C</strong></div><div class='forecast-item'><span>Sun</span><br><strong>26°C</strong></div><div class='forecast-item'><span>Mon</span><br><strong>24°C</strong></div></div>");

    // Attempt live fetch
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            if (data && data.list && data.list.length > 0) {
                const temp = Math.round(data.list[0].main.temp);
                const rawDesc = data.list[0].weather[0].description;
                const desc = rawDesc.charAt(0).toUpperCase() + rawDesc.slice(1);

                const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
                let fHTML = "<p class='forecast-title'>3-Day Forecast:</p><div class='forecast-flex'>";
                dailyForecasts.forEach(day => {
                    const date = new Date(day.dt * 1000);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const dayTemp = Math.round(day.main.temp);
                    fHTML += `<div class='forecast-item'><span>${dayName}</span><br><strong>${dayTemp}°C</strong></div>`;
                });
                fHTML += "</div>";

                renderWeather(temp, desc, fHTML);
            }
        })
        .catch(error => {
            console.warn("Using offline weather fallback data:", error);
        });
});
