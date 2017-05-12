<?php
header('Content-type: text/plain; charset=utf-8');

if( $_REQUEST["isbn"] ) {
   $isbn = $_REQUEST['isbn'];
}

// Traitement ISBN
$remove = array(" ", "-", "_", "\"");
$isbn = str_replace($remove, '', $isbn);
$isbn_status = "ISBN-like number found, special signs were removed: ";

// ISBN 13 to 10
function ISBN13toISBN10($isbn) {
    if (preg_match('/^\d{3}(\d{9})\d$/', $isbn, $m)) {
        $sequence = $m[1];
        $sum = 0;
        $mul = 10;
        for ($i = 0; $i < 9; $i++) {
            $sum = $sum + ($mul * (int) $sequence{$i});
            $mul--;
        }
        $mod = 11 - ($sum%11);
        if ($mod == 10) {
            $mod = "X";
        }
        else if ($mod == 11) {
            $mod = 0;
        }
        $isbn = $sequence.$mod;
    }
    return $isbn;
}

$isbn10 = ISBN13toISBN10($isbn);
  
// Requete Google books
// retourne un tableau: [0]=items, [1]=title, [2]=author, [3]=description, [4]=image URL, [5]= tableau contenant les autres url
include 'resources/function_google.php';
  if ($isbn == '') {$gisbn = "978";}
  else {$gisbn = $isbn;}
  $arrayGB = google($gisbn);
  $imageGB_url = $arrayGB[4];

// Requete Amazon images avec ASIN titre
// retourne un tableau: [0]= request, [1]= xml brut, [2]= request status, [3]= images urls (array), [4]= $asin, [5]= $language, [6]= $reviewa, [7]= $reviewb, [8]= formatted price, [9]= swissprice, [10]= publisher, [11]= pages, [12]= dimensions inches, [13]= dimensions cm, [14]= publication date, [15]= title, [16]= detailed amazon page url , [17]= $review_status, [18]= author

$Amregion = "fr";

include 'resources/function_amazon.php';
  $amazon = amazon($isbn, $Amregion);
  $arrayAMimages=$amazon[3];
  $imageAM_url=$arrayAMimages[0];
  //$imageAM_url=urlencode($imageAM_url);

// Requete Goodreads
// retourne un tableau: [0]=status, [1]=title, [2]=author, [3]=description, [4]=url de la requete, [5]=donnees brutes xml, [6]=chemin image goodreads
include 'resources/function_goodreads.php';
  $goodreads = goodreads($isbn);
  $imageGR_url = $goodreads[6];
   
// choix de la description à afficher en fonction du choix dans le formulaire

$output_array = array($imageAM_url, $imageGR_url, $imageGB_url);
//                    0             1             2
//echo json_encode($output_array);
echo implode('~',$output_array);
//echo "<SCRIPT LANGUAGE='javascript'> gettemplate('$output_array');</SCRIPT>\n";
?>