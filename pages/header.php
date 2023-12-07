<header>

    <div id="menu">
        <a href="../index.php" id="titlelogo">
            <img id="spat" src="">
            <div id="main-title">
                CliMatch
                <i class="fa-solid fa-heart"></i>
            </div>
        </a>

        <form method="post" action="recherche.php" id="form">
            <div id="barrerecherche">

            </div>
        </form>
    </div>

    <div id="liens">
        <?php
        // Si l'utilisateur est connecté
        if(isset($_SESSION["login"])):
        ?>
            <div id="connecte">

                <a href="logout.php">
                    <div id="loginAdmin" class="lien">
                        Logout <?php echo $_SESSION["login"];?>
                    </div>
                </a>
            </div>

        <?php else:?>
            <a href="login.php">
                <div id="loginAdmin" class="lien">
                    Connexion
                </div>
            </a>
        <?php endif?>
    </div>
</header>