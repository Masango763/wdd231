document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentyear");
    const lastModifiedPara = document.querySelector("#lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
});
