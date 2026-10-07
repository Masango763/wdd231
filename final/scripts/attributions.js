const yearSpan = document.querySelector("#year");
const modified = document.querySelector("#lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (modified) {
  modified.textContent = `Last Modified: ${document.lastModified}`;
}

const menuBtn = document.querySelector("#menu-btn");
const navList = document.querySelector("nav ul");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}
