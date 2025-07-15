// Player Page JavaScript
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

    // Initialize page with sample player data
    loadPlayerData();
});

// Sample player data
const playerData = {
    name: 'Mauro Icardi',
    fullName: 'Mauro Emanuel Icardi',
    number: 9,
    position: 'Santrafor',
    age: 31,
    country: 'Arjantin',
    photo: 'assets/players/icardi.png',
    
    // Season statistics
    seasonStats: {
        goals: 25,
        assists: 8,
        matches: 28,
        minutes: 2520,
        leagueMatches: 28,
        leagueStarts: 25,
        leagueGoals: 25,
        leagueAssists: 8,
        leagueYellowCards: 4,
        leagueRedCards: 0,
        shots: 45,
        shotsOnTarget: 22,
        passes: 1250,
        passesCompleted: 1100,
        passAccuracy: '88%',
        tackles: 35
    },
    
    // Career timeline
    career: [
        { year: '2025', team: 'Galatasaray', stats: '28 maç, 25 gol, 8 asist' },
        { year: '2024', team: 'Galatasaray', stats: '32 maç, 22 gol, 10 asist' },
        { year: '2023', team: 'Paris Saint-Germain', stats: '25 maç, 15 gol, 5 asist' },
        { year: '2022', team: 'Paris Saint-Germain', stats: '30 maç, 18 gol, 7 asist' },
        { year: '2021', team: 'Inter Milan', stats: '28 maç, 20 gol, 6 asist' }
    ],
    
    // Performance data for charts
    performance: {
        goals: [15, 18, 20, 22, 25],
        assists: [5, 7, 6, 10, 8],
        months: ['Eylül', 'Ekim', 'Kasım', 'Aralık', 'Ocak']
    },
    
    // Match history
    matches: [
        { date: '2025-03-15', opponent: 'Fenerbahçe', result: '2-1', goals: 1, assists: 0, venue: 'Ev' },
        { date: '2025-03-08', opponent: 'Beşiktaş', result: '3-1', goals: 2, assists: 0, venue: 'Ev' },
        { date: '2025-03-01', opponent: 'Trabzonspor', result: '1-1', goals: 0, assists: 1, venue: 'Deplasman' },
        { date: '2025-02-22', opponent: 'Adana Demirspor', result: '4-0', goals: 2, assists: 1, venue: 'Ev' },
        { date: '2025-02-15', opponent: 'Antalyaspor', result: '2-0', goals: 1, assists: 0, venue: 'Deplasman' },
        { date: '2025-02-08', opponent: 'Konyaspor', result: '3-2', goals: 1, assists: 1, venue: 'Ev' },
        { date: '2025-02-01', opponent: 'Kayserispor', result: '1-0', goals: 1, assists: 0, venue: 'Deplasman' },
        { date: '2025-01-25', opponent: 'Alanyaspor', result: '2-1', goals: 1, assists: 0, venue: 'Ev' }
    ]
};

// Load player data
function loadPlayerData() {
    // Update player basic information
    document.getElementById('playerName').textContent = playerData.name;
    document.getElementById('playerFullName').textContent = playerData.fullName;
    document.getElementById('playerNumber').textContent = playerData.number;
    document.getElementById('playerPosition').textContent = playerData.position;
    document.getElementById('playerAge').textContent = playerData.age;
    document.getElementById('playerCountry').textContent = playerData.country;
    document.getElementById('playerPhoto').src = playerData.photo;
    
    // Update overview statistics
    document.getElementById('goalsCount').textContent = playerData.seasonStats.goals;
    document.getElementById('assistsCount').textContent = playerData.seasonStats.assists;
    document.getElementById('matchesCount').textContent = playerData.seasonStats.matches;
    document.getElementById('minutesCount').textContent = playerData.seasonStats.minutes;
    
    // Load initial tab data
    loadTabData('season-stats');
}

