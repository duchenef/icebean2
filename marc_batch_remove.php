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

if( $_REQUEST["isbn"] ) {
  	$current_isbn = $_REQUEST['isbn'];
	$marc_batch = new File_MARC($batch_path);
	$removed_isbn = 'none';

	$i = 0;
	while ($record = $marc_batch->next()) {
		$isbn = $record->getField('020');
		$isbn = substr($isbn, 9, 13);
		if (substr($isbn, 10, 1) == ' ') {
			$isbn = substr($isbn, 0, 10);
		}
		$batch_content = $batch_content.$i." isbn: ".$isbn."<BR>";
		if ($current_isbn == $isbn) {
			$removed_isbn = $isbn;
			continue;
		}
		else if ($current_isbn == '00000000000' &&  $isbn == '') {
			$removed_isbn = 'blank isbns';
			continue;
		}
		else {
		    $marc_raw_existing = $marc_raw_existing.$record->toRaw();
		}
	    $i++;
	}

	$marc_raw_sum = $marc_raw_existing;
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
		echo 'removal requested for: <BR>';
		echo $current_isbn;
		echo '<BR>--------------<BR>';
		echo 'remove output: ';
		echo '<BR>--------------<BR>';
		echo "Content of batch before import: <BR>";
		echo $batch_content;
		echo '<BR>--------------<BR>';
		echo "Content of batch after import: <BR>";
		echo $updated_content;
		echo '<BR>--------------<BR>';
		echo "Removed isbn: <BR>";
		echo $removed_isbn;
}

else {
	echo 'Remove output: ';
	echo '<BR>--------------<BR>';
	echo 'no ISBN to remove ';
}



?>