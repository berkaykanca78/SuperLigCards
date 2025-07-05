// Takım kart fonksiyonları
function showGalatasarayCards() {
    return `
        <div class="cards-grid">
            <!-- Mauro Icardi -->
            <div class="player-card galatasaray" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">86</div>
                    <div class="rating-type">ST</div>
                </div>

                <div class="position-badge">FORVET</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/icardi.png"
                            alt="Mauro Icardi" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">MAURO ICARDI</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">89</div>
                            <div class="stat-label">BİT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">85</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">82</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png"
                                alt="Argentina" class="country-flag">
                            ARG • 32 yaş
                        </div>
                        <div># 9</div>
                    </div>
                </div>

            </div>

            <!-- Leroy Sané -->
            <div class="player-card galatasaray" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">85</div>
                    <div class="rating-type">LM</div>
                </div>

                <div class="position-badge">SOL KANAT</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="./assets/players/sane.png" alt="Leroy Sané"
                            onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">LEROY SANÉ</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">93</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">87</div>
                            <div class="stat-label">DRİB</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">84</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/40.png"
                                alt="Germany" class="country-flag">
                            GER • 28 yaş
                        </div>
                        <div># 10</div>
                    </div>
                </div>

            </div>

            <!-- Davinson Sanchez -->
            <div class="player-card galatasaray" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">82</div>
                    <div class="rating-type">CB</div>
                </div>

                <div class="position-badge">DEFANS</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/davinson.png"
                            alt="Davinson Sanchez" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">DAVINSON SANCHEZ</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">78</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">85</div>
                            <div class="stat-label">DEF</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">89</div>
                            <div class="stat-label">FİZ</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png"
                                alt="Colombia" class="country-flag">
                            COL • 28 yaş
                        </div>
                        <div># 6</div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

function showFenerbahceCards() {
    return `
        <div class="cards-grid">
            <!-- John Duran -->
            <div class="player-card fenerbahce" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">80</div>
                    <div class="rating-type">ST</div>
                </div>

                <div class="position-badge">FORVET</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/duran.png"
                            alt="John Duran" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">JHON DURÁN</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">85</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">88</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">82</div>
                            <div class="stat-label">FİZ</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/25.png" alt="Colombia" class="country-flag">
                            COL • 21 yaş
                        </div>
                        <div># 19</div>
                    </div>
                </div>

            </div>

            <!-- İrfan Can Kahveci -->
            <div class="player-card fenerbahce" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">84</div>
                    <div class="rating-type">CAM</div>
                </div>

                <div class="position-badge">ORTA SAHA</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/irfan.png"
                            alt="İrfan Can Kahveci" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">İRFAN CAN KAHVECİ</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">86</div>
                            <div class="stat-label">PAS</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">84</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">78</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/174.png" alt="Turkey" class="country-flag">
                            TUR • 29 yaş
                        </div>
                        <div># 17</div>
                    </div>
                </div>

            </div>

            <!-- Fred -->
            <div class="player-card fenerbahce" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">84</div>
                    <div class="rating-type">CDM</div>
                </div>

                <div class="position-badge">ORTA SAHA</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/fred.png"
                            alt="Fred" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">FRED</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">88</div>
                            <div class="stat-label">PAS</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">85</div>
                            <div class="stat-label">DEF</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">82</div>
                            <div class="stat-label">TEK</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/26.png" alt="Brazil" class="country-flag">
                            BRA • 31 yaş
                        </div>
                        <div># 13</div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

function showBesiktasCards() {
    return `
        <div class="cards-grid">
            <!-- Tammy Abraham -->
            <div class="player-card besiktas" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">84</div>
                    <div class="rating-type">ST</div>
                </div>

                <div class="position-badge">FORVET</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/abraham.png"
                            alt="Tammy Abraham" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">TAMMY ABRAHAM</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">87</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">83</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">89</div>
                            <div class="stat-label">FİZ</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/189.png" alt="England" class="country-flag">
                            ENG • 27 yaş
                        </div>
                        <div># 9</div>
                    </div>
                </div>

            </div>

            <!-- Rafa Silva -->
            <div class="player-card besiktas" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">85</div>
                    <div class="rating-type">RW</div>
                </div>

                <div class="position-badge">SAĞ KANAT</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/rafa.png"
                            alt="Rafa Silva" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">RAFA SILVA</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">91</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">88</div>
                            <div class="stat-label">DRİB</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">83</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/512px-Flag_of_Portugal.svg.png" alt="Portugal" class="country-flag">
                            POR • 31 yaş
                        </div>
                        <div># 27</div>
                    </div>
                </div>

            </div>

            <!-- Gedson Fernandes -->
            <div class="player-card besiktas" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">80</div>
                    <div class="rating-type">CM</div>
                </div>

                <div class="position-badge">ORTA SAHA</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/gedson.png"
                            alt="Gedson Fernandes" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">GEDSON FERNANDES</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">82</div>
                            <div class="stat-label">PAS</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">85</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">79</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/512px-Flag_of_Portugal.svg.png" alt="Portugal" class="country-flag">
                            POR • 25 yaş
                        </div>
                        <div># 83</div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

function showTrabzonsporCards() {
    return `
        <div class="cards-grid">
            <!-- Paul Onuachu -->
            <div class="player-card trabzonspor" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">83</div>
                    <div class="rating-type">ST</div>
                </div>

                <div class="position-badge">FORVET</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/onuachu.png"
                            alt="Paul Onuachu" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">PAUL ONUACHU</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">87</div>
                            <div class="stat-label">BİT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">84</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">89</div>
                            <div class="stat-label">FİZ</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/124.png" alt="Nigeria" class="country-flag">
                            NGA • 29 yaş
                        </div>
                        <div># 9</div>
                    </div>
                </div>

            </div>

            <!-- Edin Visca -->
            <div class="player-card trabzonspor" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">81</div>
                    <div class="rating-type">RW</div>
                </div>

                <div class="position-badge">SAĞ KANAT</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/visca.png"
                            alt="Edin Visca" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">EDİN VİŞĆA</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">88</div>
                            <div class="stat-label">HIZ</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">86</div>
                            <div class="stat-label">DRİB</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">82</div>
                            <div class="stat-label">ŞUT</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/80.png" alt="Bosnia" class="country-flag">
                            BIH • 34 yaş
                        </div>
                        <div># 31</div>
                    </div>
                </div>

            </div>
        
            <!-- Uğurcan Çakır -->
            <div class="player-card trabzonspor" draggable="true">
                <div class="card-glow"></div>
                <div class="card-shine"></div>

                <div class="rating-badge">
                    <div class="rating-number">84</div>
                    <div class="rating-type">GK</div>
                </div>

                <div class="position-badge">KALECİ</div>

                <div class="player-image-container">
                    <div class="player-image">
                        <img src="assets/players/ugurcan.png"
                            alt="Uğurcan Çakır" onerror="this.style.display='none'">
                    </div>
                </div>

                <div class="player-info">
                    <div class="player-name">UĞURCAN ÇAKIR</div>

                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">86</div>
                            <div class="stat-label">REF</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">88</div>
                            <div class="stat-label">DİV</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">84</div>
                            <div class="stat-label">POS</div>
                        </div>
                    </div>

                    <div class="player-details">
                        <div>
                            <img src="https://tmssl.akamaized.net/images/flagge/verysmall/174.png" alt="Turkey" class="country-flag">
                            TUR • 28 yaş
                        </div>
                        <div># 1</div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

// Formasyon pozisyonları
const formations = {
    '4-4-2': {
        positions: [
            { x: 50, y: 93, role: 'GK', allowedRoles: ['GK'] },
            { x: 15, y: 75, role: 'LB', allowedRoles: ['LB', 'LWB'] },
            { x: 35, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 65, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 85, y: 75, role: 'RB', allowedRoles: ['RB', 'RWB'] },
            { x: 10, y: 50, role: 'LM', allowedRoles: ['LM', 'LW'] },
            { x: 35, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 65, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 90, y: 50, role: 'RM', allowedRoles: ['RM', 'RW'] },
            { x: 35, y: 20, role: 'ST', allowedRoles: ['ST', 'CF'] },
            { x: 65, y: 20, role: 'ST', allowedRoles: ['ST', 'CF'] }
        ]
    },
    '4-3-3': {
        positions: [
            { x: 50, y: 93, role: 'GK', allowedRoles: ['GK'] },
            { x: 15, y: 75, role: 'LB', allowedRoles: ['LB', 'LWB'] },
            { x: 35, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 65, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 85, y: 75, role: 'RB', allowedRoles: ['RB', 'RWB'] },
            { x: 35, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 50, y: 45, role: 'CM', allowedRoles: ['CM', 'CAM'] },  // CAM biraz ileri
            { x: 65, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 10, y: 20, role: 'LW', allowedRoles: ['LW', 'LM'] },
            { x: 50, y: 15, role: 'ST', allowedRoles: ['ST', 'CF'] },
            { x: 90, y: 20, role: 'RW', allowedRoles: ['RW', 'RM'] }
        ]
    },
    '3-5-2': {
        positions: [
            { x: 50, y: 93, role: 'GK', allowedRoles: ['GK'] },
            { x: 35, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 50, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 65, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 10, y: 45, role: 'LM', allowedRoles: ['LM', 'LWB'] },
            { x: 35, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 50, y: 45, role: 'CM', allowedRoles: ['CM', 'CAM'] },  // CAM biraz ileri
            { x: 65, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 90, y: 45, role: 'RM', allowedRoles: ['RM', 'RWB'] },
            { x: 35, y: 20, role: 'ST', allowedRoles: ['ST', 'CF'] },
            { x: 65, y: 20, role: 'ST', allowedRoles: ['ST', 'CF'] }
        ]
    },
    '4-2-3-1': {
        positions: [
            { x: 50, y: 93, role: 'GK', allowedRoles: ['GK'] },
            { x: 15, y: 75, role: 'LB', allowedRoles: ['LB', 'LWB'] },
            { x: 35, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 65, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 85, y: 75, role: 'RB', allowedRoles: ['RB', 'RWB'] },
            { x: 35, y: 60, role: 'CDM', allowedRoles: ['CDM', 'CM'] },  // CDM biraz ileri
            { x: 65, y: 60, role: 'CDM', allowedRoles: ['CDM', 'CM'] },  // CDM biraz ileri
            { x: 10, y: 35, role: 'LAM', allowedRoles: ['LM', 'LW'] },
            { x: 50, y: 35, role: 'CAM', allowedRoles: ['CAM', 'CF'] },  // CAM biraz ileri
            { x: 90, y: 35, role: 'RAM', allowedRoles: ['RM', 'RW'] },
            { x: 50, y: 15, role: 'ST', allowedRoles: ['ST', 'CF'] }
        ]
    }
};

// Formasyon değiştiğinde noktaları güncelle
document.getElementById('formation').addEventListener('change', function() {
    createFormationPoints(this.value);
    clearField();
});

// Formasyon noktalarını oluştur
function createFormationPoints(formation) {
    const formationPoints = document.getElementById('formationPoints');
    formationPoints.innerHTML = '';

    formations[formation].positions.forEach((pos, index) => {
        const point = document.createElement('div');
        point.className = 'formation-point';
        point.style.left = `${pos.x}%`;
        point.style.top = `${pos.y}%`;
        point.textContent = pos.role;
        point.dataset.index = index;

        // Pozisyon göstergesi ekle
        const indicator = document.createElement('div');
        indicator.className = 'position-indicator';
        indicator.textContent = `${pos.role} (${pos.allowedRoles.join(', ')})`;
        point.appendChild(indicator);

        formationPoints.appendChild(point);
    });
}

// Başlangıçta 4-4-2 formasyonunu göster
createFormationPoints('4-4-2');

let draggedCard = null;
let dragOffset = { x: 0, y: 0 };

function handleDragStart(e) {
    const card = e.target.closest('.player-card');
    if (!card) return;

    draggedCard = card;
    draggedCard.classList.add('dragging');

    const rect = card.getBoundingClientRect();
    dragOffset.x = e.clientX - rect.left;
    dragOffset.y = e.clientY - rect.top;

    // Create a more efficient drag image
    const dragImage = card.cloneNode(true);
    dragImage.style.transform = 'translate(-50%, -50%) scale(0.4)';
    dragImage.style.opacity = '0.9';
    dragImage.style.position = 'fixed';
    dragImage.style.left = '-1000px';
    dragImage.style.top = '-1000px';
    dragImage.style.pointerEvents = 'none';
    document.body.appendChild(dragImage);
    
    e.dataTransfer.setDragImage(dragImage, dragOffset.x, dragOffset.y);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', '');

    requestAnimationFrame(() => {
        document.body.removeChild(dragImage);
    });
}

function handleDragEnd(e) {
    if (draggedCard) {
        draggedCard.classList.remove('dragging');
        draggedCard = null;
    }
}

const field = document.querySelector('.right-panel');

field.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (!draggedCard) return;

    const rect = field.getBoundingClientRect();
    const x = ((e.clientX - dragOffset.x - rect.left) / rect.width) * 100;
    const y = ((e.clientY - dragOffset.y - rect.top) / rect.height) * 100;

    // Saha sınırları içinde tut
    const cardWidth = (draggedCard.offsetWidth / rect.width) * 100;
    const cardHeight = (draggedCard.offsetHeight / rect.height) * 100;

    const boundedX = Math.max(cardWidth / 2, Math.min(100 - cardWidth / 2, x));
    const boundedY = Math.max(cardHeight / 2, Math.min(100 - cardHeight / 2, y));

    // En yakın formasyon noktasını bul
    const points = document.querySelectorAll('.formation-point');
    let closestPoint = null;
    let minDistance = Infinity;

    points.forEach(point => {
        const pointX = parseFloat(point.style.left);
        const pointY = parseFloat(point.style.top);
        const distance = Math.sqrt(
            Math.pow(boundedX - pointX, 2) +
            Math.pow(boundedY - pointY, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            closestPoint = point;
        }
    });

    // Yakın noktayı vurgula
    points.forEach(p => p.classList.remove('highlight'));
    if (minDistance < 15) {
        closestPoint.classList.add('highlight');
    }
});

field.addEventListener('drop', (e) => {
    e.preventDefault();
    if (!draggedCard) return;

    const rect = field.getBoundingClientRect();
    const x = ((e.clientX - dragOffset.x - rect.left) / rect.width) * 100;
    const y = ((e.clientY - dragOffset.y - rect.top) / rect.height) * 100;

    // En yakın noktayı bul
    const points = document.querySelectorAll('.formation-point');
    let closestPoint = null;
    let minDistance = Infinity;

    points.forEach(point => {
        if (point.classList.contains('occupied')) return; // Dolu pozisyonları atla

        const pointX = parseFloat(point.style.left);
        const pointY = parseFloat(point.style.top);
        const distance = Math.sqrt(
            Math.pow(x - pointX, 2) +
            Math.pow(y - pointY, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            closestPoint = point;
        }
    });

    // Kartı yerleştir
    if (minDistance < 15 && closestPoint) {
        const currentFormation = document.getElementById('formation').value;
        const pointIndex = parseInt(closestPoint.dataset.index);
        const allowedRoles = formations[currentFormation].positions[pointIndex].allowedRoles;

        if (isPositionAllowed(draggedCard, allowedRoles)) {
            const fieldCard = draggedCard.cloneNode(true);
            fieldCard.style.position = 'absolute';
            fieldCard.style.left = closestPoint.style.left;
            fieldCard.style.top = closestPoint.style.top;
            fieldCard.style.transform = 'translate(-50%, -50%) scale(0.4)';
            fieldCard.style.zIndex = '10';
            fieldCard.style.cursor = 'move';

            closestPoint.classList.add('occupied');
            makeDraggable(fieldCard);
            document.getElementById('cardContainer').appendChild(fieldCard);
        } else {
            // Pozisyon uygun değilse görsel feedback
            closestPoint.classList.add('invalid');
            setTimeout(() => closestPoint.classList.remove('invalid'), 500);
        }
    }

    // Vurgulamayı kaldır
    points.forEach(p => p.classList.remove('highlight'));
});

function makeDraggable(element) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    element.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (e.target === element || element.contains(e.target)) {
            const rect = element.getBoundingClientRect();
            xOffset = rect.left + rect.width / 2;
            yOffset = rect.top + rect.height / 2;
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

            isDragging = true;
            element.style.zIndex = '1000';
            element.classList.add('dragging');
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            const fieldRect = field.getBoundingClientRect();
            const x = (currentX - fieldRect.left) / fieldRect.width * 100;
            const y = (currentY - fieldRect.top) / fieldRect.height * 100;

            // En yakın noktayı bul
            const points = document.querySelectorAll('.formation-point');
            let closestPoint = null;
            let minDistance = Infinity;

            points.forEach(point => {
                const pointX = parseFloat(point.style.left);
                const pointY = parseFloat(point.style.top);
                const distance = Math.sqrt(
                    Math.pow(x - pointX, 2) +
                    Math.pow(y - pointY, 2)
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    closestPoint = point;
                }
            });

            // Vurgulamayı güncelle
            points.forEach(p => p.classList.remove('highlight'));
            if (minDistance < 15) {
                closestPoint.classList.add('highlight');
            }

            // Kartı sınırlar içinde tut
            const cardWidth = (element.offsetWidth / fieldRect.width) * 100;
            const cardHeight = (element.offsetHeight / fieldRect.height) * 100;

            const boundedX = Math.max(cardWidth / 2, Math.min(100 - cardWidth / 2, x));
            const boundedY = Math.max(cardHeight / 2, Math.min(100 - cardHeight / 2, y));

            element.style.left = `${boundedX}%`;
            element.style.top = `${boundedY}%`;
        }
    }

    function dragEnd() {
        if (isDragging) {
        isDragging = false;
            element.style.zIndex = '10';
            element.classList.remove('dragging');

            // En yakın noktaya snap
            const rect = element.getBoundingClientRect();
            const fieldRect = field.getBoundingClientRect();
            const x = ((rect.left + rect.width / 2) - fieldRect.left) / fieldRect.width * 100;
            const y = ((rect.top + rect.height / 2) - fieldRect.top) / fieldRect.height * 100;

            const points = document.querySelectorAll('.formation-point');
            let closestPoint = null;
            let minDistance = Infinity;

            points.forEach(point => {
                const pointX = parseFloat(point.style.left);
                const pointY = parseFloat(point.style.top);
                const distance = Math.sqrt(
                    Math.pow(x - pointX, 2) +
                    Math.pow(y - pointY, 2)
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    closestPoint = point;
                }
            });

            if (minDistance < 15 && closestPoint) {
                element.style.left = closestPoint.style.left;
                element.style.top = closestPoint.style.top;
                closestPoint.classList.add('active');
            }

            // Vurgulamayı kaldır
            points.forEach(p => p.classList.remove('highlight'));
        }
    }
}

