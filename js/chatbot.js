// Base de connaissances du chatbot
const plantKnowledgeBase = {
    "Tomate": {
        "Exposition": "Les tomates ont besoin de plein soleil (au moins 6-8 heures par jour) pour bien se développer et produire des fruits savoureux.",
        "Arrosage": "Arrosez régulièrement sans mouiller le feuillage pour éviter les maladies. Le sol doit rester légèrement humide mais pas détrempé.",
        "Plantation": "Plantez de mars à mai, après les dernières gelées. Espacez les plants de 60-80 cm.",
        "Récolte": "Récoltez de juin à octobre lorsque les fruits sont bien colorés et fermes.",
        "Parasites": "Surveillez les pucerons, aleurodes et mildiou. Utilisez des purins de plantes ou introduisez des insectes auxiliaires comme les coccinelles.",
        "Engrais": "Utilisez un engrais riche en potasse pour favoriser la fructification. Évitez les excès d'azote qui favorisent le feuillage au détriment des fruits."
    },
    "Fraise": {
        "Exposition": "Les fraisiers préfèrent le soleil mais tolèrent la mi-ombre. Dans les régions chaudes, un peu d'ombre l'après-midi est bénéfique.",
        "Arrosage": "Arrosez régulièrement pour maintenir le sol frais, surtout pendant la fructification. Évitez de mouiller les fruits.",
        "Plantation": "Plantez d'août à octobre ou de mars à avril. Espacez les plants de 30-40 cm.",
        "Récolte": "Récoltez de mai à juillet selon les variétés. Cueillez les fruits bien rouges et mûrs.",
        "Parasites": "Attention aux limaces, oiseaux et pourriture grise. Paillez avec de la paille pour protéger les fruits.",
        "Engrais": "Apportez du compost bien décomposé à la plantation. Les fraisiers apprécient les sols riches en matière organique."
    },
    "Salade": {
        "Exposition": "La salade préfère la mi-ombre, surtout en été où le plein soleil peut la faire monter en graine.",
        "Arrosage": "Arrosez régulièrement pour garder la terre fraîche. Un arrosage insuffisant rend les feuilles amères.",
        "Plantation": "Plantez de février à octobre. Échelonnez les plantations pour avoir des récoltes continues.",
        "Récolte": "Récoltez d'avril à novembre. Cueillez les feuilles externes ou la plante entière selon les variétés.",
        "Parasites": "Protégez des limaces et escargots. Les pucerons peuvent aussi attaquer les salades.",
        "Engrais": "Un sol riche en compost convient parfaitement. Évitez les excès d'azote."
    },
    "Carotte": {
        "Exposition": "Les carottes apprécient le soleil mais tolèrent la mi-ombre.",
        "Arrosage": "Arrosez régulièrement mais modérément. Un excès d'eau peut faire pourrir les racines.",
        "Plantation": "Plantez de février à juillet. Semez en lignes espacées de 20-25 cm.",
        "Récolte": "Récoltez de mai à novembre selon la date de semis.",
        "Parasites": "Attention à la mouche de la carotte. Utilisez des filets anti-insectes pour protection.",
        "Engrais": "Évitez le fumier frais qui fait fourcher les carottes. Préférez un compost bien mûr."
    },
    "Basilic": {
        "Exposition": "Le basilic aime le soleil mais pas le soleil brûlant. Une exposition mi-ombragée en après-midi convient bien.",
        "Arrosage": "Arrosez régulièrement mais sans excès. Le sol doit sécher légèrement entre deux arrosages.",
        "Plantation": "Plantez d'avril à juin après les dernières gelées.",
        "Récolte": "Récoltez de mai à octobre. Cueillez les feuilles régulièrement pour favoriser la ramification.",
        "Parasites": "Peu sensible aux parasites. parfois des pucerons ou aleurodes en serre.",
        "Engrais": "Peu exigeant. Un peu de compost à la plantation suffit."
    },
    "Courgette": {
        "Exposition": "Plein soleil nécessaire pour une bonne production.",
        "Arrosage": "Arrosage abondant et régulier, surtout pendant la formation des fruits.",
        "Plantation": "Plantez d'avril à juin en espaçant les plants de 1 mètre.",
        "Récolte": "Récoltez de juin à octobre. Cueillez les courgettes jeunes pour favoriser la production.",
        "Parasites": "Sensible à l'oïdium et aux attaques de limaces sur jeunes plants.",
        "Engrais": "Plante gourmande. Apportez du compost bien décomposé à la plantation."
    },
    "Aubergine": {
        "Exposition": "Plein soleil et chaleur nécessaires.",
        "Arrosage": "Arrosage régulier sans excès. Pailler pour conserver l'humidité.",
        "Plantation": "Plantez en mai après les dernières gelées.",
        "Récolte": "Récoltez de juillet à septembre.",
        "Parasites": "Sensible aux doryphores et aleurodes. Surveillez régulièrement.",
        "Engrais": "Plante gourmande. Apportez du compost et un engrais riche en potasse."
    },
    "Épinard": {
        "Exposition": "Mi-ombre, supporte mal la chaleur estivale.",
        "Arrosage": "Arrosage régulier sans détremper le sol.",
        "Plantation": "Mars à mai et août à septembre pour des récoltes de printemps et d'automne.",
        "Récolte": "Mai à juin et septembre à novembre. Cueillez les feuilles externes.",
        "Parasites": "Limaces et mildiou par temps humide.",
        "Engrais": "Sol frais et riche en azote."
    },
    "Bette": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier surtout en période sèche.",
        "Plantation": "Avril à juin directement en place.",
        "Récolte": "Juin à novembre. Prélevez les côtes et feuilles au besoin.",
        "Parasites": "Limaces sur jeunes plants, mineuse occasionnellement.",
        "Engrais": "Sol riche, apport de compost à la plantation."
    },
    "Roquette": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier pour éviter la montée en graines.",
        "Plantation": "Mars à septembre en semis direct.",
        "Récolte": "Avril à octobre. Coupez les feuilles à 2-3 cm du sol.",
        "Parasites": "Altises (petits trous dans les feuilles).",
        "Engrais": "Sol ordinaire, pas trop riche."
    },
    "Chou": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Régulier surtout après la plantation.",
        "Plantation": "Mars à juillet selon les variétés.",
        "Récolte": "Mai à décembre selon les types.",
        "Parasites": "Piéride, pucerons, altises. Filets de protection recommandés.",
        "Engrais": "Sol très riche, fumier bien décomposé."
    },
    "Endive": {
        "Exposition": "Soleil pour les racines, obscurité pour le forçage.",
        "Arrosage": "Modéré pour les racines.",
        "Plantation": "Mai à juin pour les racines, forçage en hiver.",
        "Récolte": "Octobre à mars après forçage.",
        "Parasites": "Peu sensible pendant le forçage.",
        "Engrais": "Sol profond et meuble pour les racines."
    },
    "Mâche": {
        "Exposition": "Mi-ombre, supporte le froid.",
        "Arrosage": "Modéré à la plantation.",
        "Plantation": "Juillet à septembre.",
        "Récolte": "Octobre à mars selon protection hivernale.",
        "Parasites": "Peu sensible, parfois limaces.",
        "Engrais": "Sol ordinaire, pas trop riche."
    },

    // 🥕 Légumes-racines
    "Carotte": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier mais modéré. Trop d'eau fait pourrir les racines.",
        "Plantation": "Février à juillet en sol meuble.",
        "Récolte": "Mai à novembre selon semis.",
        "Parasites": "Mouche de la carotte. Filets de protection.",
        "Engrais": "Sol sableux sans fumier frais (évite la fourchure)."
    },
    "Radis": {
        "Exposition": "Mi-ombre à ensoleillée.",
        "Arrosage": "Régulier pour une croissance rapide.",
        "Plantation": "Février à septembre tous les 15 jours.",
        "Récolte": "Mars à octobre, rapidement après semis.",
        "Parasites": "Altises par temps sec.",
        "Engrais": "Sol frais et léger."
    },
    "Navet": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier sans excès.",
        "Plantation": "Mars à mai (printemps), juillet à août (automne).",
        "Récolte": "Mai à juillet (primeur), septembre à novembre (conservation).",
        "Parasites": "Altises, mouche du navet.",
        "Engrais": "Sol frais et profond."
    },
    "Betterave": {
        "Exposition": "Soleil.",
        "Arrosage": "Régulier surtout en période sèche.",
        "Plantation": "Avril à juin.",
        "Récolte": "Juillet à octobre.",
        "Parasites": "Mouche de la betterave occasionnellement.",
        "Engrais": "Sol riche en potasse."
    },
    "Panais": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Modéré.",
        "Plantation": "Février à avril.",
        "Récolte": "Octobre à mars après les premières gelées.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol profond et frais."
    },
    "Céleri-rave": {
        "Exposition": "Soleil.",
        "Arrosage": "Régulier et abondant.",
        "Plantation": "Avril à mai.",
        "Récolte": "Octobre à novembre.",
        "Parasites": "Mouche du céleri occasionnellement.",
        "Engrais": "Sol très riche en matière organique."
    },
    "Pomme de terre": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré, surtout après la floraison.",
        "Plantation": "Mars à mai selon les régions.",
        "Récolte": "Juin à septembre selon variétés.",
        "Parasites": "Doryphores, mildiou. Rotation importante.",
        "Engrais": "Sol léger, riche en potasse."
    },
    "Topinambour": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Modéré.",
        "Plantation": "Février à avril.",
        "Récolte": "Octobre à mars au besoin.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol ordinaire, peut devenir envahissant."
    },

    // 🌰 Légumineuses
    "Haricot vert": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier sans mouiller le feuillage.",
        "Plantation": "Avril à juillet.",
        "Récolte": "Juin à octobre.",
        "Parasites": "Pucerons, bruches. Rotation des cultures.",
        "Engrais": "Sol léger, pas trop riche (fixe l'azote)."
    },
    "Pois": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier surtout à la floraison.",
        "Plantation": "Février à avril.",
        "Récolte": "Mai à juillet.",
        "Parasites": "Pucerons, thrips. Filets de protection.",
        "Engrais": "Sol frais, supporte les sols pauvres."
    },
    "Fève": {
        "Exposition": "Soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre-novembre (automne) ou février-mars (printemps).",
        "Récolte": "Mai à juillet.",
        "Parasites": "Pucerons noirs, bruche.",
        "Engrais": "Sol lourd et frais."
    },

    // 🍅 Légumes-fruits
    "Tomate": {
        "Exposition": "Plein soleil (6-8 heures minimum).",
        "Arrosage": "Régulier sans mouiller le feuillage. Paillage recommandé.",
        "Plantation": "Mars à mai après les gelées.",
        "Récolte": "Juin à octobre selon variétés.",
        "Parasites": "Mildiou, aleurodes, pucerons. Prévention essentielle.",
        "Engrais": "Riche en potasse, évitez l'excès d'azote."
    },
    "Poivron": {
        "Exposition": "Plein soleil et chaleur.",
        "Arrosage": "Régulier mais modéré.",
        "Plantation": "Mars à mai.",
        "Récolte": "Juillet à octobre.",
        "Parasites": "Pucerons, araignées rouges en serre.",
        "Engrais": "Sol riche, apport de compost."
    },
    "Piment": {
        "Exposition": "Plein soleil et maximum de chaleur.",
        "Arrosage": "Modéré, supporte bien la sécheresse.",
        "Plantation": "Mars à mai.",
        "Récolte": "Juillet à octobre.",
        "Parasites": "Mêmes que poivron, mais souvent plus résistant.",
        "Engrais": "Sol drainant, pas trop riche."
    },
    "Aubergine": {
        "Exposition": "Plein soleil et chaleur.",
        "Arrosage": "Régulier sans excès. Paillage bénéfique.",
        "Plantation": "Avril à mai.",
        "Récolte": "Juillet à septembre.",
        "Parasites": "Doryphores, aleurodes, araignées rouges.",
        "Engrais": "Très gourmande, apport important de compost."
    },
    "Courgette": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Abondant et régulier, surtout fruit formation.",
        "Plantation": "Avril à juin.",
        "Récolte": "Juin à octobre.",
        "Parasites": "Oïdium, limaces sur jeunes plants.",
        "Engrais": "Très gourmande, fumier bien décomposé."
    },
    "Courge": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Abondant pendant la croissance.",
        "Plantation": "Avril à mai.",
        "Récolte": "Septembre à novembre avant gelées.",
        "Parasites": "Oïdium, limaces.",
        "Engrais": "Très gourmande, besoin de beaucoup de place."
    },
    "Concombre": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Abondant et régulier.",
        "Plantation": "Avril à juin.",
        "Récolte": "Juin à septembre.",
        "Parasites": "Oïdium, araignées rouges.",
        "Engrais": "Sol riche, apport de compost."
    },
    "Cornichon": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Régulier.",
        "Plantation": "Avril à juin.",
        "Récolte": "Juin à septembre, récolte très fréquente.",
        "Parasites": "Mêmes que concombre.",
        "Engrais": "Sol riche, besoin moins important que concombre."
    },
    "Melon": {
        "Exposition": "Plein soleil et maximum de chaleur.",
        "Arrosage": "Modéré mais régulier.",
        "Plantation": "Avril-mai (sous abri), mai-juin (pleine terre).",
        "Récolte": "Juillet à septembre.",
        "Parasites": "Oïdium, pucerons.",
        "Engrais": "Sol riche, apport de compost bien mûr."
    },
    "Pastèque": {
        "Exposition": "Plein soleil et chaleur.",
        "Arrosage": "Abondant pendant la croissance des fruits.",
        "Plantation": "Avril-mai (sous abri), mai-juin (pleine terre).",
        "Récolte": "Juillet à septembre.",
        "Parasites": "Oïdium, pucerons.",
        "Engrais": "Sol riche, besoin de beaucoup d'espace."
    },

    // 🧄 Bulbes et alliacées
    "Oignon": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré, arrêter 3 semaines avant récolte.",
        "Plantation": "Février-avril (printemps), août-septembre (automne).",
        "Récolte": "Juin-juillet (primeur), juillet-août (conservation).",
        "Parasites": "Mouche de l'oignon, thrips.",
        "Engrais": "Sol drainant, pas trop riche."
    },
    "Ail": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Très modéré.",
        "Plantation": "Octobre-décembre (ail blanc), février-mars (ail rose).",
        "Récolte": "Juin à juillet.",
        "Parasites": "Rouille occasionnellement.",
        "Engrais": "Sol drainant, pauvre."
    },
    "Échalote": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Février-mars (printemps), octobre-novembre (automne).",
        "Récolte": "Juin à juillet.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol léger et drainant."
    },
    "Poireau": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier pour maintenir le sol frais.",
        "Plantation": "Février-avril (été), juin-juillet (hiver).",
        "Récolte": "Mai à décembre selon variété.",
        "Parasites": "Teigne du poireau, mouche mineuse.",
        "Engrais": "Sol profond et riche."
    },
    "Ciboule": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier.",
        "Plantation": "Mars à septembre.",
        "Récolte": "Toute l'année (feuilles), juin-juillet (bulbes).",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol ordinaire."
    },

    // 🌿 Aromatiques
    "Persil": {
        "Exposition": "Mi-ombre.",
        "Arrosage": "Régulier pour garder le sol frais.",
        "Plantation": "Février à septembre.",
        "Récolte": "Toute l'année.",
        "Parasites": "Peu sensible, parfois pucerons.",
        "Engrais": "Sol riche en matière organique."
    },
    "Basilic": {
        "Exposition": "Soleil (pas brûlant).",
        "Arrosage": "Régulier mais sans excès.",
        "Plantation": "Avril à juin.",
        "Récolte": "Mai à octobre.",
        "Parasites": "Limaces sur jeunes plants, pucerons occasionnellement.",
        "Engrais": "Sol riche, apport de compost."
    },
    "Thym": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Très modéré (plante méditerranéenne).",
        "Plantation": "Mars à juin.",
        "Récolte": "Toute l'année.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol pauvre et drainant."
    },
    "Romarin": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Très modéré.",
        "Plantation": "Mars à juin.",
        "Récolte": "Toute l'année.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol pauvre et caillouteux."
    },
    "Origan": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Mars à juin.",
        "Récolte": "Juin à septembre.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol ordinaire, supporte la sécheresse."
    },
    "Sauge": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Mars à juin.",
        "Récolte": "Toute l'année.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol drainant, supporte les sols pauvres."
    },
    "Menthe": {
        "Exposition": "Mi-ombre.",
        "Arrosage": "Abondant.",
        "Plantation": "Mars à octobre.",
        "Récolte": "Avril à octobre.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol frais, peut devenir envahissante."
    },
    "Ciboulette": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier.",
        "Plantation": "Mars à juin.",
        "Récolte": "Avril à octobre.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol ordinaire."
    },
    "Coriandre": {
        "Exposition": "Mi-ombre.",
        "Arrosage": "Régulier.",
        "Plantation": "Avril à juillet.",
        "Récolte": "Mai à septembre.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol frais, monte rapidement en graine."
    },
    "Estragon": {
        "Exposition": "Soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Mars à mai.",
        "Récolte": "Mai à octobre.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol drainant, protéger en hiver."
    },
    "Aneth": {
        "Exposition": "Soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Avril à juillet.",
        "Récolte": "Juin à septembre.",
        "Parasites": "Peu sensible.",
        "Engrais": "Sol ordinaire, se ressème facilement."
    },

    // 🍓 Petits fruits
    "Fraisier": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Régulier sans mouiller les fruits.",
        "Plantation": "Août à octobre (idéal), mars à avril.",
        "Récolte": "Mai à juillet selon variétés.",
        "Parasites": "Limaces, oiseaux, pourriture grise.",
        "Engrais": "Sol riche en matière organique."
    },
    "Framboisier": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juin à septembre selon variétés.",
        "Parasites": "Ver des framboises, oiseaux.",
        "Engrais": "Sol frais, riche en humus."
    },
    "Cassis": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juillet.",
        "Parasites": "Oiseaux, pucerons occasionnellement.",
        "Engrais": "Sol riche, apport de compost."
    },
    "Groseillier": {
        "Exposition": "Mi-ombre.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juin à juillet.",
        "Parasites": "Oiseaux, pucerons.",
        "Engrais": "Sol frais, riche en matière organique."
    },
    "Mûrier": {
        "Exposition": "Soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Août à septembre.",
        "Parasites": "Oiseaux.",
        "Engrais": "Sol ordinaire, peut devenir envahissant."
    },
    "Myrtillier": {
        "Exposition": "Mi-ombre.",
        "Arrosage": "Maintenir le sol frais.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juillet à août.",
        "Parasites": "Oiseaux.",
        "Engrais": "Sol acide (terre de bruyère obligatoire)."
    },

    // 🍏 Arbres fruitiers
    "Pommier": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré, surtout les premières années.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juillet à octobre selon variétés.",
        "Parasites": "Carpocapse, pucerons, tavelure.",
        "Engrais": "Sol profond, riche en matière organique."
    },
    "Poirier": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré, surtout les premières années.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juillet à octobre selon variétés.",
        "Parasites": "Carpocapse, pucerons, feu bactérien.",
        "Engrais": "Sol profond, riche en matière organique."
    },
    "Prunier": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juillet à septembre selon variétés.",
        "Parasites": "Carpocapse, pucerons, moniliose.",
        "Engrais": "Sol profond, plutôt argileux."
    },
    "Cerisier": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Mai à juillet selon variétés.",
        "Parasites": "Mouche du cerisier, pucerons, oiseaux.",
        "Engrais": "Sol profond, bien drainé."
    },
    "Abricotier": {
        "Exposition": "Plein soleil et chaleur.",
        "Arrosage": "Modéré, résistant à la sécheresse une fois installé.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juin à août selon variétés.",
        "Parasites": "Moniliose, oidium, pucerons.",
        "Engrais": "Sol drainant, même calcaire."
    },
    "Pêcher": {
        "Exposition": "Plein soleil et chaleur.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Juillet à septembre.",
        "Parasites": "Cloque, pucerons, carpocapse.",
        "Engrais": "Sol drainant, riche en matière organique."
    },
    "Noyer": {
        "Exposition": "Plein soleil.",
        "Arrosage": "Modéré les premières années.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Septembre à octobre.",
        "Parasites": "Mouche du brou, anthracnose.",
        "Engrais": "Sol profond, riche, éloigné du potager."
    },
    "Noisetier": {
        "Exposition": "Soleil ou mi-ombre.",
        "Arrosage": "Modéré.",
        "Plantation": "Octobre à mars.",
        "Récolte": "Août à septembre.",
        "Parasites": "Balanin, oiseaux.",
        "Engrais": "Sol frais, riche en humus."
    }
};

