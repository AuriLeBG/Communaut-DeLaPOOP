// Fonction pour afficher le journal de bord progressivement
function afficherJournal(journal) {
    var index = 0;

    function afficherLigne() {
        if (index < journal.length) {
            var ligne = journal[index];
            var texte = "> [" + ligne.heure + "] " + ligne.action + "\n";

            afficherCaractereParCaractere(texte, 0, function() {
                setTimeout(function() {
                    index++;
                    afficherLigne();
                }, 400);
            });
        }
    }

    function afficherCaractereParCaractere(texte, i, callback) {
        if (i < texte.length) {
            document.getElementById('terminalContainer').innerText += texte[i];
            document.getElementById('terminalContainer').scrollTop = document.getElementById('terminalContainer').scrollHeight;
            setTimeout(function() {
                afficherCaractereParCaractere(texte, i + 1, callback);
            }, 15); // DÃ©lai entre chaque caractÃ¨re (ajustez selon vos prÃ©fÃ©rences)
        } else {
            callback();
        }
    }

    afficherLigne();
}

// Charger le fichier JSON et appeler la fonction d'affichage
fetch('../journal_de_bord.json')
    .then(response => response.json())
    .then(journal => {
        afficherJournal(journal);
    })
    .catch(error => console.error('Erreur de chargement du fichier JSON :', error));

