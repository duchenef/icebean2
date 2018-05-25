<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">

<?php

//Currency converter using Google finance

function currency($from_Currency) {
	$to_Currency  = 'CHF';
    $from_Currency = urlencode($from_Currency);
    $to_Currency = urlencode($to_Currency);
    $url = file_get_contents('http://free.currencyconverterapi.com/api/v3/convert?q='.$from_Currency.'_'.$to_Currency.'&compact=ultra');
    $json = json_decode($url, true);

    return $json[$from_Currency . '_' . $to_Currency];
}
 
//$from="EUR";
//$amount="10";

//echo $from;
//echo '<BR>';
//echo $amount;
//echo '<BR>';


//$final = currency($from);
//print($final);

?>