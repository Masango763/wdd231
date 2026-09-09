// LocalStorage Visit Counter Logic
const banner = document.querySelector('#visit-message');
const lastVisit = localStorage.getItem('lastVisitTimestamp');
const now = Date.now();

if (!lastVisit) {
  banner.textContent = "Welcome! Let us know if you have any questions about regional trade.";
} else {
  const diffDays = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
  if (diffDays < 1) {
    banner.textContent = "Back so soon! Great to see you again.";
  } else if (diffDays === 1) {
    banner.textContent = "You last visited 1 day ago.";
  } else {
    banner.textContent = `You last visited ${diffDays} days ago.`;
  }
}

localStorage.setItem('lastVisitTimestamp', now.toString());

document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;
