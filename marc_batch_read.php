<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<?php
//ini_set ("display_errors", "1");
//error_reporting(E_ALL);
header('Content-type: text/plain; charset=utf-8');
require 'File/MARC.php';

if( $_REQUEST["user_id"] ) {
   $user_id = $_REQUEST['user_id'];
}

$record_path = './batch/marcy'.$user_id.'.mrc';
$batch_path = './batch/batch'.$user_id.'.mrc';

//echo $record_path;

if (file_exists($record_path)) {
	$marc_record = new File_MARC($record_path);
	$i = 0;
	while ($record = $marc_record->next()) {
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
		// add support for ISBN 10
		$record_content = $record_content.$i." isbn: ".$isbn." title: ".$titlea."<BR>";
	    $i++;
	}
}
else {
	$record_content = "File not found at ".$record_path."<BR>";
}

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
else {
	$batch_content = "File not found at ".$batch_path."<BR>";
}
	// OUTPUT
		echo 'user id: '.$user_id;
		echo '<BR>--------------<BR>';
		echo "Last saved record (in ".$record_path."): <BR>";
		echo $record_content;
		echo '<BR>--------------<BR>';
		echo "batch content (in ".$batch_path."): <BR>";
		echo $batch_content;
		echo '<BR>--------------<BR>';

?>