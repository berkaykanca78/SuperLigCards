async function generateTeamsList() {
    try {
        const response = await fetch('assets/data/teams.json');
        const data = await response.json();
        const teamsList = document.querySelector('.teams-list');
        
        teamsList.innerHTML = data.teams.map(team => `
            <li class="team-item">
                <button class="team-button" data-team="${team.id}">
                    <img src="${team.logo}" alt="${team.name}" class="team-logo" width="16" height="16">
                    ${team.name}
                </button>
            </li>
        `).join('');

        // Make sure attachTeamButtonListeners is available
        if (typeof window.attachTeamButtonListeners === 'function') {
            window.attachTeamButtonListeners();
        } else {
            console.error('attachTeamButtonListeners function not found. Make sure index.js is loaded first.');
        }
    } catch (error) {
        console.error('Error loading teams:', error);
    }
}

// Initialize teams list when the page loads
document.addEventListener('DOMContentLoaded', generateTeamsList); 