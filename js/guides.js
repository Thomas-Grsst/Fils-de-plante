// Données des guides (normalement, cela viendrait d'une base de données)
const guidesData = [
    {
        id: 1,
        title: "Débuter un potager en 10 étapes",
        theme: "debutant",
        image: "img/guides/debutant_potager.jpg",
        description: "Un guide complet pour les débutants qui veulent créer leur premier potager. Choix de l'emplacement, préparation du sol, sélection des plantes...",
        duration: "2-3 min de lecture"
    },
    {
        id: 2,
        title: "Compostage maison : les bonnes pratiques",
        theme: "bio",
        image: "img/guides/composte_maison.jpg",
        description: "Apprenez à recycler vos déchets verts en un compost riche pour nourrir votre jardin. Méthodes, erreurs à éviter et astuces.",
        duration: "2-3 min de lecture"
    },
    {
        id: 3,
        title: "Tailler les arbres fruitiers",
        theme: "technique",
        image: "img/guides/tailler_arbre_fruitier.jpg",
        description: "Quand et comment tailler vos arbres fruitiers pour optimiser la production. Techniques de taille selon les espèces.",
        duration: "2-3 min de lecture"
    },
    {
        id: 4,
        title: "Préparer son jardin pour l'hiver",
        theme: "saison",
        image: "img/guides/potager_hiver.jpg",
        description: "Les travaux essentiels à réaliser à l'automne pour protéger vos plantes et préparer la saison suivante.",
        duration: "2-3 min de lecture"
    },
    {
        id: 5,
        title: "Lutter contre les parasites naturellement",
        theme: "bio",
        image: "img/guides/parasite_potager.jpg",
        description: "Des solutions écologiques pour protéger vos cultures sans produits chimiques. Préparations maison et plantes compagnes.",
        duration: "2-3 min de lecture"
    },
    {
        id: 6,
        title: "Créer un jardin aromatique sur son balcon",
        theme: "debutant",
        image: "img/guides/jardin_aromatique_balcon.jpg",
        description: "Même sans jardin, cultivez vos herbes aromatiques préférées. Choix des contenants, substrat et entretien.",
        duration: "2-3 min de lecture"
    }
];

// Fonction pour afficher les guides
function displayGuides(guides) {
    const guidesContainer = document.getElementById('guidesContainer');
    guidesContainer.innerHTML = '';
    
    if (guides.length === 0) {
        guidesContainer.innerHTML = '<p class="no-results">Aucun guide ne correspond à votre sélection.</p>';
        return;
    }
    
    guides.forEach(guide => {
        const guideCard = document.createElement('div');
        guideCard.className = 'guide-card';
        guideCard.innerHTML = `
            <div class="guide-image">
                <img src="${guide.image}" alt="${guide.title}">
            </div>
            <div class="guide-content">
                <span class="guide-theme">${getThemeLabel(guide.theme)}</span>
                <h3>${guide.title}</h3>
                <p class="guide-description">${guide.description}</p>
                <div class="guide-meta">
                    <span class="guide-duration"><i class="far fa-clock"></i> ${guide.duration}</span>
                    <a href="#" class="btn">Lire le guide</a>
                </div>
            </div>
        `;
        guidesContainer.appendChild(guideCard);
    });
}

// Fonction pour obtenir le libellé du thème
function getThemeLabel(theme) {
    const themeLabels = {
        'debutant': 'Débutant',
        'technique': 'Technique',
        'saison': 'Saison',
        'bio': 'Bio'
    };
    return themeLabels[theme] || theme;
}

// Fonction pour filtrer par thème
function filterByTheme(theme) {
    if (theme === 'all') {
        return displayGuides(guidesData);
    }
    
    const filteredGuides = guidesData.filter(guide => 
        guide.theme === theme
    );
    
    displayGuides(filteredGuides);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Afficher tous les guides au chargement
    displayGuides(guidesData);
    
    // Ajouter les écouteurs d'événements pour les filtres de thème
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            // Filtrer par thème
            filterByTheme(this.dataset.theme);
        });
    });
    
    // Gestion de la newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Merci de vous être inscrit avec l'adresse : ${emailInput.value}`);
            emailInput.value = '';
        });
    }
});


