document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.search;
    const urlParams = new URLSearchParams(currentUrl);
    const resultsContainer = document.querySelector('#results');

    const first = urlParams.get('first');
    const last = urlParams.get('last');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const orgname = urlParams.get('orgname');
    const membership = urlParams.get('membership');
    const timestamp = urlParams.get('timestamp');

    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <p><strong>First Name:</strong> ${first || 'N/A'}</p>
            <p><strong>Last Name:</strong> ${last || 'N/A'}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Organization:</strong> ${orgname || 'N/A'}</p>
            <p><strong>Membership Level:</strong> ${membership || 'N/A'}</p>
            <p><strong>Submitted At:</strong> ${timestamp ? new Date(timestamp).toLocaleString() : 'N/A'}</p>
        `;
    }

    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
