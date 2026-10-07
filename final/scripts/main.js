import { loadCropData } from './modules.js';

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const menu = document.querySelector('nav ul');
    if (nav && menu) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'menu-btn';
        toggleBtn.innerHTML = '☰';
        nav.prepend(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('open');
            toggleBtn.classList.toggle('open');
        });
    }

    const visitorBanner = document.createElement('div');
    visitorBanner.className = 'visitor-banner';
    const main = document.querySelector('main');
    if (main) {
        main.prepend(visitorBanner);
        const lastVisit = localStorage.getItem('agri_final_visit');
        const now = Date.now();

        if (!lastVisit) {
            visitorBanner.textContent = "Welcome to your first visit to AgriPulse Final Portal!";
        } else {
            const diffDays = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
            visitorBanner.textContent = diffDays === 0 ? "Welcome back today!" : `Welcome back! You last visited ${diffDays} day(s) ago.`;
        }
        localStorage.setItem('agri_final_visit', String(now));
    }

    if (document.getElementById('crops-container')) {
        loadCropData('crops-container');
    }

    const modal = document.getElementById('info-modal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('close-modal');

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('details-btn')) {
            const cropName = e.target.getAttribute('data-name');
            if (modal && modalText) {
                modalText.textContent = `Detailed agronomic advisory and cultivation guidelines for ${cropName} in Zimbabwe.`;
                modal.showModal();
            }
        }
    });

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => modal.close());
    }
});