// Sujets disponibles pour toutes les plantes
const availableTopics = [
    "Exposition", "Arrosage", "Plantation", "Récolte", "Parasites", "Engrais"
];

// Éléments DOM
const chatbotButton = document.getElementById('chatbotButton');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotMessages = document.getElementById('chatbotMessages');
const plantOptions = document.getElementById('plantOptions');
const topicCategory = document.getElementById('topicCategory');
const topicOptions = document.getElementById('topicOptions');
const closeButton = document.querySelector('.chatbot-close');

// État du chatbot
let currentPlant = null;

// Initialisation du chatbot
function initChatbot() {
    // Générer les options de plantes
    generatePlantOptions();
    
    // Ajouter les écouteurs d'événements
    chatbotButton.addEventListener('click', toggleChatbot);
    closeButton.addEventListener('click', closeChatbot);
    
    // Fermer le chatbot en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!chatbotWindow.contains(e.target) && e.target !== chatbotButton && !chatbotButton.contains(e.target)) {
            closeChatbot();
        }
    });
}

// Générer les options de plantes
function generatePlantOptions() {
    plantOptions.innerHTML = '';
    Object.keys(plantKnowledgeBase).forEach(plant => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = plant;
        button.addEventListener('click', () => selectPlant(plant));
        plantOptions.appendChild(button);
    });
}

