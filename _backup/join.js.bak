document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current timestamp into the hidden input field
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // 2. Modal Functionality for Membership Tiers
    const tiers = [
        { btn: "np-btn", modal: "modal-np" },
        { btn: "bronze-btn", modal: "modal-bronze" },
        { btn: "silver-btn", modal: "modal-silver" },
        { btn: "gold-btn", modal: "modal-gold" }
    ];

    tiers.forEach(item => {
        const btn = document.getElementById(item.btn);
        const modal = document.getElementById(item.modal);
        
        if (btn && modal) {
            btn.addEventListener("click", () => {
                modal.showModal();
            });

            const closeBtn = modal.querySelector(".close-modal");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    modal.close();
                });
            }

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
});
