document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current timestamp into the hidden input field
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // 2. Modal Functionality for Membership Cards
    const modal = document.getElementById("membership-modal");
    const modalButtons = document.querySelectorAll(".modal-btn");
    const closeModalBtn = document.getElementById("closeModal");
    const modalContent = document.getElementById("modal-content");

    // Define content for each membership level modal
    const modalData = {
        "np-modal": {
            title: "NP Membership (Non-Profit)",
            description: "Designed specifically for non-profit organizations. This tier is completely free of charge and provides access to basic community networking events and chamber directory listing."
        },
        "bronze-modal": {
            title: "Bronze Membership",
            description: "Ideal for small startups. Includes standard directory listing, discounted rates for chamber events, and monthly newsletter highlights."
        },
        "silver-modal": {
            title: "Silver Membership",
            description: "Great for growing businesses. Includes priority event registration, social media spotlight features, and inclusion in special business training workshops."
        },
        "gold-modal": {
            title: "Gold Membership",
            description: "Our premium tier for established corporations. Features prime homepage spotlight advertising, free admission to all major chamber events, and direct advisory board participation."
        }
    };

    modalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalKey = button.getAttribute("data-modal");
            const data = modalData[modalKey];
            if (data && modalContent) {
                modalContent.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                `;
            }
            if (modal) {
                modal.showModal();
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            if (modal) modal.close();
        });
    }

    // Close modal when clicking outside the dialog box (on backdrop)
    if (modal) {
        modal.addEventListener("click", (event) => {
            const rect = modal.getBoundingClientRect();
            if (
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom
            ) {
                modal.close();
            }
        });
    }
});
