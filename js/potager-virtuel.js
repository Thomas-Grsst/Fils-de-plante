// Données pour le planificateur
const companionPlants = {
    "Tomate": ["Basilic", "Carotte", "Oignon", "Persil", "Souci"],
    "Carotte": ["Tomate", "Poireau", "Oignon", "Romarin", "Sauge"],
    "Chou": ["Betterave", "Céleri", "Camomille", "Menthe", "Romarin"],
    "Concombre": ["Haricot", "Pois", "Radis", "Tournesol", "Maïs"],
    "Courgette": ["Haricot", "Maïs", "Radis", "Capucine"],
    "Fraise": ["Haricot", "Laitue", "Oignon", "Épinard", "Thym"],
    "Haricot": ["Betterave", "Carotte", "Chou", "Concombre", "Maïs"],
    "Laitue": ["Betterave", "Carotte", "Concombre", "Oignon", "Radis"],
    "Oignon": ["Carotte", "Laitue", "Tomate", "Chou", "Fraise"],
    "Poivron": ["Basilic", "Carotte", "Oignon", "Origan", "Tomate"],
    "Radis": ["Concombre", "Laitue", "Petit pois", "Courge", "Haricot"]
};

const plantColors = {
    "Tomate": "#f44336",
    "Carotte": "#ff9800",
    "Chou": "#4caf50",
    "Concombre": "#8bc34a",
    "Courgette": "#cddc39",
    "Fraise": "#e91e63",
    "Haricot": "#795548",
    "Laitue": "#9ccc65",
    "Oignon": "#9e9e9e",
    "Poivron": "#ff5722",
    "Radis": "#ff5252",
    "Basilic": "#00796b",
    "Persil": "#388e3c"
};

// Variables globales
let selectedPlant = null;
let gardenGrid = [];
let currentPlan = {};

// Initialisation du planificateur
function initPlanner() {
    generateGardenGrid(3, 4, 60);
    populatePlantsList();
    setupEventListeners();
}

// Génération de la grille du potager
function generateGardenGrid(width, height, cellSize) {
    const gridContainer = document.getElementById('gardenGrid');
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${width}, ${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${height}, ${cellSize}px)`;
    
    gardenGrid = Array(height).fill().map(() => Array(width).fill(null));
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.addEventListener('click', () => handleCellClick(x, y));
            cell.addEventListener('dragover', handleDragOver);
            cell.addEventListener('drop', handleDrop);
            gridContainer.appendChild(cell);
        }
    }
    
    document.getElementById('gardenDimensions').textContent = `${width}m x ${height}m`;
}

// Peupler la liste des plantes
function populatePlantsList() {
    const plantsList = document.querySelector('.plants-list');
    plantsList.innerHTML = '';
    
    const popularPlants = ["Tomate", "Carotte", "Laitue", "Radis", "Courgette", 
                          "Concombre", "Poivron", "Chou", "Fraise", "Haricot", 
                          "Oignon", "Basilic", "Persil"];
    
    popularPlants.forEach(plantName => {
        const plant = ediblePlants.find(p => p.name === plantName);
        if (plant) {
            const plantOption = document.createElement('div');
            plantOption.className = 'plant-option';
            plantOption.draggable = true;
            plantOption.dataset.plant = plant.name;
            plantOption.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}">
                <span>${plant.name}</span>
            `;
            
            plantOption.addEventListener('dragstart', handleDragStart);
            plantOption.addEventListener('click', () => {
                selectedPlant = plant.name;
                updateSelectedPlant();
            });
            
            plantsList.appendChild(plantOption);
        }
    });
    
    updateLegend();
}

// Gestion des événements
function setupEventListeners() {
    document.getElementById('generateGarden').addEventListener('click', generateNewGrid);
    document.getElementById('optimizeBtn').addEventListener('click', optimizeGarden);
    document.getElementById('resetBtn').addEventListener('click', resetGarden);
    document.getElementById('savePlanBtn').addEventListener('click', saveGardenPlan);
}

function generateNewGrid() {
    const width = parseInt(document.getElementById('gardenWidth').value);
    const height = parseInt(document.getElementById('gardenHeight').value);
    const cellSize = parseInt(document.getElementById('cellSize').value);
    
    generateGardenGrid(width, height, cellSize);
}

// Gestion du glisser-déposer
function handleDragStart(e) {
    selectedPlant = e.target.dataset.plant;
    e.dataTransfer.setData('text/plain', selectedPlant);
    e.target.classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    const plantName = e.dataTransfer.getData('text/plain');
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);
    
    if (x !== undefined && y !== undefined) {
        placePlant(x, y, plantName);
    }
}

function handleCellClick(x, y) {
    if (selectedPlant) {
        placePlant(x, y, selectedPlant);
    } else if (gardenGrid[y][x]) {
        removePlant(x, y);
    }
}

