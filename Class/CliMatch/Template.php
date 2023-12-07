<?php

namespace Class\CliMatch;

class Template{
    public static function render($content): void{
        ?>
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>CliMatch</title>
            <link rel="icon" href="">
            <link rel="stylesheet" href="../CSS/styles.css">
            <script src="../js/script.js"></script>
        </head>
        <body>
            <?php include "header.php" ?>

                <script>
                </script>

                <div id="main">
                    <div id="content">
                        <?= $content ?>
                    </div>
                </div>

            <?php include "footer.php" ?>
        </body>
        </html>
        <?php
    }
}