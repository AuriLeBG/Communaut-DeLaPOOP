<?php
session_start();

require_once "..".DIRECTORY_SEPARATOR."Class" . DIRECTORY_SEPARATOR . "autoloader.php";

use Class\CliMatch\Template;
use Class\CliMatch\Question;

ob_start();

echo "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>

<div id="match">
    <div id="card">
        <div id="question"></div>
        <div id="image">
            <img id="card_image" src="" alt="">
        </div>
    </div>
    <div id="divButtons">
        <button id="buttonFalse" class="button_tinder"><i class="fa-solid fa-xmark fa-2xl"></i></button>
        <button id="buttonTrue" class="button_tinder"><i class="fa-solid fa-check fa-2xl"></i></button>
    </div>
</div>

<?php

$content = ob_get_clean();
$class_question = new Question();
$data = $class_question->lire_json("question.json");
//$class_question->afficher_image_json($data[0]->image);
Template::render($content);