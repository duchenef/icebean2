<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<?php
echo 'youhou';
echo '<BR>';

$checkurl = "http://experimental.worldcat.org/fast/1084736/marc21.xml";
var_dump($checkurl);

$check = simplexml_load_file($checkurl);

$file = file_get_contents($checkurl);

foreach( $check->xpath('//foo:record') as $record ) {
      $record->registerXPathNamespace('foo', 'http://www.loc.gov/MARC21/slim');
      foreach( $record->xpath('foo:datafield[@tag="100" or @tag="110" or @tag="111" or @tag="130" or @tag="150" or @tag="151"]') as $datafield ) {
      echo $datafield;
  		}
}

echo '<BR>';
var_dump($check);
var_dump($file);


?>