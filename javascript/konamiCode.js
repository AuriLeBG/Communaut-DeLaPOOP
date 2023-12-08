// Stocker la séquence du Konami code
var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyQ"];

// Index pour suivre la progression de la séquence
var konamiCodeIndex = 0;

// Fonction appelée à chaque pression de touche
function handleKeyPress(event) {
    // Récupérer le code de la touche
    var keyCode = event.code;
    let div = document.getElementById("img_pinguin");
    let div2 = document.getElementById("img_pinguin2");
    // Vérifier si la touche actuelle correspond à la séquence attendue
    if (keyCode === konamiCode[konamiCodeIndex]) {
        // La touche est correcte, passer à la suivante
        konamiCodeIndex++;
        if(konamiCodeIndex === 1 || konamiCodeIndex === 2){
            div.src = '../image/pingouin/konamihaut.png';
            div2.src = '../image/pingouin/konamihaut.png';
        }
        else if(konamiCodeIndex === 3 || konamiCodeIndex === 4){
            div.src = '../image/pingouin/konamibas.png';
            div2.src = '../image/pingouin/konamibas.png';
        }
        else if(konamiCodeIndex === 5 || konamiCodeIndex === 7){
            div.src = '../image/pingouin/konamigauche.png';
            div2.src = '../image/pingouin/konamigauche.png';
        }
        else if(konamiCodeIndex === 6 || konamiCodeIndex === 8){
            div.src = '../image/pingouin/konamidroite.png';
            div2.src = '../image/pingouin/konamidroite.png';
        }
        else if(konamiCodeIndex === 9){
            div.src = '../image/pingouin/konamiB.png';
            div2.src = '../image/pingouin/konamiB.png';
        }
        else{
            div.src = '../image/pingouin/pengouin.png';
            div2.src = '../image/pingouin/pengouin.png';
        }
        // Vérifier si la séquence entière a été entrée
        if (konamiCodeIndex === konamiCode.length) {
            // La séquence complète a été entrée.
            window.location.href = "journal_de_bord.php";

            // Réinitialiser l'index pour permettre la détection de la prochaine séquence
            konamiCodeIndex = 0;
        }
    } else {
        // La touche ne correspond pas à la séquence, réinitialiser l'index
        konamiCodeIndex = 0;
        div.src = '../image/pingouin/pengouin.png';
        div2.src = '../image/pingouin/pengouin.png';
    }
}

// Ajouter un écouteur d'événements pour l'événement keydown
document.addEventListener("keydown", handleKeyPress);