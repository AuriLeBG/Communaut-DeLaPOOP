<?php


$data = [
    [
        "question" => "La déforestation contribue-t-elle au changement climatique ?",
        "answer" => true,
        "explication" => "Oui, la déforestation contribue au changement climatique en libérant du dioxyde de carbone stocké dans les arbres lorsqu'ils sont coupés et brûlés.",
        "image" => "deforestation.png"
    ],
    [
        "question" => "Est-ce que tous les plastiques sont recyclables ?",
        "answer" => false,
        "explication" => "Non, tous les plastiques ne sont pas recyclables. Certains types de plastiques ne peuvent pas être recyclés en raison de leur composition chimique.",
        "image" => "plastique.png"
    ],
    [
        "question" => "L'énergie solaire est-elle une source d'énergie renouvelable ?",
        "answer" => true,
        "explication" => "Oui, l'énergie solaire est une source d'énergie renouvelable car elle provient du soleil, qui est une ressource inépuisable."
    ],
    [
        "question" => "Est-ce que le réchauffement climatique est uniquement causé par l'activité humaine ?",
        "answer" => false,
        "explication" => "Non, bien que l'activité humaine soit un facteur majeur du réchauffement climatique, d'autres facteurs naturels comme les éruptions volcaniques et les variations solaires jouent également un rôle."
    ],
    [
        "question" => "Est-ce que la consommation d'eau a un impact sur l'environnement ?",
        "answer" => true,
        "explication" => "Oui, la consommation excessive d'eau peut avoir un impact sur l'environnement en épuisant les ressources en eau douce et en perturbant les écosystèmes aquatiques."
    ]
];

header('Content-Type: application/json');
echo json_encode($data);