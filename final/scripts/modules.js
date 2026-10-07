export async function loadCropData(containerId) {
    try {
        const response = await fetch('data/crops.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayCrops(data, containerId);
    } catch (error) {
        console.error("Error fetching crop data:", error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `<p style="color: red;">Failed to load agricultural data. Please try again later.</p>`;
        }
    }
}

function displayCrops(crops, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = crops.map(crop => `
        <div class="crop-card" data-id="${crop.id}">
            <h3>${crop.name}</h3>
            <p><strong>Category:</strong> ${crop.category}</p>
            <p><strong>Season:</strong> ${crop.season}</p>
            <p><strong>Region:</strong> ${crop.region}</p>
            <button class="details-btn" data-name="${crop.name}">View Details</button>
        </div>
    `).join('');
}
