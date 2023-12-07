// Stocker la séquence du Konami code
var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyQ"];

// Index pour suivre la progression de la séquence
var konamiCodeIndex = 0;

// Fonction appelée à chaque pression de touche
function handleKeyPress(event) {
    // Récupérer le code de la touche
    var keyCode = event.code;

    // Vérifier si la touche actuelle correspond à la séquence attendue
    if (keyCode === konamiCode[konamiCodeIndex]) {
        // La touche est correcte, passer à la suivante
        konamiCodeIndex++;

        // Vérifier si la séquence entière a été entrée
        if (konamiCodeIndex === konamiCode.length) {
            // La séquence complète a été entrée, faites quelque chose ici
            window.location.href = "../pages/journal_de_bord.html";

            // Réinitialiser l'index pour permettre la détection de la prochaine séquence
            konamiCodeIndex = 0;
        }
    } else {
        // La touche ne correspond pas à la séquence, réinitialiser l'index
        konamiCodeIndex = 0;
    }
}

// Ajouter un écouteur d'événements pour l'événement keydown
document.addEventListener("keydown", handleKeyPress);