// Données pour le potager virtuel
const virtualGardenPlants = [
    // Légumes-feuilles
    { id: 1, name: "Laitue", type: "legume", space: 0.09, color: "#77dd77", icon: "🥬", companions: ["Carotte", "Radis", "Fraises"], enemies: ["Chou"] },
    { id: 2, name: "Épinard", type: "legume", space: 0.09, color: "#2e8b57", icon: "🥬", companions: ["Chou", "Fraises", "Haricot"], enemies: [] },
    
    // Légumes-racines
    { id: 3, name: "Carotte", type: "legume", space: 0.04, color: "#ff8c00", icon: "🥕", companions: ["Laitue", "Oignon", "Poireau"], enemies: ["Aneth"] },
    { id: 4, name: "Radis", type: "legume", space: 0.02, color: "#ff6b6b", icon: "🌶️", companions: ["Laitue", "Carotte", "Concombre"], enemies: [] },
    
    // Légumineuses
    { id: 5, name: "Haricot", type: "legume", space: 0.09, color: "#f0e68c", icon: "🫘", companions: ["Maïs", "Courgette", "Chou"], enemies: ["Oignon", "Ail"] },
    
    // Légumes-fruits
    { id: 6, name: "Tomate", type: "fruit", space: 0.36, color: "#ff4500", icon: "🍅", companions: ["Basilic", "Carotte", "Oignon"], enemies: ["Pomme de terre", "Chou"] },
    { id: 7, name: "Courgette", type: "legume", space: 0.49, color: "#90ee90", icon: "🥒", companions: ["Maïs", "Haricot", "Radis"], enemies: [] },
    { id: 8, name: "Concombre", type: "legume", space: 0.25, color: "#7cfc00", icon: "🥒", companions: ["Haricot", "Maïs", "Radis"], enemies: ["Pomme de terre"] },
    
    // Bulbes
    { id: 9, name: "Oignon", type: "legume", space: 0.04, color: "#fff8dc", icon: "🧅", companions: ["Carotte", "Laitue", "Tomate"], enemies: ["Haricot", "Pois"] },
    
    // Aromatiques
    { id: 10, name: "Basilic", type: "aromatique", space: 0.04, color: "#98fb98", icon: "🌿", companions: ["Tomate", "Poivron", "Aubergine"], enemies: [] },
    { id: 11, name: "Persil", type: "aromatique", space: 0.04, color: "#228b22", icon: "🌿", companions: ["Tomate", "Asperge", "Maïs"], enemies: [] },
    
    // Fruits
    { id: 12, name: "Fraises", type: "fruit", space: 0.09, color: "#ff6b6b", icon: "🍓", companions: ["Laitue", "Épinard", "Thym"], enemies: ["Chou"] },
];

// État du potager
let gardenState = {
    plants: [],
    totalSurface: 0,
    layout: Array(80).fill(null) // 10x8 grid
};

// Éléments DOM
const plantsLibrary = document.getElementById('plantsLibrary');
const gardenGrid = document.getElementById('gardenGrid');
const totalSurfaceEl = document.getElementById('totalSurface');
const totalPlantsEl = document.getElementById('totalPlants');
const adviceContainer = document.getElementById('adviceContainer');
const clearGardenBtn = document.getElementById('clearGarden');
const autoArrangeBtn = document.getElementById('autoArrange');
const saveGardenBtn = document.getElementById('saveGarden');
const printGardenBtn = document.getElementById('printGarden');

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    loadPlantsLibrary();
    renderGarden();
    setupEventListeners();
});

// Charger la bibliothèque de plantes
function loadPlantsLibrary() {
    plantsLibrary.innerHTML = '';
    
    virtualGardenPlants.forEach(plant => {
        const plantEl = document.createElement('div');
        plantEl.className = 'plant-item';
        plantEl.draggable = true;
        plantEl.dataset.id = plant.id;
        plantEl.innerHTML = `
            <img src="https://images.unsplash.com/photo-1596627117031-6f197f38db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="${plant.name}">
            <div class="plant-item-info">
                <h4>${plant.name}</h4>
                <p>Espace: ${plant.space}m² • ${plant.icon}</p>
            </div>
            <button class="add-plant-btn" onclick="addPlantToGarden(${plant.id})">
                <i class="fas fa-plus"></i>
            </button>
        `;
        
        // Drag and drop
        plantEl.addEventListener('dragstart', handleDragStart);
        
        plantsLibrary.appendChild(plantEl);
    });
}

