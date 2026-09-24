document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultsContainer = document.getElementById("results");

    const firstName = urlParams.get("fname");
    const lastName = urlParams.get("lname");
    const email = urlParams.get("email");
    const phone = urlParams.get("mobile");
    const orgName = urlParams.get("business");
    const timestamp = urlParams.get("timestamp");

    if (resultsContainer) {
        let formattedDate = "N/A";
        if (timestamp) {
            try {
                formattedDate = new Date(timestamp).toLocaleString();
            } catch (e) {
                formattedDate = timestamp;
            }
        }

        resultsContainer.innerHTML = `
            <p><strong>First Name:</strong> ${firstName || "N/A"}</p>
            <p><strong>Last Name:</strong> ${lastName || "N/A"}</p>
            <p><strong>Email:</strong> ${email ? decodeURIComponent(email) : "N/A"}</p>
            <p><strong>Mobile Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Business Name:</strong> ${orgName || "N/A"}</p>
            <p><strong>Application Timestamp:</strong> ${formattedDate}</p>
        `;
    }
});
