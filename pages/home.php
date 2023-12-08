<?php
session_start();

require_once "..".DIRECTORY_SEPARATOR."Class" . DIRECTORY_SEPARATOR . "autoloader.php";

use Class\CliMatch\Template;
use Class\CliMatch\Question;

ob_start();

?>
<div id="pinguin">
    <img id="img_pinguin" src="../image/pingouin/pengouin.png"
</div>

<div id="match">
    <div id="card">
        <div id="question">
            <div id="title"></div>
            <div id="image">
                <img id="card_image" src="" alt="">
            </div>
            <div id="divButtons">
                <button id="buttonFalse" value="true" class="button_tinder"><i class="fa-solid fa-xmark fa-2xl"></i></button>
                <button id="buttonTrue" value="false" class="button_tinder"><i class="fa-solid fa-check fa-2xl"></i></button>
            </div>
        </div>

        <div id="answer" class="hide">
            <div id="titleAnswer"></div>
            <div id="details"></div>
            <button id="next" class="button_tinder">Next</button>
        </div>

        <div id="results" class="hide">
            <div id="titleResults"></div>
            <div id="corrects">Nombres de bonnes réponses : </div>
            <div id="errors">Nombres de mauvaises réponses : </div>
        </div>

    </div>

</div>

<?php

$content = ob_get_clean();
$class_question = new Question();
$data = $class_question->lire_json("question.json");
//$class_question->afficher_image_json($data[0]->image);
Template::render($content);