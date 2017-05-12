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
  
// appel fonction fast
// retourne un tableau: [0]=fast format marc mandarin, [1]=fast format lisible, [2]=status, [3]=dewey, [4]= edition ddc
  include 'resources/function_fast.php';
  if ($isbn != '') {$fastresults = fast2mdr($isbn);}
  //$marcArray = $fastresults[0];
  $readArray = $fastresults[1];
  $dewey = (string)$fastresults[3];
  array_unshift($readArray , $dewey);
  array_unshift($readArray , '');
  //$classify_status = (string)$fastresults[2];
  //$ddced = (string)$fastresults[4];

//echo json_encode($output_array);
echo implode('~',$readArray);

?>