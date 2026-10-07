document.addEventListener('DOMContentLoaded', () => {
    const navElement = document.querySelector('nav');
    const menuList = document.querySelector('nav ul');
    
    if (navElement && menuList) {
        const hambutton = document.createElement('button');
        hambutton.id = 'menu-button';
        hambutton.innerHTML = '☰';
        navElement.prepend(hambutton);
        
        hambutton.addEventListener('click', () => {
            menuList.classList.toggle('open');
            hambutton.classList.toggle('open');
        });
    }

    const visitMessageContainer = document.createElement('div');
    visitMessageContainer.style.background = '#e2edd5';
    visitMessageContainer.style.padding = '0.75rem 1rem';
    visitMessageContainer.style.textAlign = 'center';
    visitMessageContainer.style.fontWeight = 'bold';
    visitMessageContainer.style.fontSize = '0.9rem';
    visitMessageContainer.style.marginBottom = '1.5rem';
    visitMessageContainer.style.borderRadius = '6px';
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.prepend(visitMessageContainer);
        
        const lastVisit = localStorage.getItem('agri_last_visit');
        const now = Date.now();
        
        if (!lastVisit) {
            visitMessageContainer.textContent = "Welcome! Explore our agricultural resources and contact us if you have questions.";
        } else {
            const daysBetween = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
            if (daysBetween < 1) {
                visitMessageContainer.textContent = "Back so soon! Welcome back to AgriPulse Zimbabwe.";
            } else if (daysBetween === 1) {
                visitMessageContainer.textContent = "You last visited 1 day ago.";
            } else {
                visitMessageContainer.textContent = `You last visited ${daysBetween} days ago.`;
            }
        }
        localStorage.setItem('agri_last_visit', String(now));
    }
});
