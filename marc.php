<?php
require 'File/MARC.php';

// VARIABLES FROM POST
	$f000 = $_POST[f000];
	$f007 = $_POST[f007];
	$f008 = $_POST[f008];
	$f020 = $_POST[f020];
	$f040 = $_POST[f040];
	$f041 = $_POST[f041];
	$f100 = $_POST[f100];
	$f245 = $_POST[f245];

// FUNCTION: CREATE FIELD FROM FIELD VARIABLE
	function newField($field) {
		// Create new field
		$new_field = new File_MARC_Data_Field($field[id], null, $field[i1], $field[i2]);
		// append subfields if value is not empty
		foreach($field as $key => $value) {
			if ($key == 'id' || $key == 'i1' || $key == 'i2') {
				continue;
			}
			else {
				if ($value != '') {
				$new_field->appendSubfield(new File_MARC_Subfield($key, $value));
				}
			}
		}
		return $new_field;
	}

// RECORD INIT
	$marc = new File_MARC_Record();
	$marc->setLeader($f000);

// CONTROL FIELDS
	$marc->appendField(
	    new File_MARC_Control_Field(
	        '007', $f007
	    )
	);

	$marc->appendField(
	    new File_MARC_Control_Field(
	        '008', $f008
	    )
	);

// MARC FIELDS
	$marc->appendField(newField($f020));
	$marc->appendField(newField($f040));
	$marc->appendField(newField($f041));
	$marc->appendField(newField($f100));
	$marc->appendField(newField($f245));

// OUTPUT
	//var_dump($f041);
	echo '<BR>--------------<BR>';
	echo 'Marc output: ';
	echo '<BR>--------------<BR>';
	$exploded_marc = explode("\n", $marc);
		foreach($exploded_marc as $line) {
			echo $line.'<BR>';
		}
	echo '<BR>--------------<BR>';
	print $marc;
	echo '<BR>--------------<BR>';
	print "Write MARC21: ";
	$fh = fopen('marcy.mrc', 'w');
	fwrite($fh, $marc->toRaw());
	fclose($fh);
	print " ...written.\n\n";

?>