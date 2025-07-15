// Results Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const weekFilter = document.getElementById('weekFilter');
    const teamFilter = document.getElementById('teamFilter');
    const resultFilter = document.getElementById('resultFilter');
    const dateFilter = document.getElementById('dateFilter');

    [weekFilter, teamFilter, resultFilter, dateFilter].forEach(filter => {
        filter.addEventListener('change', () => {
            loadResults();
        });
    });

    // Pagination functionality
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadResults();
        }
    });

    nextPage.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadResults();
        }
    });

    // Initialize page
    loadWeeks();
    loadTeams();
    loadResults();
});

let currentPage = 1;
const resultsPerPage = 10;
let totalPages = 1;

// Load weeks for filter dropdown
function loadWeeks() {
    const weekFilter = document.getElementById('weekFilter');
    
    for (let i = 1; i <= 34; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i}. Hafta`;
        weekFilter.appendChild(option);
    }
}

// Load teams for filter dropdown
function loadTeams() {
    const teamFilter = document.getElementById('teamFilter');
    
    const teams = [
        'Galatasaray', 'Fenerbahçe', 'Beşiktaş', 'Trabzonspor', 'Adana Demirspor',
        'Antalyaspor', 'Konyaspor', 'Kayserispor', 'Alanyaspor', 'Sivasspor',
        'Kasımpaşa', 'Gaziantep FK', 'İstanbul Başakşehir', 'Fatih Karagümrük',
        'Giresunspor', 'Ankaragücü', 'Konyaspor', 'Hatayspor'
    ];

    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });
}

// Load results
function loadResults() {
    // Sample results data
    const allResults = [
        { week: 1, date: '2025-08-15', homeTeam: 'Galatasaray', awayTeam: 'Fenerbahçe', homeScore: 2, awayScore: 1, venue: 'NEF Arena', attendance: '52000', status: 'Tamamlandı' },
        { week: 1, date: '2025-08-15', homeTeam: 'Beşiktaş', awayTeam: 'Trabzonspor', homeScore: 1, awayScore: 1, venue: 'Vodafone Park', attendance: '41000', status: 'Tamamlandı' },
        { week: 1, date: '2025-08-16', homeTeam: 'Adana Demirspor', awayTeam: 'Antalyaspor', homeScore: 3, awayScore: 0, venue: '5 Ocak Stadyumu', attendance: '33000', status: 'Tamamlandı' },
        { week: 2, date: '2025-08-22', homeTeam: 'Fenerbahçe', awayTeam: 'Beşiktaş', homeScore: 2, awayScore: 2, venue: 'Ülker Stadyumu', attendance: '47000', status: 'Tamamlandı' },
        { week: 2, date: '2025-08-22', homeTeam: 'Trabzonspor', awayTeam: 'Galatasaray', homeScore: 0, awayScore: 2, venue: 'Şenol Güneş Spor Kompleksi', attendance: '40000', status: 'Tamamlandı' },
        { week: 2, date: '2025-08-23', homeTeam: 'Antalyaspor', awayTeam: 'Konyaspor', homeScore: 1, awayScore: 0, venue: 'Antalya Stadyumu', attendance: '25000', status: 'Tamamlandı' },
        { week: 3, date: '2025-08-29', homeTeam: 'Galatasaray', awayTeam: 'Beşiktaş', homeScore: 3, awayScore: 1, venue: 'NEF Arena', attendance: '52000', status: 'Tamamlandı' },
        { week: 3, date: '2025-08-29', homeTeam: 'Fenerbahçe', awayTeam: 'Trabzonspor', homeScore: 2, awayScore: 0, venue: 'Ülker Stadyumu', attendance: '47000', status: 'Tamamlandı' },
        { week: 3, date: '2025-08-30', homeTeam: 'Konyaspor', awayTeam: 'Adana Demirspor', homeScore: 1, awayScore: 1, venue: 'Konya Büyükşehir Belediye Stadyumu', attendance: '22000', status: 'Tamamlandı' },
        { week: 4, date: '2025-09-05', homeTeam: 'Beşiktaş', awayTeam: 'Fenerbahçe', homeScore: 0, awayScore: 1, venue: 'Vodafone Park', attendance: '41000', status: 'Tamamlandı' },
        { week: 4, date: '2025-09-05', homeTeam: 'Trabzonspor', awayTeam: 'Galatasaray', homeScore: 1, awayScore: 1, venue: 'Şenol Güneş Spor Kompleksi', attendance: '40000', status: 'Tamamlandı' },
        { week: 4, date: '2025-09-06', homeTeam: 'Adana Demirspor', awayTeam: 'Antalyaspor', homeScore: 2, awayScore: 1, venue: '5 Ocak Stadyumu', attendance: '33000', status: 'Tamamlandı' },
        { week: 5, date: '2025-09-12', homeTeam: 'Galatasaray', awayTeam: 'Adana Demirspor', homeScore: 4, awayScore: 0, venue: 'NEF Arena', attendance: '52000', status: 'Tamamlandı' },
        { week: 5, date: '2025-09-12', homeTeam: 'Fenerbahçe', awayTeam: 'Konyaspor', homeScore: 3, awayScore: 1, venue: 'Ülker Stadyumu', attendance: '47000', status: 'Tamamlandı' },
        { week: 5, date: '2025-09-13', homeTeam: 'Beşiktaş', awayTeam: 'Trabzonspor', homeScore: 2, awayScore: 2, venue: 'Vodafone Park', attendance: '41000', status: 'Tamamlandı' }
    ];

    // Apply filters
    let filteredResults = applyFilters(allResults);

    // Calculate pagination
    totalPages = Math.ceil(filteredResults.length / resultsPerPage);
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const pageResults = filteredResults.slice(startIndex, endIndex);

    // Update results display
    updateResultsDisplay(pageResults);
    updatePagination();
    updateSummaryStats(filteredResults);
}

// Apply filters to results
function applyFilters(results) {
    const weekFilter = document.getElementById('weekFilter').value;
    const teamFilter = document.getElementById('teamFilter').value;
    const resultFilter = document.getElementById('resultFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;

    return results.filter(result => {
        // Week filter
        if (weekFilter && result.week != weekFilter) return false;
        
        // Team filter
        if (teamFilter && result.homeTeam !== teamFilter && result.awayTeam !== teamFilter) return false;
        
        // Result filter
        if (resultFilter) {
            const homeWin = result.homeScore > result.awayScore;
            const awayWin = result.awayScore > result.homeScore;
            const draw = result.homeScore === result.awayScore;
            
            if (resultFilter === 'home' && !homeWin) return false;
            if (resultFilter === 'away' && !awayWin) return false;
            if (resultFilter === 'draw' && !draw) return false;
        }
        
        // Date filter
        if (dateFilter && result.date !== dateFilter) return false;
        
        return true;
    });
}

// Update results display
function updateResultsDisplay(results) {
    const resultsList = document.getElementById('resultsList');
    
    // Clear existing content
    resultsList.innerHTML = '';

    if (results.length === 0) {
        resultsList.innerHTML = `
            <div style="text-align: center; color: #cccccc; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>Sonuç bulunamadı</h3>
                <p>Seçilen kriterlere uygun maç sonucu bulunamadı.</p>
            </div>
        `;
        return;
    }

    results.forEach(result => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.style.position = 'relative';
        
        const resultType = result.homeScore > result.awayScore ? 'home' : 
                          result.awayScore > result.homeScore ? 'away' : 'draw';
        
        matchCard.innerHTML = `
            <div class="match-header">
                <div class="match-week">${result.week}. Hafta</div>
                <div class="match-date">${formatDate(result.date)}</div>
            </div>
            <div class="match-content">
                <div class="team-info">
                    <div class="team-logo">${result.homeTeam.charAt(0)}</div>
                    <div class="team-name">${result.homeTeam}</div>
                </div>
                <div class="match-score">
                    <div class="score">${result.homeScore}</div>
                    <div class="score-separator">-</div>
                    <div class="score">${result.awayScore}</div>
                </div>
                <div class="team-info">
                    <div class="team-logo">${result.awayTeam.charAt(0)}</div>
                    <div class="team-name">${result.awayTeam}</div>
                </div>
            </div>
            <div class="match-details">
                <div class="match-venue">${result.venue}</div>
                <div class="match-attendance">${result.attendance} seyirci</div>
            </div>
            <button class="info-button" onclick="window.location.href='fixture.html?home=${encodeURIComponent(result.homeTeam)}&away=${encodeURIComponent(result.awayTeam)}&week=${result.week}'" title="Maç Detayları">
                <i class="fas fa-info"></i>
            </button>
        `;
        
        resultsList.appendChild(matchCard);
    });
}

// Update pagination
function updatePagination() {
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');
    
    // Update button states
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages;
    
    // Update page numbers
    pageNumbers.innerHTML = '';
    
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            loadResults();
        });
        pageNumbers.appendChild(pageNumber);
    }
}

// Update summary statistics
function updateSummaryStats(results) {
    let homeWins = 0;
    let awayWins = 0;
    let draws = 0;
    
    results.forEach(result => {
        if (result.homeScore > result.awayScore) {
            homeWins++;
        } else if (result.awayScore > result.homeScore) {
            awayWins++;
        } else {
            draws++;
        }
    });
    
    document.getElementById('totalMatches').textContent = results.length;
    document.getElementById('homeWins').textContent = homeWins;
    document.getElementById('awayWins').textContent = awayWins;
    document.getElementById('draws').textContent = draws;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('tr-TR', options);
} 