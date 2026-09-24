document.addEventListener('DOMContentLoaded', () => {
  const ts = document.querySelector('#timestamp');
  if (ts) ts.value = new Date().toISOString();

  document.querySelectorAll('.tier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.modal)?.showModal();
    });
  });

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('dialog').close());
  });

  document.querySelectorAll('.tier-modal').forEach(dlg => {
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  });
});
