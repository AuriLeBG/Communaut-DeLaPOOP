<?php
session_start();

require_once "..".DIRECTORY_SEPARATOR."Class" . DIRECTORY_SEPARATOR . "autoloader.php";

use Class\CliMatch\Template;
use Class\CliMatch\Question;

ob_start();

$content = ob_get_clean();
$class_question = new Question();
$data = $class_question->lire_json("question.json");
$class_question->afficher_image_json($data[0]->image);
Template::render($content);