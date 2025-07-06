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
            
            // Apply default theme with selected team colors
            applyDefaultTheme(teamName);
        });
    });

    // Select Galatasaray by default
    const galatasarayButton = document.querySelector('[data-team="galatasaray"]');
    if (galatasarayButton) {
        galatasarayButton.click();
    }
}

// Apply default theme with team colors
function applyDefaultTheme(teamName = 'galatasaray') {
    const mainContent = document.querySelector('.main-content');
    const cardsGrid = document.querySelector('.cards-grid');
    const header = document.querySelector('.header');
    
    // Remove all existing theme classes
    if (mainContent) {
        mainContent.className = mainContent.className.replace(/theme-\w+/g, '').replace(/team-\w+/g, '');
        mainContent.classList.add('theme-default', `team-${teamName}`);
    }
    
    if (cardsGrid) {
        cardsGrid.className = cardsGrid.className.replace(/theme-\w+/g, '').replace(/team-\w+/g, '');
        cardsGrid.classList.add('cards-grid', 'theme-default', `team-${teamName}`);
    }
    
    if (header) {
        header.className = header.className.replace(/theme-\w+/g, '').replace(/team-\w+/g, '');
        header.classList.add('header', 'theme-default', `team-${teamName}`);
    }
    
    // Hide league indicators only in default theme
    const leagueIndicators = document.querySelectorAll('.league-indicator');
    leagueIndicators.forEach(indicator => {
        indicator.style.display = 'none';
    });
    
    // Reset league selector to default
    const leagueSelect = document.getElementById('leagueSelect');
    if (leagueSelect) {
        leagueSelect.value = 'default';
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
