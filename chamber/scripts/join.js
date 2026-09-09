document.querySelector('#timestamp').value = new Date().toISOString();

function setupModal(btnId, modalId) {
  const btn = document.querySelector(btnId);
  const modal = document.querySelector(modalId);
  if (!btn || !modal) return;

  btn.addEventListener('click', () => modal.showModal());
  const closeBtn = modal.querySelector('.close-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.close());
  }
}

setupModal('#np-btn', '#modal-np');
setupModal('#bronze-btn', '#modal-bronze');
setupModal('#silver-btn', '#modal-silver');
setupModal('#gold-btn', '#modal-gold');

document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;
