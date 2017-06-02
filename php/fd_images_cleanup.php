<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<?php

$imagesdir = "../images/";
    // Pour chaque fichier du repertoire
    foreach(glob($imagesdir.'*.jpg') as $file){
    // Test d'anciennete: 24 heures = 86400 secondes
    if (filemtime($file) < time() - 86400) {
        unlink($file);
        }
    }
    echo "images older than 24h have been deleted";
?>