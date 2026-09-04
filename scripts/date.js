document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentyear");
    const lastModifiedParagraph = document.querySelector("#lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});
