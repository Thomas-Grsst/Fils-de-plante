// Données des légumes et fruits comestibles
const ediblePlants = [
    // 🥬 Légumes-feuilles
    {
        id: 1,
        name: "Laitue",
        type: "legume-feuille",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/laitue.jpg",
        description: "La laitue est une plante annuelle de la famille des Astéracées, cultivée pour ses feuilles tendres consommées comme salade verte.",
        care: {
            plantation: "Février à Septembre",
            recolte: "Avril à Novembre",
            exposition: "Mi-ombre",
            arrosage: "Régulier pour garder la terre fraîche",
            entretien: "Protéger des limaces, récolter le matin",
            conseil: "Planter en escalier pour avoir des récoltes étalées"
        }
    },
    {
        id: 2,
        name: "Épinard",
        type: "legume-feuille",
        seasons: ["printemps", "automne"],
        image: "img/potager/epinard.jpg",
        description: "L'épinard est une plante potagère de la famille des Amaranthacées, cultivée pour ses feuilles comestibles riches en fer.",
        care: {
            plantation: "Mars à Mai et Août à Septembre",
            recolte: "Mai à Juin et Septembre à Novembre",
            exposition: "Mi-ombre",
            arrosage: "Régulier sans détremper le sol",
            entretien: "Récolter les feuilles externes pour permettre la repousse",
            conseil: "Pailler pour conserver l'humidité et éviter les mauvaises herbes"
        }
    },
    {
        id: 3,
        name: "Bette",
        type: "legume-feuille",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/bette.jpg",
        description: "La bette ou poirée est une plante potagère de la famille des Amaranthacées, cultivée pour ses côtes et ses feuilles comestibles.",
        care: {
            plantation: "Avril à Juin",
            recolte: "Juin à Novembre",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier surtout en période sèche",
            entretien: "Butter les plants pour blanchir les côtes",
            conseil: "Récolter les feuilles externes pour prolonger la production"
        }
    },
    {
        id: 4,
        name: "Roquette",
        type: "legume-feuille",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/roquette.jpg",
                description: "La roquette est une plante herbacée de la famille des Brassicacées, appréciée pour ses feuilles au goût poivré utilisées en salade.",
        care: {
            plantation: "Mars à Septembre",
            recolte: "Avril à Octobre",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier pour éviter la montée en graines",
            entretien: "Couper régulièrement pour favoriser de nouvelles pousses",
            conseil: "Semer toutes les 3 semaines pour une récolte continue"
        }
    },
    {
        id: 5,
        name: "Chou",
        type: "legume-feuille",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/chou.jpg",
        description: "Le chou est une plante potagère de la famille des Brassicacées, dont il existe de nombreuses variétés (pommé, frisé, chou-fleur, etc.).",
        care: {
            plantation: "Mars à Juillet selon les variétés",
            recolte: "Mai à Décembre selon les variétés",
            exposition: "Soleil",
            arrosage: "Régulier surtout après la plantation",
            entretien: "Butter les plants, protéger des parasites",
            conseil: "Planter des œillets d'Inde à proximité pour éloigner les papillons"
        }
    },
    {
        id: 6,
        name: "Endive",
        type: "legume-feuille",
        seasons: ["automne", "hiver"],
        image: "img/potager/endive.jpg",
        description: "L'endive est une variété de chicorée amère de la famille des Astéracées, cultivée pour ses chicons blanchis consommés en salade.",
        care: {
            plantation: "Mai à Juin (racines)",
            recolte: "Octobre à Mars (forçage)",
            exposition: "Soleil pour les racines, obscurité pour le forçage",
            arrosage: "Modéré pour les racines",
            entretien: "Arracher les racines, les forcer à l'obscurité",
            conseil: "Forcer les racines progressivement pour une production étalée"
        }
    },
    {
        id: 7,
        name: "Mâche",
        type: "legume-feuille",
        seasons: ["automne", "hiver"],
        image: "img/potager/mache.jpg",
                description: "La mâche est une petite plante potagère de la famille des Caprifoliacées, cultivée pour ses rosettes de feuilles tendres en salade.",
        care: {
            plantation: "Juillet à Septembre",
            recolte: "Octobre à Mars",
            exposition: "Mi-ombre",
            arrosage: "Régulier à la plantation puis modéré",
            entretien: "Éclaircir après la levée",
            conseil: "Pailler pour protéger du froid en hiver"
        }
    },

    // 🥕 Légumes-racines et tubercules
    {
        id: 8,
        name: "Carotte",
        type: "legume-racine",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/carotte.jpg",
        description: "La carotte est une plante bisannuelle de la famille des Apiacées, cultivée pour sa racine pivotante charnue, comestible, de couleur généralement orange.",
        care: {
            plantation: "Février à Juillet",
            recolte: "Mai à Novembre",
            exposition: "Mi-ombre à ensoleillée",
            arrosage: "Régulier mais modéré",
            entretien: "Éclaircir après la levée, sol meuble et sans cailloux",
            conseil: "Semer avec des radis pour marquer les rangs et maximiser l'espace"
        }
    },
    {
        id: 9,
        name: "Radis",
        type: "legume-racine",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/radis.jpg",
        description: "Le radis est une plante potagère de la famille des Brassicacées, cultivée pour sa racine charnue et croquante, souvent de couleur rouge.",
        care: {
            plantation: "Février à Septembre",
            recolte: "Mars à Octobre",
            exposition: "Mi-ombre à ensoleillée",
            arrosage: "Régulier pour une croissance rapide",
            entretien: "Éclaircir après levée, récolter rapidement",
            conseil: "Semer tous les 15 jours pour une récolte continue"
        }
    },
    {
        id: 10,
        name: "Navet",
        type: "legume-racine",
        seasons: ["printemps", "automne"],
        image: "img/potager/navet.jpg",
        description: "Le navet est une plante potagère de la famille des Brassicacées, cultivée pour sa racine charnue arrondie ou allongée, consommée comme légume.",
        care: {
            plantation: "Mars à Mai (printemps), Juillet à Août (automne)",
            recolte: "Mai à Juillet (primeur), Septembre à Novembre (conservation)",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier sans excès",
            entretien: "Éclaircir après la levée, binage régulier",
            conseil: "Récolter jeunes pour une saveur plus douce"
        }
    },
    {
        id: 11,
        name: "Betterave",
        type: "legume-racine",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/betterave.jpg",
        description: "La betterave est une plante potagère de la famille des Amaranthacées, cultivée pour sa racine charnue rouge, consommée cuite ou crue.",
        care: {
            plantation: "Avril à Juin",
            recolte: "Juillet à Octobre",
            exposition: "Soleil",
            arrosage: "Régulier surtout en période sèche",
            entretien: "Éclaircir après la levée, binage régulier",
            conseil: "Semer en lignes espacées de 30 cm"
        }
    },
    {
        id: 12,
        name: "Panais",
        type: "legume-racine",
        seasons: ["printemps", "automne"],
        image: "img/potager/panais.jpg",
        description: "Le panais est une plante bisannuelle de la famille des Apiacées, cultivée pour sa racine charnue blanc crème au goût sucré.",
        care: {
            plantation: "Février à Avril",
            recolte: "Octobre à Mars",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Modéré",
            entretien: "Éclaircir après la levée, binage régulier",
            conseil: "Laisser en terre jusqu'aux premières gelées pour plus de saveur"
        }
    },
    {
        id: 13,
        name: "Céleri-rave",
        type: "legume-racine",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/celeri_rave.jpg",
        description: "Le céleri-rave est une plante potagère de la famille des Apiacées, cultivée pour sa racine tubérisée consommée crue ou cuite.",
        care: {
            plantation: "Avril à Mai",
            recolte: "Octobre à Novembre",
            exposition: "Soleil",
            arrosage: "Régulier et abondant",
            entretien: "Butter légèrement, supprimer les feuilles basses",
            conseil: "Planter dans un sol profond et riche en humus"
        }
    },
    {
        id: 14,
        name: "Pomme de terre",
        type: "tubercule",
        seasons: ["printemps", "ete"],
        image: "img/potager/pomme_de_terre.jpg",
        description: "La pomme de terre est une plante tubéreuse de la famille des Solanacées, cultivée pour ses tubercules comestibles, base de l'alimentation dans de nombreux pays.",
        care: {
            plantation: "Mars à Mai selon les régions",
            recolte: "Juin à Septembre selon les variétés",
            exposition: "Soleil",
            arrosage: "Modéré, surtout après la floraison",
            entretien: "Butter les plants, surveiller le mildiou",
            conseil: "Planter dans un sol léger et bien drainé"
        }
    },
    {
        id: 15,
        name: "Topinambour",
        type: "tubercule",
        seasons: ["automne", "hiver"],
        image: "img/potager/topinambour.jpg",
        description: "Le topinambour est une plante vivace de la famille des Astéracées, cultivée pour ses tubercules irréguliers au goût d'artichaut.",
        care: {
            plantation: "Février à Avril",
            recolte: "Octobre à Mars",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Modéré",
            entretien: "Butter les plants, contenir son expansion",
            conseil: "Récolter au besoin tout l'hiver"
        }
    },

    // 🌰 Légumineuses (fabacées)
    {
        id: 16,
        name: "Haricot vert",
        type: "legumineuse",
        seasons: ["printemps", "ete"],
        image: "img/potager/haricot_vert.jpg",
        description: "Le haricot vert est une plante de la famille des Fabacées, cultivée pour ses gousses immatures consommées comme légume.",
        care: {
            plantation: "Avril à Juillet",
            recolte: "Juin à Octobre",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier sans mouiller le feuillage",
            entretien: "Butter les plants, récolter régulièrement",
            conseil: "Semer en plusieurs fois pour étaler la récolte"
        }
    },
    {
        id: 17,
        name: "Pois",
        type: "legumineuse",
        seasons: ["printemps"],
        image: "img/potager/pois.jpg",
        description: "Le pois est une plante annuelle de la famille des Fabacées, cultivée pour ses graines rondes consommées fraîches ou sèches.",
        care: {
            plantation: "Février à Avril",
            recolte: "Mai à Juillet",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier surtout à la floraison",
            entretien: "Tuteurer les variétés à rames",
            conseil: "Semer précocement en sol bien drainé"
        }
    },
    {
        id: 18,
        name: "Fève",
        type: "legumineuse",
        seasons: ["automne", "hiver", "printemps"],
        image: "img/potager/feve.jpg",
        description: "La fève est une plante annuelle de la famille des Fabacées, cultivée pour ses grosses graines plates consommées fraîches ou sèches.",
        care: {
            plantation: "Octobre à Novembre (automne), Février à Mars (printemps)",
            recolte: "Mai à Juillet",
            exposition: "Soleil",
            arrosage: "Modéré",
            entretien: "Butter les plants, pincer l'extrémité",
            conseil: "Planter en automne pour une récolte précoce"
        }
    },

    // 🍅 Légumes-fruits
    {
        id: 19,
        name: "Tomate",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/tomate.jpg",
        description: "La tomate est un fruit charnu de la famille des Solanacées. Originaire d'Amérique du Sud, elle est maintenant cultivée worldwide pour son fruit savoureux.",
        care: {
            plantation: "Mars à Mai",
            recolte: "Juin à Octobre",
            exposition: "Plein soleil",
            arrosage: "Régulier sans mouiller les feuilles",
            entretien: "Tuteurer les plants, pailler le sol, supprimer les gourmands",
            conseil: "Planter des œillets d'Inde à proximité pour éloigner les parasites"
        }
    },
    {
        id: 20,
        name: "Poivron",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/poivron.jpg",
        description: "Le poivron est une plante de la famille des Solanacées, cultivée pour son fruit consommé comme légume, disponible en différentes couleurs.",
        care: {
            plantation: "Mars à Mai",
            recolte: "Juillet à Octobre",
            exposition: "Plein soleil",
            arrosage: "Régulier mais modéré",
            entretien: "Tuteurer si nécessaire, pincer la tige principale",
            conseil: "Planter en serre ou sous abri dans les régions fraîches"
        }
    },
    {
        id: 21,
        name: "Aubergine",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/aubergine.jpg",
        description: "L'aubergine est une plante de la famille des Solanacées, cultivée pour son fruit charnu utilisé comme légume en cuisine.",
        care: {
            plantation: "Avril à Mai",
            recolte: "Juillet à Septembre",
            exposition: "Plein soleil",
            arrosage: "Régulier mais sans excès",
            entretien: "Tuteurer les plants, pincer la tige principale",
            conseil: "Planter dans un sol riche et bien drainé"
        }
    },
    {
        id: 22,
        name: "Courgette",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/courgette.jpg",
                description: "La courgette est une plante de la famille des Cucurbitacées, cultivée pour son fruit allongé que l'on consomme comme légume.",
        care: {
            plantation: "Avril à Juin",
            recolte: "Juin à Octobre",
            exposition: "Plein soleil",
            arrosage: "Abondant et régulier",
            entretien: "Planter en sol riche, récolter jeunes pour favoriser la production",
            conseil: "Récolter régulièrement pour stimuler la production de nouvelles courgettes"
        }
    },

        {
        id: 23,
        name: "Courge",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/courge.jpg",
        description: "La courge est une plante de la famille des Cucurbitacées, comprenant de nombreuses variétés (butternut, potimarron, spaghetti, etc.) aux formes et couleurs variées.",
        care: {
            plantation: "Avril à Mai",
            recolte: "Septembre à Novembre",
            exposition: "Plein soleil",
            arrosage: "Abondant surtout en période de croissance",
            entretien: "Pailler le sol, guider les tiges si nécessaire",
            conseil: "Récolter avant les premières gelées et laisser sécher au soleil quelques jours"
        }
    },
    {
        id: 24,
        name: "Concombre",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/concombre.jpg",
        description: "Le concombre est une plante potagère de la famille des Cucurbitacées, cultivée pour son fruit allongé et rafraîchissant.",
        care: {
            plantation: "Avril à Juin",
            recolte: "Juin à Septembre",
            exposition: "Plein soleil",
            arrosage: "Abondant et régulier",
            entretien: "Palisser les plants pour économiser de l'espace",
            conseil: "Récolter jeunes pour éviter l'amertume"
        }
    },
    {
        id: 25,
        name: "Cornichon",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/cornichon.jpg",
        description: "Le cornichon est une variété de concombre récoltée très jeune pour être conservée dans du vinaigre.",
        care: {
            plantation: "Avril à Juin",
            recolte: "Juin à Septembre",
            exposition: "Plein soleil",
            arrosage: "Régulier",
            entretien: "Palisser les plants, récolter très fréquemment",
            conseil: "Récolter tous les 2-3 jours pour avoir des cornichons fermes"
        }
    },
    {
        id: 26,
        name: "Melon",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/melon.jpg",
                description: "Le melon est une plante annuelle de la famille des Cucurbitacées, cultivée pour son fruit parfumé et sucré.",
        care: {
            plantation: "Avril à Mai (sous abri), Mai à Juin (pleine terre)",
            recolte: "Juillet à Septembre",
            exposition: "Plein soleil et chaleur",
            arrosage: "Modéré mais régulier",
            entretien: "Pincer les tiges, protéger du froid",
            conseil: "Planter sur une petite butte pour un meilleur drainage"
        }
    },
    {
        id: 27,
        name: "Pastèque",
        type: "legume-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/pasteque.jpg",
                description: "La pastèque est une plante grimpante de la famille des Cucurbitacées, cultivée pour son fruit à la chair rafraîchissante.",
        care: {
            plantation: "Avril à Mai (sous abri), Mai à Juin (pleine terre)",
            recolte: "Juillet à Septembre",
            exposition: "Plein soleil et chaleur",
            arrosage: "Abondant pendant la croissance des fruits",
            entretien: "Pailler généreusement, espacer les plants",
            conseil: "Tapoter le fruit : un son creux indique la maturité"
        }
    },

    // 🧄 Bulbes et alliacées
    {
        id: 28,
        name: "Oignon",
        type: "bulbe",
        seasons: ["printemps", "automne"],
        image: "img/potager/oignon.jpg",
        description: "L'oignon est une plante bulbeuse de la famille des Amaryllidacées, cultivée pour son bulbe utilisé comme condiment et légume.",
        care: {
            plantation: "Février à Avril (printemps), Août à Septembre (automne)",
            recolte: "Juin à Juillet (primeur), Juillet à Août (conservation)",
            exposition: "Soleil",
            arrosage: "Modéré, arrêter 3 semaines avant la récolte",
            entretien: "Binage régulier, buttage léger",
            conseil: "Planter en sol drainant pour éviter le pourrissement"
        }
    },
    {
        id: 29,
        name: "Ail",
        type: "bulbe",
        seasons: ["automne", "hiver"],
        image: "img/potager/ail.jpg",
        description: "L'ail est une plante bulbeuse de la famille des Amaryllidacées, cultivée pour son bulbe composé de gousses utilisées comme condiment.",
        care: {
            plantation: "Octobre à Décembre (ail blanc), Février à Mars (ail rose)",
            recolte: "Juin à Juillet",
            exposition: "Soleil",
            arrosage: "Très modéré",
            entretien: "Désherbage soigneux",
            conseil: "Planter les gousses la pointe vers le haut"
        }
    },
    {
        id: 30,
        name: "Échalote",
        type: "bulbe",
        seasons: ["automne", "hiver", "printemps"],
        image: "img/potager/echalote.jpg",
        description: "L'échalote est une plante bulbeuse de la famille des Amaryllidacées, cultivée pour son bulbe au goût plus subtil que l'oignon.",
        care: {
            plantation: "Février à Mars (printemps), Octobre à Novembre (automne)",
            recolte: "Juin à Juillet",
            exposition: "Soleil",
            arrosage: "Modéré",
            entretien: "Binage régulier",
            conseil: "Planter en sol léger et bien drainé"
        }
    },
    {
        id: 31,
        name: "Poireau",
        type: "bulbe",
        seasons: ["printemps", "automne", "hiver"],
        image: "img/potager/poireau.jpg",
        description: "Le poireau est une plante potagère de la famille des Amaryllidacées, cultivée pour ses fûts blancs utilisés comme aromate ou légume.",
        care: {
            plantation: "Février à Avril (été), Juin à Juillet (hiver)",
            recolte: "Mai à Décembre selon la variété",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier pour maintenir le sol frais",
            entretien: "Butter les plants pour blanchir les fûts",
            conseil: "Planter après les pommes de terre pour profiter d'un sol ameubli"
        }
    },
    {
        id: 32,
        name: "Ciboule",
        type: "bulbe",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/ciboule.jpg",
        description: "La ciboule ou cébette est une plante vivace de la famille des Amaryllidacées, cultivée pour ses feuilles aromatiques utilisées comme condiment.",
        care: {
            plantation: "Mars à Septembre",
            recolte: "Toute l'année (feuilles), Juin à Juillet (bulbes)",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier",
            entretien: "Diviser les touffes tous les 2-3 ans",
            conseil: "Couper les feuilles au besoin sans épuiser la plante"
        }
    },

    // 🌿 Plantes aromatiques
    {
        id: 33,
        name: "Persil",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/persil.jpg",
        description: "Le persil est une plante herbacée de la famille des Apiacées, cultivée pour ses feuilles très aromatiques utilisées comme condiment.",
        care: {
            plantation: "Février à Septembre",
            recolte: "Toute l'année",
            exposition: "Mi-ombre",
            arrosage: "Régulier pour garder le sol frais",
            entretien: "Couper régulièrement pour favoriser de nouvelles pousses",
            conseil: "Semer en place car n'aime pas le repiquage"
        }
    },
    {
        id: 34,
        name: "Basilic",
        type: "aromatique",
        seasons: ["printemps", "ete"],
        image: "img/potager/basilic.jpg",
        description: "Le basilic est une plante aromatique de la famille des Lamiacées, cultivée pour ses feuilles odorantes utilisées comme aromate en cuisine.",
        care: {
            plantation: "Avril à Juin",
            recolte: "Mai à Octobre",
            exposition: "Soleil (mais pas brûlant)",
            arrosage: "Régulier mais sans excès",
            entretien: "Pincer les extrémités pour favoriser la ramification, couper les fleurs",
            conseil: "Planter près des tomates pour améliorer leur saveur et repousser les insectes"
        }
    },
    {
        id: 35,
        name: "Thym",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/thym.jpg",
        description: "Le thym est un sous-arbrisseau de la famille des Lamiacées, cultivé pour ses feuilles aromatiques utilisées comme condiment.",
        care: {
            plantation: "Mars à Juin",
            recolte: "Toute l'année",
            exposition: "Plein soleil",
            arrosage: "Très modéré (plante méditerranéenne)",
            entretien: "Tailler légèrement après la floraison",
            conseil: "Planter en sol drainant, même caillouteux"
        }
    },
    {
        id: 36,
        name: "Romarin",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/romarin.jpg",
        description: "Le romarin est un arbrisseau de la famille des Lamiacées, cultivé pour ses feuilles persistantes très aromatiques.",
        care: {
            plantation: "Mars à Juin",
            recolte: "Toute l'année",
            exposition: "Plein soleil",
            arrosage: "Très modéré",
            entretien: "Tailler légèrement après la floraison",
            conseil: "Excellent en bordure ou en pot dans les régions froides"
        }
    },
    {
        id: 37,
        name: "Origan",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/origan.jpg",
        description: "L'origan est une plante vivace de la famille des Lamiacées, cultivée pour ses feuilles aromatiques utilisées en cuisine méditerranéenne.",
        care: {
            plantation: "Mars à Juin",
            recolte: "Juin à Septembre",
            exposition: "Plein soleil",
            arrosage: "Modéré",
            entretien: "Rabattre après la floraison",
            conseil: "Sécher les tiges fleuries pour conserver l'arôme"
        }
    },
    {
        id: 38,
        name: "Sauge",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/sauge.jpg",
        description: "La sauge est une plante vivace de la famille des Lamiacées, cultivée pour ses feuilles aromatiques aux propriétés culinaires et médicinales.",
        care: {
            plantation: "Mars à Juin",
            recolte: "Toute l'année",
            exposition: "Plein soleil",
            arrosage: "Modéré",
            entretien: "Tailler au printemps pour favoriser de nouvelles pousses",
            conseil: "Protéger du froid en hiver dans les régions froides"
        }
    },
    {
        id: 39,
        name: "Menthe",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/menthe.jpg",
        description: "La menthe est une plante vivace de la famille des Lamiacées, cultivée pour ses feuilles très aromatiques utilisées en infusion et cuisine.",
        care: {
            plantation: "Mars à Octobre",
            recolte: "Avril à Octobre",
            exposition: "Mi-ombre",
            arrosage: "Abondant",
            entretien: "Contenir son expansion (plante très envahissante)",
            conseil: "Cultiver en pot pour éviter qu'elle n'envahisse tout le jardin"
        }
    },
    {
        id: 40,
        name: "Ciboulette",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/ciboulette.jpg",
        description: "La ciboulette est une plante vivace de la famille des Amaryllidacées, cultivée pour ses fines tilles au goût d'oignon utilisé comme condiment.",
        care: {
            plantation: "Mars à Juin",
            recolte: "Avril à Octobre",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier",
            entretien: "Diviser les touffes tous les 2-3 ans",
            conseil: "Couper régulièrement pour favoriser de nouvelles pousses"
        }
    },

    {
        id: 41,
        name: "Coriandre",
        type: "aromatique",
        seasons: ["printemps", "ete"],
        image: "img/potager/coriandre.jpg",
        description: "La coriandre est une plante annuelle de la famille des Apiacées, cultivée pour ses feuilles et ses graines aromatiques utilisées en cuisine.",
        care: {
            plantation: "Avril à Juillet",
            recolte: "Mai à Septembre",
            exposition: "Mi-ombre",
            arrosage: "Régulier",
            entretien: "Semer en place car n'aime pas le repiquage",
            conseil: "Semer toutes les 3 semaines pour une récolte continue"
        }
    },
    {
        id: 42,
        name: "Estragon",
        type: "aromatique",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/estragon.jpg",
        description: "L'estragon est une plante vivace de la famille des Astéracées, cultivée pour ses feuilles aromatiques utilisées comme condiment.",
        care: {
            plantation: "Mars à Mai",
            recolte: "Mai à Octobre",
            exposition: "Soleil",
            arrosage: "Modéré",
            entretien: "Protéger du froid en hiver",
            conseil: "Préférer l'estragon français (plus aromatique) à l'estragon russe"
        }
    },
    {
        id: 43,
        name: "Aneth",
        type: "aromatique",
        seasons: ["printemps", "ete"],
        image: "img/potager/aneth.jpg",
        description: "L'aneth est une plante annuelle de la famille des Apiacées, cultivée pour ses feuilles et ses graines aromatiques utilisées en cuisine.",
        care: {
            plantation: "Avril à Juillet",
            recolte: "Juin à Septembre",
            exposition: "Soleil",
            arrosage: "Modéré",
            entretien: "Semer en place",
            conseil: "Planter près des choux pour éloigner les parasites"
        }
    },

    // 🍓 Fruits de petit potager / petits fruits
    {
        id: 44,
        name: "Fraise",
        type: "petit-fruit",
        seasons: ["printemps", "ete"],
        image: "img/potager/fraisier.jpg",
        description: "Le fraisier est une plante vivace de la famille des Rosacées, cultivée pour ses fruits rouges sucrés et parfumés.",
        care: {
            plantation: "Août à Octobre (meilleure période), Mars à Avril",
            recolte: "Mai à Juillet selon les variétés",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Régulier sans mouiller les fruits",
            entretien: "Pailler avec du straw, supprimer les stolons en excès",
            conseil: "Renouveler les plants tous les 3 ans pour maintenir une bonne production"
        }
    },
    {
        id: 45,
        name: "Framboisier",
        type: "petit-fruit",
        seasons: ["ete"],
        image: "img/potager/framboisier.jpg",
        description: "Le framboisier est un arbrisseau de la famille des Rosacées, cultivé pour ses fruits rouges ou jaunes délicats et parfumés.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juin à Septembre selon les variétés",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Modéré",
            entretien: "Tailler les cannes ayant fructifié",
            conseil: "Palisser les tiges pour faciliter la récolte"
        }
    },
    {
        id: 46,
        name: "Cassis",
        type: "petit-fruit",
        seasons: ["ete"],
        image: "img/potager/cassis.jpg",
        description: "Le cassissier est un arbuste de la famille des Grossulariacées, cultivé pour ses baies noires acidulées riches en vitamine C.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juillet",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Modéré",
            entretien: "Tailler après la récolte",
            conseil: "Planter plusieurs variétés pour une meilleure pollinisation"
        }
    },
    {
        id: 47,
        name: "Groseillier",
        type: "petit-fruit",
        seasons: ["ete"],
        image: "img/potager/groseillier.jpg",
        description: "Le groseillier est un arbuste de la famille des Grossulariacées, cultivé pour ses grappes de baies rouges, blanches ou roses acidulées.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juin à Juillet",
            exposition: "Mi-ombre",
            arrosage: "Modéré",
            entretien: "Tailler après la récolte",
            conseil: "Protéger les fruits des oiseaux avec un filet"
        }
    },
    {
        id: 48,
        name: "Mûrier",
        type: "petit-fruit",
        seasons: ["ete", "automne"],
        image: "img/potager/murier.jpg",
        description: "Le mûrier est un arbuste de la famille des Rosacées, cultivé pour ses fruits noirs sucrés ressemblant à des framboises allongées.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Août à Septembre",
            exposition: "Soleil",
            arrosage: "Modéré",
            entretien: "Tailler les tiges ayant fructifié",
            conseil: "Palisser les tiges pour faciliter la récolte"
        }
    },
    {
        id: 49,
        name: "Myrtillier",
        type: "petit-fruit",
        seasons: ["ete"],
        image: "img/potager/myrtillier.jpg",
        description: "Le myrtillier est un arbuste de la famille des Éricacées, cultivé pour ses baies bleues riches en antioxydants.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juillet à Août",
            exposition: "Mi-ombre",
            arrosage: "Maintenir le sol frais",
            entretien: "Tailler légèrement après la récolte",
            conseil: "Planter en sol acide (terre de bruyère)"
        }
    },

    // 🍏 Arbres fruitiers
    {
        id: 50,
        name: "Pommier",
        type: "arbre-fruitier",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/pommier.jpg",
        description: "Le pommier est un arbre fruitier de la famille des Rosacées, cultivé pour ses fruits juteux et sucrés, les pommes.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juillet à Octobre selon les variétés",
            exposition: "Soleil",
            arrosage: "Modéré, surtout les premières années",
            entretien: "Taille de formation puis taille fruitière",
            conseil: "Planter plusieurs variétés compatibles pour une bonne pollinisation"
        }
    },
    {
        id: 51,
        name: "Poirier",
        type: "arbre-fruitier",
        seasons: ["printemps", "ete", "automne"],
        image: "img/potager/poirier.jpg",
        description: "Le poirier est un arbre fruitier de la famille des Rosacées, cultivé pour ses fruits fondants et sucrés, les poires.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juillet à Octobre selon les variétés",
            exposition: "Soleil",
            arrosage: "Modéré, surtout les premières années",
            entretien: "Taille de formation puis taille fruitière",
            conseil: "Choisir des variétés résistantes au feu bactérien"
        }
    },
    {
        id: 52,
        name: "Prunier",
        type: "arbre-fruitier",
        seasons: ["ete"],
        image: "img/potager/prunier.jpg",
        description: "Le prunier est un arbre fruitier de la famille des Rosacées, cultivé pour ses fruits juteux, les prunes.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juillet à Septembre selon les variétés",
            exposition: "Soleil",
            arrosage: "Modéré",
            entretien: "Taille légère après la récolte",
            conseil: "Récolter les fruits à maturité pour une meilleure saveur"
        }
    },
    {
        id: 53,
        name: "Cerisier",
        type: "arbre-fruitier",
        seasons: ["printemps", "ete"],
        image: "img/potager/cerisier.jpg",
        description: "Le cerisier est un arbre fruitier de la famille des Rosacées, cultivé pour ses fruits charnus à noyau, les cerises.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Mai à Juillet selon les variétés",
            exposition: "Soleil",
            arrosage: "Modéré",
            entretien: "Taille légère si nécessaire",
            conseil: "Protéger les fruits des oiseaux avec des filets"
        }
    },
    {
        id: 54,
        name: "Abricotier",
        type: "arbre-fruitier",
        seasons: ["printemps", "ete"],
        image: "img/potager/abricotier.jpg",
        description: "L'abricotier est un arbre fruitier de la famille des Rosacées, cultivé pour ses fruits orange veloutés, les abricots.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juin à Août selon les variétés",
            exposition: "Soleil et chaleur",
            arrosage: "Modéré, résistant à la sécheresse une fois installé",
            entretien: "Taille de formation puis taille légère",
            conseil: "Planter en situation abritée dans les régions froides"
        }
    },
    {
        id: 55,
        name: "Pêcher",
        type: "arbre-fruitier",
        seasons: ["printemps", "ete"],
        image: "img/potager/pecher.jpg",
        description: "Le pêcher est un arbre fruitier de la famille des Rosacées, cultivé pour ses fruits à la peau veloutée, les pêches.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Juillet à Septembre",
            exposition: "Soleil et chaleur",
            arrosage: "Modéré",
            entretien: "Taille annuelle importante",
            conseil: "Traiter préventivement contre la cloque du pêcher"
        }
    },
    {
        id: 56,
        name: "Noyer",
        type: "arbre-fruitier",
        seasons: ["automne"],
        image: "img/potager/noyer.jpg",
        description: "Le noyer est un grand arbre de la famille des Juglandacées, cultivé pour ses fruits à coque, les noix.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Septembre à Octobre",
            exposition: "Soleil",
            arrosage: "Modéré les premières années",
            entretien: "Taille légère si nécessaire",
            conseil: "Planter loin du potager (substances allélopathiques)"
        }
    },
    {
        id: 57,
        name: "Noisetier",
        type: "arbre-fruitier",
        seasons: ["automne"],
        image: "img/potager/noisetier.jpg",
        description: "Le noisetier est un arbuste de la famille des Bétulacées, cultivé pour ses fruits à coque, les noisettes.",
        care: {
            plantation: "Octobre à Mars",
            recolte: "Août à Septembre",
            exposition: "Soleil ou mi-ombre",
            arrosage: "Modéré",
            entretien: "Tailler pour aérer le centre de l'arbuste",
            conseil: "Planter plusieurs variétés pour une bonne pollinisation"
        }
    }
]



