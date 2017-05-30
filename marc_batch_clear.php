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

	$marc_batch = new File_MARC($batch_path);

	if (file_exists($batch_path)) {
		$marc_batch = new File_MARC($batch_path);
		$i = 0;
		while ($record = $marc_batch->next()) {
			$isbn = $record->getField('020');
			if ($isbn) { 
				$isbn = substr($isbn, 9, 13);
				if (substr($isbn, 10, 1) == ' ') {
					$isbn = substr($isbn, 0, 10);
				}
			}
			$title = $record->getField('245');
			if ($title) { 
				$titlea = $title->getSubfield('a');
			}
			$batch_content = $batch_content.$i." isbn: ".$isbn." title: ".$titlea."<BR>";
		    $i++;
		}
	}

	$marc_raw_sum = '';
	$marc_to = fopen($batch_path, 'wb') ;
	fwrite($marc_to, $marc_raw_sum); //write the sum existing + new to the file
	fclose($marc_to); //close the file handle

	// control
	$updated_batch = new File_MARC($batch_path);
	usleep(800000);

	$i = 0;
	while ($record = $updated_batch->next()) {
		$isbn = $record->getField('020');
		$isbn = substr($isbn, 9, 13);
		//$isbn = $isbn->getSubfield('a');
		$updated_content = $updated_content.$i." isbn: ".$isbn."<BR>";
	    $marc_raw_new = $marc_raw_new.$record->toRaw();
	    $i++;
	}

	// OUTPUT
		echo 'user id: '.$user_id;
		echo '<BR>--------------<BR>';
		echo 'Clear output: ';
		echo '<BR>--------------<BR>';
		echo "Content of batch before clearing: <BR>";
		echo $batch_content;
		echo '<BR>--------------<BR>';
		echo "Content of batch after clearing: <BR>";
		echo $updated_content;
		echo '<BR>--------------<BR>';

?>