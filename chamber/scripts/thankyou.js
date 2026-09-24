document.addEventListener("DOMContentLoaded", () => {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const resultsContainer = document.getElementById("results");

    const firstName = urlParams.get("first");
    const lastName = urlParams.get("last");
    const email = urlParams.get("email");
    const phone = urlParams.get("phone");
    const orgName = urlParams.get("orgname");
    const timestamp = urlParams.get("timestamp");

    if (resultsContainer) {
        // Format timestamp nicely if available
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
            <p><strong>Organization Name:</strong> ${orgName || "N/A"}</p>
            <p><strong>Application Timestamp:</strong> ${formattedDate}</p>
        `;
    }
});
