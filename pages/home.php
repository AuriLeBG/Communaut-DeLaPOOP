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
        <div id="question">

        </div>
        <div id="image">
            <img src="../image/..png" alt="deforestation">
        </div>
        <button id="buttonFalse"></button>
        <button id="buttonTrue"></button>
    </div>
</div>

<?php

$content = ob_get_clean();
$class_question = new Question();
$data = $class_question->lire_json("question.json");
//$class_question->afficher_image_json($data[0]->image);
Template::render($content);