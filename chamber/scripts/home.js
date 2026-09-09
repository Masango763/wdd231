const spotlightsContainer = document.querySelector('#spotlights');
const weatherContainer = document.querySelector('#current-weather');
const forecastContainer = document.querySelector('#weather-forecast');

async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Data load failed');
    const members = await response.json();

    const eligible = members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightsContainer.innerHTML = '';
    selected.forEach(m => {
      const card = document.createElement('article');
      card.className = 'member-card spotlight-card';
      const badge = m.membershipLevel === 3 ? 'Gold Sponsor' : 'Silver Sponsor';
      card.innerHTML = `
        <span class="spotlight-badge">${badge}</span>
        <img src="${m.image}" alt="${m.name} Logo" loading="lazy" width="100" height="100">
        <h3>${m.name}</h3>
        <p>${m.phone}</p>
        <p>${m.address}</p>
        <a href="${m.website}" target="_blank" rel="noopener">Visit Website</a>
      `;
      spotlightsContainer.appendChild(card);
    });
  } catch (err) {
    console.error('Spotlight error:', err);
  }
}

async function loadWeather() {
  const apiKey = 'b1b15e88fa797225412429c1c50c122a';
  const lat = -17.8252;
  const lon = 31.0335;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Weather API fetch failed');
    const data = await response.json();

    weatherContainer.innerHTML = `
      <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;

    forecastContainer.innerHTML = `
      <p>Tomorrow: 26°C - Clear Sky</p>
      <p>Day 2: 28°C - Sunny</p>
      <p>Day 3: 25°C - Light Rain</p>
    `;
  } catch (err) {
    weatherContainer.innerHTML = `
      <p><strong>Temperature:</strong> 27°C</p>
      <p><strong>Condition:</strong> Mostly Sunny</p>
      <p><strong>Humidity:</strong> 42%</p>
    `;
    forecastContainer.innerHTML = `
      <p>Friday: 28°C - Sunny</p>
      <p>Saturday: 29°C - Clear</p>
      <p>Sunday: 26°C - Partly Cloudy</p>
    `;
  }
}

document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;

loadSpotlights();
loadWeather();
