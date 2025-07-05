// Kart oluşturma fonksiyonu
function generateTeamCards(data) {
    return `
        <div class="header">
            <div class="logo-container">
                <img src="${data.logo}" alt="${data.name}" class="team-logo" onerror="this.style.display='none'">
            </div>
            <div class="header-text">
                <h1 id="team-name">${data.name}</h1>
                <div class="header-actions">
                    <p>${data.season}</p>
                    <button class="lineup-button" onclick="window.location.href='lineup.html'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        Dizilişe Git
                    </button>
                </div>
            </div>
        </div>

        <div class="cards-grid">
            ${data.players.map(player => `
                <div class="player-card ${data.cardTeamName}">
                    <div class="card-glow"></div>
                    <div class="card-shine"></div>
                    ${player.isCaptain ? '<div class="captain-badge">C</div>' : ''}

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

// Takım verilerini yükleyip kart HTML'ini oluşturan fonksiyon
async function loadAndGenerateTeamCards(teamName) {
    try {
        const response = await fetch(`assets/data/${teamName}.json`);
        const data = await response.json();
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