<?php
require 'File/MARC.php';

$f000 = '00000nam  2200000 i 4500';
$f007 = 'ta';
$f008 = $_POST[f008];
$f020_a = $_POST[f020_a];
$f020_q = $_POST[f020_q];
$f040_a = $_POST[f040_a];
$f040_b = $_POST[f040_b];
$f040_d = $_POST[f040_d];
$f040_e = 'rda';
$f041_i1 = $_POST[f041_i1];
$f041_a = $_POST[f041_a];
$f041_h = $_POST[f041_h];
$f245_a = $_POST[f245_a];

$marc = new File_MARC_Record();
$marc->setLeader($f000);

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

$marc->appendField(new File_MARC_Data_Field('020', array(
        new File_MARC_Subfield('a', $f020_a),
		new File_MARC_Subfield('q', $f020_q),
    ), null, null
));


if ($f040_d != '') {
	$marc->appendField(new File_MARC_Data_Field('040', array(
	        new File_MARC_Subfield('a', $f040_a),
			new File_MARC_Subfield('b', $f040_b),
			new File_MARC_Subfield('d', $f040_d),
			new File_MARC_Subfield('e', $f040_e)
	    ), null, null
	));
}
else {
	$marc->appendField(new File_MARC_Data_Field('040', array(
	        new File_MARC_Subfield('a', $f040_a),
			new File_MARC_Subfield('b', $f040_b),
			new File_MARC_Subfield('e', $f040_e)
	    ), null, null
	));
}

if ($f041_i1 == '1') {
	$marc->appendField(new File_MARC_Data_Field('041', array(
	        new File_MARC_Subfield('a', $f041_a),
			new File_MARC_Subfield('e', $f041_h)
	    ), 1, null
	));
}
else {
	$marc->appendField(new File_MARC_Data_Field('041', array(
	        new File_MARC_Subfield('a', $f041_a)
	    ), 0, null
	));
}

/* $marc->appendField(new File_MARC_Data_Field('100', array(
        new File_MARC_Subfield('a', 'Doe, John'),
    ), null, null
)); */

$marc->appendField(new File_MARC_Data_Field('245', array(
        new File_MARC_Subfield('a', $f245_a),
        new File_MARC_Subfield('b', 'subtitle'),
        new File_MARC_Subfield('c', 'author')
    ), null, null
));

//var_dump($_POST);

print "Marc output: <BR>";
print $marc .'<BR>';
echo '<BR>';

echo 'f000: __ '.$f000.'<BR>';
echo 'f007: __ '.$f007.'<BR>';
echo 'f008: __ '.$f008.'<BR>';
echo 'f020: __ '.'a/ '.$f020_a.' q/ '.$f020_q.'<BR>';
echo 'f040: __ '.'a/ '.$f040_a.' b/ '.$f040_b.' d/ '.$f040_d.' e/ '.$f040_e.'<BR>';
echo 'f041: '.$f041_i1.'_ '.'a/ '.$f041_a.' h/ '.$f041_h.'<BR>';

print "<BR>Write MARC21";
$fh = fopen('marcy.mrc', 'w');
fwrite($fh, $marc->toRaw());
fclose($fh);
print "... written.\n\n";

?>