// Stats Page JavaScript
let teams = [];
let selectedTeam = null;

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and target content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Load data for the selected tab
            loadTabData(targetTab);
        });
    });

    // Filter functionality
    const positionFilter = document.getElementById('positionFilter');
    const teamFilter = document.getElementById('teamFilter');
    const statType = document.getElementById('statType');

    [positionFilter, teamFilter, statType].forEach(filter => {
        filter.addEventListener('change', () => {
            loadPlayerStats();
        });
    });

    // Initialize page
    loadTeamsAndGenerateStats();
    
    // Set up mobile menu
    setupMobileMenu();
});

// Mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
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
    }
}

// Load teams from JSON and generate stats
async function loadTeamsAndGenerateStats() {
    try {
        // Load teams data
        const teamsResponse = await fetch('assets/data/teams.json');
        const teamsData = await teamsResponse.json();
        teams = teamsData.teams;

        // Generate teams list in sidebar
        generateTeamsList();

        // Initialize the page
        loadTeams();
        loadPlayerStats();
        loadTeamStats();

    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to hardcoded teams if JSON fails
        loadTeams();
        loadPlayerStats();
        loadTeamStats();
    }
}

// Generate teams list in sidebar
function generateTeamsList() {
    const teamsList = document.querySelector('.teams-list');
    
    teamsList.innerHTML = teams.map(team => `
        <li class="team-item">
            <button class="team-button" data-team="${team.id}">
                <img src="${team.logo}" alt="${team.name}" class="team-logo">
                ${team.name}
            </button>
        </li>
    `).join('');

    // Attach event listeners to team buttons
    attachTeamButtonListeners();
}

// Attach event listeners to team buttons
function attachTeamButtonListeners() {
    document.querySelectorAll('.team-button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.team-button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Get selected team
            const teamId = this.dataset.team;
            selectedTeam = teams.find(team => team.id === teamId);

            // Update team filter and reload stats
            if (selectedTeam) {
                const teamFilter = document.getElementById('teamFilter');
                teamFilter.value = selectedTeam.name;
                loadPlayerStats();
            }
        });
    });
}

// Load teams for filter dropdown
function loadTeams() {
    const teamFilter = document.getElementById('teamFilter');
    
    // Clear existing options
    teamFilter.innerHTML = '<option value="">Tüm Takımlar</option>';
    
    // Use teams from JSON data if available, otherwise fallback to hardcoded list
    const teamNames = teams.length > 0 ? teams.map(team => team.name) : [
        'Galatasaray A.Ş.', 'Fenerbahçe A.Ş.', 'Beşiktaş A.Ş.', 'Trabzonspor A.Ş.', 
        'R. Başakşehir F.K.', 'Samsunspor A.Ş.', 'İ. Eyüpspor', 'Göztepe A.Ş.',
        'Ç. Rizespor A.Ş.', 'Kasımpaşa A.Ş.', 'Konyaspor', 'C. Alanyaspor',
        'Kayserispor F.A.Ş.', 'Gaziantep F.K. A.Ş.', 'Antalyaspor A.Ş.',
        'Kocaelispor', 'Gençlerbirliği', 'F. Karagümrük A.Ş.'
    ];

    teamNames.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });
}

