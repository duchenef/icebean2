<?php
require 'File/MARC.php';

// VARIABLES FROM POST
	$f000 = $_POST[f000];
	$f007 = $_POST[f007];
	$f008 = $_POST[f008];

// Obsolete> now handled by loop foreach ($_POST as $key => $value)
	/*$f020 = $_POST[f020];
	$f040 = $_POST[f040];
	$f041 = $_POST[f041];
	$f100 = $_POST[f100];
	$f240 = $_POST[f240];
	$f245 = $_POST[f245];
	$f336 = $_POST[f336];
	$f337 = $_POST[f337];
	$f338 = $_POST[f338];
	$f852 = $_POST[f852];*/

// FUNCTION: CREATE FIELD FROM FIELD VARIABLE
	function newField($field) {
		// Create new field
		$new_field = new File_MARC_Data_Field($field[id], null, $field[i1], $field[i2]);
		// append subfields if value is not empty
		foreach($field as $key => $value) {
			if ($key == 'id' || $key == 'i1' || $key == 'i2' || $key == 'punct') {
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

foreach ($_POST as $key => $value) {
    $tmp = $value[id];
    if ($tmp == '0' || $tmp == 't' || $tmp == '1') {
    	continue;
    }
    else {
    	${'f'.$tmp} = $value;
	    $marc->appendField(newField(${'f'.$tmp}));
    }
    
}

// Obsolete> now handled by loop foreach ($_POST as $key => $value)
/*// MARC FIELDS
	$marc->appendField(newField($f020));
	$marc->appendField(newField($f040));
	$marc->appendField(newField($f041));
	$marc->appendField(newField($f100));
	$marc->appendField(newField($f240));
	$marc->appendField(newField($f245));
	$marc->appendField(newField($f336));
	$marc->appendField(newField($f337));
	$marc->appendField(newField($f338));
	$marc->appendField(newField($f852));*/

// OUTPUT
	echo '<BR>--------------<BR>';
	echo 'Marc output: ';
	echo '<BR>--------------<BR>';
	$exploded_marc = explode("\n", $marc);
		foreach($exploded_marc as $line) {
			echo $line.'<BR>';
		}
	echo '<BR>--------------<BR>';
	//print $marc;
	//echo '<BR>--------------<BR>';
	print "Write MARC21: ";
	$fh = fopen('marcy.mrc', 'w');
	fwrite($fh, $marc->toRaw());
	fclose($fh);
	print " ...written.\n\n";

?>