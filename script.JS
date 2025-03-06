function calculerDifference() {
    const dateDebut = document.getElementById('date-debut').value;
    const dateFin = document.getElementById('date-fin').value;
    if (dateDebut && dateFin) {
        const debut = new Date(dateDebut);
        const fin = new Date(dateFin);
        const differenceEnMs = fin - debut;
        const differenceEnJours = Math.floor(differenceEnMs / (1000 * 60 * 60 * 24));
        const resultat = document.getElementById('resultat');
        resultat.innerHTML = `Félicitations ! Vous avez ${differenceEnJours} jour(s) de vie sur Terre !`;
        
        // Lance l'animation de confettis
        lancerConfettis();
        
    } else {
        alert("Veuillez sélectionner les deux dates !");
    }
}

// Fonction pour lancer l'animation de confettis
function lancerConfettis() {
    // Utilisation de la bibliothèque canvas-confetti
    const confetti = window.confetti;

    // Paramètres de l'animation de confettis
    confetti({
        particleCount: 20,          // Nombre de confettis
        angle: 90,                   // Direction de l'angle des confettis
        spread: 360,                 // Étendue de la dispersion
        origin: { x: 0.5, y: 0.5 }, // Origine (centrée)
        colors: ['#ff0', '#f00', '#0f0', '#00f', '#f0f'] // Couleurs des confettis
    });
}

// Charger la bibliothèque confetti.js
(function() {
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    document.body.appendChild(script);
})();
