// Formasyon pozisyonları
const formations = {
    '4-4-2': {
        positions: [
            { x: 50, y: 90, role: 'GK', allowedRoles: ['GK'] },
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
            { x: 50, y: 90, role: 'GK', allowedRoles: ['GK'] },
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
            { x: 50, y: 90, role: 'GK', allowedRoles: ['GK'] },
            { x: 35, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 50, y: 70, role: 'CB', allowedRoles: ['CB'] },
            { x: 65, y: 80, role: 'CB', allowedRoles: ['CB'] },
            { x: 10, y: 45, role: 'LWB', allowedRoles: ['LM', 'LWB'] },
            { x: 35, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 50, y: 45, role: 'CM', allowedRoles: ['CM', 'CAM'] },  // CAM biraz ileri
            { x: 65, y: 50, role: 'CM', allowedRoles: ['CM', 'CDM'] },  // CM biraz ileri
            { x: 90, y: 45, role: 'RWB', allowedRoles: ['RM', 'RWB'] },
            { x: 35, y: 20, role: 'ST', allowedRoles: ['ST', 'CF'] },
            { x: 65, y: 20, role: 'ST', allowedRoles: ['ST', 'CF'] }
        ]
    },
    '4-2-3-1': {
        positions: [
            { x: 50, y: 90, role: 'GK', allowedRoles: ['GK'] },
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
    e.dataTransfer.setData('text/plain', card.id);

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

    // En yakın formasyon noktasını bul
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

    // Kartı yerleştir
    if (minDistance < 15 && closestPoint) {
        const currentFormation = document.getElementById('formation').value;
        const pointIndex = parseInt(closestPoint.dataset.index);
        const allowedRoles = formations[currentFormation].positions[pointIndex].allowedRoles;

        // Check if the position is already occupied by this specific point
        const existingCard = document.querySelector(`#cardContainer .player-card[style*="left: ${closestPoint.style.left}"][style*="top: ${closestPoint.style.top}"]`);
        if (existingCard) {
            alert('Bu pozisyon dolu!');
            return;
        }

        // Check if the card already exists on the bench
        const cardId = draggedCard.id;
        const existingBenchCard = document.querySelector(`.bench-slot .player-card[id="${cardId}"]`);
        if (existingBenchCard) {
            alert('Bu oyuncu yedek kulübesinde! Aynı oyuncu hem sahada hem yedek kulübesinde olamaz.');
            return;
        }

        // Check if the card already exists on the field (for position change)
        const existingFieldCard = document.querySelector(`#cardContainer .player-card[id="${cardId}"]`);
        if (existingFieldCard) {
            // If it's a position change, check if the new position is allowed
            if (!isPositionAllowed(draggedCard, allowedRoles)) {
                alert('Bu oyuncu bu pozisyonda oynayamaz!');
                return;
            }
            existingFieldCard.remove();
            const oldPoint = document.querySelector(`.formation-point[style*="left: ${existingFieldCard.style.left}"][style*="top: ${existingFieldCard.style.top}"]`);
            if (oldPoint) oldPoint.classList.remove('occupied');
        } else if (!isPositionAllowed(draggedCard, allowedRoles)) {
            // If it's a new card, check if the position is allowed
            alert('Bu oyuncu bu pozisyonda oynayamaz!');
            return;
        }

        const fieldCard = draggedCard.cloneNode(true);
        
        fieldCard.style.position = 'absolute';
        fieldCard.style.left = closestPoint.style.left;
        fieldCard.style.top = closestPoint.style.top;
        fieldCard.style.transform = 'translate(-50%, -50%) scale(0.8)';
        fieldCard.style.zIndex = '50';
        fieldCard.style.cursor = 'move';
        fieldCard.style.pointerEvents = 'all';

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '×';
        deleteButton.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            fieldCard.remove();
            closestPoint.classList.remove('occupied');
            closestPoint.classList.remove('highlight');
        };

        fieldCard.appendChild(deleteButton);

        // Add the card to the field
        document.getElementById('cardContainer').appendChild(fieldCard);
        closestPoint.classList.add('occupied');
        points.forEach(p => p.classList.remove('highlight'));

        // Make the field card draggable
        makeDraggable(fieldCard);
    }
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
    // Saha üzerindeki kartları temizle
    document.getElementById('cardContainer').innerHTML = '';
    
    // Manager alanını temizle
    const managerArea = document.getElementById('managerArea');
                managerArea.innerHTML = '<div class="manager-placeholder">Teknik Direktör</div>';
    
    // Formasyon noktalarını temizle
    document.querySelectorAll('.formation-point').forEach(point => {
        point.classList.remove('occupied');
    });

    // Clear bench slots
    const benchSlots = document.querySelectorAll('.bench-slot');
    benchSlots.forEach(slot => {
        const card = slot.querySelector('.player-card');
        if (card) {
            returnCardToContainer(card);
        }
        slot.classList.remove('occupied');
        slot.querySelector('.bench-placeholder').style.display = '';
    });
}

// Sayfa yüklendiğinde tüm takımların kartlarını göster
document.addEventListener('DOMContentLoaded', function() {
    loadAllTeamCards();
    initializeBench();
});

// Takım seçimi değiştiğinde
document.getElementById('teamSelect').addEventListener('change', function() {
    const selectedTeam = this.value;
    const selectedPosition = document.getElementById('positionFilter').value;
    
    if (selectedTeam === 'all') {
        loadAllTeamCards(selectedPosition);
    } else if (selectedTeam) {
        loadTeamCards(selectedTeam, selectedPosition);
    }
});

// Pozisyon filtresi değiştiğinde
document.getElementById('positionFilter').addEventListener('change', function() {
    const selectedTeam = document.getElementById('teamSelect').value;
    const selectedPosition = this.value;
    
    if (selectedTeam === 'all') {
        loadAllTeamCards(selectedPosition);
    } else if (selectedTeam) {
        loadTeamCards(selectedTeam, selectedPosition);
    }
});

async function loadTeamCards(teamName, position = '') {
    try {
        const response = await fetch(`assets/data/${teamName}.json`);
        if (!response.ok) {
            throw new Error(`${teamName} takımının verileri yüklenemedi (${response.status})`);
        }
        
        let data;
        try {
            data = await response.json();
        } catch (e) {
            throw new Error(`${teamName} takımının JSON verileri geçersiz`);
        }
        
        if (!data.players) {
            throw new Error('Geçersiz takım veri formatı');
        }

        let cards = [...data.players];
        
        if (data.manager) {
            const managerCard = {
                ...data.manager,
                position: 'MAN',
                ratingPosition: 'TEKNİK DİREKTÖR'
            };
            cards.push(managerCard);
        }

        // Pozisyon filtreleme
        if (position) {
            cards = cards.filter(card => {
                const pos = card.position;
                switch (position) {
                    case 'GK':
                        return pos === 'GK';
                    case 'DEF':
                        return ['CB', 'LB', 'RB', 'LWB', 'RWB'].includes(pos);
                    case 'MID':
                        return ['CM', 'CDM', 'CAM', 'LM', 'RM', 'AM'].includes(pos);
                    case 'FW':
                        return ['ST', 'CF', 'LW', 'RW', 'FW'].includes(pos);
                    case 'MAN':
                        return pos === 'MAN';
                    default:
                        return true;
                }
            });
        }

        if (cards.length === 0) {
            showNoCardsMessage(teamName);
            return;
        }

        displayCards(cards, data.cardTeamName);
    } catch (error) {
        console.error('Takım kartları yüklenirken hata:', error);
        showErrorMessage(error.message);
    }
}

function displayCards(cards, teamName) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    cards.forEach(player => {
        const card = document.createElement('div');
        card.className = `player-card ${teamName}`;
        card.draggable = true;
        card.dataset.position = player.position;

        // Special styling for manager cards
        const isManager = player.position === 'MAN';
        const ratingBadgeStyle = isManager ? 'style="background: linear-gradient(145deg, #C0C0C0 0%, #A0A0A0 100%)"' : '';
        const ratingNumberStyle = isManager ? 'style="color: #000000"' : '';
        const ratingTypeStyle = isManager ? 'style="color: #000000"' : '';

        card.innerHTML = `
            <div class="card-glow"></div>
            <div class="card-shine"></div>
            ${!isManager && player.isCaptain ? '<div class="captain-badge">C</div>' : ''}
            <button class="add-button" onclick="autoPlaceCard(this.closest('.player-card'))">+</button>

            <div class="rating-badge" ${ratingBadgeStyle}>
                <div class="rating-number" ${ratingNumberStyle}>${player.rating}</div>
                <div class="rating-type" ${ratingTypeStyle}>${player.position}</div>
            </div>

            <div class="position-badge">${player.ratingPosition}</div>

            <div class="player-image-container">
                <div class="player-image">
                    <img src="${player.image}" alt="${player.name}" onerror="this.src='${isManager ? 'https://cdn-icons-png.flaticon.com/512/4206/4206265.png' : 'https://cdn-icons-png.flaticon.com/512/607/607445.png'}'">
                </div>
            </div>

            <div class="player-info">
                <div class="player-name">${player.name}</div>

                <div class="player-stats">
                    ${isManager ? `
                        <div class="stat">
                            <div class="stat-value">${player.stats.tactic}</div>
                            <div class="stat-label">TAK</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${player.stats.motivation}</div>
                            <div class="stat-label">MOT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${player.stats.leadership}</div>
                            <div class="stat-label">LİD</div>
                        </div>
                    ` : Object.entries(player.stats).map(([stat, value]) => `
                        <div class="stat">
                            <div class="stat-value">${value}</div>
                            <div class="stat-label">${stat}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="player-details">
                    <div>
                        <img src="${player.nationality.flag}" alt="${player.nationality.name}" class="country-flag">
                        ${isManager ? player.nationality.code : player.nationality.name} • ${player.age} yaş
                    </div>
                    <div>${isManager ? 'MAN' : `# ${player.number}`}</div>
                </div>
            </div>
        `;

        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        container.appendChild(card);
    });
}

function showNoCardsMessage(teamName) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = `
        <div class="no-cards-message">
            ${teamName === 'all' ? 
                'Seçilen pozisyonda oyuncu bulunamadı' : 
                `${teamName.toUpperCase()} takımında seçilen pozisyonda oyuncu bulunamadı`}
        </div>
    `;
}

function showErrorMessage(error) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = `
        <div class="error-message" style="
            text-align: center;
            padding: 20px;
            color: #ff4444;
            font-size: 14px;
            background-color: rgba(255, 68, 68, 0.1);
            border-radius: 8px;
            margin: 20px;
        ">
            <div style="font-weight: bold; margin-bottom: 10px;">⚠️ Hata</div>
            <div>${error}</div>
        </div>
    `;
}

// Pozisyon kontrolü için yardımcı fonksiyon
function isPositionAllowed(card, allowedRoles) {
    if (!card || !allowedRoles) return false;

    const cardType = card.dataset.position;
    if (cardType === 'MAN') {
        return false; // Managers can only be placed in the manager area
    }

    // Genişletilmiş pozisyon eşleştirmeleri
    const positionMappings = {
        'ST': ['ST', 'CF'],
        'CF': ['ST', 'CF'],
        'LW': ['LW', 'LM'],
        'RW': ['RW', 'RM'],
        'LM': ['LM', 'LW'],
        'RM': ['RM', 'RW'],
        'CAM': ['CAM', 'CM'],
        'CM': ['CM', 'CAM', 'CDM'],
        'CDM': ['CDM', 'CM'],
        'LB': ['LB', 'LWB'],
        'RB': ['RB', 'RWB'],
        'CB': ['CB', 'SW'],
        'GK': ['GK']
    };

    // Kartın pozisyonuna uygun tüm olası pozisyonları al
    const possiblePositions = positionMappings[cardType] || [];

    // Pozisyonlardan herhangi biri izin verilen roller içinde mi kontrol et
    return possiblePositions.some(pos => allowedRoles.includes(pos));
}

const managerArea = document.getElementById('managerArea');

managerArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingCard = document.querySelector('.dragging');
    if (draggingCard && draggingCard.dataset.position === 'MAN') {
        managerArea.classList.add('drag-over');
    }
});

managerArea.addEventListener('dragleave', () => {
    managerArea.classList.remove('drag-over');
});

managerArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggingCard = document.querySelector('.dragging');
    
    if (!draggingCard || draggingCard.dataset.position !== 'MAN') {
        alert('Bu alana sadece teknik direktör yerleştirilebilir!');
        return;
    }

    // Teknik direktör kartını yerleştir
    const cardClone = draggingCard.cloneNode(true);
    managerArea.innerHTML = '';
    managerArea.appendChild(cardClone);
    managerArea.classList.add('occupied');
    managerArea.classList.remove('drag-over');

    // Delete butonu ekle
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '×';
    deleteButton.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        managerArea.innerHTML = '<div class="manager-placeholder">Teknik Direktör</div>';
        managerArea.classList.remove('occupied');
    };

    cardClone.appendChild(deleteButton);
});

async function loadAllTeamCards(position = '') {
    try {
        const teams = [
            'galatasaray', 
            'fenerbahce', 
            'besiktas', 
            'trabzonspor',
            'basaksehir',
            'samsunspor',
            'eyupspor',
            'goztepe',
            'rizespor',
            'kasimpasa',
            'konyaspor',
            'alanyaspor',
            'kayserispor',
            'gaziantep',
            'antalyaspor',
            'kocaelispor',
            'genclerbirligi',
            'karagumruk'
        ];
        let allCards = [];
        let failedTeams = [];

        for (const team of teams) {
            try {
                const response = await fetch(`assets/data/${team}.json`);
                if (!response.ok) {
                    failedTeams.push(team);
                    continue;
                }

                const data = await response.json();
                
                if (data.players) {
                    const cards = [...data.players].map(player => ({
                        ...player,
                        teamName: data.cardTeamName
                    }));
                    
                    if (data.manager) {
                        const managerCard = {
                            ...data.manager,
                            position: 'MAN',
                            ratingPosition: 'TEKNİK DİREKTÖR',
                            teamName: data.cardTeamName
                        };
                        cards.push(managerCard);
                    }
                    
                    allCards = [...allCards, ...cards];
                }
            } catch (error) {
                failedTeams.push(team);
                console.error(`${team} takımı yüklenirken hata:`, error);
            }
        }

        if (failedTeams.length > 0) {
            console.warn(`Bazı takımlar yüklenemedi: ${failedTeams.join(', ')}`);
        }

        // Pozisyon filtreleme
        if (position) {
            allCards = allCards.filter(card => {
                const pos = card.position;
                switch (position) {
                    case 'GK':
                        return pos === 'GK';
                    case 'DEF':
                        return ['CB', 'LB', 'RB', 'LWB', 'RWB'].includes(pos);
                    case 'MID':
                        return ['CM', 'CDM', 'CAM', 'LM', 'RM', 'AM'].includes(pos);
                    case 'FW':
                        return ['ST', 'CF', 'LW', 'RW', 'FW'].includes(pos);
                    case 'MAN':
                        return pos === 'MAN';
                    default:
                        return true;
                }
            });
        }

        if (allCards.length === 0) {
            if (failedTeams.length === teams.length) {
                showErrorMessage('Hiçbir takımın verileri yüklenemedi');
            } else {
                showNoCardsMessage('all');
            }
            return;
        }

        displayAllCards(allCards);
    } catch (error) {
        console.error('Tüm takım kartları yüklenirken hata:', error);
        showErrorMessage('Takım verileri yüklenirken bir hata oluştu');
    }
}

function displayAllCards(cards) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'cards-grid';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `player-card ${card.teamName}`;
        cardElement.draggable = true;
        cardElement.dataset.position = card.position;

        const ratingBadgeStyle = card.position === 'MAN' ? 
            'style="background: linear-gradient(145deg, #C0C0C0 0%, #A0A0A0 100%)"' : '';
        const ratingNumberStyle = card.position === 'MAN' ? 
            'style="color: #000000"' : '';
        const ratingTypeStyle = card.position === 'MAN' ? 
            'style="color: #000000"' : '';

        cardElement.innerHTML = `
            <div class="card-glow"></div>
            <div class="card-shine"></div>
            ${card.isCaptain ? '<div class="captain-badge">C</div>' : ''}
            <button class="add-button" onclick="autoPlaceCard(this.closest('.player-card'))">+</button>

            <div class="rating-badge" ${ratingBadgeStyle}>
                <div class="rating-number" ${ratingNumberStyle}>${card.rating}</div>
                <div class="rating-type" ${ratingTypeStyle}>${card.position}</div>
            </div>

            <div class="position-badge">${card.ratingPosition}</div>

            <div class="player-image-container">
                <div class="player-image">
                    <img src="${card.image}" alt="${card.name}" onerror="this.src='${card.position === 'MAN' ? 'https://cdn-icons-png.flaticon.com/512/4206/4206265.png' : 'https://cdn-icons-png.flaticon.com/512/607/607445.png'}'">
                </div>
            </div>

            <div class="player-info">
                <div class="player-name">${card.name}</div>

                <div class="player-stats">
                    ${card.position === 'MAN' ? `
                        <div class="stat">
                            <div class="stat-value">${card.stats.tactic}</div>
                            <div class="stat-label">TAK</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${card.stats.motivation}</div>
                            <div class="stat-label">MOT</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${card.stats.leadership}</div>
                            <div class="stat-label">LİD</div>
                        </div>
                    ` : Object.entries(card.stats).map(([stat, value]) => `
                        <div class="stat">
                            <div class="stat-value">${value}</div>
                            <div class="stat-label">${stat}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="player-details">
                    <div>
                        <img src="${card.nationality.flag}" alt="${card.nationality.name}" class="country-flag">
                        ${card.nationality.code || card.nationality.name} • ${card.age} yaş
                    </div>
                    <div>${card.position === 'MAN' ? 'MAN' : `# ${card.number}`}</div>
                </div>
            </div>
        `;

        cardElement.addEventListener('dragstart', handleDragStart);
        cardElement.addEventListener('dragend', handleDragEnd);
        cardsGrid.appendChild(cardElement);
    });

    container.appendChild(cardsGrid);
}

// Add these functions for substitutes bench handling
function initializeBench() {
    const benchSlots = document.querySelectorAll('.bench-slot');
    benchSlots.forEach(slot => {
        slot.addEventListener('dragover', handleBenchDragOver);
        slot.addEventListener('drop', handleBenchDrop);
        slot.addEventListener('dragleave', handleBenchDragLeave);
    });
}

function handleBenchDragOver(e) {
    e.preventDefault();
    const benchSlot = e.currentTarget;
    const cardPosition = draggedCard ? draggedCard.getAttribute('data-position') : null;
    const slotPosition = benchSlot.getAttribute('data-position');

    if (isValidBenchPosition(cardPosition, slotPosition)) {
        benchSlot.classList.add('drag-over');
    }
}

function handleBenchDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleBenchDrop(e) {
    e.preventDefault();
    const slot = e.target.closest('.bench-slot');
    if (!slot) return;

    const draggingCard = document.querySelector('.dragging');
    if (!draggingCard) return;

    const cardPosition = draggingCard.dataset.position;
    const slotPosition = slot.dataset.position;

    // Check if the card already exists on the field
    const cardId = draggingCard.id;
    const existingFieldCard = document.querySelector(`#cardContainer .player-card[id="${cardId}"]`);
    if (existingFieldCard) {
        alert('Bu oyuncu sahada! Aynı oyuncu hem sahada hem yedek kulübesinde olamaz.');
        return;
    }

    // Check if the card already exists on the bench
    const existingBenchCard = document.querySelector(`.bench-slot .player-card[id="${cardId}"]`);
    if (existingBenchCard) {
        alert('Bu oyuncu zaten yedek kulübesinde!');
        return;
    }

    if (isValidBenchPosition(cardPosition, slotPosition)) {
        const existingCard = slot.querySelector('.player-card');
        if (existingCard) {
            existingCard.remove();
        }

        const cardClone = draggingCard.cloneNode(true);
        cardClone.classList.remove('dragging');

        // Remove existing add button if any
        const addButton = cardClone.querySelector('.add-button');
        if (addButton) {
            addButton.remove();
        }

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '×';
        deleteButton.onclick = () => {
            cardClone.remove();
            slot.querySelector('.bench-placeholder').style.display = 'block';
        };
        cardClone.appendChild(deleteButton);

        slot.querySelector('.bench-placeholder').style.display = 'none';
        cardClone.style.position = 'relative';
        cardClone.style.transform = 'none';
        cardClone.style.margin = '0';
        slot.appendChild(cardClone);
    } else {
        alert('Bu oyuncu bu yedek pozisyonunda oynayamaz!');
    }
}

function isValidBenchPosition(cardPos, slotPos) {
    if (!cardPos || !slotPos) return false;

    const positionMappings = {
        'GK': ['GK'],
        'RB': ['RB', 'RWB'],
        'CB': ['CB'],
        'LB': ['LB', 'LWB'],
        'CM': ['CM'],
        'CDM': ['CDM'],
        'CAM': ['CAM'],
        'RW': ['RM', 'RW'],
        'LW': ['LM', 'LW'],
        'ST': ['ST', 'CF']
    };

    return positionMappings[slotPos]?.includes(cardPos);
}

function returnCardToContainer(card) {
    const cardsContainer = document.getElementById('cardsContainer');
    card.style.position = '';
    card.style.transform = '';
    card.style.margin = '';
    cardsContainer.appendChild(card);
}

function autoPlaceCard(card) {
    if (!card) return;

    // Get card's position
    const cardPosition = card.querySelector('.rating-type').textContent;
    
    // Check if card is already on field
    const cardId = card.id;
    const existingFieldCard = document.querySelector(`#cardContainer .player-card[id="${cardId}"]`);
    if (existingFieldCard) {
        alert('Bu oyuncu zaten sahada!');
        return;
    }

    // Check if card is on bench
    const existingBenchCard = document.querySelector(`.bench-slot .player-card[id="${cardId}"]`);
    if (existingBenchCard) {
        alert('Bu oyuncu yedek kulübesinde! Aynı oyuncu hem sahada hem yedek kulübesinde olamaz.');
        return;
    }

    // Handle manager card differently
    if (cardPosition === 'MAN') {
        // Check if we're on mobile by checking window width
        const isMobile = window.innerWidth <= 768;
        
        // Get the appropriate manager area based on device
        const managerArea = isMobile 
            ? document.querySelector('.mobile-manager-section .manager-area')
            : document.querySelector('.field-container .manager-area');
            
        if (!managerArea) return;

        // Check if there's already a manager
        const existingManager = managerArea.querySelector('.player-card');
        if (existingManager) {
            alert('Zaten bir teknik direktör var!');
            return;
        }

        const fieldCard = card.cloneNode(true);
        
        // Remove the add button from the field card
        const addButton = fieldCard.querySelector('.add-button');
        if (addButton) {
            addButton.remove();
        }
        
        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '×';
        deleteButton.onclick = () => {
            fieldCard.remove();
            managerArea.innerHTML = '<div class="manager-placeholder">Teknik Direktör</div>';
        };
        fieldCard.appendChild(deleteButton);

        // Clear placeholder and add manager card
        managerArea.innerHTML = '';
        managerArea.appendChild(fieldCard);

        // For mobile, ensure proper styling
        if (isMobile) {
            fieldCard.style.transform = 'scale(0.75)';
            fieldCard.style.margin = '0';
        }
        
        return;
    }

    // Get current formation for player cards
    const currentFormation = document.getElementById('formation').value;
    const formationPositions = formations[currentFormation].positions;
    
    // Find suitable position for player cards
    let foundPosition = null;
    for (let i = 0; i < formationPositions.length; i++) {
        const pos = formationPositions[i];
        const point = document.querySelector(`.formation-point[data-index="${i}"]`);
        
        if (!point) continue; // Skip if point not found

        // Check if position is empty by checking both left and top coordinates
        const pointLeft = point.style.left;
        const pointTop = point.style.top;
        
        if (!pointLeft || !pointTop) continue; // Skip if coordinates are not set

        // Find any card at this exact position
        const existingCard = document.querySelector(`#cardContainer .player-card[style*="left: ${pointLeft}"][style*="top: ${pointTop}"]`);
        
        // Check if position is empty and allowed for this card
        if (!existingCard && isPositionAllowed(card, pos.allowedRoles)) {
            foundPosition = point;
            break;
        }
    }

    if (foundPosition) {
        const fieldCard = card.cloneNode(true);
        // Remove the add button from the field card
        const addButton = fieldCard.querySelector('.add-button');
        if (addButton) {
            addButton.remove();
        }
        
        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '×';
        deleteButton.onclick = () => fieldCard.remove();
        fieldCard.appendChild(deleteButton);
        
        // Preserve captain badge if it exists
        const captainBadge = card.querySelector('.captain-badge');
        if (captainBadge) {
            const newCaptainBadge = captainBadge.cloneNode(true);
            fieldCard.appendChild(newCaptainBadge);
        }
        
        fieldCard.style.position = 'absolute';
        fieldCard.style.left = foundPosition.style.left;
        fieldCard.style.top = foundPosition.style.top;
        fieldCard.style.transform = 'translate(-50%, -50%) scale(0.8)';
        fieldCard.style.zIndex = '50';
        fieldCard.style.cursor = 'move';
        fieldCard.style.pointerEvents = 'all';
        
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.appendChild(fieldCard);
        makeDraggable(fieldCard);
    } else {
        // Try to place on bench if no position found on field
        const benchSlots = document.querySelectorAll('.bench-slot');
        let benchPlaced = false;

        for (const slot of benchSlots) {
            const slotPosition = slot.getAttribute('data-position');
            
            // Check if slot is empty and position is valid
            if (!slot.querySelector('.player-card') && isValidBenchPosition(cardPosition, slotPosition)) {
                const benchCard = card.cloneNode(true);
                
                // Remove add button
                const addButton = benchCard.querySelector('.add-button');
                if (addButton) {
                    addButton.remove();
                }

                // Add delete button
                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-button';
                deleteButton.innerHTML = '×';
                deleteButton.onclick = () => {
                    benchCard.remove();
                    slot.querySelector('.bench-placeholder').style.display = 'block';
                };
                benchCard.appendChild(deleteButton);

                // Hide placeholder and add card
                slot.querySelector('.bench-placeholder').style.display = 'none';
                benchCard.style.position = 'relative';
                benchCard.style.transform = 'none';
                benchCard.style.margin = '0';
                slot.appendChild(benchCard);
                
                benchPlaced = true;
                break;
            }
        }

        if (!benchPlaced) {
            alert('Bu oyuncu için ne sahada ne de yedek kulübesinde uygun pozisyon bulunamadı!');
        }
    }
}

// Dropdown verilerini yükle ve doldur
async function loadDropdownData() {
    try {
        // Takımları yükle
        const teamsResponse = await fetch('assets/data/teams_lineup.json');
        const teamsData = await teamsResponse.json();
        populateDropdown('teamSelect', teamsData.teams);

        // Pozisyonları yükle
        const positionsResponse = await fetch('assets/data/positions.json');
        const positionsData = await positionsResponse.json();
        populateDropdown('positionFilter', positionsData.positions);

        // Formasyonları yükle
        const formationsResponse = await fetch('assets/data/formations.json');
        const formationsData = await formationsResponse.json();
        populateDropdown('formation', formationsData.formations);
    } catch (error) {
        console.error('Dropdown verileri yüklenirken hata oluştu:', error);
    }
}

// Dropdown'ları doldur
function populateDropdown(selectId, data) {
    const select = document.getElementById(selectId);
    select.innerHTML = ''; // Mevcut seçenekleri temizle
    
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.value;
        option.textContent = item.name;
        select.appendChild(option);
    });
}

// Sayfa yüklendiğinde dropdown verilerini yükle
document.addEventListener('DOMContentLoaded', loadDropdownData);