// Fonction pour obtenir le libellé des saisons
function getSeasonLabel(seasons) {
    const seasonLabels = {
        'printemps': 'Printemps',
        'ete': 'Été',
        'automne': 'Automne',
        'hiver': 'Hiver'
    };
    return seasons.map(season => seasonLabels[season]).join(', ');
}

// Fonction pour obtenir le libellé du type
function getTypeLabel(type) {
    const typeLabels = {
        'legume-feuille': 'Légume-feuille',
        'legume-racine': 'Légume-racine',
        'legumineuse': 'Légumineuse',
        'legume-fruit': 'Légume-fruit',
        'bulbe': 'Bulbe',
        'aromatique': 'Aromatique',
        'petit-fruit': 'Petit fruit',
        'arbre-fruitier': 'Arbre fruitier',
        'legume': 'Légume',
        'fruit': 'Fruit'
    };
    return typeLabels[type] || type;
}

// Fonction pour obtenir l'icône selon le type de plante
function getTypeIcon(type) {
    const icons = {
        'legume-feuille': 'fas fa-leaf',
        'legume-racine': 'fas fa-carrot',
        'legumineuse': 'fas fa-seedling',
        'legume-fruit': 'fas fa-apple-alt',
        'bulbe': 'fas fa-garlic',
        'aromatique': 'fas fa-mortar-pestle',
        'petit-fruit': 'fas fa-berry',
        'arbre-fruitier': 'fas fa-tree',
        'legume': 'fas fa-leaf',
        'fruit': 'fas fa-apple-alt'
    };
    return icons[type] || 'fas fa-seedling';
}

