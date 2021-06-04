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

var author_AM = '';
var author_GR = '';
var author_GB = '';

var full_title_AM = '';
var full_title_GR = '';
var full_title_GB = '';

var full_summary_AM = '';
var full_summary_GR = '';
var full_sumamry_GB = '';

var amazon_url = '';

var resizer_url = '';

// clock variables
var time_start, time_end, time_diff;
// stats variable
var cat_stats;

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
added_by_f008_6 = '';
var added_by_f008_22 = '';
var added_by_f008_1114 = '';
var added_by_f008_33 = '';
var added_by_f008_2427 = '';
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
var f504 =  {id: '504', i1: null, i2: null, a: ''};
var f546 =  {id: '546', i1: null, i2: null, a: ''};
var f590 = {id: '590', i1: null, i2: null, a: ''};
var f520 = {id: '520', i1: '8', i2: null, a: ''};

var f852 = {id: '852', i1: 1, i2: '', a: '', k: '', h: '', i: '', p:'', '9': ''};

// Marc fields default value for reset
var f020_default = {id: '020', i1: null, i2: null, a: '', q: ''};
var f040_default = {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041_default = {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100_default = {id: '100', i1: 1, i2: null, a: '', q: '', d: '', e: ''};
var f110_default = {id: '110', i1: 2, i2: '', a: ''};
var f240_default = {id: '240', i1: 1, i2: 0, a: '', l: ''};
var f245_default = {id: '245', i1: 1, i2: 0, a: '', b: '', c: ''};
var f246_default = {id: '246', i1: 3, i2: 3, a: '', b: ''};
var f250_default = {id: '250', i1: null, i2: null, a: ''};
var f264_default = {id: '264', i1: '', i2: '', a: '', b: '', c:''};
var f300_default = {id: '300', i1: null, i2: null, a: '', b: '', c:'', e:''};
var f380;
var f490_default = {id: '490', i1: '0', i2: null, a: '', v: ''};
var f500_default = {id: '500', i1: null, i2: null, a: ''};
var f504_default = {id: '504', i1: null, i2: null, a: ''};
var f505_default = {id: '505', i1: '8', i2: '', a: ''};
var f520_default = {id: '520', i1: '8', i2: null, a: ''};
var f521_default = {id: '521', i1: '8', i2: null, a: ''};
var f546_default = {id: '546', i1: null, i2: null, a: ''};
var f586_default = {id: '586', i1: '8', i2: null, a: ''};
var f590_default = {id: '590', i1: null, i2: null, a: ''};
var f600_default = {id: '600', i1: '1', i2: 7, a: '', d: '', '2': 'fast'};
var f600_default_fr = {id: '600', i1: '1', i2: 7, a: '', d: '', '2': 'ram'};
var f610_default = {id: '610', i1: '', i2: 7, a: '', '2': 'fast'};
var f610_default_fr = {id: '610', i1: '', i2: 7, a: '', '2': 'ram'};
var f611_default = {id: '611', i1: '', i2: 7, a: '', '2': 'fast'};
var f611_default_fr = {id: '611', i1: '', i2: 7, a: '', '2': 'ram'};
var f630_default = {id: '630', i1: '', i2: 7, a: '', '2': 'fast'};
var f630_default_fr = {id: '630', i1: '', i2: 7, a: '', '2': 'ram'};
var f647_default = {id: '647', i1: '', i2: 7, a: '', '2': 'fast'};
var f647_default_fr = {id: '647', i1: '', i2: 7, a: '', '2': 'fast'};
var f648_default = {id: '648', i1: '', i2: 7, a: '', '2': 'fast'};
var f650_default = {id: '650', i1: '', i2: 7, a: '', '2': 'fast'};
var f650_default_fr = {id: '650', i1: '', i2: 7, a: '', '2': 'ram'};
var f651_default = {id: '651', i1: '', i2: 7, a: '', '2': 'fast'};
var f651_default_fr = {id: '651', i1: '', i2: 7, a: '', '2': 'ram'};
var f655_default = {id: '655', i1: '', i2: 7, a: '', '2': 'fast'};
var f655_default_fr = {id: '655', i1: '', i2: 7, a: '', '2': 'ram'};
var f700_default = {id: '700', i1: 1, i2: null, a: '', q: '', d: '', e: ''};
var f710_default = {id: '710', i1: 2, i2: '', a: ''};
var f730_default = {id: '730', i1: 0, i2: '', a: ''};
var f740_default = {id: '740', i1: 0, i2: 2, a: ''};
var f852_default = {id: '852', i1: 1, i2: '', a: '', k: '', h: '', i: '', p:'', '9': ''};

var punctuation = {
                    f100: {a:'', b:'', c:',', q:',', d:',', e:',', last:'.'},
                    f110: {a: '', last: '.'},
                    f240: {a:'', l:'.', last:''},
                    f245: {a:'', b:' :', c: ' /', n: '.', p:'.', last:'.'},
                    f250: {a: '', last: '.'},
                    f246: {a:'', b:' :', n: '.', p:'.', last:''},
                    f264: {a:'', b:' :', c:',', last:'.'},
                    f300: {a:'', b:' :', c:' ;', last:'.', e:'+'},
                    f490: {a: '.', v:' ;', x: ',', last: ''},
                    f500: {a: '', last: '.'},
                    f504: {a: '', last: '.'},
                    f505: {a: '', last: '.'},
                    f520: {a: '', last: '.'},
                    f521: {a: '', last: '.'},
                    f546: {a: '', last: '.'},
                    f586: {a: '', last: ''},
                    f590: {a: '', last: ''},
                    f600: {a: '', b: ',', c: ',', d: ',', q: '', last: '.'},
                    f610: {a: '', b: '.', last: '.'},
                    f611: {a: '', last: '.'},
                    f630: {a: '', p: '.', last: '.'},
                    f647: {a: '', last: '.'},
                    f648: {a: '', last: '.'},
                    f650: {a: '', x: '', z: '', y: '', last: '.'},
                    f651: {a: '', x: '', z: '', y: '', last: '.'},
                    f655: {a: '', last: '.'},
                    f700: {a:'', b:'', c:',', q:',', d:',', e:',', last:'.'},
                    f710: {a: '', last: '.'},
                    f730: {a: '', last: '.'},
                    f740: {a: '', last: '.'}
};

var punctuation_undo = [];

// COOKIES for cataloguer's ID (040a) and Location (852a)

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

user_id = readCookie('name');
f040.a = user_id;
document.getElementById('f040_a').value = f040.a;
document.getElementById("rec_link").href = "./batch/marcy"+user_id+".mrc";
document.getElementById("bat_link").href = "./batch/batch"+user_id+".mrc";
f852.a = readCookie('location');
document.getElementById('f852_a').value = f852.a;

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
        else if ($(this).val() == 'r') {
            console.log('adding 264');
            f264_1.i2 = '3';
            document.getElementById('f264_1_i2').value = f264_1.i2;
            insert = {id: '264', i1: '', i2: '1', a: '', b: '', c:'' };
            var fieldID = insertFieldAuto();
            added_by_f008_6 = fieldID;
        }    
        else {
            $('#f008_date_2').show();
        }
    });

