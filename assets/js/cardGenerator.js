// Pagination state
let currentPage = 1;
const cardsPerPage = 14;

// Kart oluşturma fonksiyonu
function generateTeamCards(data) {
    // Get the currently selected league
    const leagueSelect = document.getElementById('leagueSelect');
    const selectedLeague = leagueSelect ? leagueSelect.value : 'default';

    // League logos mapping
    const leagueLogos = {
        default: '', // No logo for default theme
        superlig: 'https://www.tff.org/Resources/TFF/Images/0000000015/TFF/TFF-Logolar/2024-2025/trendyol-super-lig-dikey-logo.png',
        turkiyekupasi: 'https://upload.wikimedia.org/wikipedia/tr/6/61/Ziraat_T%C3%BCrkiye_Kupas%C4%B1_logosu.png',
        superkupasi: 'https://upload.wikimedia.org/wikipedia/tr/thumb/6/61/T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png/250px-T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png',
        championsleague: 'assets/tournaments/ucl.png',
        europaleague: 'assets/tournaments/uel.png',
        conferenceleague: 'assets/tournaments/uecl.png'
    };

    // Calculate pagination for players
    let paginatedPlayers;
    let totalCards = data.players.length;
    
    // If manager exists and we're on first page, account for manager card
    const managerOnFirstPage = currentPage === 1 && data.manager;
    const playersPerPage = managerOnFirstPage ? cardsPerPage - 1 : cardsPerPage;
    
    if (currentPage === 1) {
        // İlk sayfa: Manager varsa manager + (cardsPerPage - 1) oyuncu, yoksa cardsPerPage oyuncu
        paginatedPlayers = data.players.slice(0, playersPerPage);
    } else {
        // Sonraki sayfalar: Geçmiş sayfalardan sonra kalan oyuncular
        const firstPagePlayers = data.manager ? cardsPerPage - 1 : cardsPerPage;
        const startIndex = firstPagePlayers + ((currentPage - 2) * cardsPerPage);
        const endIndex = startIndex + cardsPerPage;
        paginatedPlayers = data.players.slice(startIndex, endIndex);
    }
    
    // Toplam sayfa sayısı hesaplama
    const totalCardsIncludingManager = totalCards + (data.manager ? 1 : 0);
    const totalPages = Math.ceil(totalCardsIncludingManager / cardsPerPage);

    return `
        <div class="header">
            <div class="logo-container">
                <img src="${data.logo}" alt="${data.name}" class="team-logo-container" onerror="this.style.display='none'">
            </div>
            <div class="header-text">
                <h1 id="team-name">${data.name}</h1>
                <div class="header-actions">
                    <p>${data.season}</p>
                    <button class="lineup-button" onclick="window.location.href='lineup.html'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.9 273 448 256 448s-33.5-2.1-49.2-6.4l-17.6-69.6c-1.2-5.1-4.2-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.7L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.8 9.1 9.2 11.9l60.7 38.2c-1.9 34.5-12.8 66.5-30.4 93.7zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"/>
                        </svg>
                        Dizilişe Git
                    </button>
                </div>
            </div>
            <div class="league-selector">
                <div class="league-toggle">
                    <select id="leagueSelect" class="league-select" onchange="handleLeagueChange(this.value)">
                        <option value="default" selected>Takım Renkleri</option>
                        <option value="superlig">Trendyol Süper Lig</option>
                        <option value="turkiyekupasi">Ziraat Türkiye Kupası</option>
                        <option value="superkupasi">TFF Süper Kupa</option>
                        <option value="championsleague">UEFA Champions League</option>
                        <option value="europaleague">UEFA Europa League</option>
                        <option value="conferenceleague">UEFA Conference League</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cards-grid theme-${selectedLeague}">
            ${currentPage === 1 && data.manager ? `
            <div class="player-card ${data.cardTeamName}" draggable="true" data-position="MAN">
                <div class="card-glow"></div>
                <div class="card-shine"></div>
                <div class="league-indicator" style="background-image: url('${leagueLogos[selectedLeague]}'); ${selectedLeague === 'default' ? 'display: none;' : ''}"></div>

                <div class="rating-badge" style="background: linear-gradient(145deg, #C0C0C0 0%, #A0A0A0 100%)">
                    <div class="rating-number" style="color: #000000">${data.manager.rating}</div>
                    <div class="rating-type" style="color: #000000">MAN</div>
                </div>

                <div class="position-badge">TEKNİK DİREKTÖR</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="${data.manager.image}" alt="${data.manager.name}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/4206/4206265.png'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">${data.manager.name}</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">${data.manager.stats.tactic}</div>
                            <div class="stat-label">TAK</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${data.manager.stats.motivation}</div>
                            <div class="stat-label">MOT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${data.manager.stats.leadership}</div>
                            <div class="stat-label">LİD</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="${data.manager.nationality.flag}" alt="${data.manager.nationality.name}" class="country-flag">
                            ${data.manager.nationality.code} • ${data.manager.age} yaş
                        </div>
                        <div>MAN</div>
                    </div>
                </div>
            </div>
            ` : ''}
            ${paginatedPlayers.map(player => `
                <div class="player-card ${data.cardTeamName}">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    ${player.isCaptain ? '<div class="captain-badge">C</div>' : ''}
                    <div class="league-indicator" style="background-image: url('${leagueLogos[selectedLeague]}'); ${selectedLeague === 'default' ? 'display: none;' : ''}"></div>

                    <div class="rating-badge">
                        <div class="rating-number">${player.rating}</div>
                        <div class="rating-type">${player.position}</div>
                    </div>

                    <div class="position-badge">${player.ratingPosition}</div>

                    <div class="player-image-container">
                        <div class="player-image">
                            <img src="${player.image}" alt="${player.name}" onerror="this.src='${player.position === 'MAN' ? 'https://cdn-icons-png.flaticon.com/512/4206/4206265.png' : 'https://cdn-icons-png.flaticon.com/512/607/607445.png'}'">
                        </div>
                    </div>

                    <div class="player-info">
                        <div class="player-name">${player.name}</div>

                        <div class="player-stats">
                            ${Object.entries(player.stats).map(([stat, value]) => `
                            <div class="stat">
                                <div class="stat-value">${value}</div>
                                <div class="stat-label">${stat}</div>
                            </div>
                            `).join('')}
                        </div>

                        <div class="player-details">
                            <div>
                                <img src="${player.nationality.flag}" alt="${player.nationality.name}" class="country-flag">
                                ${player.nationality.name} • ${player.age} yaş
                            </div>
                            <div># ${player.number}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="pagination">
            <button onclick="changePage(1)" class="pagination-button ${currentPage === 1 ? 'active' : ''}" ${currentPage === 1 ? 'disabled' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
                </svg>
            </button>
            <button onclick="changePage(${currentPage - 1})" class="pagination-button" ${currentPage === 1 ? 'disabled' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
            </button>
            ${generatePageNumbers(currentPage, totalPages)}
            <button onclick="changePage(${currentPage + 1})" class="pagination-button" ${currentPage === totalPages ? 'disabled' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                </svg>
            </button>
            <button onclick="changePage(${totalPages})" class="pagination-button ${currentPage === totalPages ? 'active' : ''}" ${currentPage === totalPages ? 'disabled' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
                </svg>
            </button>
        </div>
    `;
}

// Generate page numbers for pagination
function generatePageNumbers(currentPage, totalPages) {
    let pages = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages += `<button onclick="changePage(${i})" class="pagination-button ${currentPage === i ? 'active' : ''}">${i}</button>`;
    }

    return pages;
}

// Change page function
function changePage(page) {
    currentPage = page;
    const activeTeamButton = document.querySelector('.team-button.active');
    if (activeTeamButton) {
        loadAndGenerateTeamCards(activeTeamButton.dataset.team)
            .then(html => {
                document.querySelector('.main-content').innerHTML = html;
            });
    }
}

// League change handler function
function handleLeagueChange(selectedLeague) {
    const cardsGrid = document.querySelector('.cards-grid');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('.header');
    const headerText = document.querySelector('.header-text h1');
    const leagueLogos = {
        default: '', // No logo for default theme
        superlig: 'https://www.tff.org/Resources/TFF/Images/0000000015/TFF/TFF-Logolar/2024-2025/trendyol-super-lig-dikey-logo.png',
        championsleague: 'assets/tournaments/ucl.png',
        europaleague: 'assets/tournaments/uel.png',
        conferenceleague: 'assets/tournaments/uecl.png',
        turkiyekupasi: 'https://upload.wikimedia.org/wikipedia/tr/6/61/Ziraat_T%C3%BCrkiye_Kupas%C4%B1_logosu.png',
        superkupasi: 'https://upload.wikimedia.org/wikipedia/tr/thumb/6/61/T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png/250px-T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png'
    };

    // Remove all theme classes from main content
    mainContent.className = mainContent.className.replace(/theme-\w+/g, '');
    // Add new theme class to main content
    mainContent.classList.add(`theme-${selectedLeague}`);

    // Update theme class for cards grid
    cardsGrid.className = `cards-grid theme-${selectedLeague}`;

    // Update header theme
    header.className = `header theme-${selectedLeague}`;

    // Update all league indicators
    const leagueIndicators = document.querySelectorAll('.league-indicator');
    if (selectedLeague === 'default') {
        // Hide league indicators for default theme
        leagueIndicators.forEach(indicator => {
            indicator.style.display = 'none';
        });
    } else {
        // Show and update league indicators for other themes
        leagueIndicators.forEach(indicator => {
            indicator.style.display = 'block';
            indicator.style.backgroundImage = `url('${leagueLogos[selectedLeague]}')`;
        });
    }
    
    // Update theme classes to include team information
    const activeTeamButton = document.querySelector('.team-button.active');
    if (activeTeamButton && selectedLeague !== 'default') {
        const teamName = activeTeamButton.dataset.team;
        
        // Remove team-specific classes for non-default themes
        if (mainContent) {
            mainContent.className = mainContent.className.replace(/team-\w+/g, '');
        }
        if (cardsGrid) {
            cardsGrid.className = cardsGrid.className.replace(/team-\w+/g, '');
        }
        if (header) {
            header.className = header.className.replace(/team-\w+/g, '');
        }
    } else if (activeTeamButton && selectedLeague === 'default') {
        // Apply team-specific classes for default theme
        const teamName = activeTeamButton.dataset.team;
        if (mainContent) {
            mainContent.className = mainContent.className.replace(/team-\w+/g, '');
            mainContent.classList.add(`team-${teamName}`);
        }
        if (cardsGrid) {
            cardsGrid.className = cardsGrid.className.replace(/team-\w+/g, '');
            cardsGrid.classList.add(`team-${teamName}`);
        }
        if (header) {
            header.className = header.className.replace(/team-\w+/g, '');
            header.classList.add(`team-${teamName}`);
        }
    }
}

// Takım verilerini yükle
async function loadTeamData(team) {
    if (team === 'all') {
        return Promise.all([
            fetch('assets/data/galatasaray.json').then(response => response.json()),
            fetch('assets/data/fenerbahce.json').then(response => response.json()),
            fetch('assets/data/besiktas.json').then(response => response.json()),
            fetch('assets/data/trabzonspor.json').then(response => response.json()),
            fetch('assets/data/basaksehir.json').then(response => response.json()),
            fetch('assets/data/antalyaspor.json').then(response => response.json()),
            fetch('assets/data/konyaspor.json').then(response => response.json()),
            fetch('assets/data/alanyaspor.json').then(response => response.json()),
            fetch('assets/data/kayserispor.json').then(response => response.json()),
            fetch('assets/data/gaziantep.json').then(response => response.json()),
            fetch('assets/data/kocaelispor.json').then(response => response.json()),
            fetch('assets/data/genclerbirligi.json').then(response => response.json()),
            fetch('assets/data/karagumruk.json').then(response => response.json()),
            fetch('assets/data/rizespor.json').then(response => response.json()),
            fetch('assets/data/goztepe.json').then(response => response.json()),
            fetch('assets/data/samsunspor.json').then(response => response.json()),
            fetch('assets/data/eyupspor.json').then(response => response.json())
        ]).then(results => {
            let allPlayers = [];
            results.forEach(teamData => {
                allPlayers = allPlayers.concat(teamData.players);
                if (teamData.manager) {
                    allPlayers.push({
                        ...teamData.manager,
                        position: 'MAN',
                        ratingPosition: 'TEKNİK DİREKTÖR'
                    });
                }
            });
            return { players: allPlayers };
        });
    } else {
        return fetch(`assets/data/${team}.json`).then(response => response.json());
    }
}

// Takım verilerini yükleyip kart HTML'ini oluşturan fonksiyon
async function loadAndGenerateTeamCards(teamName) {
    try {
        const data = await loadTeamData(teamName);
        return generateTeamCards(data);
    } catch (error) {
        console.error('Takım verileri yüklenirken hata oluştu:', error);
        return `
            <div style="grid-column: 1 / -1; text-align: center; padding: 100px 20px;">
                <h2 style="color: #E60012; font-size: 2.5rem; margin-bottom: 20px;">
                    ${teamName.toUpperCase()}
                </h2>
                <p style="color: #333333; font-size: 1.2rem; opacity: 0.8;">
                    Oyuncu kartları yakında gelecek! 🔥
                </p>
                <div style="margin-top: 30px; font-size: 4rem;">
                    ⚽🚀
                </div>
            </div>
        `;
    }
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = `player-card ${player.team.toLowerCase()}`;
    card.setAttribute('draggable', 'true');
    card.setAttribute('data-position', player.position);

    // Add button for mobile
    const addButton = document.createElement('button');
    addButton.className = 'add-to-field-btn';
    addButton.innerHTML = '+';
    addButton.setAttribute('aria-label', 'Sahaya Ekle');
    card.appendChild(addButton);

    // Card glow and shine effects
    const cardGlow = document.createElement('div');
    cardGlow.className = 'card-glow';
    card.appendChild(cardGlow);

    const cardShine = document.createElement('div');
    cardShine.className = 'card-shine';
    card.appendChild(cardShine);

    // Rating badge
    const ratingBadge = document.createElement('div');
    ratingBadge.className = 'rating-badge';
    if (player.position === 'MAN') {
        ratingBadge.style.background = 'linear-gradient(145deg, #C0C0C0 0%, #A0A0A0 100%)';
    }
    
    const ratingNumber = document.createElement('div');
    ratingNumber.className = 'rating-number';
    ratingNumber.textContent = player.rating;
    if (player.position === 'MAN') {
        ratingNumber.style.color = '#000000';
    }
    
    const ratingType = document.createElement('div');
    ratingType.className = 'rating-type';
    ratingType.textContent = player.position;
    if (player.position === 'MAN') {
        ratingType.style.color = '#000000';
    }
    
    ratingBadge.appendChild(ratingNumber);
    ratingBadge.appendChild(ratingType);
    card.appendChild(ratingBadge);

    // Position badge
    const positionBadge = document.createElement('div');
    positionBadge.className = 'position-badge';
    positionBadge.textContent = player.ratingPosition || (player.position === 'MAN' ? 'TEKNİK DİREKTÖR' : player.position);
    card.appendChild(positionBadge);

    // Player image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'player-image-container';
    
    const playerImage = document.createElement('div');
    playerImage.className = 'player-image';
    
    const img = document.createElement('img');
    img.src = player.image;
    img.alt = player.name;
    img.onerror = function() { this.src = player.position === 'MAN' ? 'https://cdn-icons-png.flaticon.com/512/4206/4206265.png' : 'https://cdn-icons-png.flaticon.com/512/607/607445.png'; };
    
    playerImage.appendChild(img);
    imageContainer.appendChild(playerImage);
    card.appendChild(imageContainer);

    // Player info
    const playerInfo = document.createElement('div');
    playerInfo.className = 'player-info';
    
    const playerName = document.createElement('div');
    playerName.className = 'player-name';
    playerName.textContent = player.name;
    playerInfo.appendChild(playerName);

    // Stats section
    const statsSection = document.createElement('div');
    statsSection.className = 'player-stats';
    
    if (player.position === 'MAN') {
        // Manager stats
        const managerStats = ['tactic', 'motivation', 'leadership'];
        const statLabels = { tactic: 'TAK', motivation: 'MOT', leadership: 'LİD' };
        
        managerStats.forEach(stat => {
            const statDiv = document.createElement('div');
            statDiv.className = 'stat';
            
            const statValue = document.createElement('div');
            statValue.className = 'stat-value';
            statValue.textContent = player.stats[stat];
            
            const statLabel = document.createElement('div');
            statLabel.className = 'stat-label';
            statLabel.textContent = statLabels[stat];
            
            statDiv.appendChild(statValue);
            statDiv.appendChild(statLabel);
            statsSection.appendChild(statDiv);
        });
    } else {
        // Player stats
        Object.entries(player.stats).forEach(([stat, value]) => {
            const statDiv = document.createElement('div');
            statDiv.className = 'stat';
            
            const statValue = document.createElement('div');
            statValue.className = 'stat-value';
            statValue.textContent = value;
            
            const statLabel = document.createElement('div');
            statLabel.className = 'stat-label';
            statLabel.textContent = stat;
            
            statDiv.appendChild(statValue);
            statDiv.appendChild(statLabel);
            statsSection.appendChild(statDiv);
        });
    }
    
    playerInfo.appendChild(statsSection);

    // Player details
    const playerDetails = document.createElement('div');
    playerDetails.className = 'player-details';
    
    const detailsLeft = document.createElement('div');
    const flag = document.createElement('img');
    flag.src = player.nationality.flag;
    flag.alt = player.nationality.name;
    flag.className = 'country-flag';
    detailsLeft.appendChild(flag);
    detailsLeft.appendChild(document.createTextNode(` ${player.nationality.name} • ${player.age} yaş`));
    
    const detailsRight = document.createElement('div');
    detailsRight.textContent = player.position === 'MAN' ? 'MAN' : `# ${player.number}`;
    
    playerDetails.appendChild(detailsLeft);
    playerDetails.appendChild(detailsRight);
    playerInfo.appendChild(playerDetails);

    card.appendChild(playerInfo);

    // Add click handler for mobile add button
    addButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const availablePoints = document.querySelectorAll('.formation-point:not(.occupied)');
        const validPoints = Array.from(availablePoints).filter(point => {
            return point.getAttribute('data-position') === player.position ||
                   (player.position === 'MAN' && point.classList.contains('manager-area'));
        });

        if (validPoints.length > 0) {
            const firstValidPoint = validPoints[0];
            const cardClone = card.cloneNode(true);
            cardClone.style.position = 'absolute';
            
            if (player.position === 'MAN') {
                const managerArea = document.querySelector('.manager-area');
                if (managerArea) {
                    managerArea.innerHTML = '';
                    managerArea.appendChild(cardClone);
                    managerArea.classList.add('occupied');
                }
            } else {
                firstValidPoint.appendChild(cardClone);
                firstValidPoint.classList.add('occupied');
                
                // Position the card properly
                cardClone.style.left = '50%';
                cardClone.style.top = '50%';
                cardClone.style.transform = 'translate(-50%, -50%) scale(0.5)';
            }

            // Add delete functionality to the cloned card
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML = '×';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                if (player.position === 'MAN') {
                    const managerArea = document.querySelector('.manager-area');
                    managerArea.innerHTML = '<div class="manager-placeholder">Teknik Direktör</div>';
                    managerArea.classList.remove('occupied');
                } else {
                    firstValidPoint.innerHTML = '';
                    firstValidPoint.classList.remove('occupied');
                }
            });
            cardClone.appendChild(deleteButton);
        } else {
            alert('Bu pozisyon için uygun boş alan bulunamadı!');
        }
    });

    // Make card draggable
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', '');
        e.dataTransfer.effectAllowed = 'move';
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });

    return card;
} 