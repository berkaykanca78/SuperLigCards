const leagueLogos = {
    superlig: 'https://www.tff.org/Resources/TFF/Images/0000000015/TFF/TFF-Logolar/2024-2025/trendyol-super-lig-dikey-logo.png',
    championsleague: 'assets/tournaments/ucl.png',
    europaleague: 'assets/tournaments/uel.png',
    conferenceleague: 'assets/tournaments/uecl.png',
    turkiyekupasi: 'https://upload.wikimedia.org/wikipedia/tr/6/61/Ziraat_T%C3%BCrkiye_Kupas%C4%B1_logosu.png',
    superkupasi: 'https://upload.wikimedia.org/wikipedia/tr/thumb/6/61/T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png/250px-T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png'
};

document.addEventListener('DOMContentLoaded', () => {
    const leagueSelect = document.getElementById('leagueSelect');
    const cardsGrid = document.querySelector('.cards-grid');
    
    // Apply initial theme
    updateTheme('superlig');

    leagueSelect.addEventListener('change', (e) => {
        const selectedLeague = e.target.value;
        updateTheme(selectedLeague);
    });

    function updateTheme(league) {
        // Remove all theme classes
        cardsGrid.classList.remove('theme-superlig', 'theme-championsleague', 'theme-europaleague', 'theme-conferenceleague');
        // Add new theme class
        cardsGrid.classList.add(`theme-${league}`);

        // Update league indicators on all cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // Remove existing league indicator if any
            const existingIndicator = card.querySelector('.league-indicator');
            if (existingIndicator) {
                existingIndicator.remove();
            }

            // Add new league indicator
            const leagueIndicator = document.createElement('div');
            leagueIndicator.className = 'league-indicator';
            leagueIndicator.style.backgroundImage = `url('${leagueLogos[league]}')`;
            card.appendChild(leagueIndicator);
        });
    }
}); 