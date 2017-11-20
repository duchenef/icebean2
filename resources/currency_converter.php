<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">

<?php

//Currency converter using Google finance

function currency($from_Currency) {
$to_Currency = 'CHF';
$from_Currency = urlencode($from_Currency);
$to_Currency = urlencode($to_Currency);
$get = file_get_contents("https://finance.google.com/finance/converter?a=1&from=$from_Currency&to=$to_Currency");
$get = explode("<span class=bld>",$get);
$get = explode("</span>",$get[1]);
$converted_currency = preg_replace("/[^0-9\.]/", null, $get[0]);

return $converted_currency;
}
 
/*if (!isset($_GET["from"]))
{
die("PARAMETER 'currency' IS MISSING. Parameter id is from=".$from);
}
else
{
$from = $_GET["from"];
}

if (!isset($_GET["amount"]))
{
die("AMOUNT is MISSING. Parameter id is amount=");
}
else
{
$amount = $_GET["amount"];
}

//echo $from;
//echo '<BR>';
//echo $amount;
//echo '<BR>';


$final = currency($from, 'CHF', $amount);
print($final);*/

//$u = currency('GBP', 5);
//echo $u;

?>