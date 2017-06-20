<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<?php
ini_set ("display_errors", "1");
error_reporting(E_ALL);
header('Content-type: text/plain; charset=utf-8');

if( $_REQUEST["user_id"] ) {
   $user_id = $_REQUEST['user_id'];
 }

 if( $_REQUEST["cat_stats"] ) {
   $cat_stats = $_REQUEST['cat_stats'];
 }

$stats_path = '../stats/'.$user_id.'.txt';


if(!is_file($stats_path)) {
      	$stats = fopen($stats_path,"x"); 
      	fwrite($stats, "");
        fclose($stats);
}

$stats = fopen($stats_path, 'a') or die("Unable to open file!");
fwrite($stats, $cat_stats."\n"); //write the sum existing + new to the file
fclose($stats); //close the file handle


// OUTPUT
echo 'user id: '.$user_id;
echo '<BR>--------------<BR>';

?>