// Team selection functionality
function attachTeamButtonListeners() {
    document.querySelectorAll('.team-button').forEach(button => {
        button.addEventListener('click', async function () {
            // Remove active class from all buttons
            document.querySelectorAll('.team-button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Get team data
            const teamName = this.dataset.team;
            const cardsGrid = document.querySelector('.main-content');

            // Generate and display team cards
            const html = await loadAndGenerateTeamCards(teamName);
            cardsGrid.innerHTML = html;
        });
    });

    // Select Galatasaray by default
    const galatasarayButton = document.querySelector('[data-team="galatasaray"]');
    if (galatasarayButton) {
        galatasarayButton.click();
    }
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Export the function for use in other modules
window.attachTeamButtonListeners = attachTeamButtonListeners;