// Données complètes des guides
const completeGuides = {
    1: {
        title: "Débuter un potager en 10 étapes",
        theme: "debutant",
        image: "img/guides/debutant_potager.jpg",
        duration: "2-3 min de lecture",
        content: `
            <div class="guide-text">
                <h3>Étape 1 : Choisir le bon emplacement</h3>
                <p>La première étape pour créer votre potager est de choisir le bon emplacement. Privilégiez un endroit ensoleillé (au moins 6 heures de soleil par jour), à l'abri des vents forts, et facile d'accès pour l'entretien et l'arrosage.</p>
                
                <h3>Étape 2 : Préparer le sol</h3>
                <p>Un bon sol est la base d'un potager réussi. Commencez par désherber soigneusement, puis ameublissez la terre sur 20-30 cm de profondeur. Ajoutez du compost ou du fumier bien décomposé pour enrichir le sol.</p>
                
                <h3>Étape 3 : Choisir vos cultures</h3>
                <p>Pour débuter, choisissez des légumes faciles à cultiver : radis, salades, haricots, courgettes, tomates cerises. Tenez compte de la saison et de votre climat.</p>
                
                <h3>Étape 4 : Planifier votre potager</h3>
                <p>Dessinez un plan de votre potager en respectant les distances de plantation et en associant les plantes compatibles. Pensez à la rotation des cultures pour les années suivantes.</p>
                
                <h3>Étape 5 : Semer et planter</h3>
                <p>Suivez les instructions sur les sachets de graines pour les semis. Pour les plants, faites un trou légèrement plus grand que la motte, placez le plant et rebouchez en tassant légèrement.</p>
                
                <h3>Étape 6 : Arroser correctement</h3>
                <p>Arrosez régulièrement mais sans excès, de préférence le matin ou le soir. Évitez de mouiller le feuillage pour prévenir les maladies.</p>
                
                <h3>Étape 7 : Pailler le sol</h3>
                <p>Le paillage conserve l'humidité, limite les mauvaises herbes et enrichit le sol. Utilisez de la paille, des tonte de gazon séchées, ou des feuilles mortes.</p>
                
                <h3>Étape 8 : Entretenir au quotidien</h3>
                <p>Désherbez régulièrement, surveillez l'apparition de parasites ou maladies, et tuteurez les plants qui en ont besoin (tomates, haricots à rames).</p>
                
                <h3>Étape 9 : Récolter au bon moment</h3>
                <p>Récoltez les légumes à maturité pour profiter de toute leur saveur. Une récolte régulière encourage souvent la production.</p>
                
                <h3>Étape 10 : Préparer l'hiver</h3>
                <p>À l'automne, nettoyez le potager, enfouissez les débris sains, et protégez les cultures sensibles au froid. Profitez-en pour faire un plan de rotation pour l'année suivante.</p>
            </div>
            
            <div class="guide-tips">
                <h3><i class="fas fa-lightbulb"></i> Conseils pour réussir</h3>
                <ul>
                    <li>Commencez petit : mieux vaut un petit potager bien entretenu qu'un grand espace négligé</li>
                    <li>Notez vos observations dans un carnet de jardinage</li>
                    <li>N'hésitez pas à demander conseil aux jardiniers expérimentés de votre entourage</li>
                    <li>Soyez patient : le jardinage s'apprend avec le temps et l'expérience</li>
                </ul>
            </div>
        `
    },
    2: {
        title: "Compostage maison : les bonnes pratiques",
        theme: "bio",
        image: "img/guides/composte_maison.jpg",
        duration: "2-3 min de lecture",
        content: `
            <div class="guide-text">
                <h3>Pourquoi composter ?</h3>
                <p>Le compostage permet de recycler vos déchets de cuisine et de jardin en un amendement riche et naturel pour votre sol. C'est écologique, économique et excellent pour la santé de votre jardin.</p>
                
                <h3>Choisir son composteur</h3>
                <p>Plusieurs options s'offrent à vous : composteur en bois, en plastique, bac à compost DIY, ou simplement un tas à même le sol. Choisissez en fonction de votre espace et de la quantité de déchets à composter.</p>
                
                <h3>Que peut-on composter ?</h3>
                <p><strong>Déchets verts (azotés) :</strong> Épluchures de fruits et légumes, marc de café, sachets de thé, tonte de gazon, fleurs fanées.</p>
                <p><strong>Déchets bruns (carbonés) :</strong> Feuilles mortes, branchages broyés, carton non traité, sciure, paille.</p>
                
                <h3>À éviter absolument</h3>
                <p>Viandes, poissons, produits laitiers, matières grasses, plantes malades, excréments d'animaux, litières non biodégradables, plastiques et métaux.</p>
                
                <h3>Les bonnes proportions</h3>
                <p>Pour un compost équilibré, respectez la règle des 2/3 de déchets bruns pour 1/3 de déchets verts. Alternez les couches et mélangez régulièrement pour aérer.</p>
                
                <h3>Entretenir son compost</h3>
                <p>Retournez votre compost toutes les 4-6 semaines pour l'aérer. Maintenez une humidité suffisante (comme une éponge essorée). Si c'est trop sec, arrosez légèrement. Si c'est trop humide, ajoutez des matières sèches.</p>
                
                <h3>Récolter et utiliser son compost</h3>
                <p>Le compost est mûr au bout de 6 à 12 mois. Il doit être homogène, de couleur sombre, avec une odeur d'humus forestier. Utilisez-le pour amender vos plates-bandes, potager, ou pour rempoter vos plantes.</p>
            </div>
            
            <div class="guide-tips">
                <h3><i class="fas fa-lightbulb"></i> Solutions aux problèmes courants</h3>
                <ul>
                    <li><strong>Odeurs désagréables :</strong> Trop de déchets verts → ajoutez des matières brunes et aérez</li>
                    <li><strong>Compost trop sec :</strong> Arrosez légèrement et mélangez</li>
                    <li><strong>Décomposition lente :</strong> Vérifiez l'équilibre verts/bruns et l'humidité</li>
                    <li><strong>Présence de moucherons :</strong> Couvrez les déchets de cuisine avec des feuilles ou du carton</li>
                </ul>
            </div>
        `
    },
    3: {
        title: "Tailler les arbres fruitiers",
        theme: "technique",
        image: "img/guides/tailler_arbre_fruitier.jpg",
        duration: "2-3 min de lecture",
        content: `
            <div class="guide-text">
                <h3>Pourquoi tailler les arbres fruitiers ?</h3>
                <p>La taille des arbres fruitiers a plusieurs objectifs : favoriser la fructification, améliorer la qualité des fruits, aérer la ramure pour limiter les maladies, et maintenir l'arbre en bonne santé.</p>
                
                <h3>Quand tailler ?</h3>
                <p>La période de taille dépend du type d'arbre fruitier :</p>
                <ul>
                    <li><strong>Arbres à pépins (pommier, poirier) :</strong> Taille en hiver, hors période de gel</li>
                    <li><strong>Arbres à noyaux (cerisier, prunier) :</strong> Taille après la récolte ou au début du printemps</li>
                    <li><strong>Arbres à petits fruits :</strong> Taille après la fructification</li>
                </ul>
                
                <h3>Les différents types de taille</h3>
                <p><strong>Taille de formation :</strong> Pratiquée sur les jeunes arbres pour leur donner une structure équilibrée.</p>
                <p><strong>Taille de fructification :</strong> Pour favoriser la production de fruits de qualité.</p>
                <p><strong>Taille d'entretien :</strong> Pour éliminer le bois mort, les branches malades ou qui se croisent.</p>
                
                <h3>Techniques de base</h3>
                <p>Utilisez toujours des outils bien affûtés et désinfectés. Faites des coupes nettes, en biseau, juste au-dessus d'un bourgeon tourné vers l'extérieur de l'arbre.</p>
                
                <h3>Tailler un pommier ou poirier</h3>
                <p>Ces arbres fruitiers produisent sur des rameaux de 2-3 ans. Conservez environ 80% de bois de l'année précédente et 20% de bois plus ancien. Supprimez les gourmands (pousses verticales vigoureuses).</p>
                
                <h3>Tailler un cerisier ou prunier</h3>
                <p>Taillez légèrement après la récolte pour aérer la couronne. Évitez les tailles sévères qui rendent ces arbres sensibles aux maladies.</p>
                
                <h3>Tailler les petits fruits</h3>
                <p><strong>Groseilliers et cassissiers :</strong> Conservez 8-10 branches maximum, en supprimant les plus anciennes chaque année.</p>
                <p><strong>Framboisiers :</strong> Pour les variétés non remontantes, taillez au ras du sol les cannes ayant fructifié. Pour les remontantes, taillez la partie supérieure ayant fructifié.</p>
            </div>
            
            <div class="guide-tips">
                <h3><i class="fas fa-lightbulb"></i> Conseils d'expert</h3>
                <ul>
                    <li>Ne taillez jamais par temps de pluie ou de gel</li>
                    <li>Appliquez un mastic cicatrisant sur les grosses coupes (supérieures à 3 cm)</li>
                    <li>Observez votre arbre avant de couper : mieux vaut ne pas tailler que mal tailler</li>
                    <li>Pour les débutants, assistez à un stage ou demandez conseil à un arboriculteur expérimenté</li>
                </ul>
            </div>
        `
    },

    4: {
        title: "Préparer son jardin pour l'hiver",
        theme: "saison",
        image: "img/guides/potager_hiver.jpg",
        duration: "2-3 min de lecture",
        content: `
            <div class="guide-text">
                <h3>Pourquoi préparer son jardin pour l'hiver ?</h3>
                <p>Une bonne préparation automnale permet à votre jardin de mieux résister au froid, de limiter les maladies, et de repartir de plus belle au printemps. C'est aussi l'occasion de nettoyer, protéger et planifier la saison suivante.</p>
                
                <h3>Nettoyage du potager</h3>
                <p>Commencez par retirer les plants annuels qui ont fini de produire. Attention : ne compostez pas les plants malades (mildiou, oïdium, etc.), brûlez-les ou jetez-les avec les déchets ménagers.</p>
                <p>Ramassez les feuilles mortes pour en faire du compost ou du paillis. Les feuilles saines peuvent être laissées sur place comme protection hivernale.</p>
                
                <h3>Protéger les plantes sensibles</h3>
                <p><strong>Plantes vivaces :</strong> Rabattez-les à 10-15 cm du sol et paillez généreusement avec des feuilles mortes, de la paille ou des frondes de fougères.</p>
                <p><strong>Arbres et arbustes :</strong> Protégez les jeunes sujets avec un voile d'hivernage. Butter les rosiers en formant une butte de terre de 15-20 cm autour du point de greffe.</p>
                <p><strong>Plantes en pot :</strong> Rentrez les plus fragiles dans un local hors gel, aéré et lumineux. Surélevez les autres avec des cales pour éviter le contact avec le sol froid et humide.</p>
                
                <h3>Préparer le sol pour le printemps</h3>
                <p>Profitez de l'automne pour amender votre sol avec du compost ou du fumier bien décomposé. Vous pouvez effectuer un bêchage grossier sans casser les mottes : le gel se chargera de les fragmenter naturellement.</p>
                <p>Semez des engrais verts (moutarde, seigle, phacélie) sur les parcelles libres pour protéger le sol et l'enrichir en matières organiques.</p>
                
                <h3>Entretenir les outils et le matériel</h3>
                <p>Nettoyez, affûtez et huilez vos outils de jardinage. Vidangez et rangez votre tondeuse. Nettoyez les pots et les jardinières vides. Vérifiez et réparez les structures (serres, chassis, tuteurs).</p>
                
                <h3>Planifier la saison suivante</h3>
                <p>L'hiver est le moment idéal pour :</p>
                <ul>
                    <li>Établir le plan de rotation des cultures</li>
                    <li>Commander les graines et plants pour le printemps</li>
                    <li>Étudier les associations bénéfiques entre plantes</li>
                    <li>Noter vos observations de l'année écoulée</li>
                </ul>
                
                <h3>Plantations d'automne</h3>
                <p>L'automne est la meilleure période pour planter :</p>
                <ul>
                    <li>Arbres et arbustes fruitiers (ils s'enracineront avant l'hiver)</li>
                    <li>Arbres et arbustes d'ornement</li>
                    <li>Bulbes de printemps (tulipes, narcisses, crocus)</li>
                    <li>Ail, oignon, échalote (dans les régions aux hivers doux)</li>
                </ul>
            </div>
            
            <div class="guide-tips">
                <h3><i class="fas fa-lightbulb"></i> Checklist de préparation hivernale</h3>
                <ul>
                    <li>Nettoyer et ranger les outils</li>
                    <li>Protéger les plantes sensibles au froid</li>
                    <li>Amender le sol avec du compost</li>
                    <li>Semer des engrais verts sur les parcelles libres</li>
                    <li>Planter les bulbes de printemps</li>
                    <li>Butter les rosiers et autres plantes fragiles</li>
                    <li>Vider et protéger les systèmes d'arrosage</li>
                    <li>Nettoyer les mangeoires pour les oiseaux</li>
                </ul>
            </div>
        `
    },

    5: {
        title: "Lutter contre les parasites naturellement",
        theme: "bio",
        image: "img/guides/parasite_potager.jpg",
        duration: "2-3 min de lecture",
        content: `
            <div class="guide-text">
                <h3>La prévention : la meilleure des luttes</h3>
                <p>Un jardin équilibré est la meilleure défense contre les parasites. Favorisez la biodiversité, maintenez des plantes en bonne santé et pratiquez la rotation des cultures pour limiter naturellement les infestations.</p>
                
                <h3>Les auxiliaires du jardinier</h3>
                <p>Attirez et préservez les insectes bénéfiques qui vous aideront à lutter contre les parasites :</p>
                <p><strong>Coccinelles :</strong> Dévorrent les pucerons. Plantez de la bourrache, de la phacélie ou des capucines pour les attirer.</p>
                <p><strong>Perce-oreilles :</strong> Mangent les pucerons et autres petits insectes. Installez des pots de fleurs remplis de paille retournés sur des piquets.</p>
                <p><strong>Hérissons :</strong> Consomment limaces, escargots et insectes. Laissez un coin sauvage avec des feuilles mortes et un petit abri.</p>
                <p><strong>Oiseaux insectivores :</strong> Installez des nichoirs et des points d'eau pour attirer les mésanges, rouges-gorges et autres oiseaux utiles.</p>
                
                <h3>Préparations naturelles maison</h3>
                <p><strong>Purin d'ortie :</strong> Renforce les défenses des plantes et repousse les pucerons. Faites macérer 1 kg d'orties dans 10L d'eau pendant 10-15 jours. Diluez à 10% pour pulvérisation, à 20% pour arrosage.</p>
                <p><strong>Purin de consoude :</strong> Riche en potasse, il favorise la floraison et la fructification. Préparation similaire au purin d'ortie.</p>
                <p><strong>Décoction de prêle :</strong> Renforce les plantes contre les maladies cryptogamiques (mildiou, oïdium). Faites bouillir 100g de prêle séchée dans 10L d'eau, laissez infuser 24h. Pulvérisez sans dilution.</p>
                <p><strong>Infusion de tanaisie :</strong> Répulsive contre de nombreux insectes. Faites infuser 300g de plantes fraîches dans 10L d'eau bouillante. Pulvérisez après refroidissement.</p>
                
                <h3>Lutte contre les principaux parasites</h3>
                <p><strong>Pucerons :</strong> Pulvérisez du savon noir dilué (5 cuillères à soupe/L) ou introduisez des larves de coccinelles.</p>
                <p><strong>Limaces et escargots :</strong> Barrières de cendres, de coquilles d'œufs broyées ou de marc de café. Pièges à bière. Prédateurs naturels (hérissons, carabes, oiseaux).</p>
                <p><strong>Chenilles :</strong> Pulvérisez du Bacillus thuringiensis (BT), une bactérie naturelle spécifique aux chenilles.</p>
                <p><strong>Aleurodes (mouches blanches) :</strong> Plantez des œillets d'Inde comme répulsif. Utilisez des panneaux jaunes englués.</p>
                <p><strong>Doryphores :</strong> Ramassage manuel quotidien. Plantez de l'ail ou du lin entre les rangs de pommes de terre.</p>
                
                <h3>Plantes compagnes répulsives</h3>
                <p>Associez vos cultures avec des plantes qui repoussent naturellement les parasites :</p>
                <ul>
                    <li><strong>Œillets d'Inde :</strong> contre les nématodes, aleurodes et pucerons</li>
                    <li><strong>Basilic :</strong> contre les mouches et moustiques</li>
                    <li><strong>Romarin :</strong> contre la mouche de la carotte</li>
                    <li><strong>Sauge :</strong> contre la piéride du chou</li>
                    <li><strong>Capucines :</strong> attirent les pucerons, servant de plantes pièges</li>
                </ul>
                
                <h3>Techniques culturales préventives</h3>
                <p>Adoptez ces pratiques pour minimiser les problèmes de parasites :</p>
                <ul>
                    <li>Rotation des cultures sur 3-4 ans minimum</li>
                    <li>Association de plantes complémentaires</li>
                    <li>Paillage pour limiter l'évaporation et les herbes indésirables</li>
                    <li>Arrosage au goutte-à-goutte pour éviter l'humidité sur le feuillage</li>
                    <li>Espacement suffisant entre les plants pour une bonne aération</li>
                </ul>
            </div>
            
            <div class="guide-tips">
                <h3><i class="fas fa-lightbulb"></i> Recette express contre les pucerons</h3>
                <p>Mélangez dans un pulvérisateur :</p>
                <ul>
                    <li>1 litre d'eau</li>
                    <li>3 cuillères à soupe de savon noir</li>
                    <li>1 cuillère à café d'huile végétale</li>
                    <li>Quelques gouttes d'huile essentielle de lavande (optionnel)</li>
                </ul>
                <p>Pulvérisez le soir sur les plantes infestées. Renouvelez après une pluie.</p>
            </div>
        `
    },
    6: {
        title: "Créer un jardin aromatique sur son balcon",
        theme: "debutant",
        image: "img/guides/jardin_aromatique_balcon.jpg",
        duration: "2-3 min de lecture",
        content: `
            <div class="guide-text">
                <h3>Les avantages d'un jardin aromatique sur balcon</h3>
                <p>Même avec un espace limité, vous pouvez cultiver vos herbes aromatiques favorites. Fraîcheur garantie, économies, décoration parfumée et satisfaction personnelle sont au rendez-vous !</p>
                
                <h3>Choisir le bon emplacement</h3>
                <p>La plupart des aromatiques nécessitent au moins 4-6 heures d'ensoleillement quotidien. Observez votre balcon pour repérer les zones ensoleillées et celles à mi-ombre.</p>
                <p>Protégez vos plantes des vents dominants qui peuvent les dessécher. Si votre balcon est exposé, installez des brise-vents ou placez les plantes les plus fragiles à l'abri.</p>
                
                <h3>Sélection des aromatiques adaptées</h3>
                <p><strong>Pour les balcons ensoleillés (sud, sud-ouest) :</strong></p>
                <ul>
                    <li>Thym, romarin, sarriette (méditerranéennes, aiment la chaleur)</li>
                    <li>Lavande, sauge officinale</li>
                    <li>Basilic, origan, estragon</li>
                </ul>
                
                <p><strong>Pour les balcons à mi-ombre (est, ouest) :</strong></p>
                <ul>
                    <li>Persil, cerfeuil, ciboulette</li>
                    <li>Menthe, mélisse (attention, très envahissantes)</li>
                    <li>Oseille, livèche</li>
                </ul>
                
                <h3>Choix des contenants</h3>
                <p><strong>Pots individuels :</strong> Plus faciles à déplacer, permettent d'offrir des conditions spécifiques à chaque plante.</p>
                <p><strong>Jardinières :</strong> Idéales pour associer plusieurs plantes ayant les mêmes besoins (ex: toutes les méditerranéennes).</p>
                <p><strong>Pots à réserve d'eau :</strong> Pratiques pour les oublieux d'arrosage, mais attention à ne pas trop arroser !</p>
                <p><strong>Matériaux :</strong> Privilégiez la terre cuite (respirante) ou le bois. Les pots en plastique chauffent plus au soleil.</p>
                
                <h3>Le substrat adapté</h3>
                <p>Utilisez un terreau spécial plantes aromatiques ou un mélange :</p>
                <ul>
                    <li>70% de terreau universel</li>
                    <li>20% de compost bien décomposé</li>
                    <li>10% de sable grossier (surtout pour les méditerranéennes)</li>
                </ul>
                <p>Évitez les terreaux trop riches qui favorisent le feuillage au détriment des arômes.</p>
                
                <h3>Plantation et entretien</h3>
                <p><strong>Drainage :</strong> Placez une couche de billes d'argile ou de graviers au fond des pots (2-3 cm).</p>
                <p><strong>Arrosage :</strong> Arrosez modérément en laissant sécher le substrat en surface entre deux arrosages. Les aromatiques méditerranéennes détestent l'excès d'eau.</p>
                <p><strong>Engrais :</strong> Apportez un engrais organique liquide une fois par mois pendant la période de croissance (avril à septembre).</p>
                <p><strong>Taille :</strong> Récoltez régulièrement pour favoriser la ramification. Pour les plantes vivaces (thym, romarin), rabattez légèrement au printemps.</p>
                
                <h3>Aménagement esthétique et pratique</h3>
                <p>Jouez avec les hauteurs en utilisant des étagères, des tables de culture ou des suspensions. Associez les aromatiques à des fleurs comestibles (œillets d'Inde, capucines) pour un balcon à la fois utile et décoratif.</p>
                <p>Pensez à l'accessibilité : placez les aromatiques les plus utilisées près de la porte ou de la fenêtre de cuisine.</p>
                
                <h3>Protection hivernale</h3>
                <p>Rentrez les aromatiques les plus fragiles (laurier-sauce, citronnelle) dans une pièce fraîche et lumineuse. Protégez les vivaces rustiques (thym, romarin) en regroupant les pots contre un mur abrité et en paillant la surface du pot.</p>
            </div>
            
            <div class="guide-tips">
                <h3><i class="fas fa-lightbulb"></i> Idées d'associations en jardinière</h3>
                <p><strong>Jardinière méditerranéenne :</strong> Thym, romarin, sarriette et origan. Substrat léger et sablonneux. Arrosage minimal.</p>
                <p><strong>Jardinière des salades :</strong> Persil, ciboulette, cerfeuil et estragon. Substrat riche. Mi-ombre.</p>
                <p><strong>Jardinière parfumée :</strong> Menthe chocolat, verveine citronnelle, basilic citron. Parfaite pour les infusions.</p>
                <p><strong>Conseil :</strong> Cultivez la menthe toujours seule en pot, elle étoufferait rapidement ses voisines !</p>
            </div>
        `
    }
};

