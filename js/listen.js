/* field 008_0005 */
var today = new Date();
var dd = today.getDate();
if (dd<10) dd = '0'+String(dd);
var mm = today.getMonth()+1; //January is 0!
if (mm<10) mm = '0'+String(mm);
var yyyy = String(today.getFullYear());
var yy = yyyy.substring(2, 4);

// Marc fields Variables init and default values
var f000 = '00000nam  2200000 i 4500';
var f007 = 'ta';

// f008 construction
var f008_0005 = String(yy)+String(mm)+String(dd);
var f008_23 = ' '; /* pos. 23: form of item (none:empty)*/
var f008_2830 = ' 00'; /* pos. 28: government publication (empty), 29: Conference publication (no:0), 30: Festschrift (no:0) */
var f008_32 = ' '; /* pos. 32: undefined (empty) */ 
var f008_3839 = ' d'; /* pos. 38: modified record (empty), 39: Cataloging source (other: d) */

var f008_06 = 't'; /* f008_type_date */
var f008_0710 = '    '; /* f008_date_1 */
var f008_1114 = '    '; /* f008_date_2 */
var f008_1517 = '   '; /* f008_place */
var f008_1821 = '    '; /* f008_illustrations */
var f008_22 = ' '; /* f008_target_audience */
var f008_2427 = '    '; /* f008_nature_of_content */
var f008_31 = 0; /* f008_index */
var f008_33 = ' '; /* f008_literary_form */
var f008_34 = ' '; /* f008_biography */
var f008_3537 = '   '; /* f008_language */

var f008 = f008_0005 + f008_06 + f008_0710 + f008_1114 + f008_1517 + f008_1821 + f008_22 + f008_23 + f008_2427 + f008_2830 + f008_31 + f008_32 + f008_33 + f008_34 + f008_3537 + f008_3839;

