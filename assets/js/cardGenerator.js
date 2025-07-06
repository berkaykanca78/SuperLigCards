// Kart oluşturma fonksiyonu
function generateTeamCards(data) {
    // Get the currently selected league
    const leagueSelect = document.getElementById('leagueSelect');
    const selectedLeague = leagueSelect ? leagueSelect.value : 'superlig';

    // League logos mapping
    const leagueLogos = {
        superlig: 'https://www.tff.org/Resources/TFF/Images/0000000015/TFF/TFF-Logolar/2024-2025/trendyol-super-lig-dikey-logo.png',
        turkiyekupasi: 'https://upload.wikimedia.org/wikipedia/tr/6/61/Ziraat_T%C3%BCrkiye_Kupas%C4%B1_logosu.png',
        superkupasi: 'https://upload.wikimedia.org/wikipedia/tr/thumb/6/61/T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png/250px-T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png',
        championsleague: 'assets/tournaments/ucl.png',
        europaleague: 'assets/tournaments/uel.png',
        conferenceleague: 'assets/tournaments/uecl.png'
    };

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
                        <option value="superlig" selected>Trendyol Süper Lig</option>
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
            ${data.players.map(player => `
                <div class="player-card ${data.cardTeamName}">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    ${player.isCaptain ? '<div class="captain-badge">C</div>' : ''}
                    <div class="league-indicator" style="background-image: url('${leagueLogos[selectedLeague]}')"></div>

                    <div class="rating-badge">
                        <div class="rating-number">${player.rating}</div>
                        <div class="rating-type">${player.position}</div>
                    </div>

                    <div class="position-badge">${player.ratingPosition}</div>

                    <div class="player-image-container">
                        <div class="player-image">
                            <img src="${player.image}" alt="${player.name}" onerror="this.style.display='none'">
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

            ${data.manager ? `
            <div class="player-card ${data.cardTeamName}" draggable="true" data-position="MAN">
                <div class="card-glow"></div>
                <div class="card-shine"></div>
                <div class="league-indicator" style="background-image: url('${leagueLogos[selectedLeague]}')"></div>

                <div class="rating-badge" style="background: linear-gradient(145deg, #C0C0C0 0%, #A0A0A0 100%)">
                    <div class="rating-number" style="color: #000000">${data.manager.rating}</div>
                    <div class="rating-type" style="color: #000000">MAN</div>
                </div>

                <div class="position-badge">TEKNİK DİREKTÖR</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="${data.manager.image}" alt="${data.manager.name}">
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
        </div>
    `;
}

// League change handler function
function handleLeagueChange(selectedLeague) {
    const cardsGrid = document.querySelector('.cards-grid');
    const leagueLogos = {
        superlig: 'https://www.tff.org/Resources/TFF/Images/0000000015/TFF/TFF-Logolar/2024-2025/trendyol-super-lig-dikey-logo.png',
        championsleague: 'assets/tournaments/ucl.png',
        europaleague: 'assets/tournaments/uel.png',
        conferenceleague: 'assets/tournaments/uecl.png',
        turkiyekupasi: 'https://upload.wikimedia.org/wikipedia/tr/6/61/Ziraat_T%C3%BCrkiye_Kupas%C4%B1_logosu.png',
        superkupasi: 'https://upload.wikimedia.org/wikipedia/tr/thumb/6/61/T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png/250px-T%C3%BCrkiye_S%C3%BCper_Kupas%C4%B1_logo.png'
    };

    // Update theme class
    cardsGrid.className = `cards-grid theme-${selectedLeague}`;

    // Update all league indicators
    const leagueIndicators = document.querySelectorAll('.league-indicator');
    leagueIndicators.forEach(indicator => {
        indicator.style.backgroundImage = `url('${leagueLogos[selectedLeague]}')`;
    });
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