// Load data for specific tab
function loadTabData(tabName) {
    switch(tabName) {
        case 'season-stats':
            loadSeasonStats();
            break;
        case 'career-stats':
            loadCareerStats();
            break;
        case 'performance':
            loadPerformanceCharts();
            break;
        case 'matches':
            loadMatchHistory();
            break;
    }
}

// Load season statistics
function loadSeasonStats() {
    const stats = playerData.seasonStats;
    
    // Update league statistics
    document.getElementById('leagueMatches').textContent = stats.leagueMatches;
    document.getElementById('leagueStarts').textContent = stats.leagueStarts;
    document.getElementById('leagueGoals').textContent = stats.leagueGoals;
    document.getElementById('leagueAssists').textContent = stats.leagueAssists;
    document.getElementById('leagueYellowCards').textContent = stats.leagueYellowCards;
    document.getElementById('leagueRedCards').textContent = stats.leagueRedCards;
    
    // Update detailed statistics
    document.getElementById('shots').textContent = stats.shots;
    document.getElementById('shotsOnTarget').textContent = stats.shotsOnTarget;
    document.getElementById('passes').textContent = stats.passes;
    document.getElementById('passesCompleted').textContent = stats.passesCompleted;
    document.getElementById('passAccuracy').textContent = stats.passAccuracy;
    document.getElementById('tackles').textContent = stats.tackles;
}

// Load career statistics
function loadCareerStats() {
    const timeline = document.querySelector('.timeline');
    
    // Clear existing content
    timeline.innerHTML = '';
    
    // Add career timeline items
    playerData.career.forEach(careerItem => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-year">${careerItem.year}</div>
            <div class="timeline-content">
                <h4>${careerItem.team}</h4>
                <p>${careerItem.stats}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Load performance charts
function loadPerformanceCharts() {
    const goalsChart = document.getElementById('goalsChart');
    const assistsChart = document.getElementById('assistsChart');
    
    // Create simple bar charts using CSS
    goalsChart.innerHTML = createBarChart(playerData.performance.goals, playerData.performance.months, 'Gol');
    assistsChart.innerHTML = createBarChart(playerData.performance.assists, playerData.performance.months, 'Asist');
}

// Create simple bar chart
function createBarChart(data, labels, title) {
    const maxValue = Math.max(...data);
    
    let chartHTML = `<div style="text-align: center; margin-bottom: 20px; color: #ffffff; font-weight: 600;">${title} Performansı</div>`;
    chartHTML += '<div style="display: flex; align-items: end; justify-content: space-around; height: 200px; gap: 10px;">';
    
    data.forEach((value, index) => {
        const height = (value / maxValue) * 100;
        const barColor = title === 'Gol' ? '#E60012' : '#00FF00';
        
        chartHTML += `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
                <div style="
                    width: 30px; 
                    height: ${height}%; 
                    background: ${barColor}; 
                    border-radius: 4px 4px 0 0;
                    transition: all 0.3s ease;
                "></div>
                <div style="color: #cccccc; font-size: 0.8rem; text-align: center;">
                    <div>${value}</div>
                    <div>${labels[index]}</div>
                </div>
            </div>
        `;
    });
    
    chartHTML += '</div>';
    return chartHTML;
}

// Load match history
function loadMatchHistory() {
    const matchesList = document.getElementById('matchesList');
    
    // Clear existing content
    matchesList.innerHTML = '';
    
    // Add match history items
    playerData.matches.forEach(match => {
        const matchItem = document.createElement('div');
        matchItem.className = 'match-item';
        
        const resultClass = match.result.includes('W') ? 'win' : 
                           match.result.includes('L') ? 'loss' : 'draw';
        
        matchItem.innerHTML = `
            <div class="match-info">
                <div class="match-date">${formatDate(match.date)}</div>
                <div class="match-teams">vs ${match.opponent} (${match.venue})</div>
            </div>
            <div class="match-result">${match.result}</div>
            <div style="color: #cccccc; font-size: 0.9rem;">
                ${match.goals} gol, ${match.assists} asist
            </div>
        `;
        
        matchesList.appendChild(matchItem);
    });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('tr-TR', options);
} 