// Fonction pour afficher un guide complet
function showGuide(guideId) {
    const guide = completeGuides[guideId];
    if (!guide) return;
    
    const guideContent = document.getElementById('guideContent');
    const guideModal = document.getElementById('guideModal');
    
    guideContent.innerHTML = `
        <h2>${guide.title}</h2>
        
        <div class="guide-meta">
            <span class="guide-theme">${getThemeLabel(guide.theme)}</span>
            <span class="guide-duration"><i class="far fa-clock"></i> ${guide.duration}</span>
        </div>
        
        <div class="guide-image">
            <img src="${guide.image}" alt="${guide.title}">
        </div>
        
        ${guide.content}
    `;
    
    guideModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modal
function closeGuideModal() {
    const guideModal = document.getElementById('guideModal');
    guideModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Mettre à jour la fonction displayGuides pour rendre les boutons fonctionnels
function displayGuides(guides) {
    const guidesContainer = document.getElementById('guidesContainer');
    guidesContainer.innerHTML = '';
    
    if (guides.length === 0) {
        guidesContainer.innerHTML = '<p class="no-results">Aucun guide ne correspond à votre sélection.</p>';
        return;
    }
    
    guides.forEach(guide => {
        const guideCard = document.createElement('div');
        guideCard.className = 'guide-card';
        guideCard.innerHTML = `
            <div class="guide-image">
                <img src="${guide.image}" alt="${guide.title}">
            </div>
            <div class="guide-content">
                <span class="guide-theme">${getThemeLabel(guide.theme)}</span>
                <h3>${guide.title}</h3>
                <p class="guide-description">${guide.description}</p>
                <div class="guide-meta">
                    <span class="guide-duration"><i class="far fa-clock"></i> ${guide.duration}</span>
                    <button class="btn read-guide-btn" data-id="${guide.id}">Lire le guide</button>
                </div>
            </div>
        `;
        guidesContainer.appendChild(guideCard);
    });
    
    // Ajouter les événements aux boutons
    document.querySelectorAll('.read-guide-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêcher la propagation de l'événement
            const guideId = this.getAttribute('data-id');
            showGuide(guideId);
        });
    });
}

// Mettre à jour l'initialisation pour inclure la fermeture de la modal
document.addEventListener('DOMContentLoaded', function() {
    // ... code existant ...
    
    // Fermer la modal
    document.querySelector('.guide-modal .close-modal').addEventListener('click', closeGuideModal);
    
    // Fermer la modal en cliquant à l'extérieur
    document.getElementById('guideModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeGuideModal();
        }
    });
    
    // Fermer la modal avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGuideModal();
        }
    });
});