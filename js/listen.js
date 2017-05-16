/* field 008_0005 */
var today = new Date();
var dd = today.getDate();
if (dd<10) dd = '0'+String(dd);
var mm = today.getMonth()+1; //January is 0!
if (mm<10) mm = '0'+String(mm);
var yyyy = String(today.getFullYear());
var yy = yyyy.substring(2, 4);

var insert = {id: '', i1: '', i2: ''};
var subfields = '';
var focus_previous = '';

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
var plates = '';
var added_by_f008_22 = '';
var added_by_f008_1114 = '';
var added_by_f008_33 = '';
var added_by_f008_34 = '';

// Main marc field variables
var f020 = {id: '020', i1: null, i2: null, a: '', q: ''};
var f040 = {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041 = {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100 = {id: '100', i1: 1, i2: null, a: '', q: '', d: '', e: ''};
var f240 = {id: '240', i1: 1, i2: 0, a: '', l: ''};
var f245 = {id: '245', i1: 1, i2: 0, a: '', b: '', c: ''};
var f264_1 = {id: '264', i1: '', i2: 1, a: '', b: '', c:''};
var f264_2 = {id: '264', i1: '', i2: 4, a: '', b: '', c:''};
var f300 = {id: '300', i1: null, i2: null, a: '', b: '', c:'', e:''};
var f336 = {id: '336', i1: null, i2: null, a: 'text', b: 'txt', '2': 'rdacontent'};
var f336_2;
var f337 = {id: '337', i1: null, i2: null, a: 'unmediated', b: 'n', '2': 'rdamedia'};
var f338 = {id: '338', i1: null, i2: null, a: 'volume', b: 'nc', '2': 'rdacarrier'};
var f500_1 =  {id: '500', i1: null, i2: null, a: ''};
var f504 =  {id: '500', i1: null, i2: null, a: ''};
var f520 = {id: '520', i1: '8', i2: null, a: ''};
var f520_gr = '';
var f520_am = '';

var f852 = {id: '852', i1: 1, i2: '', a: '', h: '', i: '', p:'', '9': ''};

// Marc fields default value for reset
var f020_default = {id: '020', i1: null, i2: null, a: '', q: ''};
var f040_default = {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041_default = {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100_default = {id: '100', i1: 1, i2: null, a: '', q: '', d: '', e: ''};
var f240_default = {id: '240', i1: 1, i2: 0, a: '', l: ''};
var f245_default = {id: '245', i1: 1, i2: 0, a: '', b: '', c: ''};
var f246_default = {id: '246', i1: 3, i2: 3, a: '', b: ''};
var f250_default = {id: '250', i1: null, i2: null, a: ''};
var f264_default = {id: '264', i1: '', i2: '', a: '', b: '', c:''};
var f300_default = {id: '300', i1: null, i2: null, a: '', b: '', c:'', e:''};
var f380;
var f500_default = {id: '500', i1: null, i2: null, a: ''};
var f504_default = {id: '504', i1: null, i2: null, a: ''};
var f520_default = {id: '520', i1: '8', i2: null, a: ''};
var f586_default = {id: '586', i1: '8', i2: null, a: ''};
var f600_default = {id: '600', i1: '', i2: 7, a: '', d: 'd', '2': 'fast'};
var f611_default = {id: '611', i1: '', i2: 7, a: '', '2': 'fast'};
var f630_default = {id: '630', i1: '', i2: 7, a: '', '2': 'fast'};
var f650_default = {id: '650', i1: '', i2: 7, a: '', '2': 'fast'};
var f651_default = {id: '651', i1: '', i2: 7, a: '', '2': 'fast'};
var f655_default = {id: '655', i1: '', i2: 7, a: '', '2': 'fast'};
var f852_default = {id: '852', i1: 1, i2: '', a: '', h: '', i: '', p:'', '9': ''};

var punctuation = {
                    f100: {a:'', b:'', c:',', q:',', d:',', e:',', last:'.'},
                    f240: {a:'', l:'.', last:''},
                    f245: {a:'', b:' :', c: ' /', n: '.', p:'.', last:'.'},
                    f250: {a: '', last: '.'},
                    f246: {a:'', b:' :', n: '.', p:'.', last:''},
                    f264: {a:'', b:' :', c:',', last:'.'},
                    f300: {a:'', b:' :', c:' ;', last:'.', e:'+'},
                    f500: {a: '', last: '.'},
                    f504: {a: '', last: '.'},
                    f520: {a: '', last: '.'},
                    f586: {a: '', last: ''},
                    f600: {a: '', b: ',', c: ',', d: ',', q: '', last: '.'},
                    f610: {a: '', b: '.', last: '.'},
                    f611: {a: '', last: '.'},
                    f630: {a: '', p: '.', last: '.'},
                    f650: {a: '', x: '', last: '.'},
                    f651: {a: '', z: '', last: '.'},
                    f655: {a: '', last: '.'}
};

var punctuation_undo = [];

// Form actions: f008
/* capture the change of value in each field and adjust field 008 value with it */
$('#f008_type_of_date').on('change', function () {
        f008_06 = $(this).val();
        console.log('captured value: ' + f008_06);
        f008 = replaceAtPos(f008_06, f008, 6)
        console.log('008: ' + f008);
        /* DYNAMIC FORM : 008 Hide date two if single date selected */
        if ($(this).val() == 's') {
            $('#f008_date_2').hide();
            f008_1114 = '    ';
            document.getElementById('f008_date_2').value = '';
            f008 = replaceAtPos(f008_1114, f008, 11)
            console.log('f008: ' + f008);
            if (window['added_by_f008_1114'] != '') {
                removeField(added_by_f008_1114);
                added_by_f008_1114 = '';
            }
        }
        else {
            $('#f008_date_2').show();
        }
    });

$('#f008_date_1').on('change', function () {
        f008_0710 = $(this).val();
        console.log('captured value: ' +f008_0710);
        f008 = replaceAtPos(f008_0710, f008, 7)
        console.log('008: ' + f008);
        // add publication date to 264_1c
        f264_1.c = f008_0710;
        document.getElementById('f264_1_c').value = f264_1.c;
    });

$('#f008_date_2').on('blur', function () {
        f008_1114 = $(this).val();
        console.log('captured value: ' +f008_1114);
        f008 = replaceAtPos(f008_1114, f008, 11)
        console.log('008: ' + f008);
        console.log(window['added_by_f008_1114']);
        if (window['added_by_f008_1114'] != '') {
            removeField(added_by_f008_1114);
            added_by_f008_1114 = '';
        }
        // add copyright date to 264_2_c
        if (f008_06 == 't') {
                insert = {id: '264', i1: '', i2: '4', c: '\u00A9'+f008_1114 };
                var fieldID = insertFieldAuto();
                added_by_f008_1114 = fieldID;
        }
    });

$('#f008_place').on('blur', function () {
        f008_1517 = $(this).val();
        console.log('captured value: ' +f008_1517);
        if (f008_1517.length == 2) f008_1517 = ' '+f008_1517;
        console.log('captured value: ' +f008_1517);
        f008 = replaceAtPos(f008_1517, f008, 15)
        console.log('008: ' + f008);
    });

$('#f008_illustrations').on('blur', function () {
        f008_1821 = $(this).val();
        console.log('captured value: ' +f008_1821);
        f008 = replaceAtPos(f008_1821, f008, 18);
        if (f008_1821 == '') { f008 = replaceAtPos('    ', f008, 18); }
        console.log('008: ' + f008);
        // Dynamic form: 300b (illuastrations)
        var ill = [];
        f300.b = '';
        document.getElementById('f300_b').value = f300.b; 
        if( $('#f300_b').is(':visible') ) {
                    $('label[for=f300_b], #f300_b').hide();
                    reset('300', 'b');
        }
        else {
            $('label[for=f300_b], #f300_b').show();
        }  

        if (f008_1821.indexOf("a") >= 0) {
            ill.push('illustrations');    
        }
        if (f008_1821.indexOf("b") >= 0) {
            ill.push('maps');    
        }
        if (f008_1821.indexOf("c") >= 0) {
            ill.push('charts');
        }
        if (f008_1821.indexOf("e") >= 0) {
            ill.push('plans');    
        }
        if (f008_1821.indexOf("g") >= 0) {
            ill.push('music');    
        }
        if (f008_1821.indexOf("h") >= 0) {
            ill.push('facsimiles');    
        }
        if (f008_1821.indexOf("o") >= 0) {
            ill.push('photographs');    
        }
        f300.b = ill.join(', ');
        document.getElementById('f300_b').value = f300.b; 
        // Dynamic form: 300a (plates)
        if (f008_1821.indexOf("f") >= 0) {
            f300.a = ', n pages of plates';
            plates = ', n pages of plates';
            document.getElementById('f300_a').value = f300.a;
        }
        else {
            f300.a = f300.a.replace(', n pages of plates', '');
            document.getElementById('f300_a').value = f300.a;
            plates = '';
        }
    });

$('#f008_target_audience').on('blur', function () {
        f008_22 = $(this).val();
        console.log('captured value: ' +f008_22);
        f008 = replaceAtPos(f008_22, f008, 22)
        console.log('008: ' + f008);
        // Dynamic form: add 655 for juvenile and young adults works
        if (window['added_by_f008_22'] != '') {
            removeField(added_by_f008_22);
            added_by_f008_22 = '';
        }
        if (f008_22 == 'j') {
            insert = {id: '655', i1: '', i2: '7', a: 'Juvenile works', '2': 'fast' };
            var fieldID = insertFieldAuto();
            added_by_f008_22 = fieldID;
        }
        else if ((f008_22 == 'd' || f008_22 == 'c')) {
            insert = {id: '655', i1: '', i2: '7', a: 'Young adult works', '2': 'fast' };
            var fieldID = insertFieldAuto();
            added_by_f008_22 = fieldID;
        }
    });

$('#f008_nature_of_content').on('blur', function () {
        f008_2427 = $(this).val();
        console.log('captured value: ' +f008_2427);
        f008 = replaceAtPos(f008_2427, f008, 24)
        console.log('008: ' + f008);
        if (f008_2427.indexOf("b") >= 0) {
            $('#f504').show();
            f504.a = 'Bibliography: pages';
            document.getElementById('f504_a').value = f504.a; 
        }
        else {
            $('#f504').hide();
            reset('504', 'a');
        }
    });

$('#f008_index').on('change', function () {
        f008_31 = $(this).val();
        console.log('captured value: ' +f008_31);
        f008 = replaceAtPos(f008_31, f008, 31)
        console.log('008: ' + f008);
        /* DYNAMIC FORM : Hide/show f500_1 - index note */
        if ($(this).val() == '1') {
            $('#f500_1').show();
            f500_1.a = 'Includes index';
            document.getElementById('f500_1_a').value = f500_1.a; 
           } else {
            $('#f500_1').hide();
            reset('500', 'a', '1');
        }
    });

$('#f008_literary_form').on('blur', function () {
        f008_33 = $(this).val();
        console.log('captured value: ' +f008_33);
        f008 = replaceAtPos(f008_33, f008, 33)
        console.log('008: ' + f008);
        f380 = {};
        if (window['added_by_f008_33'] != '') {
            removeField(added_by_f008_33);
            added_by_f008_33 = '';
        }
        if (f008_33 == '1' || f008_33 == 'f') {
                insert = {id: '655', i1: '', i2: '7', a: 'Fiction', '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_33 = fieldID;
                f852.h = 'F';
                document.getElementById('f852_h').value = f852.h;
        }
        else if (f008_33 == 'c') {
                insert = {id: '655', i1: '', i2: '7', a: 'Graphic novels',  '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_33 = fieldID;
                f336_2 = {id: '336', i1: null, i2: null, a: 'still image', b: 'sti', '2': 'rdacontent'};
                f380 = {id: '380', i1: null, i2: null, a: 'Graphic novel.'};
        }
        else if (f008_33 == 'd') {
                insert = {id: '655', i1: '', i2: '7', a: 'Drama',  '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_33 = fieldID;
        }
        else if (f008_33 == 'j') {
                insert = {id: '655', i1: '', i2: '7', a: 'Short stories',  '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_33 = fieldID;
                f852.h = 'FS';
                document.getElementById('f852_h').value = f852.h;
        }
        else if (f008_33 == 'p') {
                insert = {id: '655', i1: '', i2: '7', a: 'Poetry',  '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_33 = fieldID;
        }
    });

$('#f008_biography').on('blur', function () {
        f008_34 = $(this).val();
        console.log('captured value: ' +f008_34);
        f008 = replaceAtPos(f008_34, f008, 34)
        console.log('008: ' + f008);
        if (window['added_by_f008_34'] != '') {
            removeField(added_by_f008_34);
            added_by_f008_34 = '';
        }
        if (f008_34 == 'a') {
            if (f008_33 == '1') {
                insert = {id: '655', i1: '', i2: '7', a: 'Autobiographical fiction', '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_34 = fieldID;
            }
            else {
                insert = {id: '655', i1: '', i2: '7', a: 'Biography', '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_34 = fieldID;
            }
        }
        else if (f008_34 == 'b') {
            if (f008_33 == '1') {
                insert = {id: '655', i1: '', i2: '7', a: 'Biographical fiction', '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_34 = fieldID;
            }
            else {
                insert = {id: '655', i1: '', i2: '7', a: 'Biography', '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_34 = fieldID;
            }
        }
        else if (f008_34 == 'c') {
                insert = {id: '655', i1: '', i2: '7', a: 'Biographies', '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_34 = fieldID;
        }
    });

$('#f008_language').on('change', function () {
        f008_3537 = $(this).val();
        console.log('captured value: ' +f008_3537);
        f008 = replaceAtPos(f008_3537, f008, 35)
        console.log('008: ' + f008);
        /* DYNAMIC FORM: prefill f040_b with f008_3537's value' */
        document.getElementById('f040_b').value = f008_3537;
        f040.b = f008_3537;
        document.getElementById('f041_a').value = f008_3537;
        f041.a = f008_3537;
    });

// From actions: main marc fields
$('#f020_a').on('blur', function () {
        f020.a = $(this).val();
        console.log('020#a: ' + f020.a);
        icebean_submit();
        console.log('the icebean has been called');
    });

$('#f020_q').on('blur', function () {
        f020.q = $(this).val();
        console.log('020#q: ' + f020.q);
    });

$('#f040_a').on('blur', function () {
        f040.a = $(this).val();
        console.log('040#a: ' + f040.a);
        /* DYNAMIC FORM: prefill f852_a with 4 first char of f040_a's value' */
        document.getElementById('f852_a').value = f040.a.substring(0, 4);
        f852.a = f040.a.substring(0, 4);
    });

$('#f040_b').on('blur', function () {
        f040.b = $(this).val();
        console.log('040#b: ' + f040.b);
    });

$('#f040_d').on('blur', function () {
        f040.d = $(this).val();
        console.log('040#d: ' + f040.d);
        if ($(this).val() == '') {
            $('label[for=f040_d], #f040_d').hide();
        }
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
        console.log('041#a: ' + f041.a);
        /* DYNAMIC FORM : 041_a populate f240_l with value from 041_a if 041_i1 = 1 (if 240 is visible*/
        if (f041.i1 == 1) {
            pop240l();
        }
    });

$('#f041_h').on('blur', function () {
        f041.h = $(this).val();
        console.log('041#h: ' + f041.h);
    });

$('#f100_i1').on('change', function () {
        f100.i1 = $(this).val();
        console.log('100i1: ' + f100.i1);
    });

$('#f100_a').on('blur', function () {
        f100.a = $(this).val();
        console.log('100#a: ' + f100.a);
        f852.i = f100.a.substring(0, 3).toUpperCase();
        document.getElementById('f852_i').value = f852.i;
    });

$('#f100_q').on('blur', function () {
        f100.q = $(this).val();
        console.log('100#q: ' + f100.q);
        if ($(this).val() == '') {
            $('label[for=f100_q], #f100_q').hide();
        }
    });

$('#f100_d').on('blur', function () {
        f100.d = $(this).val();
        console.log('100#d: ' + f100.d);
        if ($(this).val() == '') {
            $('label[for=f100_d], #f100_d').hide();
        }
    });

$('#f100_e').on('blur', function () {
        f100.e = $(this).val();
        console.log('100#e: ' + f100.e);
        if ($(this).val() == '') {
            $('label[for=f100_e], #f100_e').hide();
        }
    });

$('#f240_i1').on('change', function () {
        f240.i1 = $(this).val();
        console.log('240i1: ' + f240.i1);
    });

$('#f240_i2').on('blur', function () {
        f240.i2 = $(this).val();
        console.log('240_i2: ' + f240.i2);
    });

$('#f240_a').on('blur', function () {
        f240.a = $(this).val();
        console.log('240_a: ' + f240.a);
        findArticle(f240.a, 'f240_a');
    });

$('#f240_l').on('blur', function () {
        f240.l = $(this).val();
        console.log('240_l: ' + f240.l);
    });

$('#f245_i1').on('change', function () {
        f245.i1 = $(this).val();
        console.log('245i1: ' + f245.i1);
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
        console.log('245i2: ' + f245.i2);
    });

$('#f245_a').on('blur', function () {
        f245.a = $(this).val();
        console.log('245#a: ' + f245.a);
        findArticle(f245.a, 'f245_a');
    });

$('#f245_b').on('blur', function () {
        f245.b = $(this).val();
        console.log('245#b: ' + f245.b);
        if ($(this).val() == '') {
            $('label[for=f245_b], #f245_b').hide();
        }
    });

$('#f245_c').on('blur', function () {
        f245.c = $(this).val();
        console.log('245#c: ' + f245.c);
    });

$('#f264_1_i1').on('blur', function () {
        f264_1.i1 = $(this).val();
        console.log('264_1i1: ' + f264_1.i1);
    });

$('#f264_1_i2').on('blur', function () {
        f264_1.i2 = $(this).val();
        console.log('264_1i2: ' + f264_1.i2);
    });

$('#f264_1_a').on('blur', function () {
        f264_1.a = $(this).val();
        console.log('264_1#a: ' + f264_1.a);
    });

$('#f264_1_b').on('blur', function () {
        f264_1.b = $(this).val();
        console.log('264_1#b: ' + f264_1.b);
    });

$('#f264_1_c').on('blur', function () {
        f264_1.c = $(this).val();
        console.log('264_1#c: ' + f264_1.c);
    });

$('#f300_a').on('blur', function () {
        f300.a = $(this).val();
        console.log('300#a: ' + f300.a);
    });

$('#f300_b').on('blur', function () {
        f300.b = $(this).val();
        console.log('300#b: ' + f300.b);
    });

$('#f300_c').on('blur', function () {
        f300.c = $(this).val();
        console.log('300#c: ' + f300.c);
    });

$('#f300_e').on('blur', function () {
        f300.e = $(this).val();
        console.log('300#e: ' + f100.e);
        if ($(this).val() == '') {
            $('label[for=f300_e], #f300_e').hide();
        }
    });

$('#f500_1_a').on('blur', function () {
        f500_1.a = $(this).val();
        console.log('500_1#a: ' + f500_1.a);
    });

$('#f504_a').on('blur', function () {
        f504.a = $(this).val();
        console.log('504#a: ' + f504.a);
    });

$('#f520_i1').on('blur', function () {
        f520.i1 = $(this).val();
        console.log('520_i1: ' + f520.i1);
    });


$('#f520_a').on('blur', function () {
        f520.a = $(this).val();
        f520.a = f520.a.replace(/(\r\n|\n|\r)/gm," ");
        document.getElementById('f520_a').value = f520.a;
        console.log('520#a: summary recorded');
    });

$('#f852_a').on('blur', function () {
        f852.a = $(this).val();
        console.log('852#a: ' + f852.a);
    });

$('#f852_h').on('blur', function () {
        f852.h = $(this).val();
        console.log('852#h: ' + f852.h);
        // f852j
        if (f852.h.substring(0, 3) > 0 && f852.h.substring(0, 3) < 1000) {
            f852.j = 'DCX' + f852.h.substring(0, 3);
        }
        else {
            f852.j = '';
        }
    });

$('#f852_i').on('blur', function () {
        f852.i = $(this).val();
        console.log('852#i: ' + f852.i);
    });

$('#f852_p').on('blur', function () {
        f852.p = $(this).val();
        console.log('852#p: ' + f852.p);
    });

$('#f852_9').on('blur', function () {
        f852['9'] = $(this).val();
        console.log('852#9: ' + f852['9']);
    });

$('#field_insert').on('blur', function () {
        insert.id = $(this).val();
        console.log('field_insert: ' + insert.id);
    });

$('#i1_insert').click( function(){
   if( $(this).is(':checked') ) { insert.i1 = ''; }
   else { insert.i1 = null };
   console.log(insert.i1);
});

$('#i2_insert').click( function(){
   if( $(this).is(':checked') ) { insert.i2 = ''; }
   else { insert.i2 = null };
   console.log(insert.i2);
});

$('#subfields_insert').on('blur', function () {
    subfields = $(this).val();
    var sf = '';
    for (var i = 0, len = subfields.length; i < len; i++) {
        sf = subfields.charAt(i);
        insert[sf] = '';
        console.log('subfields_insert: ' + sf );
    }
});

$('#t520_a').on('change', function() {
    if (f520_gr == f520.a) {
        document.getElementById('f520_a').value = f520_am;
        f520.a = document.getElementById('f520_a').value;
    }
    else {
        document.getElementById('f520_a').value = f520_gr;
        f520.a = document.getElementById('f520_a').value;
    }
});

/* ICEBEAN REQUEST */
// function
function icebean_submit(){
               console.log('click: to icebean');
               $.post( 
                "fast_api.php",
                { isbn: f020.a },
                function(data) {
                    //$('#ib').html(data);
                    var fast_data = data.split('~');
                    // Fast headings
                    for (var i = 2; i < fast_data.length; i++) {
                        //console.log(fast_data[i]);
                        parseFast(fast_data[i]);
                    }
                    // Dewey classification
                    // bypass action on 852h if 008 is set to Fiction or Short Stories
                    // f852h
                    if (f008_33 == '1') {
                        f852.h = 'F';
                    }
                    else if (f008_33 == 'j') {
                        f852.h = 'FS';
                    }
                    else {
                        f852.h = fast_data[1];
                        if (f852.h == 'FIC') { f852.h = 'F'};  
                    }
                    document.getElementById('f852_h').value = f852.h;
                    // f852j
                    if (f852.h.substring(0, 3) > 0 && f852.h.substring(0, 3) < 1000) {
                        f852.j = 'DCX' + f852.h.substring(0, 3);
                    }
                }
               );
               $.post( 
                "images_api.php",
                { isbn: f020.a },
                function(data) {
                    //$('#ib').html(data);
                    var images_url_data = data.split('~');
                    var lab = {'1':'AM', '2':'GR', '3':'GB'};
                    // Fast headings
                    for (var i = 1; i < images_url_data.length; i++) {
                        console.log(images_url_data[i]);
                        $('#pic'+i).html("<a download='"+f020.a+lab[i]+".jpg' href='images/"+f020.a+lab[i]+".jpg' title='"+lab[1]+"''><img align='middle' src='resources/resizer.php?url="+images_url_data[i]+"&h=120&fn="+f020.a+lab[i]+".jpg'></a>");
                        $("<input type='button' id = 'picbut"+i+"' class='insert_show_insert_submit' value='"+lab[i]+"'>'" ).appendTo( "#pic"+i );
                    }
                }
               );        
               $.post( 
                "icebean_api.php",
                { isbn: f020.a },
                function(data) {
                    //$('#ib').html(data);
                    var icebean_data = data.split('~');
                    //console.log (icebean_data);
                    // f100a and f245c
                    f100.a = icebean_data[1];
                    var surname = f100.a.slice(f100.a.indexOf(' ')+1, f100.a.length);
                    var firstname = f100.a.slice(0, f100.a.indexOf(' '));
                    f100.a = surname + ', ' + firstname;
                    document.getElementById('f100_a').value = f100.a;
                    f852.i = surname.substring(0, 3).toUpperCase();
                    document.getElementById('f852_i').value = f852.i;
                    f245.c = icebean_data[1];
                    document.getElementById('f245_c').value = f245.c;
                    $('#ib').html(icebean_data);
                    // f245
                    var full_title = icebean_data[2];
                    if (full_title.indexOf(':') != -1) {
                        f245.a = full_title.slice(0, full_title.indexOf(':'));
                        f245.b = full_title.slice(full_title.indexOf(':')+2, full_title.length);
                    }
                    else { f245.a = icebean_data[2];}
                    document.getElementById('f245_a').value = f245.a;
                    findArticle(f245.a, 'f245_a');
                    if (f245.b != undefined) {
                        f245.b = lowerAll(f245.b);
                        $('label[for=f245_b], #f245_b').show();
                        document.getElementById('f245_b').value = f245.b;
                    // f264
                    if (icebean_data[9] != undefined) { 
                        f264_1.b = icebean_data[9];
                        document.getElementById('f264_1_b').value = f264_1.b;
                    }
                    // f300
                    if (icebean_data[5] != undefined) { 
                        f300.a = icebean_data[5] + ' pages' + plates;
                        document.getElementById('f300_a').value = f300.a;
                    }
                    if (icebean_data[6] != undefined) { 
                        f300.c = icebean_data[6] + ' cm';
                        document.getElementById('f300_c').value = f300.c;
                    }
                    // f520
                    if (icebean_data[10] != undefined) { 
                        f520_gr = icebean_data[10];
                        f520_gr = f520_gr.replace(/(<br \/>)/g," ");
                        f520_gr = f520_gr.replace(/(<p>)/g," ");
                        f520_gr = f520_gr.replace(/(<b>)/g," ");
                        f520_gr = f520_gr.replace(/(<i>)/g," ");
                        f520_gr = f520_gr.replace(/(<\/p>)/g," ");
                        f520_gr = f520_gr.replace(/(<\/b>)/g," ");
                        f520_gr = f520_gr.replace(/(<\/i>)/g," ");
                        f520_gr = f520_gr.replace(" . . .","...");
                        //console.log('f520_gr ' + f520_gr);
                    }
                    if (icebean_data[8] != undefined) { 
                        f520_am = icebean_data[8];
                        f520_am = f520_am.replace(/(<br \/>)/g," ");
                        f520_am = f520_am.replace(/(<p>)/g," ");
                        f520_am = f520_am.replace(/(<b>)/g," ");
                        f520_am = f520_am.replace(/(<i>)/g," ");
                        f520_am = f520_am.replace(/(<\/p>)/g," ");
                        f520_am = f520_am.replace(/(<\/b>)/g," ");
                        f520_am = f520_am.replace(/(<\/i>)/g," ");
                        f520_am = f520_am.replace(" . . .","...");
                        //console.log('f520_am ' + f520_am);
                    }
                    document.getElementById('f520_a').value = f520_gr;
                    f520.a = document.getElementById('f520_a').value;
                    // f852
                    f852['9'] = icebean_data[7];
                    document.getElementById('f852_9').value = f852['9'];
                }
               });
            }

function parseFast(fast_data) {
    var fast = {id: '', i1: '', i2: '', punct: 'no'};
    var indexes = [];
    for(var i=0; i<fast_data.length;i++) {
        if (fast_data[i] === '$') indexes.push(i);
    }
    fast.id = fast_data.substring(0, 3);
    fast.i1 = fast_data.substring(4, 5).replace('_', '');
    fast.i2 = fast_data.substring(5, 6).replace('_', '');
    for (var i=0; i<indexes.length;i++) {
        sf_id = fast_data.charAt(indexes[i]+1);
        var beg = indexes[i]+3;
        if (!indexes[i+1]) {
            var end = fast_data.length+1;
        }
        else {
            var end = indexes[i+1];
        }
        sf_val = fast_data.substring(beg, end);
        fast[sf_id] = sf_val;
    }
    insert = jQuery.extend(true, {}, fast);
    fieldID = insertFieldAuto();
    populateField(fieldID, fast);

}
 
// icebean submit button              
$(document).ready(function() {
            $("#isbn_submit").click(function(event){
               icebean_submit();
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
                    $('label[for=f040_d], #f040_d').show().focus();
                    }                  
            });       
         });

/* 100q */
$(document).ready(function() { 
            $("#add_f100_q").click(function(event){
                console.log('click: add_f100_q');
                if( $('#f100_q').is(':visible') ) {
                    $('label[for=f100_q], #f100_q').hide();
                    reset('100', 'q');
                    }
                else {
                    $('label[for=f100_q], #f100_q').show().focus();
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

/* 100e */
$(document).ready(function() { 
            $("#add_f100_e").click(function(event){
                console.log('click: add_f100_e');
                if( $('#f100_e').is(':visible') ) {
                    $('label[for=f100_e], #f100_e').hide();
                    reset('100', 'e');
                    }
                else {
                    $('label[for=f100_e], #f100_e').show().focus();
                    }                   
            });   
         });

/* 245b */
$(document).ready(function() { 
            $("#add_f245_b").click(function(event){
                console.log('click: add_f245_b');
                if( $('#f245_b').is(':visible') ) {
                    $('label[for=f1245_b], #f245_b').hide();
                    reset('245', 'b');
                    }
                else {
                    $('label[for=f245_b], #f245_b').show().focus();
                    }                 
            });   
         });

/* 300b */
$(document).ready(function() { 
            $("#add_f300_b").click(function(event){
                console.log('click: add_f300_b');
                if( $('#f300_b').is(':visible') ) {
                    $('label[for=f300_b], #f300_b').hide();
                    reset('300', 'b');
                    }
                else {
                    $('label[for=f300_b], #f300_b').show().focus();
                    }                   
            });   
         });

/* 300e */
$(document).ready(function() { 
            $("#add_f300_e").click(function(event){
                console.log('click: add_f300_e');
                if( $('#f300_e').is(':visible') ) {
                    $('label[for=f300_e], #f300_e').hide();
                    reset('300', 'e');
                    }
                else {
                    $('label[for=f300_e], #f300_e').show().focus();
                    }                   
            });   
         });

// Alert if invalid
// Check previously focused element
$(function () {
  $("#main_form input, #main_form select").blur(function () {
    if ($(this).is(":invalid")) {
      console.log('invalid value, please read the Marc documentation!');
    }
    focus_previous = this.id;
    //console.log('previously focused: ' + focus_previous);
  });
});

/* FIELD INSERTION */
/* show / hide field insertion */
function showInsert() {
    console.log( 'Field insertion (CTRL + INS)' );
        if( $('.insert').is(':visible') ) {
                    $('.insert').hide();
                    insert = insert = {id: '', i1: '', i2: ''};
                    document.getElementById('field_insert').value = insert.id;
                    $("#" + focus_previous ).focus();
                    }
                else {
                    $('.insert').show();
                    $('#field_insert').focus(); 
                }     
}

/* Insert button : show insert field */
$(document).ready(function() { 
    $("#show_insert").click(function(event){
        showInsert();
    });
}); 

/* CTRL + INS : show insert field */
$(document).keydown(function(e){
    if ( e.ctrlKey && ( e.which === 45 ) ) {
         showInsert();
    }
 });

/* actual field insertion, using submit button and form data */
$(document).ready(function() { 
    $("#submit_insert").click(function(event){
        insertField();
    }); 
});

    /* actual field insertion, using enter key from field ID input field */
$(document).ready(function() { 
    $("#field_insert").keyup(function(event){
        if(event.keyCode == 13){
            insert.id = $(this).val();
            console.log('field_insert: ' + insert.id);
            insertField();
        }
    });
});

$(document).ready(function() { 
    $("#subfields_insert").keyup(function(event){
        if(event.keyCode == 13){
            subfields = $(this).val();
            console.log('field_insert: ' + insert.id);
            var sf = '';
        for (var i = 0, len = subfields.length; i < len; i++) {
            sf = subfields.charAt(i);
            insert[sf] = '';
            console.log('subfields_insert: ' + sf );
        }
            insertField();
        }
    });
});

/* SUBMIT TO MARC */
/* Actual submission */
$(document).ready(function() {
            $("#tomarc").click(function(event){
                console.log('click: to marc');
                /* TO DO: integrate punctuation in export to marc loop */
                undoPunct();
                //console.log('adding punctuation to f100, f245, f246');
                // post all the variables that match the following pattern (fxxx or fxxx_n) 
                    var pattern = /^f[0-9]{3}(_[0-9])?$/;
                    var post_to_marc2 = {};
                    for (var varName in window) {
                        if ('undefined' === typeof window[varName]) { continue; }
                        if (pattern.test(varName)) {
                            //console.log(varName);
                            //console.log(window[varName].punct);
                            if (window[varName].punct != 'no') {
                                punctuate(varName);
                            }
                            post_to_marc2[varName] = window[varName];
                        }
                    }
                    console.log('punctuation has been applied');
                // actual post
                $.post( 
                  "marc.php",
                  post_to_marc2,
                  function(data) {
                     var marc_data = data.split('~');
                     $('#ib').html(marc_data);
                  }
               );
                    
            });
                
         });

/* not used */
function diacritics(object) {
    for (var property in object) {
        if (property == 'id' || property == 'i1' || property == 'i2' || property == 'punct') {
            continue;
        }
        else {
            console.log(property + ', val: ' + object[property]);
            var str = '';
            str = object[property];
            console.log(typeof str);
            str = str.replace(/é/g, "&#233")
            console.log(property + ', val: ' + str);
        }

    }
}