$('#f008_date_1').on('blur', function () {
        f008_0710 = $(this).val();
        console.log('captured value: ' +f008_0710);
        f008 = replaceAtPos(f008_0710, f008, 7)
        console.log('008: ' + f008);
        // add publication date to 264_1c
        f264_1.c = f008_0710;
        document.getElementById('f264_1_c').value = f264_1.c;
        time_start = event.timeStamp;
        console.log('Cataloguing began at: ' + time_start);
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
        if( $('#f300_b').is(':visible') && f008_1821 == '' ) {
                    $('label[for=f300_b], #f300_b').hide();
                    reset('300', 'b');
        }
        else if ( f008_1821 != '') {
            $('label[for=f300_b], #f300_b').show();
        }  

        if (f008_1821.indexOf("a") >= 0) {
            ill.push('illustrations');    
        }
        if (f008_1821.indexOf("b") >= 0) {
            ill.push('maps');    
        }
        if (f008_1821.indexOf("c") >= 0) {
            ill.push('portraits');
        }
        if (f008_1821.indexOf("d") >= 0) {
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

        if (f008_2427.indexOf("6") >= 0) {
            insert = {id: '655', i1: '', i2: '7', a: 'Graphic novels',  '2': 'fast' };
            f852.k = 'BD';
            var fieldID = insertFieldAuto();
            added_by_f008_2427 = fieldID;
            f336_2 = {id: '336', i1: null, i2: null, a: 'still image', b: 'sti', '2': 'rdacontent'};
            f380 = {id: '380', i1: null, i2: null, a: 'Graphic novel.'};
        }
        else {
            f336_2 = '';
            f380 = '';
            removeField(added_by_f008_2427);
            added_by_f008_2427 = '';
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
                insert = {id: '655', i1: '', i2: '7', a: 'Autobiographies', '2': 'fast' };
                var fieldID = insertFieldAuto();
                added_by_f008_34 = fieldID;
            }
            else {
                insert = {id: '655', i1: '', i2: '7', a: 'Autobiographies', '2': 'fast' };
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
        /* translate everythin in french if fre */
            /* ill. */
            if (f008_3537 == 'fre') {
                console.log('Translation to french launched');
                f300.a = document.getElementById('f300_a').value.replace('of plates', 'de planches');
                document.getElementById('f300_a').value = f300.a;
                plates = document.getElementById('f300_a').value;
                var mapObj = {maps:"cartes",charts:"tableaux",music:"musique",photographs:"photographies"};
                var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
                f300.b = document.getElementById('f300_b').value.replace(re, function(matched){
                  return mapObj[matched];
                });
                document.getElementById('f300_b').value = f300.b;
            /* 655 audience */
                if (window['added_by_f008_22'] != '') {
                    removeField(added_by_f008_22);
                    added_by_f008_22 = '';
                }
                if ( (f008_22 == 'j' || f008_22 == 'd' || f008_22 == 'c') && ( f008_33 == '1' || f008_33 == 'j' ) ) {
                    insert = {id: '655', i1: '', i2: '7', a: 'Roman pour la jeunesse', '2': 'ram' };
                    var fieldID = insertFieldAuto();
                    added_by_f008_22 = fieldID;
                }
                else if ( (f008_22 == 'j' || f008_22 == 'd' || f008_22 == 'c') && ( f008_33 == '0') ) {
                    insert = {id: '655', i1: '', i2: '7', a: 'Ouvrages pour la jeunesse', '2': 'ram' };
                    var fieldID = insertFieldAuto();
                    added_by_f008_22 = fieldID;
                }
            /* Bibliographie */
                f504.a = document.getElementById('f504_a').value.replace('Bibliography', 'Bibliographie');
                document.getElementById('f504_a').value = f504.a; 
            /* BD */
                if (f008_2427.indexOf("6") >= 0) {
                    console.log('BD');
                    removeField(added_by_f008_2427);
                    insert = {id: '655', i1: '', i2: '7', a: 'Bandes dessin\xE9es',  '2': 'ram' };
                    var fieldID = insertFieldAuto();
                    added_by_f008_2427 = fieldID;
                }
            /* index */
                f500_1.a = document.getElementById('f500_1_a').value.replace('Includes', 'Comprend un');
                document.getElementById('f500_1_a').value = f500_1.a; 
            /* forme */
                if (window['added_by_f008_33'] != '') {
                        removeField(added_by_f008_33);
                        added_by_f008_33 = '';
                }
                if (f008_33 == '1' || f008_33 == 'f') {
                        insert = {id: '655', i1: '', i2: '7', a: 'Roman', '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_33 = fieldID;
                        f852.h = 'R';
                        document.getElementById('f852_h').value = f852.h;
                }
                else if (f008_33 == 'd') {
                        insert = {id: '655', i1: '', i2: '7', a: 'Th\xE9\xE2tre',  '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_33 = fieldID;
                }
                else if (f008_33 == 'j') {
                        insert = {id: '655', i1: '', i2: '7', a: 'Nouvelles',  '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_33 = fieldID;
                        f852.h = 'R';
                        document.getElementById('f852_h').value = f852.h;
                }
                else if (f008_33 == 'p') {
                        insert = {id: '655', i1: '', i2: '7', a: 'Po\xE9sie',  '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_33 = fieldID;
                }
            /* biographie */
                if (window['added_by_f008_34'] != '') {
                    removeField(added_by_f008_34);
                    added_by_f008_34 = '';
                }
                if (f008_34 == 'a') {
                    if (f008_33 == '1') {
                        insert = {id: '655', i1: '', i2: '7', a: 'Roman autobiographique', '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_34 = fieldID;
                    }
                    else {
                        insert = {id: '655', i1: '', i2: '7', a: 'Biographies', '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_34 = fieldID;
                    }
                }
                else if (f008_34 == 'b') {
                    if (f008_33 == '1') {
                        insert = {id: '655', i1: '', i2: '7', a: 'Roman biographique', '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_34 = fieldID;
                    }
                    else {
                        insert = {id: '655', i1: '', i2: '7', a: 'Biographies', '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_34 = fieldID;
                    }
                }
                else if (f008_34 == 'c') {
                        insert = {id: '655', i1: '', i2: '7', a: 'Biographies', '2': 'ram' };
                        var fieldID = insertFieldAuto();
                        added_by_f008_34 = fieldID;
                }
            }
    });

// From actions: main marc fields
$('#f020_a').on('blur', function () {
        f020.a = $(this).val();
        console.log('020#a: ' + f020.a);
    });

$('#f020_q').on('blur', function () {
        f020.q = $(this).val();
        console.log('020#q: ' + f020.q);
        $('label[for=f852_p], #852_p').focus();
    });

$('#f040_a').on('blur', function () {
        f040.a = $(this).val();
        createCookie('name',f040.a,7);
        user_id = readCookie('name');
        console.log('040#a: ' + f040.a);
        /* DYNAMIC FORM: prefill f852_a with 4 first char of f040_a's value' and create cookie */
        document.getElementById('f852_a').value = f040.a.substring(0, 4);
        f852.a = f040.a.substring(0, 4);
        createCookie('location',f852.a,7);
    });

$('#f040_b').on('blur', function () {
        f040.b = $(this).val();
        console.log('040#b: ' + f040.b);
    });

$('#f040_d').on('blur', function () {
        f040.d = $(this).val();
        createCookie('name',f040.d,7);
        user_id = readCookie('name');
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
        f520.a = f520.a.replace(/ ,/g, ',');
        f520.a = f520.a.replace(/\u2019/g, "\'");
        f520.a = f520.a.replace(/\s+/g,' ').trim();
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
        $('label[for=f100_a], #f100_a').focus();
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

$('#resizer_url').on('blur', function () {
        resizer_url = $(this).val();
        console.log('resizer url: ' + resizer_url);
    });

/*
$("#auth_am").click(function(event){
    console.log('AM author');
    parseAuthor(author_AM);
}); 

$("#auth_gr").click(function(event){
    console.log('GR author');
    parseAuthor(author_GR);
});   

$("#auth_gb").click(function(event){
    console.log('GB author');
    parseAuthor(author_GB);
});  

$("#title_am").click(function(event){
    console.log('AM title');
    parseTitle(full_title_AM);
}); 

$("#title_gr").click(function(event){
    console.log('GR title');
    parseTitle(full_title_GR);
});   

$("#title_gb").click(function(event){
    console.log('GB title');
    parseTitle(full_title_GB);
}); 

$("#summary_am").click(function(event){
    document.getElementById('f520_a').value = full_summary_AM;
    f520.a = document.getElementById('f520_a').value;
}); 

$("#summary_gr").click(function(event){
    document.getElementById('f520_a').value = full_summary_GR;
    f520.a = document.getElementById('f520_a').value;
});   

$("#summary_gb").click(function(event){
    document.getElementById('f520_a').value = full_summary_GB;
    f520.a = document.getElementById('f520_a').value;
}); */


$("input[name = 'toggle_100']").on('change', function() {
    if ($("#toggle_1_100").is(":checked")) { 
        console.log('AM author');
        parseAuthor(author_AM);
    }
    if ($("#toggle_2_100").is(":checked")) { 
        console.log('GR author');
        parseAuthor(author_GR);
    }
    if ($("#toggle_3_100").is(":checked")) { 
        console.log('GB author');
        parseAuthor(author_GB);
    }
});

$("input[name = 'toggle_245']").on('change', function() {
    if ($("#toggle_1_245").is(":checked")) { 
        console.log('AM title');
        parseTitle(full_title_AM);
    }
    if ($("#toggle_2_245").is(":checked")) { 
        console.log('GR title');
        parseTitle(full_title_GR);
    }
    if ($("#toggle_3_245").is(":checked")) { 
        console.log('GB title');
        parseTitle(full_title_GB);
    }
});

$("input[name = 'toggle_520']").on('change', function() {
    if ($("#toggle_1_520").is(":checked")) { 
        document.getElementById('f520_a').value = full_summary_AM;
        f520.a = document.getElementById('f520_a').value;
    }
    if ($("#toggle_2_520").is(":checked")) { 
        document.getElementById('f520_a').value = full_summary_GR;
        f520.a = document.getElementById('f520_a').value;
    }
    if ($("#toggle_3_520").is(":checked")) { 
        document.getElementById('f520_a').value = full_summary_GB;
        f520.a = document.getElementById('f520_a').value;
    }
});


/* ICEBEAN REQUEST */
// function
function icebean_submit(){
               console.log('click: to icebean');
               $.post(
                    "./php/fd_images_cleanup.php",
                    function(data) {
                        console.log(data);
                    }   
               );
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
                        if (f852.h != undefined) {
                            if (f852.h.substring(0, 3) > 0 && f852.h.substring(0, 3) < 1000) {
                                f852.j = 'DCX' + f852.h.substring(0, 3);
                            }
                        if (f852.h == 'F' && f008_3537 == 'fre') {
                            f852.h = 'R';
                            document.getElementById('f852_h').value = f852.h;
                        }
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
                    var im = {'1':'amazon_.png', '2':'goodreads_.png', '3':'Google.svg'};
                    // Fast headings
                    for (var i = 1; i < images_url_data.length; i++) {
                        console.log(images_url_data[i]);
                        /* IF GOODREADS ie #2 then : .*/
                        if (i == 2) {
                           var SX = "SX150";
                           var flip = images_url_data[2];
                           var flip = flip.replace('SX98', SX);
                           $('#pic'+i).html("<a download='"+f020.a+lab[i]+".jpg' href='images/"+f020.a+lab[i]+".jpg' title='"+lab[1]+"''><img align='middle' src='"+flip+"'</a>");
                           console.log("pic#2 (GR) is "+flip);
                           
                        }
                        else {
                            $('#pic'+i).html("<a download='"+f020.a+lab[i]+".jpg' href='images/"+f020.a+lab[i]+".jpg' title='"+lab[1]+"''><img align='middle' src='resources/resizer.php?url="+images_url_data[i]+"&h=150&fn="+f020.a+lab[i]+".jpg'></a>");
                        }
                        /*$("<input type='button' id = 'picbut"+i+"' class='insert_show_insert_submit' value='"+lab[i]+"'>'" ).appendTo( "#pic"+i );*/
                        $("<img src='./images/"+im[i]+"' width='24px' height='24px' id = '_am' align='top'></img>" ).appendTo( "#pic"+i );
                        
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
                    author_AM = icebean_data[1];
                    author_GR = icebean_data[12];
                    author_GB = icebean_data[13];
                    f100.a = icebean_data[12];
                    var surname = f100.a.slice(f100.a.indexOf(' ')+1, f100.a.length);
                    var firstname = f100.a.slice(0, f100.a.indexOf(' '));
                    f100.a = surname + ', ' + firstname;
                    document.getElementById('f100_a').value = f100.a;
                    f852.i = surname.substring(0, 3).toUpperCase();
                    document.getElementById('f852_i').value = f852.i;
                    f245.c = icebean_data[12];
                    document.getElementById('f245_c').value = f245.c;
                    $('#ib').html(icebean_data);
                    // f245
                    var full_title = icebean_data[3];
                    //console.log(icebean_data[3]);
                    //console.log('ARGHHHH');
                    full_title_AM = icebean_data[2];
                    full_title_GR = icebean_data[3];
                    full_title_GB = icebean_data[11];
                    if (full_title.indexOf(':') != -1) {
                        f245.a = full_title.slice(0, full_title.indexOf(':'));
                        f245.b = full_title.slice(full_title.indexOf(':')+2, full_title.length);
                    }
                    else { f245.a = icebean_data[3];}
                    f245.a = lowerAll(f245.a);
                    f245.a = f245.a.charAt(0).toUpperCase() + f245.a.slice(1);
                    findArticle(f245.a, 'f245_a');
                    properNouns('f245', 'a', f245.a)
                    document.getElementById('f245_a').value = f245.a;
                    if (f245.b != undefined) {
                        f245.b = lowerAll(f245.b);
                        properNouns('f245', 'b', f245.b);
                        $('label[for=f245_b], #f245_b').show();
                        document.getElementById('f245_b').value = f245.b;
                    }
                    // f264
                    if (icebean_data[9] != undefined) { 
                        f264_1.b = icebean_data[16];
                        document.getElementById('f264_1_b').value = f264_1.b;
                        console.log("Publisher: " + f264_1.b);
                        console.log("Locating place of publication");
                        f264_1.a = publicationPlaces(f264_1.b);
                        document.getElementById('f264_1_a').value = f264_1.a;

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
                        full_summary_GR = icebean_data[10];
                        full_summary_GR = full_summary_GR.replace(/(<br \/>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<p>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<b>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<i>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<\/p>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<\/b>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<\/i>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<em>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<\/em>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<strong>)/g," ");
                        full_summary_GR = full_summary_GR.replace(/(<\/strong>)/g," ");
                        full_summary_GR = full_summary_GR.replace(" . . .","...");
                        full_summary_GR = full_summary_GR.replace(/(\r\n|\n|\r)/gm," ");
                        full_summary_GR = full_summary_GR.replace(/ ,/g, ',');
                        full_summary_GR = full_summary_GR.replace(/\s+/g,' ').trim();
                    }
                    if (icebean_data[8] != undefined) { 
                        full_summary_AM = icebean_data[8];
                        full_summary_AM = full_summary_AM.replace(/(<br \/>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<p>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<b>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<i>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<\/p>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<\/b>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<\/i>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(\<em>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(\/<em>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<strong>)/g," ");
                        full_summary_AM = full_summary_AM.replace(/(<\/strong>)/g," ");
                        full_summary_AM = full_summary_AM.replace(" . . .","...");
                        full_summary_AM = full_summary_AM.replace(/(\r\n|\n|\r)/gm," ");
                        full_summary_AM = full_summary_AM.replace(/ ,/g, ',');
                        full_summary_AM = full_summary_AM.replace(/\s+/g,' ').trim();
                    }
                     if (icebean_data[14] != undefined) { 
                        full_summary_GB = icebean_data[14];
                        full_summary_GB = full_summary_GB.replace(/(<br \/>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<p>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<b>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<i>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<\/p>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<\/b>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<\/i>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<em>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<\/em>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<strong>)/g," ");
                        full_summary_GB = full_summary_GB.replace(/(<\/strong>)/g," ");
                        full_summary_GB = full_summary_GB.replace(" . . .","...");
                        full_summary_GB = full_summary_GB.replace(/(\r\n|\n|\r)/gm," ");
                        full_summary_GB = full_summary_GB.replace(/ ,/g, ',');
                        full_summary_GB = full_summary_GB.replace(/\s+/g,' ').trim();
                    }
                    document.getElementById('f520_a').value = full_summary_GR;
                    f520.a = document.getElementById('f520_a').value;
                    // f852
                    f852['9'] = icebean_data[7];
                    document.getElementById('f852_9').value = f852['9'];
                    // amazon_url
                    amazon_url = icebean_data[15];
               });
                scrape_amazon_image(f020.a);
            }

/* NOT YET IMPLEMENTED 20210527 .*/
function scrape_amazon_image(isbn) {
    amazon_image_scraping_url = "https://www.amazon.fr/s?k="+isbn+"&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss";
    console.log(amazon_image_scraping_url);
    /*.var name = "amazon_data";$.get(amazon_image_scraping_url, function(response) {  console.log(response);});.*/
    /*var name = "amazon_data";var url = "http://www.whateverorigin.org/get?url=" + encodeURIComponent(amazon_image_scraping_url) + "&callback=?";$.get(url, function(response) {  console.log(response);});.*/
    /*var blip = document.getElementById(amazon_image_scraping_url);
    console.log(blip);*/
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
                if (/^(97(8|9))?\d{9}(\d|X)$/.test(f020.a) && f020.a != '0000000000') {
                    $('#footer').html('the icebean has been triggered: '+f020.a);
                    console.log('calling the icebean');
                    icebean_submit();
                }
                else if (f020.a == '0000000000') {
                    $('#footer').html('ISBN set to remove blank records (<= batch)');
                }
                else {
                    $('#footer').html('the icebean has not been triggered: nothing to submit');
                }
            });
            $("#isbn_submit").hover(
                function(){document.getElementById('footer').innerHTML='click to submit the current ISBN to the Icebean (shortcut: CTRL+ENTER)';},
                function(){document.getElementById('footer').innerHTML='&nbsp';}
            );
         });

// Icebean using CTRL+ENTER
$(document).keydown(function(e){
    if ( e.ctrlKey &&( e.which === 13 ) ) {
        if (/^(97(8|9))?\d{9}(\d|X)$/.test(f020.a) && f020.a != '0000000000') {
            $('#footer').html('the icebean has been triggered: '+f020.a);
            console.log('calling the icebean');
            icebean_submit();
        }
        else if (f020.a == '0000000000') {
            $('#footer').html('ISBN set to remove blank records (<= batch)');
        }
        else {
            $('#footer').html('the icebean has not been triggered: nothing to submit');
        }
    }
});

/* SHOW HIDE FIELDS */
$(document).ready(function() { 
            /* 040d */
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
            /* 100q */
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
            /* 100d */
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
            /* 100e */
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
            /* 245b */
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
            /* 300b */
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
            /* 300e */
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
    console.log( 'Field insertion (CTRL + INS or SHIFT + INS)' );
        if( $('.insert').is(':visible') ) {
            $('.insert').hide();
            $('#i1_insert').prop('checked', true);
            $('#i2_insert').prop('checked', true);
            document.getElementById('subfields_insert').value = '';
            subfields = '';
            insert = {id: '', i1: '', i2: ''};
            document.getElementById('field_insert').value = insert.id;
            $("#" + focus_previous ).focus();
        }
        else {
            $('.insert').show();
            $('#field_insert').focus(); 
        }     
}

function showFast() {
    console.log( 'Fast insertion (CTRL + HOME)' );
        if( $('.ui-widget').is(':visible') ) {
            $('.ui-widget').hide();
            document.getElementById('fastLookup').value = '';
            $("#" + focus_previous ).focus();
        }
        else {
            $('.ui-widget').show();
            $('#fastLookup').focus(); 
        } 
}

function showTools() {
    console.log( 'Tools (CTRL + DEL)' );
        if( $('.tools').is(':visible') ) {
            $('.tools').hide();
            $("#" + focus_previous ).focus();
        }
        else {
            $('.tools').show();
            $("#" + focus_previous ).focus();
        }     
}

function showResizer() {
    console.log( 'Tools (CTRL + END)' );
        if( $('.resizer').is(':visible') ) {
            $('.resizer').hide();
            $("#" + focus_previous ).focus();
        }
        else {
            $('.resizer').show();
            $("#" + focus_previous ).focus();
        }     
}

$(document).ready(function() { 
    $("#but_classify").click(function(event){
        window.open("http://classify.oclc.org/classify2/ClassifyDemo?search-standnum-txt="+ f020.a);
    });
    $("#but_classify").hover(
        function(){document.getElementById('footer').innerHTML='click to search OCLC Classify using the current ISBN (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_worldcat").click(function(event){
        window.open("http://www.worldcat.org/search?q="+ f020.a);
    });
    $("#but_worldcat").hover(
        function(){document.getElementById('footer').innerHTML='click to search OCLC Worldcat using the current ISBN (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_amazon").click(function(event){
        window.open(amazon_url);
    });
    $("#but_amazon").hover(
        function(){document.getElementById('footer').innerHTML='click to search Amazon using the current ISBN (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_goodreads").click(function(event){
        window.open("https://www.goodreads.com/book/isbn/"+ f020.a);
    });
    $("#but_goodreads").hover(
        function(){document.getElementById('footer').innerHTML='click to search Goodreads using the current ISBN (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_bnf").click(function(event){
        window.open("http://catalogue.bnf.fr/rechercher.do?motRecherche="+ f020.a);
    });
    $("#but_bnf").hover(
        function(){document.getElementById('footer').innerHTML='click to search the BNF using the current ISBN (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_nelligan").click(function(event){
        window.open("http://nelligan.ville.montreal.qc.ca/search*frc/a?searchtype=i&searcharg=" + f020.a + "&searchscope=58&extended=0&SORT=D&submit.x=0&submit.y=0&submit=Chercher");
    });
    $("#but_nelligan").hover(
        function(){document.getElementById('footer').innerHTML='click to search the Nelligan catalogue using the current ISBN (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_google").click(function(event){
        window.open("https://www.google.com/search?q=" + f100.a);
    });
    $("#but_google").hover(
        function(){document.getElementById('footer').innerHTML='click to search the Google using the current author (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
}); 

/* Insert button : show insert field */
$(document).ready(function() { 
    $("#show_insert").click(function(event){
        showInsert();
    });
    $("#show_insert").hover(
        function(){document.getElementById('footer').innerHTML='click to insert a new field (shortcut: CTRL+INS)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
}); 

/* CTRL+INS : show insert field */
$(document).keydown(function(e){
    if ( e.ctrlKey && ( e.which === 45 ) ) {
         showInsert();
    }
 });

/* SHIFT+INS : show insert field */
$(document).keydown(function(e){
    if ( e.shiftKey && ( e.which === 45 ) ) {
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

/* Show INSERT FAST using either button or CTRL+HOME */
$(document).ready(function() { 
    $("#showFast").click(function(event){
        showFast();
    }); 
    $("#showFast").hover(
        function(){document.getElementById('footer').innerHTML='click to insert a new FAST heading field (shortcut: CTRL+HOME)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});
$(document).keydown(function(e){
    if ( e.ctrlKey && ( e.which === 36 ) ) {
        showFast();
    }
});

/* Show Tools using either tools button or CTRL+DEL */
$(document).ready(function() { 
    $("#showTools").click(function(event){
        showTools();
    });
    $("#showTools").hover(
        function(){document.getElementById('footer').innerHTML='click to display the external tools buttons (shortcut: CTRL+DEL)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});
$(document).keydown(function(e){
    if ( e.ctrlKey && ( e.which === 46 ) ) {
        showTools();
    }
});

/* Show resizer using either resizer button or CTRL+END*/
$(document).ready(function() { 
    $("#sizebean_b").click(function(event){
        showResizer();
    });
    $("#sizebean_b").hover(
        function(){document.getElementById('footer').innerHTML='click to display the image resizer (shortcut: CTRL+END)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});
$(document).keydown(function(e){
    if ( e.ctrlKey && ( e.which === 35 ) ) {
        showResizer();
    }
});

$(document).ready(function() { 
    $("#resizer_submit").click(function(event){
        console.log(resizer_url);
        $('#pic1').html("<a download='"+f852.p+".jpg' href='images/"+f852.p+".jpg' ><img align='middle' src='resources/resizer.php?url="+resizer_url+"&h=150&fn="+f852.p+".jpg'></a>");
        /*$("<img src='./images/"+im[i]+"' width='24px' height='24px' id = '_am' align='top'></img>" ).appendTo( "#pic"+i );*/
    });    
});

/* RESET using either reset button or CTRL+ALT+END */
$(document).ready(function() { 
    $("#reset").click(function(event){
        location.reload();
    });
    $("#reset").hover(
        function(){document.getElementById('footer').innerHTML='click to reset the cataloging form. All data will be lost (shortcut: CTRL+ALT+END)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});
$(document).keydown(function(e){
    if ( e.ctrlKey && e.altKey &&( e.which === 35 ) ) {
        location.reload();
    }
});

/* DOWNLOAD BUTTONS */
$(document).ready(function() {
    $("#downloadmarc").hover(
        function(){document.getElementById('footer').innerHTML='click to download the last created MARC record';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#downloadbatch").hover(
        function(){document.getElementById('footer').innerHTML='click to download the current batch file';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});

/* SUBMIT TO MARC */
$(document).ready(function() {
            /* READ FROM BATCH */
            $("#read").click(function(event){
                readMarc();   
            });
            $("#read").hover(
                function(){document.getElementById('footer').innerHTML='click to inspect the content of current user\'s last saved record and batch file (shortcut: Ctrl + Alt + I)';},
                function(){document.getElementById('footer').innerHTML='&nbsp';}
            );
            /* SAVE TO MARC */
            $("#tomarc").click(function(event){
                toMarc();
                stats();
            });
            $("#tomarc").hover(
                function(){document.getElementById('footer').innerHTML='click to convert onscreen data to a MARC record (shortcut: Ctrl + Alt + R)';},
                function(){document.getElementById('footer').innerHTML='&nbsp';}
            );
            /* SUBMIT TO BATCH */
            $("#tobatch").click(function(event){
                toBatch();
            });
            $("#tobatch").hover(
                function(){document.getElementById('footer').innerHTML='click to copy the last saved MARC record the the batch file (shortcut: Ctrl + Alt + B)';},
                function(){document.getElementById('footer').innerHTML='&nbsp';}
            );
            /* REMOVE FROM BATCH */
            $("#remove").click(function(event){
                removeFromBatch();
            }); 
            $("#remove").hover(
                function(){document.getElementById('footer').innerHTML='click to delete the current ISBN (as displayed in 020#a) from the batch file (shortcut: Ctrl + Alt + D)';},
                function(){document.getElementById('footer').innerHTML='&nbsp';}
            );
            /* CLEAR BATCH */
            $("#clearbatch").click(function(event){
                clearBatch();
            });
            $("#clearbatch").hover(
                function(){document.getElementById('footer').innerHTML='click to clear the batch file. All saved data will be lost (shortcut: Ctrl + Alt + C)';},
                function(){document.getElementById('footer').innerHTML='&nbsp';}
            );      
});

// File management shortcuts
    // £Inspect Marc files CTRL + ALT + I
    $(document).keydown(function(e){
        if ( e.ctrlKey && e.altKey &&( e.which === 73 ) ) {
            readMarc();
        }
    });
    // to Marc CTRL + ALT + R
    $(document).keydown(function(e){
        if ( e.ctrlKey && e.altKey &&( e.which === 82 ) ) {
            toMarc();
        }
    });
    // to Batch CTRL + ALT + B
    $(document).keydown(function(e){
        if ( e.ctrlKey && e.altKey &&( e.which === 66 ) ) {
            toBatch();
        }
    });
    // remove / delte from Batch CTRL + ALT + D
    $(document).keydown(function(e){
        if ( e.ctrlKey && e.altKey &&( e.which === 68 ) ) {
            removeFromBatch();
        }
    });
    // clear the Batch file  CTRL + ALT + C
    $(document).keydown(function(e){
        if ( e.ctrlKey && e.altKey &&( e.which === 67 ) ) {
            clearBatch();
        }
    });

/* HELP */
$(document).ready(function() {
    $("#help_b").click(function(event){
        helpIB();   
    });
    $("#help_b").hover(
        function(){document.getElementById('footer').innerHTML='click for help (shortcut: Ctrl + Alt + H)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});
// help shortcut CTRL + ALT + H
$(document).keydown(function(e){
        if ( e.ctrlKey && e.altKey &&( e.which === 72 ) ) {
            helpIB(); 
        }
    });

// Link to magbean
$(document).ready(function() {
    $("#magbean_b").click(function(event){
        window.open("./magbean.html", "_self"); 
    });
    $("#magbean_b").hover(
        function(){document.getElementById('footer').innerHTML='click to switch the magBean (periodicals cataloguing)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});


/*$("#content-wrap").resizable({
    handles: 'e, w',
    alsoResizeReverse: '#sidebar'
});*/


jQuery("#content-wrap").resizable({
  handles: 'e', //'East' draggable edge
  resize: function() {
    $("#sidebar").outerWidth($("#main-wrap").innerWidth() - $("#content-wrap").outerWidth());
  }
});


/* copie des fast dans le clipboard*/
  new Clipboard('.buttons', {
              text: function(trigger) {
                  console.log(JSON.parse(trigger.nextElementSibling.textContent));
                  return JSON.parse(trigger.nextElementSibling.textContent);
              }
          });

/* recherche rameau */
  function ramSearch() {
      var ramsearchterm = document.getElementById("ramquery").value;
      var ramsearchstring = encodeURI("http://data.bnf.fr/search?term=" + ramsearchterm + "#Rameau");
      console.log(ramsearchstring);
      window.open(ramsearchstring, '_blank');

  }

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