// Générer les options de sujets
function generateTopicOptions() {
    topicOptions.innerHTML = '';
    availableTopics.forEach(topic => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = topic;
        button.addEventListener('click', () => selectTopic(topic));
        topicOptions.appendChild(button);
    });
    
    // Ajouter un bouton de retour
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Choisir une autre plante';
    backButton.addEventListener('click', backToPlants);
    topicOptions.appendChild(backButton);
}

// Sélectionner une plante
function selectPlant(plant) {
    currentPlant = plant;
    
    // Ajouter un message de l'utilisateur
    addMessage(`Je choisis : ${plant}`, 'user');
    
    // Afficher les options de sujets
    topicCategory.classList.remove('hidden');
    generateTopicOptions();
    
    // Cacher les options de plantes
    document.querySelector('.option-category:first-child').classList.add('hidden');
}

// Sélectionner un sujet
function selectTopic(topic) {
    // Ajouter un message de l'utilisateur
    addMessage(`Question sur : ${topic}`, 'user');
    
    // Obtenir et afficher la réponse
    const answer = plantKnowledgeBase[currentPlant][topic];
    addMessage(answer, 'bot');
    
    // Revenir aux options de plantes après un délai
    setTimeout(() => {
        resetChatbot();
    }, 3000);
}

// Revenir au choix des plantes
function backToPlants() {
    resetChatbot();
    addMessage("Je souhaite consulter une autre plante", 'user');
}

// Réinitialiser le chatbot
function resetChatbot() {
    currentPlant = null;
    topicCategory.classList.add('hidden');
    document.querySelector('.option-category:first-child').classList.remove('hidden');
}

// Ajouter un message au chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageText = document.createElement('p');
    messageText.textContent = text;
    
    messageDiv.appendChild(messageText);
    chatbotMessages.appendChild(messageDiv);
    
    // Faire défiler vers le bas
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Ouvrir/fermer le chatbot
function toggleChatbot() {
    chatbotWindow.classList.toggle('hidden');
}

function closeChatbot() {
    chatbotWindow.classList.add('hidden');
}

// Initialiser le chatbot quand la page est chargée
document.addEventListener('DOMContentLoaded', initChatbot);