// Main marc field variables
var f020 =  {id: '020', i1: null, i2: null, a: '', q: ''};
var f040 =  {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041 =  {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100 =  {id: '100', i1: 1, i2: null, a: ''};
var f240 =  {id: '240', i1: 1, i2: 0, a: '', l: ''};
var f245 =  {id: '245', i1: 1, i2: 0, a: '', b: '', c: ''};

// Marc fields default value for reset
var f020_default =  {id: '020', i1: null, i2: null, a: '', q: ''};
var f040_default =  {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041_default =  {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100_default =  {id: '100', i1: 1, i2: null, a: '', d: ''};
var f240_default =  {id: '240', i1: 1, i2: 0, a: '', l: ''};
var f245_default =  {id: '245', i1: 1, i2: 0, a: '', b: '', c: ''};

/* function to replace a substring at a given position of a string */
function replaceAtPos(substring, string, position) {
    var endpos = position + substring.length;
    string = string.slice(0, position) + substring + string.slice(endpos, string.length);
    return string;
}

/* function:  calculates the presence of an article at the beginning of a string */
function findArticle(string, field) {
    $.getJSON( "resources/articles.json", function( data){
            // field format must be fxxx_n
            var indicator_id = field.substring(0, 4) + '_i2';
            // console.log(data) ; // check if content of articles.json has been downloaded
            var title_first_word = '';
            var first_space_index = string.indexOf(' '); // search for position of 1st space character
            if (first_space_index == -1) first_space_index = 999; // if no space chareacter present default value is -1 -> changed to 999
            var first_apost_index = string.indexOf('\''); // search for position of 1st aopstrophe
            if (first_apost_index == -1) first_apost_index = 999; // if no apostrophe present default value is -1 -> changed to 999
            if (first_space_index < first_apost_index) {
                title_first_word = string.substring(0, first_space_index).toLowerCase();
            }
            else {
                break_char = first_apost_index;
                title_first_word = string.substring(0, first_apost_index+1).toLowerCase();
            }
            if( $.inArray(title_first_word, data) != -1){
                if (first_space_index < first_apost_index) indicator = title_first_word.length+1; // includes space after article to the count
                else indicator = title_first_word.length;
                document.getElementById(indicator_id).value = indicator;

                console.log('title begins with an article ('+ title_first_word + '): ' + indicator_id + ' set to ' + indicator);
            } else {
                indicator = 0;
                document.getElementById(indicator_id).value = indicator;
                console.log('field doesn\'t begin with an article ('+ title_first_word + '): ' + indicator_id + ' set to ' + indicator);
            }
            console.log('indicator_id: '+indicator_id);
            switch(indicator_id) {
                case 'f245_i2':
                    f245.i2 = indicator;
                    break;
                case 'f240_i2':
                    f240.i2 = indicator;
                    break;
            }
    });
}

/* function: reset field of subfield to default values */
/* reset('fieldnumber', 'subfield') */
function reset(field_number, sub) {
        var field = 'f' + String(field_number);
        var field_default = 'f' + field_number + '_default';
        var field_div_id = '';
        var tmp = (JSON.parse(JSON.stringify(window[field_default])));
        if (sub == undefined) {
            window[field] = tmp;
            for (var key in tmp) {
                
                if (key == 'id') {continue;}
                if (tmp[key] == undefined || tmp[key] == null) { tmp[key] = '';}
                field_div_id = 'f' + field_number + '_' + key;
                document.getElementById(field_div_id).value = tmp[key];
                console.log('field ' + field_div_id + ' was reset');
            } 
        }
        else {
            window[field][sub] = tmp[sub];
            field_div_id = 'f' + String(field_number) + '_' + sub;
            if (tmp[sub] == undefined) { tmp[sub] = '';}
            document.getElementById(field_div_id).value = '';
            console.log('subfield ' + field_div_id + ' was reset');
        }
    }

/* function: populate 240_l depending based on 041_a */
function  pop240l() {
    switch (f041.a) {
                case 'eng':
                    f240.l = 'English'
                    document.getElementById('f240_l').value = 'English';
                    break;
                case 'fre':
                    f240.l = 'Français';
                    document.getElementById('f240_l').value = 'Français';
                    break;
            }
}



// Form actions: f008
/* capture the change of value in each field and adjust field 008 value with it */
$('#f008_type_of_date').on('change', function () {
        f008_06 = $(this).val();
        console.log('captured value: ' + f008_06);
        f008 = replaceAtPos(f008_06, f008, 6)
        console.log('state of field 008: ' + f008);
        /* DYNAMIC FORM : 008 Hide date two if single date selected */
        if ($(this).val() == 's') {
            $('#f008_date_2').hide();
            f008_1114 = '    ';
            document.getElementById('f008_date_2').value = '';
            f008 = replaceAtPos(f008_1114, f008, 11)
            console.log('state of field f008: ' + f008);
        } else {
            $('#f008_date_2').show();
        }
    });

$('#f008_date_1').on('change', function () {
        f008_0710 = $(this).val();
        console.log('captured value: ' +f008_0710);
        f008 = replaceAtPos(f008_0710, f008, 7)
        console.log('state of field 008: ' + f008);
    });

$('#f008_date_2').on('blur', function () {
        f008_1114 = $(this).val();
        console.log('captured value: ' +f008_1114);
        f008 = replaceAtPos(f008_1114, f008, 11)
        console.log('state of field 008: ' + f008);
    });

$('#f008_place').on('blur', function () {
        f008_1517 = $(this).val();
        console.log('captured value: ' +f008_1517);
        if (f008_1517.length == 2) f008_1517 = ' '+f008_1517;
        console.log('captured value: ' +f008_1517);
        f008 = replaceAtPos(f008_1517, f008, 15)
        console.log('state of field 008: ' + f008);
    });

$('#f008_illustrations').on('blur', function () {
        f008_1821 = $(this).val();
        console.log('captured value: ' +f008_1821);
        f008 = replaceAtPos(f008_1821, f008, 18)
        console.log('state of field 008: ' + f008);
    });

$('#f008_target_audience').on('blur', function () {
        f008_22 = $(this).val();
        console.log('captured value: ' +f008_22);
        f008 = replaceAtPos(f008_22, f008, 22)
        console.log('state of field 008: ' + f008);
    });

$('#f008_nature_of_content').on('blur', function () {
        f008_2427 = $(this).val();
        console.log('captured value: ' +f008_2427);
        f008 = replaceAtPos(f008_2427, f008, 24)
        console.log('state of field 008: ' + f008);
    });

$('#f008_index').on('change', function () {
        f008_31 = $(this).val();
        console.log('captured value: ' +f008_31);
        f008 = replaceAtPos(f008_31, f008, 31)
        console.log('state of field 008: ' + f008);
    });

$('#f008_literary_form').on('blur', function () {
        f008_33 = $(this).val();
        console.log('captured value: ' +f008_33);
        f008 = replaceAtPos(f008_33, f008, 33)
        console.log('state of field 008: ' + f008);
    });

$('#f008_biography').on('blur', function () {
        f008_34 = $(this).val();
        console.log('captured value: ' +f008_34);
        f008 = replaceAtPos(f008_34, f008, 34)
        console.log('state of field 008: ' + f008);
    });

$('#f008_language').on('change', function () {
        f008_3537 = $(this).val();
        console.log('captured value: ' +f008_3537);
        f008 = replaceAtPos(f008_3537, f008, 35)
        console.log('state of field 008: ' + f008);
        /* DYNAMIC FORM: prefill f040_b with f008_3537's value' */
        document.getElementById('f040_b').value = f008_3537;
        f040.b = f008_3537;
        document.getElementById('f041_a').value = f008_3537;
        f041.a = f008_3537;
    });

// From actions: main marc fields
$('#f020_a').on('blur', function () {
        f020.a = $(this).val();
        console.log('state of field 020#a: ' + f020.a);
    });

$('#f020_q').on('blur', function () {
        f020.q = $(this).val();
        console.log('state of field 020#q: ' + f020.q);
    });

$('#f040_a').on('blur', function () {
        f040.a = $(this).val();
        console.log('state of field 040#a: ' + f040.a);
    });

$('#f040_b').on('blur', function () {
        f040.b = $(this).val();
        console.log('state of field 040#b: ' + f040.b);
    });

$('#f040_d').on('blur', function () {
        f040.d = $(this).val();
        console.log('state of field 040#d: ' + f040.d);
    });

$('#f041_i1').on('change', function () {
        f041.i1 = $(this).val();
        console.log('captured value: ' + f041.i1);
        /* DYNAMIC FORM : 041_i1 Hide/show f041#h -Language code of original and f240 - Original title, populate f240_l with value from 041_a */
        if ($(this).val() == '1') {
            pop240l();
            $('label[for=f041_h], #f041_h').show(); 
            $('#f240').show();
        } else {
            $('label[for=f041_h], #f041_h').hide();
            reset('041', 'h');
            reset('240', 'l');
            $('#f240').hide();
        }
    });

$('#f041_a').on('blur', function () {
        f041.a = $(this).val();
        console.log('state of field 041#a: ' + f041.a);
        /* DYNAMIC FORM : 041_a populate f240_l with value from 041_a if 041_i1 = 1 (if 240 is visible*/
        if (f041.i1 == 1) {
            pop240l();
        }
    });

$('#f041_h').on('blur', function () {
        f041.h = $(this).val();
        console.log('state of field 041#h: ' + f041.h);
    });

$('#f100_i1').on('change', function () {
        f100.i1 = $(this).val();
        console.log('state of field 100i1: ' + f100.i1);
    });

$('#f100_a').on('blur', function () {
        f100.a = $(this).val();
        console.log('state of field 100#a: ' + f100.a);
    });

$('#f100_d').on('blur', function () {
        f100.d = $(this).val();
        console.log('state of field 100#d: ' + f100.d);
    });

$('#f240_i1').on('change', function () {
        f240.i1 = $(this).val();
        console.log('state of field 240i1: ' + f240.i1);
    });

$('#f240_i2').on('blur', function () {
        f240.i2 = $(this).val();
        console.log('state of field 240_i2: ' + f240.i2);
    });

$('#f240_a').on('blur', function () {
        f240.a = $(this).val();
        console.log('state of field 240_a: ' + f240.a);
        findArticle(f240.a, 'f240_a');
    });

$('#f240_l').on('blur', function () {
        f240.l = $(this).val();
        console.log('state of field 240_l: ' + f240.l);
    });

$('#f245_i1').on('change', function () {
        f245.i1 = $(this).val();
        console.log('state of field 245i1: ' + f245.i1);
        /* DYNAMIC FORM : f245_i1 Hide/show f100 -Main entry - Personal name */
        if ($(this).val() == '0') {
            $('#f100').hide();
            reset('100');
        } else {
            $('#f100').show();
        }
    });

$('#f245_i2').on('blur', function () {
        f245.i2 = $(this).val();
        console.log('state of field 245i2: ' + f245.i2);
    });

$('#f245_a').on('blur', function () {
        f245.a = $(this).val();
        console.log('state of field 245#a: ' + f245.a);
        findArticle(f245.a, 'f245_a');
    });

/* ICEBEAN REQUEST */
$(document).ready(function() {
            $("#isbn_submit").click(function(event){
               console.log('click: to icebean');
               $.post( 
                    "icebean_api.php",
                    { isbn: f020.a },
                    function(data) {
                    //$('#ib').html(data);
                    var icebean_data = data.split('~');
                    //console.log(icebean_data[2]);
                    f100.a = icebean_data[1];
                    var surname = f100.a.slice(f100.a.indexOf(' ')+1, f100.a.length);
                    var firstname = f100.a.slice(0, f100.a.indexOf(' '));
                    f100.a = surname + ', ' + firstname;
                    document.getElementById('f100_a').value = f100.a;
                    f245.a = icebean_data[2];
                    document.getElementById('f245_a').value = f245.a;
                    findArticle(f245.a, 'f245_a');
                    $('#ib').html(icebean_data);
                    }
               );
                    
            });
                
         });

/* SHOW HIDE FIELDS */
/* 040d */
$(document).ready(function() { 
            $("#add_f040_d").click(function(event){
                console.log('click: add_f040_d');
                if( $('#f040_d').is(':visible') ) {
                    $('label[for=f040_d], #f040_d').hide();
                    reset('040', 'd');
                    }
                else {
                    $('label[for=f040_d], #f040_d').show();
                    }
                                   
            });
                
         });

/* 100d */
$(document).ready(function() { 
            $("#add_f100_d").click(function(event){
                console.log('click: add_f100_d');
                if( $('#f100_d').is(':visible') ) {
                    $('label[for=f100_d], #f100_d').hide();
                    reset('100', 'd');
                    }
                else {
                    $('label[for=f100_d], #f100_d').show().focus();
                    }
                                   
            });
                
         });

// Alert if
$(function () {
  $("input").blur(function () {
    if ($(this).is(":invalid")) {
      alert('invalid value, please read the Marc documentation!');
    }
  });
});


/* SUBMIT TO MARC */

$(document).ready(function() {
            
            $("#tomarc").click(function(event){
               console.log('click: to marc');
               console.log(f008);
               $.post( 
                  "marc.php",
                  { f000: f000,
                    f007: f007,
                    f008: f008,
                    f020: f020,
                    f040: f040,
                    f041: f041,
                    f100: f100,
                    f240: f240,
                    f245: f245
                  },
                  function(data) {
                     var marc_data = data.split('~');
                     $('#ib').html(marc_data);
                  }
               );
                    
            });
                
         });