// Temizle fonksiyonunu güncelle
function clearField() {
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';
    document.querySelectorAll('.formation-point').forEach(point => {
        point.classList.remove('active', 'highlight', 'occupied', 'invalid');
    });
}

// Takım seçimi değiştiğinde
document.getElementById('teamSelect').addEventListener('change', function () {
    const selectedTeam = this.value;
    const selectedPosition = document.getElementById('positionFilter').value;
    if (selectedTeam) {
        loadTeamCards(selectedTeam, selectedPosition);
    } else {
        clearField();
        document.getElementById('cardsContainer').innerHTML = `
            <div class="no-cards-message">
                Oyuncu kartlarını görmek için takım seçin
            </div>
        `;
    }
});

// Pozisyon filtresi değiştiğinde
document.getElementById('positionFilter').addEventListener('change', function () {
    const selectedTeam = document.getElementById('teamSelect').value;
    const selectedPosition = this.value;
    if (selectedTeam) {
        loadTeamCards(selectedTeam, selectedPosition);
    }
});

async function loadTeamCards(teamName, position = '') {
    const sidebarContainer = document.getElementById('cardsContainer');
    if (!sidebarContainer) return;

    try {
        // Generate team cards HTML
        const html = await loadAndGenerateTeamCards(teamName);

        // Create a temporary div to parse the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Filter cards based on position and exclude manager
        let playerCards = Array.from(tempDiv.querySelectorAll('.player-card'))
            .filter(card => {
                const positionBadge = card.querySelector('.position-badge');
                return !positionBadge || !positionBadge.textContent.includes('TEKNİK DİREKTÖR');
            });

        // Apply position filter if specified
        if (position) {
            playerCards = playerCards.filter(card => {
                const ratingType = card.querySelector('.rating-type').textContent;
                switch (position) {
                    case 'GK':
                        return ratingType === 'GK';
                    case 'DEF':
                        return ['CB', 'LB', 'RB', 'LWB', 'RWB'].includes(ratingType);
                    case 'MID':
                        return ['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(ratingType);
                    case 'FW':
                        return ['ST', 'CF', 'LW', 'RW'].includes(ratingType);
                    default:
                        return true;
                }
            });
        }

        if (playerCards.length === 0) {
            showNoCardsMessage(teamName);
            return;
        }

        // Clear and update the sidebar container
        sidebarContainer.innerHTML = '';
        
        // Add cards to sidebar with drag functionality
        playerCards.forEach(card => {
            const sidebarCard = card.cloneNode(true);
            if (!sidebarCard.classList.contains(teamName)) {
                sidebarCard.classList.add(teamName);
            }
            sidebarCard.style.cursor = 'grab';
            sidebarCard.setAttribute('draggable', 'true');
            sidebarCard.addEventListener('dragstart', handleDragStart);
            sidebarCard.addEventListener('dragend', handleDragEnd);
            sidebarContainer.appendChild(sidebarCard);
        });

    } catch (error) {
        console.error('Takım kartları yüklenirken hata oluştu:', error);
        showErrorMessage(error);
    }
}

function displayCards(cards, teamName) {
    const sidebarContainer = document.getElementById('cardsContainer');
    const fieldContainer = document.getElementById('cardContainer');
    sidebarContainer.innerHTML = '';
    fieldContainer.innerHTML = '';

    // Teknik direktör kartlarını filtrele
    const playerCards = Array.from(cards).filter(card => {
        const positionBadge = card.querySelector('.position-badge');
        return !positionBadge || !positionBadge.textContent.includes('TEKNİK DİREKTÖR');
    });

    if (playerCards.length === 0) {
        showNoCardsMessage(teamName);
        return;
    }

    playerCards.forEach(card => {
        const sidebarCard = card.cloneNode(true);
        // Takım sınıfını ekle (eğer yoksa)
        if (!sidebarCard.classList.contains(teamName)) {
            sidebarCard.classList.add(teamName);
        }
        sidebarCard.style.cursor = 'grab';
        sidebarCard.setAttribute('draggable', 'true');
        sidebarCard.addEventListener('dragstart', handleDragStart);
        sidebarCard.addEventListener('dragend', handleDragEnd);
        sidebarContainer.appendChild(sidebarCard);
    });

    console.log(`${playerCards.length} kart yüklendi - ${teamName}`);
}

function showNoCardsMessage(teamName) {
    const sidebarContainer = document.getElementById('cardsContainer');
    sidebarContainer.innerHTML = `
        <div class="no-cards-message">
            ${teamName.charAt(0).toUpperCase() + teamName.slice(1)} için kartlar henüz hazır değil...
        </div>
    `;
}

function showErrorMessage(error) {
    const sidebarContainer = document.getElementById('cardsContainer');
    sidebarContainer.innerHTML = `
        <div class="no-cards-message">
            Kartlar yüklenirken bir hata oluştu: ${error.message}<br>
            Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.
        </div>
    `;
}

// Pozisyon kontrolü için yardımcı fonksiyon
function isPositionAllowed(cardRole, allowedRoles) {
    // Kart rolünü kontrol et
    const cardType = cardRole.querySelector('.rating-type').textContent;
    return allowedRoles.includes(cardType);
}
