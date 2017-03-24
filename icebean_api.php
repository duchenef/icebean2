<?php

if( $_REQUEST["isbn"] ) {

   $isbn = $_REQUEST['isbn'];
}


/*if (!isset($_GET["isbn"]))
{
$isbn_status = "ISBN is missing";
die("isbn is missing");
}
else
{
$isbn = $_GET["isbn"];
$isbn_status = "ISBN-like number was found, special signs were removed";
}*/

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
  if ($gbtitle == '') {
     $gbtitle_status = "Google Books Title: not found";
  }
  else { $gbtitle_status = "Google Books Title: ".$gbtitle; }
$author = $arrayGB[2];
$author_status = "author taken from Google";
$descrurlgb = $arrayGB[3];
$imagepathGB = $arrayGB[4];
$otherpathsGB = $arrayGB[5];

// Requete Amazon images avec ASIN titre
// retourne un tableau: [0]= request, [1]= xml brut, [2]= request status, [3]= images urls (array), [4]= $asin, [5]= $language, [6]= $reviewa, [7]= $reviewb, [8]= formatted price, [9]= swissprice, [10]= publisher, [11]= pages, [12]= dimensions inches, [13]= dimensions cm, [14]= publication date, [15]= title, [16]= detailed amazon page url , [17]= $review_status, [18]= author

$Amregion = "fr";

include 'resources/function_amazon.php';

$amazon=amazon($isbn, $Amregion);

$AmRequest_status = $amazon[2];
$asin=$amazon[4];
$language=$amazon[5];
$amreviewa=$amazon[6];
$amreviewb=$amazon[7];
$descrurlam = "Description 1. ".$amreviewa." Description 2. ".$amreviewb;
$formattedprice=$amazon[8];
$swissprice="p".$amazon[9]."chf";
$publisher=$amazon[10];
$pages=$amazon[11];
$heightinches=$amazon[12];
$heightcm=$amazon[13];
$publicationdate=$amazon[14];
$pageurl=$amazon[16];
// Utiliser le titre amazon par defaut, sauf si vide
$AMtitle = $amazon[15];
$review_status=$amazon[17];
if ($author == '') {
   $author= $amazon[18];
   $author_status = "Author taken from Amazon";
}

// Requete Goodreads
// retourne un tableau: [0]=status, [1]=title, [2]=author, [3]=description, [4]=url de la requete, [5]=donnees brutes xml, [6]=chemin image goodreads
  include 'resources/function_goodreads.php';
  $goodreads = goodreads($isbn);
  
  $GRstatus = $goodreads[0];
  $GRtitle = $goodreads[1];
  $GRauthor = $goodreads[2];
  $GRdescr = $goodreads[3];
 
// appel fonction fast
// retourne un tableau: [0]=fast format marc mandarin, [1]=fast format lisible, [2]=status, [3]=dewey, [4]= edition ddc
  include 'resources/function_fast.php';
  if ($isbn != '') {$fastresults = fast2mdr($isbn);}
  $marcArray = $fastresults[0];
  $readArray = $fastresults[1];
  $classify_status = (string)$fastresults[2];
  $dewey = (string)$fastresults[3];
  $ddced = (string)$fastresults[4];

// choix de la description à afficher en fonction du choix dans le formulaire
    
$descr = $GRdescr;
$descr_status = "Selected description mode: Goodreads";

$descr = str_replace("\xE2\x80\x99", "'", $descr);
$descr = str_replace("\xE2\x80\xA6", "...", $descr); 
$descr = "|".chr(30).chr(9)."520".chr(9)."8".chr(9).chr(32)."<BR>".chr(97).chr(9).$descr."|";

$output_array = array($isbn, $GBtitle, $AMtitle);

//echo $GBtitle.'<BR>';
//echo $AMtitle.'<BR>';

//echo json_encode($output_array);
echo implode('~',$output_array);
//echo "<SCRIPT LANGUAGE='javascript'> gettemplate('$output_array');</SCRIPT>\n";


?>