document.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.querySelector('#timestamp');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    const modal = document.querySelector('#membership-modal');
    const closeModal = document.querySelector('#closeModal');
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modalContent = document.querySelector('#modal-content');

    const modalData = {
        'np-modal': { title: 'Non-Profit Membership', desc: 'Free membership for registered non-profit organizations. Includes community directory listing.' },
        'bronze-modal': { title: 'Bronze Membership', desc: 'Basic business tier with chamber newsletter access and standard directory placement.' },
        'silver-modal': { title: 'Silver Membership', desc: 'Enhanced visibility, event discounts, and networking mixer entry.' },
        'gold-modal': { title: 'Gold Membership', desc: 'Premium sponsorship placement, VIP event access, and dedicated advisory support.' }
    };

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-modal');
            const info = modalData[key];
            if (info && modal) {
                modalContent.innerHTML = `
                    <button id="closeModal">❌</button>
                    <h3>${info.title}</h3>
                    <p>${info.desc}</p>
                `;
                document.querySelector('#closeModal').addEventListener('click', () => modal.close());
                modal.showModal();
            }
        });
    });

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => modal.close());
    }

    if (modal) {
        modal.addEventListener('click', (event) => {
            const rect = modal.getBoundingClientRect();
            if (event.clientY < rect.top || event.clientY > rect.bottom || event.clientX < rect.left || event.clientX > rect.right) {
                modal.close();
            }
        });
    }

    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
