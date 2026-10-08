export async function loadCropsData(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch('data/crops.json');
        if (!response.ok) throw new Error('Failed to load crop data.');
        const crops = await response.json();

        // DOM manipulation & array methods (map + template literals)
        container.innerHTML = crops.map(crop => `
            <div class="crop-card" style="background: white; padding: 1rem; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3>${crop.name}</h3>
                <p><strong>Season:</strong> ${crop.season}</p>
                <p><strong>Avg Yield:</strong> ${crop.yield}</p>
                <p><strong>Top Region:</strong> ${crop.region}</p>
                <button class="details-btn" data-id="${crop.id}" style="background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; margin-top: 0.5rem;">View Details</button>
            </div>
        `).join('');

        // Modal dialog interaction
        const modal = document.getElementById('crop-modal') || createModal();
        container.querySelectorAll('.details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const crop = crops.find(c => c.id == id);
                if (crop && modal) {
                    modal.querySelector('.modal-body').innerHTML = `
                        <h2>${crop.name}</h2>
                        <p><strong>Growing Season:</strong> ${crop.season}</p>
                        <p><strong>Expected Yield:</strong> ${crop.yield}</p>
                        <p><strong>Primary Region:</strong> ${crop.region}</p>
                        <p><em>Optimal agricultural extension practices recommended for maximum output.</em></p>
                    `;
                    modal.showModal();
                }
            });
        });

    } catch (error) {
        console.error('Error fetching crops:', error);
        container.innerHTML = `<p style="color: red;">Could not load agricultural data at this time.</p>`;
    }
}

function createModal() {
    const dialog = document.createElement('dialog');
    dialog.id = 'crop-modal';
    dialog.style.cssText = 'padding: 2rem; border-radius: 8px; border: none; max-width: 400px; width: 100%; box-shadow: 0 4px 15px rgba(0,0,0,0.2);';
    dialog.innerHTML = `
        <div class="modal-body"></div>
        <button id="close-modal" style="margin-top: 1.5rem; background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Close</button>
    `;
    document.body.appendChild(dialog);
    dialog.querySelector('#close-modal').addEventListener('click', () => dialog.close());
    return dialog;
}
