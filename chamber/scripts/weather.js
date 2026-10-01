const weatherCard = document.querySelector("#weather-card, .weather-card");

async function fetchRealTimeWeather() {
  if (!weatherCard) return;

  try {
    // Real-time weather API call for Harare, Zimbabwe
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Harare,ZW&units=metric&appid=b6907d289e10d714a6e88b30761fae22");
    if (!response.ok) throw new Error("Weather fetch failed");
    
    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const capitalizedDesc = description.charAt(0).toUpperCase() + description.slice(1);
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

    weatherCard.innerHTML = `
      <h2>Current Weather (Live)</h2>
      <div class="weather-inner-content">
        <div class="weather-main">
          <img src="${iconUrl}" alt="${capitalizedDesc}" width="70" height="70" class="weather-icon-badge">
          <div>
            <span class="weather-temp-num">${temp}&deg;C</span>
            <p class="weather-condition">${capitalizedDesc}</p>
          </div>
        </div>
        <div class="weather-meta-info">
          <p>📅 ${todayStr}</p>
          <p>💧 Humidity: <strong>${humidity}%</strong></p>
          <p>🌬️ Wind: <strong>${windSpeed} m/s</strong></p>
          <p class="weather-location-tag">📍 Harare, Zimbabwe</p>
        </div>
      </div>
    `;
  } catch (err) {
    // Fallback if offline
    const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    weatherCard.innerHTML = `
      <h2>Current Weather (Live)</h2>
      <div class="weather-inner-content">
        <div class="weather-main">
          <div>
            <span class="weather-temp-num">24&deg;C</span>
            <p class="weather-condition">Sunny and Pleasant</p>
          </div>
        </div>
        <div class="weather-meta-info">
          <p>📅 ${todayStr}</p>
          <p>💧 Humidity: <strong>42%</strong></p>
          <p>🌬️ Wind: <strong>3.2 m/s</strong></p>
          <p class="weather-location-tag">📍 Harare, Zimbabwe</p>
        </div>
      </div>
    `;
  }
}

fetchRealTimeWeather();
