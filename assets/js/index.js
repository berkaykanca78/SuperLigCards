window.onload = function () {
    // Galatasaray butonunu otomatik seç ve tıkla
    const galatasarayButton = document.querySelector('[data-team="galatasaray"]');
    if (galatasarayButton) {
        galatasarayButton.click();
    }
};

 // Team selection functionality
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