// Fonction pour afficher les plantes comestibles
function displayEdiblePlants(plants) {
    const potagerContainer = document.getElementById('potagerContainer');
    potagerContainer.innerHTML = '';
    
    if (plants.length === 0) {
        potagerContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-seedling"></i>
                <p>Aucun légume ou fruit ne correspond à votre recherche.</p>
            </div>
        `;
        return;
    }
    
    plants.forEach(plant => {
        const plantItem = document.createElement('div');
        plantItem.className = 'vegetable-item';
        plantItem.innerHTML = `
            <div class="vegetable-header">
                <img src="${plant.image}" alt="${plant.name}">
                <span class="vegetable-season">${getSeasonLabel(plant.seasons)}</span>
            </div>
            <div class="vegetable-content">
                <h3>${plant.name}</h3>
                <span class="vegetable-type"><i class="${getTypeIcon(plant.type)}"></i> ${getTypeLabel(plant.type)}</span>
                <p class="vegetable-description">${plant.description.substring(0, 100)}...</p>
                <div class="vegetable-details">
                    <ul>
                        <li><i class="fas fa-calendar-alt"></i> Plantation: ${plant.care.plantation}</li>
                        <li><i class="fas fa-seedling"></i> Récolte: ${plant.care.recolte}</li>
                        <li><i class="fas fa-sun"></i> Exposition: ${plant.care.exposition}</li>
                    </ul>
                </div>
            </div>
        `;
        
        // Ajouter l'événement de clic pour ouvrir la modal
        plantItem.addEventListener('click', () => {
            showPlantDetails(plant);
        });
        
        potagerContainer.appendChild(plantItem);
    });
}

// Fonction pour afficher les détails d'une plante
function showPlantDetails(plant) {
    const plantDetailsContent = document.getElementById('plantDetailsContent');
    const plantDetailsModal = document.getElementById('plantDetails');
    
    plantDetailsContent.innerHTML = `
        <h2>${plant.name}</h2>
        <img src="${plant.image}" alt="${plant.name}">
        <p>${plant.description}</p>
        
        <div class="care-details">
            <h3><i class="fas fa-seedling"></i> Conseils de Culture</h3><br>
            <div class="care-info">
                <div class="care-item">
                    <h4><i class="fas fa-calendar-alt"></i> Période de plantation</h4>
                    <p>${plant.care.plantation}</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-seedling"></i> Période de récolte</h4>
                    <p>${plant.care.recolte}</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-sun"></i> Exposition</h4>
                    <p>${plant.care.exposition}</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-tint"></i> Arrosage</h4>
                    <p>${plant.care.arrosage}</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-tools"></i> Entretien</h4>
                    <p>${plant.care.entretien}</p>
                </div>
                <div class="care-item care-tip">
                    <h4><i class="fas fa-lightbulb"></i> Conseil du jardinier</h4>
                    <p>${plant.care.conseil}</p>
                </div>
            </div>
        </div>
        
        <a href="#" class="save-plant">Sauvegarder cette plante</a>
    `;
    
    plantDetailsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modal
function closePlantDetails() {
    const plantDetailsModal = document.getElementById('plantDetails');
    plantDetailsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fonction pour filtrer les plantes
function filterPlants() {
    const searchText = document.getElementById('searchPotager').value.toLowerCase();
    const season = document.getElementById('seasonFilter').value;
    const type = document.getElementById('typeFilter').value;
    
    const filteredPlants = ediblePlants.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchText) ||
                             plant.description.toLowerCase().includes(searchText) ||
                             plant.type.toLowerCase().includes(searchText);
        const matchesSeason = season === 'all' || plant.seasons.includes(season);
        const matchesType = type === 'all' || plant.type === type;
        
        return matchesSearch && matchesSeason && matchesType;
    });
    
    displayEdiblePlants(filteredPlants);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Afficher toutes les plantes au chargement
    displayEdiblePlants(ediblePlants);
    
    // Ajouter les écouteurs d'événements pour les filtres
    document.getElementById('searchPotager').addEventListener('input', filterPlants);
    document.getElementById('seasonFilter').addEventListener('change', filterPlants);
    document.getElementById('typeFilter').addEventListener('change', filterPlants);
    
    // Événement pour le bouton de recherche
    document.getElementById('searchButton').addEventListener('click', filterPlants);
    
    // Recherche aussi avec la touche Entrée
    document.getElementById('searchPotager').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            filterPlants();
        }
    });
    
    // Fermer la modal
    document.querySelector('.close-modal').addEventListener('click', closePlantDetails);
    
    // Fermer la modal en cliquant à l'extérieur
    document.getElementById('plantDetails').addEventListener('click', function(e) {
        if (e.target === this) {
            closePlantDetails();
        }
    });
    
    // Fermer la modal avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePlantDetails();
        }
    });
    
    // Clic sur les tags populaires
    document.querySelectorAll('.plant-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const plantName = this.getAttribute('data-plant');
            document.getElementById('searchPotager').value = plantName;
            filterPlants();
        });
    });
});