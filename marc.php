<?php
header('Content-type: text/plain; charset=utf-8');
require 'File/MARC.php';
// VARIABLES FROM POST
	$f000 = $_POST[f000];
	$f007 = $_POST[f007];
	$f008 = $_POST[f008];
ksort($_POST);
/*function char_encode($string) {
	$string = str_replace('é', 'âe', $string);
	return $string;
}*/
/*$a = 'é---';
$b = bin2hex ($a);
$c = hex2bin ('65e2');
echo $b;
echo '<BR>';
echo $c;
echo '<BR>';*/
/*$value = $_POST[f100][a];
$a = utf8_encode($value);
$b = unpack('C*', $a); 
echo $a.'<BR>';
var_dump($b);
echo '<BR>';
echo '<BR>';
for( $i = 0; $i <= strlen($value); $i++ ) {
	echo substr($value, $i, 1);
	echo "<BR>";
}
echo "Value of 100a<BR>";
echo $value;*/
/*$a = html_entity_decode($value);
echo "<BR>Ord of 1st char in 100a<BR>";
echo ord(substr($a, 0));
echo "<BR>Encoding of 100a<BR>";
echo mb_detect_encoding(substr($a, 0));
echo "<BR>";*/
// FUNCTION: CREATE FIELD FROM FIELD VARIABLE
	function newField($field) {
		// Create new field
		$new_field = new File_MARC_Data_Field($field[id], null, $field[i1], $field[i2]);
		// append subfields if value is not empty
		foreach($field as $key => $value) {
			//$value = str_replace('é', hex2bin('65e2'), $value);
			if ($key == 'id' || $key == 'i1' || $key == 'i2' || $key == 'punct') {
				continue;
			}
			elseif ($key == '2') {
				$two = $key;
				$two_val = $value;
			}
			elseif ($key == '9') {
				$nine = $key;
				$nine_val = $value;
			}
			else {
				if ($value != '') {
				$new_field->appendSubfield(new File_MARC_Subfield($key, $value));
				}
			}
		}
		if (isset($two)) {
			$new_field->appendSubfield(new File_MARC_Subfield($two, $two_val));
		}
		if (isset($nine)) {
			$new_field->appendSubfield(new File_MARC_Subfield($nine, $nine_val));
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

// OUTPUT
	//echo '<BR>--------------<BR>';
	echo 'Marc output: ';
	echo '<BR>--------------<BR>';
	//$exploded_marc = explode("\n", $marc);
	//	foreach($exploded_marc as $line) {
	//		echo $line.'<BR>';
	//	}
	//echo '<BR>--------------<BR>';
	print $marc;
	echo '<BR>--------------<BR>';
	print "Write MARC21: ";
	$fh = fopen('./batch/marcy.mrc', 'w');
	fwrite($fh, $marc->toRaw());
	fclose($fh);
	print " ...written.\n\n";
?>