<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<?php
//ini_set ("display_errors", "1");
//error_reporting(E_ALL);
header('Content-type: text/plain; charset=utf-8');
require 'File/MARC.php';

if( $_REQUEST["user_id"] ) {
   $user_id = $_REQUEST['user_id'];
 }

$batch_path = './batch/batch'.$user_id.'.mrc';

$marc_batch = new File_MARC('./batch/batch.mrc');

	$i = 0;
	while ($record = $marc_batch->next()) {
		$isbn = $record->getField('020');
		$title = $record->getField('245');
		$titlea = $title->getSubfield('a');
		$titleb = $title->getSubfield('b');
		// add support for ISBN 10
		$isbn = substr($isbn, 9, 13);
		if (substr($isbn, 10, 1) == ' ') {
			$isbn = substr($isbn, 0, 10);
		}
		$batch_content = $batch_content.$i." isbn: ".$isbn." title: ".$titlea.$titleb."<BR>";
		$marc_raw_new = $marc_raw_new.$record->toRaw();
	    $i++;
	}

$marc_to = fopen($batch_path, 'wb') ;
	fwrite($marc_to, $marc_raw_new); //write the sum existing + new to the file
	fclose($marc_to); //close the file handle


	// OUTPUT
		echo 'user id: '.$user_id;
		echo '<BR>--------------<BR>';
		echo "batch content: <BR>";
		echo $batch_content;
		echo '<BR>--------------<BR>';
		echo 'write to: '.$batch_path;


?>