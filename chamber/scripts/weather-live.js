document.addEventListener("DOMContentLoaded", () => {
    // Display current date
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
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            if (currentTemp) currentTemp.textContent = Math.round(data.main.temp);
            if (weatherDesc) {
                const desc = data.weather[0].description;
                weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            if (currentTemp) currentTemp.textContent = "24";
            if (weatherDesc) weatherDesc.textContent = "Sunny and Pleasant";
        });

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b6907d289e10d714a6e88b30761fae22`;

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            if (forecastContainer && data.list) {
                const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

                let forecastHTML = "<p class='forecast-title'>3-Day Forecast:</p><div class='forecast-flex'>";

                dailyForecasts.forEach(day => {
                    const date = new Date(day.dt * 1000);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const temp = Math.round(day.main.temp);
                    forecastHTML += `<div class="forecast-item"><span>${dayName}</span><br><strong>${temp}°C</strong></div>`;
                });
                forecastHTML += "</div>";
                forecastContainer.innerHTML = forecastHTML;
            }
        })
        .catch(err => {
            console.log("Forecast fetch error:", err);
            if (forecastContainer) {
                forecastContainer.innerHTML = "<p class='forecast-title'>Sat: 25°C | Sun: 26°C | Mon: 24°C</p>";
            }
        });
});
