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
  $items=$arrayGB[0];
  $GBtitle = $arrayGB[1];
    if ($GBtitle == '') {
       $gbtitle_status = "Google Books Title: not found";
    }
    else { $gbtitle_status = "Google Books Title: ".$GBtitle; }
  $GBauthor = $arrayGB[2];
  $GBsummary = $arrayGB[3];
  $otherpathsGB = $arrayGB[5];

// Requete Amazon images avec ASIN titre
// retourne un tableau: [0]= request, [1]= xml brut, [2]= request status, [3]= images urls (array), [4]= $asin, [5]= $language, [6]= $reviewa, [7]= $reviewb, [8]= formatted price, [9]= swissprice, [10]= publisher, [11]= pages, [12]= dimensions inches, [13]= dimensions cm, [14]= publication date, [15]= title, [16]= detailed amazon page url , [17]= $review_status, [18]= author

$Amregion = "co.uk";

include 'resources/function_amazon.php';
  $amazon = amazon($isbn, $Amregion);
  $AmRequest_status = $amazon[2];
  $asin=$amazon[4];
  $language=$amazon[5];
  $AMsummary=$amazon[6];
    $f520aAM = str_replace("\xE2\x80\x99", "'", $f520aAM);
  $formattedprice=$amazon[8];
  $swissprice="p".$amazon[9]."chf";
  $f264b=$amazon[10];
  $f300a=$amazon[11];
  $f300c=$amazon[13];
  $publicationdate=$amazon[14];
  $pageurl=$amazon[16];
  // Utiliser le titre amazon par defaut, sauf si vide
  $AMtitle = $amazon[15];
  $review_status=$amazon[17];
  $AMauthor = $amazon[18];

// Requete Goodreads
// retourne un tableau: [0]=status, [1]=title, [2]=author, [3]=description, [4]=url de la requete, [5]=donnees brutes xml, [6]=chemin image goodreads
include 'resources/function_goodreads.php';
  $goodreads = goodreads($isbn);
  $GRstatus = $goodreads[0];
  $GRtitle = $goodreads[1];
  $GRauthor = $goodreads[2];
  $GRsummary = $goodreads[3];
    $GRsummary = str_replace("\xE2\x80\x99", "'",  $GRsummary);
 
// appel fonction fast
// retourne un tableau: [0]=fast format marc mandarin, [1]=fast format lisible, [2]=status, [3]=dewey, [4]= edition ddc
  include 'resources/function_fast.php';
  if ($isbn != '') {$fastresults = fast2mdr($isbn);}
  $dewey = (string)$fastresults[3];

// choix de la description à afficher en fonction du choix dans le formulaire

$output_array = array($isbn, $AMauthor, $AMtitle, $GRtitle, $dewey, $f300a, $f300c, $swissprice, $AMsummary, $f264b, $GRsummary, $GBtitle, $GRauthor, $GBauthor, $GBsummary);
//                    0      1          2         3         4       5       6       7            8           9       10          11        12         13         14
//echo json_encode($output_array);
echo implode('~',$output_array);
//echo "<SCRIPT LANGUAGE='javascript'> gettemplate('$output_array');</SCRIPT>\n";

?>