// Gestion du drag and drop
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
    e.target.classList.add('dragging');
}

function setupEventListeners() {
    // Zone de dépôt
    gardenGrid.addEventListener('dragover', e => {
        e.preventDefault();
    });
    
    gardenGrid.addEventListener('drop', e => {
        e.preventDefault();
        const plantId = e.dataTransfer.getData('text/plain');
        addPlantToGarden(parseInt(plantId));
        
        // Retirer la classe dragging
        document.querySelectorAll('.plant-item').forEach(item => {
            item.classList.remove('dragging');
        });
    });
    
    // Boutons
    clearGardenBtn.addEventListener('click', clearGarden);
    autoArrangeBtn.addEventListener('click', autoArrangeGarden);
    saveGardenBtn.addEventListener('click', saveGarden);
    printGardenBtn.addEventListener('click', printGarden);
}

// Ajouter une plante au potager
function addPlantToGarden(plantId) {
    const plant = virtualGardenPlants.find(p => p.id === plantId);
    if (!plant) return;
    
    gardenState.plants.push({
        ...plant,
        position: findAvailablePosition(plant.space)
    });
    
    gardenState.totalSurface += plant.space;
    gardenState.totalPlants = gardenState.plants.length;
    
    updateGardenStats();
    renderGarden();
    generateAdvice();
}

// Trouver une position disponible
function findAvailablePosition(space) {
    // Simplifié pour cet exemple - dans une vraie implémentation,
    // on calculerait la position optimale en fonction de l'espace nécessaire
    const gridSize = 80; // 10x8 grid
    const occupiedPositions = gardenState.plants.flatMap(p => p.position);
    
    for (let i = 0; i < gridSize; i++) {
        if (!occupiedPositions.includes(i)) {
            return i;
        }
    }
    
    return null; // Plus de place
}

// Mettre à jour les statistiques
function updateGardenStats() {
    totalSurfaceEl.textContent = gardenState.totalSurface.toFixed(2);
    totalPlantsEl.textContent = gardenState.totalPlants;
}

// Rendu du potager
function renderGarden() {
    if (gardenState.plants.length === 0) {
        gardenGrid.innerHTML = `
            <div class="empty-garden">
                <i class="fas fa-seedling"></i>
                <p>Ajoutez des plantes pour commencer</p>
            </div>
        `;
        return;
    }
    
    gardenGrid.innerHTML = '';
    gardenGrid.className = 'garden-grid-container';
    
    // Créer la grille 10x8
    for (let i = 0; i < 80; i++) {
        const plot = document.createElement('div');
        plot.className = 'garden-plot';
        plot.dataset.index = i;
        
        // Vérifier si cette case est occupée
        const plantInPlot = gardenState.plants.find(p => p.position === i);
        if (plantInPlot) {
            plot.classList.add('occupied');
            plot.innerHTML = `
                <div class="plant-in-garden" style="background-color: ${plantInPlot.color}">
                    ${plantInPlot.icon}
                </div>
                <div class="plant-in-garden-tooltip">${plantInPlot.name}</div>
            `;
            
            // Double-clic pour retirer la plante
            plot.addEventListener('dblclick', () => {
                removePlantFromGarden(plantInPlot.id);
            });
        }
        
        gardenGrid.appendChild(plot);
    }
}

// Retirer une plante du potager
function removePlantFromGarden(plantId) {
    const plantIndex = gardenState.plants.findIndex(p => p.id === plantId);
    if (plantIndex === -1) return;
    
    gardenState.totalSurface -= gardenState.plants[plantIndex].space;
    gardenState.plants.splice(plantIndex, 1);
    gardenState.totalPlants = gardenState.plants.length;
    
    updateGardenStats();
    renderGarden();
    generateAdvice();
}

// Vider le potager
function clearGarden() {
    if (confirm("Voulez-vous vraiment vider tout votre potager ?")) {
        gardenState.plants = [];
        gardenState.totalSurface = 0;
        gardenState.totalPlants = 0;
        
        updateGardenStats();
        renderGarden();
        generateAdvice();
    }
}

// Arrangement automatique
function autoArrangeGarden() {
    // Implémentation simplifiée - dans une vraie application,
    // on utiliserait un algorithme pour optimiser l'agencement
    alert("Fonctionnalité d'arrangement automatique en développement !");
}

