// Standings Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Apply filter
            applyStandingsFilter(filter);
        });
    });

    // Initialize page
    loadStandings();
});

// Load standings data
function loadStandings() {
    // Sample standings data
    const standings = [
        { position: 1, team: 'Galatasaray', played: 34, won: 25, drawn: 5, lost: 4, goalsFor: 78, goalsAgainst: 28, points: 80, form: ['W', 'W', 'D', 'W', 'W'] },
        { position: 2, team: 'Fenerbahçe', played: 34, won: 24, drawn: 6, lost: 4, goalsFor: 75, goalsAgainst: 30, points: 78, form: ['W', 'W', 'W', 'D', 'W'] },
        { position: 3, team: 'Beşiktaş', played: 34, won: 20, drawn: 8, lost: 6, goalsFor: 65, goalsAgainst: 35, points: 68, form: ['L', 'W', 'D', 'W', 'W'] },
        { position: 4, team: 'Trabzonspor', played: 34, won: 18, drawn: 9, lost: 7, goalsFor: 58, goalsAgainst: 38, points: 63, form: ['W', 'D', 'L', 'W', 'D'] },
        { position: 5, team: 'Adana Demirspor', played: 34, won: 16, drawn: 8, lost: 10, goalsFor: 52, goalsAgainst: 42, points: 56, form: ['D', 'W', 'L', 'D', 'W'] },
        { position: 6, team: 'Antalyaspor', played: 34, won: 15, drawn: 9, lost: 10, goalsFor: 48, goalsAgainst: 40, points: 54, form: ['W', 'L', 'D', 'W', 'L'] },
        { position: 7, team: 'Konyaspor', played: 34, won: 14, drawn: 10, lost: 10, goalsFor: 45, goalsAgainst: 42, points: 52, form: ['D', 'W', 'L', 'D', 'W'] },
        { position: 8, team: 'Kayserispor', played: 34, won: 13, drawn: 11, lost: 10, goalsFor: 42, goalsAgainst: 45, points: 50, form: ['L', 'D', 'W', 'L', 'D'] },
        { position: 9, team: 'Alanyaspor', played: 34, won: 12, drawn: 12, lost: 10, goalsFor: 40, goalsAgainst: 45, points: 48, form: ['W', 'D', 'L', 'W', 'L'] },
        { position: 10, team: 'Sivasspor', played: 34, won: 11, drawn: 13, lost: 10, goalsFor: 38, goalsAgainst: 48, points: 46, form: ['D', 'L', 'W', 'D', 'L'] },
        { position: 11, team: 'Kasımpaşa', played: 34, won: 10, drawn: 14, lost: 10, goalsFor: 35, goalsAgainst: 50, points: 44, form: ['L', 'D', 'W', 'L', 'D'] },
        { position: 12, team: 'Gaziantep FK', played: 34, won: 9, drawn: 15, lost: 10, goalsFor: 32, goalsAgainst: 52, points: 42, form: ['D', 'L', 'D', 'W', 'L'] },
        { position: 13, team: 'İstanbul Başakşehir', played: 34, won: 8, drawn: 16, lost: 10, goalsFor: 30, goalsAgainst: 55, points: 40, form: ['L', 'D', 'L', 'D', 'W'] },
        { position: 14, team: 'Fatih Karagümrük', played: 34, won: 7, drawn: 17, lost: 10, goalsFor: 28, goalsAgainst: 58, points: 38, form: ['D', 'L', 'D', 'L', 'D'] },
        { position: 15, team: 'Giresunspor', played: 34, won: 6, drawn: 18, lost: 10, goalsFor: 25, goalsAgainst: 62, points: 36, form: ['L', 'D', 'L', 'D', 'L'] },
        { position: 16, team: 'Ankaragücü', played: 34, won: 5, drawn: 19, lost: 10, goalsFor: 22, goalsAgainst: 65, points: 34, form: ['D', 'L', 'D', 'L', 'L'] },
        { position: 17, team: 'Konyaspor', played: 34, won: 4, drawn: 20, lost: 10, goalsFor: 20, goalsAgainst: 68, points: 32, form: ['L', 'D', 'L', 'D', 'L'] },
        { position: 18, team: 'Hatayspor', played: 34, won: 3, drawn: 21, lost: 10, goalsFor: 18, goalsAgainst: 70, points: 30, form: ['D', 'L', 'D', 'L', 'L'] }
    ];

    updateStandingsTable(standings);
}

// Update standings table
function updateStandingsTable(standings) {
    const tbody = document.getElementById('standingsBody');
    
    // Clear existing content
    tbody.innerHTML = '';

    // Populate table
    standings.forEach((team, index) => {
        const row = document.createElement('tr');
        const goalDifference = team.goalsFor - team.goalsAgainst;
        
        // Add position-based classes
        if (team.position <= 4) {
            row.classList.add('champions');
        } else if (team.position <= 6) {
            row.classList.add('europa');
        } else if (team.position <= 7) {
            row.classList.add('conference');
        } else if (team.position >= 16) {
            row.classList.add('relegation');
        }

        // Create form indicators
        const formIndicators = team.form.map(result => {
            const className = result === 'W' ? 'form-win' : result === 'D' ? 'form-draw' : 'form-loss';
            return `<div class="form-indicator ${className}"></div>`;
        }).join('');

        row.style.position = 'relative';
        row.innerHTML = `
            <td>${team.position}</td>
            <td>${team.team}</td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${team.goalsFor}</td>
            <td>${team.goalsAgainst}</td>
            <td>${goalDifference > 0 ? '+' : ''}${goalDifference}</td>
            <td>${team.points}</td>
            <td class="form-cell">${formIndicators}</td>
            <button class="info-button" onclick="window.location.href='index.html?team=${encodeURIComponent(team.team)}'" title="Takım Detayları">
                <i class="fas fa-info"></i>
            </button>
        `;
        tbody.appendChild(row);
    });
}

// Apply standings filter
function applyStandingsFilter(filter) {
    const rows = document.querySelectorAll('#standingsBody tr');
    
    rows.forEach(row => {
        switch(filter) {
            case 'champions':
                row.style.display = row.classList.contains('champions') ? '' : 'none';
                break;
            case 'europa':
                row.style.display = row.classList.contains('europa') ? '' : 'none';
                break;
            case 'relegation':
                row.style.display = row.classList.contains('relegation') ? '' : 'none';
                break;
            default: // 'all'
                row.style.display = '';
                break;
        }
    });
}

// Update last update time
function updateLastUpdate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = now.toLocaleDateString('tr-TR', options);
    document.getElementById('lastUpdate').textContent = formattedDate;
}

// Initialize last update time
updateLastUpdate(); 