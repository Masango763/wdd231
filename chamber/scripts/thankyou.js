const urlParams = new URLSearchParams(window.location.search);
const resultsContainer = document.getElementById('results');

function displaySubmission() {
    const name = urlParams.get('name') || 'Not provided';
    const email = urlParams.get('email') || 'Not provided';
    const message = urlParams.get('message') || 'Not provided';

    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Inquiry Message:</strong> ${message}</p>
        `;
    }
}

displaySubmission();
