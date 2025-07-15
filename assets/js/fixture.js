// Fixture page functionality
let teams = [];
let currentWeek = 1;
const totalWeeks = 34;
let fixtureData = [];
let selectedTeam = null;



// Load teams from JSON and generate fixture
async function loadTeamsAndGenerateFixture() {
    try {
        // Load teams data
        const teamsResponse = await fetch('assets/data/teams.json');
        const teamsData = await teamsResponse.json();
        teams = teamsData.teams;

        // Load fixtures data
        const fixturesResponse = await fetch('assets/data/fixtures.json');
        const fixturesData = await fixturesResponse.json();
        
        // Generate fixture data from JSON
        fixtureData = generateFixtureFromJSON(fixturesData);

        // Generate teams list
        generateTeamsList();

        // Initialize the page
        generateWeekSelector();
        showWeek(1);

    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('fixtureGrid').innerHTML =
            '<div class="no-matches">Veriler yüklenirken hata oluştu.</div>';
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

            // Show matches for current week with team filter
            showWeek(currentWeek);
        });
    });


}

// Generate fixture data from JSON
function generateFixtureFromJSON(fixturesData) {
    const fixture = [];
    
    // Process each week from JSON
    fixturesData.fixtures.forEach(weekData => {
        const weekMatches = [];
        
        // Process each match in the week
        weekData.matches.forEach((match, matchIndex) => {
            // Find home and away teams from teams array
            const homeTeam = teams.find(team => team.name === match.home);
            const awayTeam = teams.find(team => team.name === match.away);
            
            if (homeTeam && awayTeam) {
                // Generate random date for the week
                const weekStartDate = new Date(2025, 7, 18); // August 18, 2025
                const matchDate = new Date(weekStartDate);
                matchDate.setDate(weekStartDate.getDate() + (weekData.week - 1) * 7 + Math.floor(Math.random() * 7));
                
                // Create match object with the format expected by displayMatches
                weekMatches.push({
                    week: weekData.week,
                    matchNumber: matchIndex + 1,
                    homeTeam: homeTeam,
                    awayTeam: awayTeam,
                    date: matchDate,
                    time: `${Math.floor(Math.random() * 3) + 19}:${Math.random() > 0.5 ? '00' : '30'}`,
                    stadium: homeTeam.stadium
                });
            }
        });
        
        fixture.push(weekMatches);
    });
    
    return fixture;
}

// Generate week selector buttons
function generateWeekSelector() {
    const weekSelector = document.getElementById('weekSelector');
    weekSelector.innerHTML = '';

    for (let week = 1; week <= totalWeeks; week++) {
        const button = document.createElement('button');
        button.className = 'week-button';
        button.textContent = week;
        button.onclick = () => showWeek(week);
        weekSelector.appendChild(button);
    }
}

// Show matches for a specific week
function showWeek(week) {
    currentWeek = week;

    // Update active week button
    document.querySelectorAll('.week-button').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === week);
    });

    // Update navigation buttons
    document.getElementById('prevWeek').disabled = week === 1;
    document.getElementById('nextWeek').disabled = week === totalWeeks;

    // Display matches
    displayMatches(fixtureData[week - 1]);
}

// Display matches
function displayMatches(matches) {
    const fixtureGrid = document.getElementById('fixtureGrid');

    if (!matches || matches.length === 0) {
        fixtureGrid.innerHTML = '<div class="no-matches">Bu hafta için maç bulunamadı.</div>';
        return;
    }

    // Filter matches for selected team if any
    let filteredMatches = matches;
    if (selectedTeam) {
        filteredMatches = matches.filter(match => 
            match.homeTeam.id === selectedTeam.id || match.awayTeam.id === selectedTeam.id
        );
    }

    if (filteredMatches.length === 0) {
        fixtureGrid.innerHTML = `<div class="no-matches">${selectedTeam ? selectedTeam.name + ' için bu hafta maç bulunamadı.' : 'Bu hafta için maç bulunamadı.'}</div>`;
        return;
    }

    fixtureGrid.innerHTML = filteredMatches.map(match => `
        <div class="match-card">
            <div class="match-header">
                <span class="match-number">Maç ${match.matchNumber}</span>
                <span class="match-date">${match.date.toLocaleDateString('tr-TR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}</span>
            </div>
            
            <div class="teams-container">
                <div class="team home ${selectedTeam && match.homeTeam.id === selectedTeam.id ? 'selected' : ''}">
                    <img src="${match.homeTeam.logo}" alt="${match.homeTeam.name}" class="team-logo">
                    <div class="team-name">${match.homeTeam.name}</div>
                </div>
                
                <div class="vs">VS</div>
                
                <div class="team away ${selectedTeam && match.awayTeam.id === selectedTeam.id ? 'selected' : ''}">
                    <img src="${match.awayTeam.logo}" alt="${match.awayTeam.name}" class="team-logo">
                    <div class="team-name">${match.awayTeam.name}</div>
                </div>
            </div>
            
            <div class="match-info">
                <div class="stadium">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${match.stadium}</span>
                </div>
                <div class="time">
                    <i class="fas fa-clock"></i>
                    <span>${match.time}</span>
                </div>
            </div>
        </div>
    `).join('');
}

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

// Navigation event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Set up mobile menu
    setupMobileMenu();

    // Set up navigation buttons
    document.getElementById('prevWeek').addEventListener('click', () => {
        if (currentWeek > 1) {
            showWeek(currentWeek - 1);
        }
    });

    document.getElementById('nextWeek').addEventListener('click', () => {
        if (currentWeek < totalWeeks) {
            showWeek(currentWeek + 1);
        }
    });

    // Initialize fixture
    loadTeamsAndGenerateFixture();
}); 