// Load player statistics
function loadPlayerStats() {
    const tbody = document.getElementById('playerStatsBody');
    const statHeader = document.getElementById('statHeader');
    const statType = document.getElementById('statType').value;
    const positionFilter = document.getElementById('positionFilter').value;
    const teamFilter = document.getElementById('teamFilter').value;

    // Update header based on selected stat type
    const statHeaders = {
        'goals': 'Gol',
        'assists': 'Asist',
        'clean_sheets': 'Temiz Maç',
        'saves': 'Kurtarış',
        'passes': 'Pas'
    };
    statHeader.textContent = statHeaders[statType] || 'Gol';

    // Sample player data
    const players = [
        { name: 'Mauro Icardi', team: 'Galatasaray A.Ş.', position: 'ST', matches: 28, goals: 25, assists: 8, points: 33 },
        { name: 'Dusan Tadic', team: 'Fenerbahçe A.Ş.', position: 'FWD', matches: 30, goals: 18, assists: 15, points: 33 },
        { name: 'Cenk Tosun', team: 'Beşiktaş A.Ş.', position: 'ST', matches: 26, goals: 16, assists: 6, points: 22 },
        { name: 'Uğurcan Çakır', team: 'Trabzonspor A.Ş.', position: 'GK', matches: 32, goals: 0, assists: 0, points: 0 },
        { name: 'Wilfried Zaha', team: 'Galatasaray A.Ş.', position: 'FWD', matches: 25, goals: 12, assists: 10, points: 22 },
        { name: 'Sebastian Szymanski', team: 'Fenerbahçe A.Ş.', position: 'MID', matches: 29, goals: 8, assists: 12, points: 20 },
        { name: 'Rachid Ghezzal', team: 'Beşiktaş A.Ş.', position: 'FWD', matches: 27, goals: 10, assists: 8, points: 18 },
        { name: 'Anastasios Bakasetas', team: 'Trabzonspor A.Ş.', position: 'MID', matches: 28, goals: 7, assists: 9, points: 16 },
        { name: 'Edin Dzeko', team: 'Fenerbahçe A.Ş.', position: 'ST', matches: 27, goals: 15, assists: 7, points: 22 },
        { name: 'Wilfried Zaha', team: 'Galatasaray A.Ş.', position: 'FWD', matches: 24, goals: 11, assists: 9, points: 20 },
        { name: 'Cenk Tosun', team: 'Beşiktaş A.Ş.', position: 'ST', matches: 25, goals: 14, assists: 5, points: 19 },
        { name: 'Mahmoud Trezeguet', team: 'Trabzonspor A.Ş.', position: 'FWD', matches: 26, goals: 8, assists: 6, points: 14 }
    ];

    // Filter players based on selected filters
    let filteredPlayers = players.filter(player => {
        if (positionFilter && player.position !== positionFilter) return false;
        if (teamFilter && player.team !== teamFilter) return false;
        return true;
    });

    // Sort players based on selected stat type
    filteredPlayers.sort((a, b) => b[statType] - a[statType]);

    // Clear existing content
    tbody.innerHTML = '';

    // Populate table
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.style.position = 'relative';
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${player.position}</td>
            <td>${player.matches}</td>
            <td>${player.goals}</td>
            <td>${player.assists}</td>
            <td>${player.points}</td>
            <button class="info-button" onclick="window.location.href='player.html?player=${encodeURIComponent(player.name)}&team=${encodeURIComponent(player.team)}'" title="Oyuncu Detayları">
                <i class="fas fa-info"></i>
            </button>
        `;
        tbody.appendChild(row);
    });
}

// Load team statistics
function loadTeamStats() {
    // Sample team stats data
    const teamStats = [
        { team: 'Galatasaray A.Ş.', wins: 25, draws: 5, losses: 4, goalsFor: 78, goalsAgainst: 28, points: 80 },
        { team: 'Fenerbahçe A.Ş.', wins: 24, draws: 6, losses: 4, goalsFor: 75, goalsAgainst: 30, points: 78 },
        { team: 'Beşiktaş A.Ş.', wins: 20, draws: 8, losses: 6, goalsFor: 65, goalsAgainst: 35, points: 68 },
        { team: 'Trabzonspor A.Ş.', wins: 18, draws: 9, losses: 7, goalsFor: 58, goalsAgainst: 38, points: 63 },
        { team: 'R. Başakşehir F.K.', wins: 16, draws: 8, losses: 10, goalsFor: 52, goalsAgainst: 42, points: 56 },
        { team: 'Samsunspor A.Ş.', wins: 15, draws: 9, losses: 10, goalsFor: 48, goalsAgainst: 40, points: 54 },
        { team: 'İ. Eyüpspor', wins: 14, draws: 10, losses: 10, goalsFor: 45, goalsAgainst: 42, points: 52 },
        { team: 'Göztepe A.Ş.', wins: 13, draws: 11, losses: 10, goalsFor: 42, goalsAgainst: 45, points: 50 },
        { team: 'Ç. Rizespor A.Ş.', wins: 12, draws: 12, losses: 10, goalsFor: 40, goalsAgainst: 45, points: 48 },
        { team: 'Kasımpaşa A.Ş.', wins: 11, draws: 13, losses: 10, goalsFor: 38, goalsAgainst: 48, points: 46 }
    ];

    // Update top stats cards
    updateTopStatsCards(teamStats);
    
    // Update team stats table
    updateTeamStatsTable(teamStats);
}

// Update top statistics cards
function updateTopStatsCards(teamStats) {
    // Top scoring team
    const topScoring = teamStats.reduce((max, team) => 
        team.goalsFor > max.goalsFor ? team : max
    );
    document.getElementById('topScoringTeam').innerHTML = `
        <div style="font-size: 1.2rem; font-weight: 700; color: #ffffff;">${topScoring.team}</div>
        <div style="color: #E60012; font-weight: 600;">${topScoring.goalsFor} gol</div>
    `;

    // Best defense team
    const bestDefense = teamStats.reduce((min, team) => 
        team.goalsAgainst < min.goalsAgainst ? team : min
    );
    document.getElementById('bestDefenseTeam').innerHTML = `
        <div style="font-size: 1.2rem; font-weight: 700; color: #ffffff;">${bestDefense.team}</div>
        <div style="color: #E60012; font-weight: 600;">${bestDefense.goalsAgainst} gol yedi</div>
    `;

    // Top assist team (sample data)
    document.getElementById('topAssistTeam').innerHTML = `
        <div style="font-size: 1.2rem; font-weight: 700; color: #ffffff;">Fenerbahçe</div>
        <div style="color: #E60012; font-weight: 600;">45 asist</div>
    `;

    // Top clean sheet team (sample data)
    document.getElementById('topCleanSheetTeam').innerHTML = `
        <div style="font-size: 1.2rem; font-weight: 700; color: #ffffff;">Galatasaray</div>
        <div style="color: #E60012; font-weight: 600;">12 temiz maç</div>
    `;
}

// Update team statistics table
function updateTeamStatsTable(teamStats) {
    const tbody = document.getElementById('teamStatsBody');
    
    // Clear existing content
    tbody.innerHTML = '';

    // Sort teams by points
    teamStats.sort((a, b) => b.points - a.points);

    // Populate table
    teamStats.forEach((team, index) => {
        const row = document.createElement('tr');
        const goalDifference = team.goalsFor - team.goalsAgainst;
        row.style.position = 'relative';
        row.innerHTML = `
            <td>${team.team}</td>
            <td>${team.wins + team.draws + team.losses}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.goalsFor}</td>
            <td>${team.goalsAgainst}</td>
            <td>${goalDifference > 0 ? '+' : ''}${goalDifference}</td>
            <td>${team.points}</td>
            <button class="info-button" onclick="window.location.href='index.html?team=${encodeURIComponent(team.team)}'" title="Takım Detayları">
                <i class="fas fa-info"></i>
            </button>
        `;
        tbody.appendChild(row);
    });
}

// Load data for specific tab
function loadTabData(tabName) {
    switch(tabName) {
        case 'player-stats':
            loadPlayerStats();
            break;
        case 'team-stats':
            loadTeamStats();
            break;
    }
} 