// Placement des plantes
function placePlant(x, y, plantName) {
    gardenGrid[y][x] = plantName;
    
    const cell = document.querySelector(`.grid-cell[data-x="${x}"][data-y="${y}"]`);
    const plant = ediblePlants.find(p => p.name === plantName);
    
    cell.innerHTML = `
        <img src="${plant.image}" alt="${plantName}" class="plant-in-cell">
        <div class="cell-info">${plantName}</div>
    `;
    cell.classList.add('occupied');
    cell.style.backgroundColor = plantColors[plantName] || '#e8f5e8';
    
    updateAdvice();
}

function removePlant(x, y) {
    gardenGrid[y][x] = null;
    
    const cell = document.querySelector(`.grid-cell[data-x="${x}"][data-y="${y}"]`);
    cell.innerHTML = '';
    cell.classList.remove('occupied');
    cell.style.backgroundColor = 'white';
    
    updateAdvice();
}

// Mise à jour de l'interface
function updateSelectedPlant() {
    document.querySelectorAll('.plant-option').forEach(option => {
        option.style.borderColor = option.dataset.plant === selectedPlant ? 
            (plantColors[selectedPlant] || '#2196f3') : 'transparent';
    });
}

function updateLegend() {
    const legendContainer = document.querySelector('.legend-items');
    legendContainer.innerHTML = '';
    
    Object.entries(plantColors).forEach(([plant, color]) => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `
            <div class="legend-color" style="background-color: ${color}"></div>
            <span>${plant}</span>
        `;
        legendContainer.appendChild(legendItem);
    });
}

// Fonctions d'optimisation
function optimizeGarden() {
    // Algorithme simple d'optimisation basé sur le compagnonnage
    const optimizedGrid = JSON.parse(JSON.stringify(gardenGrid));
    
    for (let y = 0; y < gardenGrid.length; y++) {
        for (let x = 0; x < gardenGrid[y].length; x++) {
            if (!gardenGrid[y][x]) {
                const bestPlant = findBestPlantForPosition(x, y);
                if (bestPlant) {
                    placePlant(x, y, bestPlant);
                }
            }
        }
    }
    
    showNotification('Potager optimisé avec succès!', 'success');
}

function findBestPlantForPosition(x, y) {
    const neighbors = getNeighbors(x, y);
    const plantScores = {};
    
    // Calculer un score pour chaque plante basé sur les voisins
    Object.keys(plantColors).forEach(plant => {
        let score = 0;
        neighbors.forEach(neighbor => {
            if (neighbor && companionPlants[plant] && companionPlants[plant].includes(neighbor)) {
                score += 2; // Bon compagnon
            } else if (neighbor && plant === neighbor) {
                score -= 1; // Éviter les monocultures
            }
        });
        plantScores[plant] = score;
    });
    
    // Retourner la plante avec le meilleur score
    return Object.keys(plantScores).reduce((best, current) => {
        return plantScores[current] > plantScores[best] ? current : best;
    }, Object.keys(plantScores)[0]);
}

function getNeighbors(x, y) {
    const neighbors = [];
    const directions = [
        [-1, -1], [0, -1], [1, -1],
        [-1, 0],           [1, 0],
        [-1, 1],  [0, 1],  [1, 1]
    ];
    
    directions.forEach(([dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx >= 0 && nx < gardenGrid[0].length && ny >= 0 && ny < gardenGrid.length) {
            if (gardenGrid[ny][nx]) {
                neighbors.push(gardenGrid[ny][nx]);
            }
        }
    });
    
    return neighbors;
}

// Mise à jour des conseils
function updateAdvice() {
    updateCompanionAdvice();
    updateRotationAdvice();
    updateSeasonAdvice();
}

function updateCompanionAdvice() {
    const companionInfo = document.getElementById('companionInfo');
    companionInfo.innerHTML = '';
    
    const allPlants = getAllPlantedPlants();
    
    allPlants.forEach(plant => {
        const goodCompanions = companionPlants[plant] || [];
        const badCompanions = findBadCompanions(plant, allPlants);
        
        if (goodCompanions.length > 0 || badCompanions.length > 0) {
            const adviceItem = document.createElement('div');
            adviceItem.className = 'advice-item';
            
            let html = `<strong>${plant}:</strong>`;
            
            if (goodCompanions.length > 0) {
                html += `<br>✅ Se marie bien avec: ${goodCompanions.join(', ')}`;
            }
            
            if (badCompanions.length > 0) {
                html += `<br>❌ Éviter à proximité: ${badCompanions.join(', ')}`;
            }
            
            adviceItem.innerHTML = html;
            companionInfo.appendChild(adviceItem);
        }
    });
}

