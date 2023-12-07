<?php

namespace Class\CliMatch;

class Question
{
    private string $question;
    private string $answer;
    private string $image;
    private string $explanation;
    function __construct(){

    }

    //Permet de convertir le json en un array.
    function lire_json(string $fichier): array {
        $texte = json_decode(file_get_contents(__DIR__ . "\..\\..\\" . $fichier));
        return $texte;
    }

    //Permet d'afficher une image qui vient du fichier json.
    function afficher_image_json(string $image) : void{

        echo "<img src='../image/" . $image . "'>";
    }
}