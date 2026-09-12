document.addEventListener("DOMContentLoaded", () => {
  // Visitor Storage Message Logic
  const visitMsg = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisitDate");
  const now = Date.now();

  if (!lastVisit) {
    visitMsg.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysBetween = Math.floor((now - parseInt(lastVisit, 10)) / (1000 * 60 * 60 * 24));
    if (daysBetween < 1) {
      visitMsg.textContent = "Back so soon! Great to see you again.";
    } else if (daysBetween === 1) {
      visitMsg.textContent = "You last visited 1 day ago.";
    } else {
      visitMsg.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }
  localStorage.setItem("lastVisitDate", now.toString());

  // Modal Handlers
  const learnBtns = document.querySelectorAll(".learn-more-btn");
  const closeBtns = document.querySelectorAll(".close-modal-btn");

  learnBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const dialog = document.getElementById(modalId);
      if (dialog) dialog.showModal();
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const dialog = btn.closest("dialog");
      if (dialog) dialog.close();
    });
  });
});