function findBadCompanions(plant, allPlants) {
    // Logique simplifiée pour les mauvais compagnons
    const badCompanions = {
        'Tomate': ['Pomme de terre', 'Fenouil'],
        'Chou': ['Tomate', 'Fraise'],
        'Carotte': ['Aneth'],
        'Oignon': ['Haricot', 'Pois'],
        'Haricot': ['Oignon', 'Ail', 'Poireau']
    };
    
    return (badCompanions[plant] || []).filter(p => allPlants.includes(p));
}

function updateRotationAdvice() {
    const rotationInfo = document.getElementById('rotationInfo');
    rotationInfo.innerHTML = '';
    
    const plantFamilies = groupPlantsByFamily();
    
    Object.entries(plantFamilies).forEach(([family, plants]) => {
        if (plants.length > 1) {
            const adviceItem = document.createElement('div');
            adviceItem.className = 'advice-item warning';
            adviceItem.innerHTML = `
                <strong>Rotation conseillée:</strong><br>
                Évitez de planter plusieurs ${family} (${plants.join(', ')}) au même endroit l'année prochaine.
            `;
            rotationInfo.appendChild(adviceItem);
        }
    });
}

function groupPlantsByFamily() {
    const families = {
        'Solanacées': ['Tomate', 'Poivron', 'Aubergine', 'Pomme de terre'],
        'Apiacées': ['Carotte', 'Céleri', 'Panais', 'Persil'],
        'Brassicacées': ['Chou', 'Radis', 'Navet', 'Roquette'],
        'Cucurbitacées': ['Courgette', 'Concombre', 'Courge', 'Melon'],
        'Fabacées': ['Haricot', 'Pois', 'Fève', 'Lentille'],
        'Liliacées': ['Oignon', 'Ail', 'Échalote', 'Poireau']
    };
    
    const result = {};
    const allPlants = getAllPlantedPlants();
    
    allPlants.forEach(plant => {
        for (const [family, members] of Object.entries(families)) {
            if (members.includes(plant)) {
                if (!result[family]) result[family] = [];
                result[family].push(plant);
                break;
            }
        }
    });
    
    return result;
}

function updateSeasonAdvice() {
    const seasonInfo = document.getElementById('seasonInfo');
    seasonInfo.innerHTML = '';
    
    const currentMonth = new Date().getMonth();
    const season = getCurrentSeason(currentMonth);
    
    const adviceItem = document.createElement('div');
    adviceItem.className = 'advice-item';
    adviceItem.innerHTML = `
        <strong>Saison actuelle: ${season}</strong><br>
        C'est le moment idéal pour planter: ${getRecommendedPlants(season).join(', ')}
    `;
    seasonInfo.appendChild(adviceItem);
}

function getCurrentSeason(month) {
    const seasons = {
        'printemps': [2, 3, 4],
        'ete': [5, 6, 7],
        'automne': [8, 9, 10],
        'hiver': [11, 0, 1]
    };
    
    return Object.entries(seasons).find(([_, months]) => 
        months.includes(month)
    )[0];
}

function getRecommendedPlants(season) {
    const recommendations = {
        'printemps': ['Laitue', 'Radis', 'Carotte', 'Epinard', 'Petit pois'],
        'ete': ['Tomate', 'Courgette', 'Concombre', 'Poivron', 'Haricot'],
        'automne': ['Chou', 'Brocoli', 'Navet', 'Poireau', 'Mâche'],
        'hiver': ['Ail', 'Oignon', 'Échalote', 'Fève', 'Poireau']
    };
    
    return recommendations[season] || [];
}

// Utilitaires
function getAllPlantedPlants() {
    const plants = [];
    gardenGrid.forEach(row => {
        row.forEach(cell => {
            if (cell && !plants.includes(cell)) {
                plants.push(cell);
            }
        });
    });
    return plants;
}

function resetGarden() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser votre potager ?')) {
        generateGardenGrid(
            parseInt(document.getElementById('gardenWidth').value),
            parseInt(document.getElementById('gardenHeight').value),
            parseInt(document.getElementById('cellSize').value)
        );
        showNotification('Potager réinitialisé', 'info');
    }
}

function saveGardenPlan() {
    const planName = prompt('Donnez un nom à votre plan de potager:');
    if (planName) {
        currentPlan = {
            name: planName,
            grid: gardenGrid,
            dimensions: {
                width: gardenGrid[0].length,
                height: gardenGrid.length
            },
            createdAt: new Date().toISOString()
        };
        
        // Sauvegarde simplifiée (dans un cas réel, on utiliserait localStorage ou une API)
        localStorage.setItem('gardenPlan', JSON.stringify(currentPlan));
        showNotification('Plan sauvegardé avec succès!', 'success');
    }
}

function showNotification(message, type) {
    // Implémentation simple d'une notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    notification.style.backgroundColor = type === 'success' ? '#4caf50' : 
                                       type === 'error' ? '#f44336' : '#2196f3';
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initPlanner();
});