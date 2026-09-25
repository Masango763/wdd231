document.addEventListener("DOMContentLoaded", () => {
    const spotlightsContainer = document.getElementById("spotlights-container");
    if (!spotlightsContainer) return;

    fetch("data/members.json")
        .then(response => {
            if (!response.ok) throw new Error("Failed to load members JSON data");
            return response.json();
        })
        .then(data => {
            const members = data.members || [];
            
            // Filter for Gold (3) or Silver (2) members for spotlights
            const eligibleMembers = members.filter(m => m.membershipLevel >= 2);
            
            // Randomly shuffle and pick 2 members
            const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 2);

            let html = "";
            selected.forEach(member => {
                const levelName = member.membershipLevel === 3 ? "Gold Member" : "Silver Member";
                html += `
                    <div class="spotlight-item">
                        <h3>${member.name}</h3>
                        <p class="spotlight-level"><strong>Tier:</strong> ${levelName}</p>
                        <p class="spotlight-desc">${member.description}</p>
                        <p class="spotlight-contact">📞 ${member.phone} | <a href="${member.website}" target="_blank">Visit Website</a></p>
                    </div>
                `;
            });
            spotlightsContainer.innerHTML = html;
        })
        .catch(error => {
            console.warn("Could not load spotlights:", error);
            spotlightsContainer.innerHTML = "<p>Featured member spotlights will appear here.</p>";
        });
});