// Générer des conseils
function generateAdvice() {
    if (gardenState.plants.length === 0) {
        adviceContainer.innerHTML = `
            <div class="empty-advice">
                <i class="fas fa-lightbulb"></i>
                <p>Les conseils apparaîtront ici lorsque vous ajouterez des plantes</p>
            </div>
        `;
        return;
    }
    
    let adviceHTML = '';
    
    // Conseils sur l'espace
    const totalSpace = gardenState.totalSurface;
    if (totalSpace > 10) {
        adviceHTML += `
            <div class="advice-item advice-warning">
                <h4><i class="fas fa-exclamation-triangle"></i> Potager spacieux</h4>
                <p>Votre potager fait ${totalSpace.toFixed(2)} m². Pensez à prévoir assez de temps pour l'entretien !</p>
            </div>
        `;
    }
    
    // Conseils de compagnonnage
    gardenState.plants.forEach(plant => {
        plant.companions.forEach(companion => {
            const hasCompanion = gardenState.plants.some(p => p.name === companion);
            if (!hasCompanion) {
                adviceHTML += `
                    <div class="advice-item">
                        <h4><i class="fas fa-handshake"></i> Compagnonnage recommandé</h4>
                        <p>Le ${plant.name} pousse mieux à côté des ${companion}. Pensez à en ajouter !</p>
                    </div>
                `;
            }
        });
        
        plant.enemies.forEach(enemy => {
            const hasEnemy = gardenState.plants.some(p => p.name === enemy);
            if (hasEnemy) {
                adviceHTML += `
                    <div class="advice-item advice-warning">
                        <h4><i class="fas fa-times-circle"></i> Mauvais voisinage</h4>
                        <p>Le ${plant.name} ne devrait pas être planté à côté des ${enemy}.</p>
                    </div>
                `;
            }
        });
    });
    
    // Conseil d'arrosage
    const hasTomatoes = gardenState.plants.some(p => p.name === "Tomate");
    const hasLettuce = gardenState.plants.some(p => p.name === "Laitue");
    
    if (hasTomatoes && hasLettuce) {
        adviceHTML += `
            <div class="advice-item">
                <h4><i class="fas fa-tint"></i> Besoins en eau différents</h4>
                <p>Les tomates et les laitues ont des besoins en eau différents. Pensez à les arroser séparément.</p>
            </div>
        `;
    }
    
    adviceContainer.innerHTML = adviceHTML || `
        <div class="advice-item">
            <h4><i class="fas fa-thumbs-up"></i> Bon départ !</h4>
            <p>Votre sélection de plantes semble bien s'associer. Continuez à construire votre potager idéal !</p>
        </div>
    `;
}

// Sauvegarder le potager
function saveGarden() {
    const gardenData = JSON.stringify(gardenState);
    localStorage.setItem('myVirtualGarden', gardenData);
    alert("Votre potager a été sauvegardé avec succès !");
}

// Charger un potager sauvegardé
function loadGarden() {
    const savedGarden = localStorage.getItem('myVirtualGarden');
    if (savedGarden) {
        gardenState = JSON.parse(savedGarden);
        updateGardenStats();
        renderGarden();
        generateAdvice();
    }
}

// Imprimer le plan
function printGarden() {
    alert("Fonctionnalité d'impression en développement !");
}

// Filtrer les plantes
function filterPlants(category) {
    const plantItems = document.querySelectorAll('.plant-item');
    
    plantItems.forEach(item => {
        const plantId = parseInt(item.dataset.id);
        const plant = virtualGardenPlants.find(p => p.id === plantId);
        
        if (category === 'all' || plant.type === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialiser les filtres
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterPlants(btn.dataset.category);
    });
});

// Recherche de plantes
document.getElementById('searchButtonVirtual').addEventListener('click', searchPlants);
document.getElementById('searchPlantVirtual').addEventListener('input', searchPlants);
document.getElementById('searchPlantVirtual').addEventListener('keypress', e => {
    if (e.key === 'Enter') searchPlants();
});

function searchPlants() {
    const searchTerm = document.getElementById('searchPlantVirtual').value.toLowerCase();
    const plantItems = document.querySelectorAll('.plant-item');
    
    plantItems.forEach(item => {
        const plantName = item.querySelector('h4').textContent.toLowerCase();
        if (plantName.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Charger le potager sauvegardé au chargement de la page
window.addEventListener('load', loadGarden);