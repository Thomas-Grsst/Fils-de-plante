// Éléments DOM
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const plantsContainer = document.getElementById("plantsContainer");
const plantDetails = document.getElementById("plantDetails");
const plantDetailsContent = document.getElementById("plantDetailsContent");
const closeModal = document.querySelector(".close-modal");
const plantTags = document.querySelectorAll(".plant-tag");

// Fonction pour chercher une plante sur Wikipedia
async function fetchPlant(name) {
    try {
        // Afficher un indicateur de chargement
        plantsContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner"></i>
                <p>Recherche de "${name}"...</p>
            </div>
        `;
        
        const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`;
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error("Plante non trouvée");
        }
        
        return await res.json();
    } catch (error) {
        console.error("Erreur lors de la recherche:", error);
        plantsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-circle"></i>
                <p>Aucun résultat trouvé pour "${name}"</p>
                <p>Vérifiez l'orthographe ou essayez un autre nom.</p>
            </div>
        `;
        return null;
    }
}

// Affiche une carte pour chaque plante
function displayPlantCard(plantData) {
    // Vérifier si c'est une page valide (pas une page d'homonymie ou de désambiguïsation)
    if (plantData.title.includes("Homonymie") || plantData.title.includes("Wikipédia")) {
        plantsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-circle"></i>
                <p>Plusieurs résultats possibles pour "${searchInput.value}"</p>
                <p>Veuillez préciser votre recherche.</p>
            </div>
        `;
        return;
    }
    
    const card = document.createElement("div");
    card.className = "plant-card";
    card.innerHTML = `
        <div class="plant-image">
            ${plantData.thumbnail ? `<img src="${plantData.thumbnail.source}" alt="${plantData.title}" loading="lazy">` : 
            `<div style="height:100%; display:flex; align-items:center; justify-content:center; background:#f1f8e9;">
                <i class="fas fa-leaf" style="font-size:3rem; color:#7cb342;"></i>
            </div>`}
        </div>
        <div class="plant-info">
            <h3>${plantData.title}</h3>
            <p class="plant-description">${plantData.extract ? plantData.extract.substring(0, 150) + '...' : "Description non disponible"}</p>
            <span class="view-details">Voir détails</span>
        </div>
    `;
    card.addEventListener('click', () => showPlantDetails(plantData));
    plantsContainer.innerHTML = '';
    plantsContainer.appendChild(card);
}

// Affiche les détails d'une plante
function showPlantDetails(plantData) {
    plantDetailsContent.innerHTML = `
        <h2>${plantData.title}</h2>
        ${plantData.thumbnail ? `<img src="${plantData.thumbnail.source}" alt="${plantData.title}" style="max-width:100%; border-radius:8px; margin-bottom:1.5rem;">` : ""}
        <p>${plantData.extract || "Pas de description disponible."}</p>
        <a href="https://fr.wikipedia.org/wiki/${encodeURIComponent(plantData.title)}" target="_blank">
            Lire la suite sur Wikipedia
        </a>
    `;
    plantDetails.classList.add("active");
    document.body.style.overflow = 'hidden'; // Empêcher le défilement en arrière-plan
}

// Recherche de plantes
async function searchPlant() {
    const query = searchInput.value.trim();
    if (!query) return;
    
    const plant = await fetchPlant(query);
    if (plant) {
        displayPlantCard(plant);
    }
}

// Événements
searchButton.addEventListener('click', searchPlant);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPlant();
    }
});

plantTags.forEach(tag => {
    tag.addEventListener('click', () => {
        searchInput.value = tag.getAttribute('data-plant');
        searchPlant();
    });
});

closeModal.addEventListener('click', () => {
    plantDetails.classList.remove("active");
    document.body.style.overflow = 'auto'; // Rétablir le défilement
});

// Fermer le modal en cliquant à l'extérieur
plantDetails.addEventListener('click', (e) => {
    if (e.target === plantDetails) {
        plantDetails.classList.remove("active");
        document.body.style.overflow = 'auto'; // Rétablir le défilement
    }
});

// Fermer le modal avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && plantDetails.classList.contains("active")) {
        plantDetails.classList.remove("active");
        document.body.style.overflow = 'auto'; // Rétablir le défilement
    }
});

// Exemple : afficher quelques plantes par défaut au chargement
window.addEventListener('load', () => {
    // Message d'accueil seulement, pas de plantes chargées par défaut
});