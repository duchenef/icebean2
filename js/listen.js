/* field 008_0005 */
var today = new Date();
var dd = today.getDate();
if (dd<10) dd = '0'+String(dd);
var mm = today.getMonth()+1; //January is 0!
if (mm<10) mm = '0'+String(mm);
var yyyy = String(today.getFullYear());
var yy = yyyy.substring(2, 4);
var f008_0005 = String(yy)+String(mm)+String(dd);
/* console.log(f008_0005); */

var f008_23 = ' '; /* pos. 23: form of item (none:empty)*/
var f008_2830 = ' 00'; /* pos. 28: government publication (empty), 29: Conference publication (no:0), 30: Festschrift (no:0) */
var f008_32 = ' '; /* pos. 32: undefined (empty) */ 
var f008_3839 = ' d'; /* pos. 38: modified record (empty), 39: Cataloging source (other: d) */

var f008_06 = ' '; /* f008_type_date */
var f008_0710 = '    '; /* f008_date_1 */
var f008_1114 = '    '; /* f008_date_2 */
var f008_1517 = '   '; /* f008_place */
var f008_1821 = '    '; /* f008_illustrations */
var f008_22 = ' '; /* f008_target_audience */
var f008_2427 = '    '; /* f008_nature_of_content */
var f008_31 = ' '; /* f008_index */
var f008_33 = ' '; /* f008_literary_form */
var f008_34 = ' '; /* f008_biography */
var f008_3537 = '   '; /* f008_language */

var f008 = f008_0005 + f008_06 + f008_0710 + f008_1114 + f008_1517 + f008_1821 + f008_22 + f008_23 + f008_2427 + f008_2830 + f008_31 + f008_32 + f008_33 + f008_34 + f008_3537 + f008_3839;

var f020_a = '';
var f020_q = '';

var f040_a = '';
var f040_b = '';
var f040_d = '';

var f041_i1 = '';
var f041_a = '';
var f041_h = '';

var f245_a = '';

/* function to replace a substring at a given position of a string */
function replaceAtPos(substring, string, position) {
    var endpos = position + substring.length;
    string = string.slice(0, position) + substring + string.slice(endpos, string.length);
    return string;
}

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

$('#f008_date_1').on('blur', function () {
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

$('#f008_language').on('blur', function () {
        f008_3537 = $(this).val();
        console.log('captured value: ' +f008_3537);
        f008 = replaceAtPos(f008_3537, f008, 35)
        console.log('state of field 008: ' + f008);
        /* DYNAMIC FORM: prefill f040_b with f008_3537's value' */
        document.getElementById('f040_b').value = f008_3537;
        f041_b = f008_3537;
        document.getElementById('f041_a').value = f008_3537;
        f041_a = f008_3537;
    });

$('#f020_a').on('blur', function () {
        f020_a = $(this).val();
        console.log('state of field 020#a: ' + f020_a);
    });

$('#f020_q').on('blur', function () {
        f020_q = $(this).val();
        console.log('state of field 020#q: ' + f020_q);
    });

$('#f040_a').on('blur', function () {
        f040_a = $(this).val();
        console.log('state of field 040#a: ' + f040_a);
    });

$('#f040_b').on('blur', function () {
        f040_b = $(this).val();
        console.log('state of field 040#b: ' + f040_b);
    });

$('#f040_d').on('blur', function () {
        f040_d = $(this).val();
        console.log('state of field 040#d: ' + f040_d);
    });

$('#f041_i1').on('change', function () {
        f041_i1 = $(this).val();
        console.log('captured value: ' + f041_i1);
        /* DYNAMIC FORM : 041_i1 Hide/show f041#h -Language code of original */
        if ($(this).val() == '1') {
            $('#f041_h').show();
        } else {
            $('#f041_h').hide();
            f041_h = undefined;
            document.getElementById('f041_h').value = '';
        }
    });

$('#f041_a').on('blur', function () {
        f041_a = $(this).val();
        console.log('state of field 041#a: ' + f041_a);
    });

$('#f041_h').on('blur', function () {
        f041_h = $(this).val();
        console.log('state of field 041#h: ' + f041_h);
    });

$('#f245_a').on('blur', function () {
        f245_a = $(this).val();
        console.log('state of field 245#a: ' + f245_a);
    });


/* ICEBEAN REQUEST */

$(document).ready(function() {
            
            $("#isbn_submit").click(function(event){
               console.log('click: to icebean');
               console.log(f020_a);
               $.post( 
                  "icebean_api.php",
                  { isbn: f020_a },
                  function(data) {
                     //$('#ib').html(data);
                     var icebean_data = data.split('~');
                     console.log(icebean_data[1]);
                     document.getElementById('f245_a').value = icebean_data[1];
                     f245_a = icebean_data[1];
                     $('#ib').html(icebean_data);
                  }
               );
                    
            });
                
         });


/* SUBMIT TO MARC */

$(document).ready(function() {
            
            $("#tomarc").click(function(event){
               console.log('click: to marc');
               console.log(f008);
               $.post( 
                  "marc.php",
                  { f008 : f008,
                    f020_a: f020_a,
                    f020_q: f020_q,
                    f040_a: f040_a,
                    f040_b: f040_b,
                    f040_d: f040_d,
                    f041_i1: f041_i1,
                    f041_a: f041_a,
                    f041_h: f041_h,
                    f245_a: f245_a },
                  function(data) {
                     var marc_data = data.split('~');
                     $('#ib').html(marc_data);
                  }
               );
                    
            });
                
         });