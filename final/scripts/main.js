import { loadCropsData } from './modules.js';

document.addEventListener('DOMContentLoaded', () => {
    // Local Storage usage for user state/visits
    const visitKey = 'agripulse_last_visit';
    const now = new Date().toLocaleDateString();
    const lastVisit = localStorage.getItem(visitKey);

    const banner = document.createElement('div');
    banner.style.cssText = 'background: var(--secondary); color: var(--text); padding: 0.5rem; text-align: center; font-weight: bold; font-size: 0.9rem;';
    
    if (lastVisit) {
        banner.textContent = `Welcome back! Your last visit to AgriPulse Zimbabwe was on ${lastVisit}.`;
    } else {
        banner.textContent = `Welcome to AgriPulse Zimbabwe! Explore our comprehensive agricultural data portal.`;
    }
    localStorage.setItem(visitKey, now);

    const headerEl = document.querySelector('header');
    if (headerEl) {
        headerEl.prepend(banner);
    }

    // Load crops if container exists on the page
    loadCropsData('crops-container');
});
