<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<?php
//ini_set ("display_errors", "1");
//error_reporting(E_ALL);
header('Content-type: text/plain; charset=utf-8');
require 'File/MARC.php';

if( $_REQUEST["isbn"] ) {
   $current_isbn = $_REQUEST['isbn'];

	//$marc = new File_MARC('marcy.mrc'); //load the source marc file
	$marc_new = new File_MARC('./batch/marcy.mrc');
	$marc_batch = new File_MARC('./batch/batch.mrc');

	$i = 0;
	while ($record = $marc_batch->next()) {
		$isbn = $record->getField('020');
		$isbn = substr($isbn, 9, 13);
		if (substr($isbn, 10, 1) == ' ') {
			$isbn = substr($isbn, 0, 10);
		}
		$title = $record->getField('245');
		$titlea = $title->getSubfield('a');
		$titleb = $title->getSubfield('b');
		$batch_content = $batch_content.$i." isbn: ".$isbn." title: ".$titlea.$titleb."<BR>";
	    $marc_raw_existing = $marc_raw_existing.$record->toRaw();
	    $i++;
	}

	while ($record = $marc_new->next()) {
		$isbn = $record->getField('020');
		$isbn = substr($isbn, 9, 13);
		if (substr($isbn, 10, 1) == ' ') {
			$isbn = substr($isbn, 0, 10);
		}
		$title = $record->getField('245');
		$titlea = $title->getSubfield('a');
		$titleb = $title->getSubfield('b');
		$new_content  = $new_content.$i." isbn: ".$isbn." title: ".$titlea.$titleb."<BR>";
	    $marc_raw_new = $marc_raw_new.$record->toRaw();
	}

	$marc_raw_sum = $marc_raw_existing.$marc_raw_new;

	$marc_to = fopen('./batch/batch.mrc', 'wb') ;
	fwrite($marc_to, $marc_raw_sum); //write the sum existing + new to the file
	fclose($marc_to); //close the file handle

	// control
	$updated_batch = new File_MARC('./batch/batch.mrc');
	usleep(1000000);

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
		//echo '<BR>--------------<BR>';
		echo 'Batch output: ';
		echo '<BR>--------------<BR>';
		echo "Content of batch before import: <BR>";
		echo $batch_content;
		echo '<BR>--------------<BR>';
		echo "Imported record: <BR>";
		echo $new_content;
		echo '<BR>--------------<BR>';
		echo "Content of batch after import: <BR>";
		echo $updated_content;
		//echo ' existing: '.$marc_raw_existing.'<BR>';
		//echo ' new: '.$marc_raw_new.'<BR>';
		//echo ' sum: '.$marc_raw_sum.'<BR>';
		//echo '<BR>--------------<BR>';
}
else {
	echo 'Batch output: ';
	echo '<BR>--------------<BR>';
	echo "nothing to add";
}

?>