<?php
session_start();

require_once "..".DIRECTORY_SEPARATOR."Class" . DIRECTORY_SEPARATOR . "autoloader.php";

use Class\CliMatch\Template;

ob_start();

echo "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>

<div id="match">
    <div id="card">
        <div id="question"></div>
        <div id="image">
            <img id="card_image" src="" alt="">
        </div>
        <button id="buttonFalse">False</button>
        <button id="buttonTrue">True</button>
    </div>
</div>

<?php

$content = ob_get_clean();

Template::render($content);