<?php

require_once "..".DIRECTORY_SEPARATOR."class" . DIRECTORY_SEPARATOR . "autoloader.php";

session_start();

use Class\CliMatch\Template;

ob_start();
?>

<form id="AdvancedSearchForm" method="POST" action="recherche.php">
    <h2>Recherche avancée</h2>
    <input class="searchbar" type="text" name="search" placeholder="Je cherche une recette">


    <button id ="BoutonAvancedSearch" type="submit" name="IsAdvancedSearch" value="true">
        Rechercher
    </button>

</form>
<?php

$content = ob_get_clean();

Template::render($content);