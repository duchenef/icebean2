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

// clock variables
var time_start, time_end, time_diff;
// stats variable
var cat_stats;

// Marc fields Variables init and default values
var f000 = '00000nas  2200000 i 4500';
var f007 = 'ta';

// Load templates
var templates;
var available_titles = [];

// form variables
var f_selected_title = '';
var f_date = '';
var f_YYYY = '';
var f_YY = '';
var f_MM = '';
var f_DD = '';
var f_number = '';
var f_volume = '';


// f008 construction
var f008_0005 = String(yy)+String(mm)+String(dd);
var f008_06 = 'c'; /* f008_type_date */
var f008_0710 = '    '; /* f008_date_1 */
var f008_1114 = '9999'; /* f008_date_2 */
var f008_1517 = '   '; /* place of publication */
var f008_18 = 'm'; /* frequency */
var f008_19 = 'r'; /* regularity */
var f008_20 = '0'; /* ISSN center */
var f008_21 = 'p'; /* Type of continuing resource */
var f008_2228 = '       '; /* not used (for, nature of content) */
var f008_29 = '0'; /* not a conference publication' */
var f008_3032 = '   '; /* undefined */
var f008_33 = 'a'; /* original alphabet or script*/
var f008_34 = '0'; /* entry convention*/
var f008_3537 = '   '; /* Language */
var f008_38 = ' '; /* modified record */
var f008_39 = 'd'; /* cataloguing source */

var f008 = f008_0005 + f008_06 + f008_0710 + f008_1114 + f008_1517 + f008_18 + f008_19 + f008_20 + f008_21 + f008_2228 + f008_29 + f008_3032 + f008_33 + f008_34 + f008_3537 + f008_38 + f008_39;

// Main marc field variables
var f022 = {id: '022', i1: null, i2: null, a: ''};
var f040 = {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041 = {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100 = {id: '100', i1: 1, i2: null, a: '', q: '', d: '', e: ''};
var f245 = {id: '245', i1: 0, i2: 0, a: '', b: ''};
var f264 = {id: '264', i1: '', i2: 1, a: '', b: '', c:''};
var f310 = {id: '310', i1: null, i2: null, a: ''};
var f336 = {id: '336', i1: null, i2: null, a: 'text', b: 'txt', '2': 'rdacontent'};
var f337 = {id: '337', i1: null, i2: null, a: 'unmediated', b: 'n', '2': 'rdamedia'};
var f338 = {id: '338', i1: null, i2: null, a: 'volume', b: 'nc', '2': 'rdacarrier'};
var f362 = {id: '362', i1: '0', i2: null, a: ''};
var f505 = {id: '505', i1: '8', i2: '', a: ''};
var f852 = {id: '852', i1: 1, i2: '', a: '', k: 'PER', h: '', i: '', p:'', '9': ''};
var f856 = {id: '856', i1: 4, i2: 2, u: ''};

// Marc fields default value for reset
var f022_default = {id: '022', i1: null, i2: null, a: ''};
var f040_default = {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041_default = {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100_default = {id: '100', i1: 1, i2: null, a: '', q: '', d: '', e: ''};
var f110_default = {id: '110', i1: 2, i2: '', a: ''};
var f245_default = {id: '245', i1: 0, i2: 0, a: '', b: ''};
var f264_default = {id: '264', i1: '', i2: '', a: '', b: '', c:''};
var f310_default = {id: '310', i1: null, i2: null, a: ''};
var f362_default = {id: '362', i1: '0', i2: null, a: ''};
var f500_default = {id: '500', i1: null, i2: null, a: ''};
var f505_default = {id: '505', i1: '8', i2: '', a: ''};
var f600_default = {id: '600', i1: '', i2: 7, a: '', d: '', '2': 'fast'};
var f600_default_fr = {id: '600', i1: '', i2: 7, a: '', d: '', '2': 'ram'};
var f610_default = {id: '610', i1: '', i2: 7, a: '', '2': 'fast'};
var f610_default_fr = {id: '610', i1: '', i2: 7, a: '', '2': 'ram'};
var f611_default = {id: '611', i1: '', i2: 7, a: '', '2': 'fast'};
var f611_default_fr = {id: '611', i1: '', i2: 7, a: '', '2': 'ram'};
var f630_default = {id: '630', i1: '', i2: 7, a: '', '2': 'fast'};
var f630_default_fr = {id: '630', i1: '', i2: 7, a: '', '2': 'ram'};
var f650_default = {id: '650', i1: '', i2: 7, a: '', x: '', '2': 'fast'};
var f650_default_fr = {id: '650', i1: '', i2: 7, a: '', x: '', z: '', y: '', '2': 'ram'};
var f651_default = {id: '651', i1: '', i2: 7, a: '', z: '', '2': 'fast'};
var f651_default_fr = {id: '651', i1: '', i2: 7, a: '', z: '', y: '', '2': 'ram'};
var f655_default = {id: '655', i1: '', i2: 7, a: '', '2': 'fast'};
var f655_default_fr = {id: '655', i1: '', i2: 7, a: '', '2': 'ram'};
var f700_default = {id: '700', i1: 1, i2: null, a: '', q: '', d: '', e: ''};
var f710_default = {id: '710', i1: 2, i2: '', a: ''};
var f730_default = {id: '730', i1: 0, i2: '', a: ''};
var f740_default = {id: '740', i1: 0, i2: 2, a: ''};
var f852_default = {id: '852', i1: 1, i2: '', a: '', k: 'PER', h: '', i: '', p:'', '9': ''};
var f856_default = {id: '856', i1: 4, i2: 2, u: ''};

var punctuation = {
                    f100: {a:'', b:'', c:',', q:',', d:',', e:',', last:'.'},
                    f110: {a: '', last: '.'},
                    f240: {a:'', l:'.', last:''},
                    f245: {a:'', b:' :', c: ' /', n: '.', p:'.', last:'.'},
                    f250: {a: '', last: '.'},
                    f246: {a:'', b:' :', n: '.', p:'.', last:''},
                    f264: {a:'', b:' :', c:',', last:'.'},
                    f310: {a:'', last:'.'},
                    f362: {a:'', last:'.'},
                    f490: {a: '.', v:' ;', x: ',', last: ''},
                    f500: {a: '', last: '.'},
                    f504: {a: '', last: '.'},
                    f505: {a: '', last: '.'},
                    f520: {a: '', last: '.'},
                    f521: {a: '', last: '.'},
                    f586: {a: '', last: ''},
                    f600: {a: '', b: ',', c: ',', d: ',', q: '', last: '.'},
                    f610: {a: '', b: '.', last: '.'},
                    f611: {a: '', last: '.'},
                    f630: {a: '', p: '.', last: '.'},
                    f650: {a: '', x: '', z: '', y: '', last: '.'},
                    f651: {a: '', x: '', z: '', y: '', last: '.'},
                    f655: {a: '', last: '.'},
                    f700: {a:'', b:'', c:',', q:',', d:',', e:',', last:'.'},
                    f710: {a: '', last: '.'},
                    f730: {a: '', last: '.'},
                    f740: {a: '', last: '.'},
                    f856: {u: '', last: ''}
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

/* GET AVAILABLE TITLES FROM TEMPLATES AND POPULATE TITLE SELECT */
jQuery(document).ready(function() {
    jQuery.getJSON('./templates/periodicals.json', function(json) {
        templates = json;
    });

    jQuery.getJSON('./templates/periodicals.json', function(json) {
        jQuery.each(json, function(i, val) {
            jQuery('#title_select').append('<option value="'+i+'">'+i+'</option>');
        });
    });
});

// Form actions: titole selection

$('#title_select').on('change', function () {
        // clean up previously added subjects and forms
        for (var i = 1; i < 11; i++) {
            if ($('#f650_'+i).length) {
                removeField('f650_'+i);
            }
            if ($('#f655_'+i).length) {
                removeField('f655_'+i);
            }
            if ($('#f600_'+i).length) {
                removeField('f600_'+i);
            }
            if ($('#f610_'+i).length) {
                removeField('f610_'+i);
            }
            if ($('#f611_'+i).length) {
                removeField('f611_'+i);
            }
            if ($('#f630_'+i).length) {
                removeField('f630_'+i);
            }
            if ($('#f651_'+i).length) {
                removeField('f651_'+i);
            }
        }
        f_date = '';
        document.getElementById('date_input').value = '';
        f_number = '';
        document.getElementById('num_input').value = '';
        f_volume = '';
        document.getElementById('vol_input').value = '';
        f245.b = '';
        document.getElementById('f245_b').value = '';
        f505.a = '';
        document.getElementById('f505_a').value = '';
        f362.a = '';
        document.getElementById('f362_a').value = '';
        // cleanup end

        selected_title = document.getElementById('title_select').value;
        console.log('selected title: ' + selected_title);
        console.log(templates[selected_title]);
        // from template to marc fields
        f008 = replaceAtPos(templates[selected_title]['place_code'], f008, 15);
        f008 = replaceAtPos(templates[selected_title]['frequency_code'], f008, 18);
        f008 = replaceAtPos(templates[selected_title]['regularity'], f008, 19);
        f008 = replaceAtPos(templates[selected_title]['language'], f008, 35);
                f040.b = templates[selected_title]['language'];
                document.getElementById('f040_b').value = f040.b;
                f041.a = templates[selected_title]['language'];
                document.getElementById('f041_a').value = f041.a;
        f008 = replaceAtPos(templates[selected_title]['language'], f008, 35);
            // used only to checkj language when inserting fast or ram
            f008_3537 = templates[selected_title]['language'];
        f022.a = templates[selected_title]['issn'];
                document.getElementById('f022_a').value = f022.a;
        f245.a = templates[selected_title]['title'];
                document.getElementById('f245_a').value = f245.a;
        f264.a = templates[selected_title]['place'];
                document.getElementById('f264_a').value = f264.a;
        f264.b = templates[selected_title]['publisher'];
                document.getElementById('f264_b').value = f264.b;
        f310.a = templates[selected_title]['frequency'];
                document.getElementById('f310_a').value = f310.a;
        // Default prefix
                document.getElementById('f852_k').value = f852.k;
        f852.h = templates[selected_title]['classification'];
                document.getElementById('f852_h').value = f852.h;
        f852['9'] = templates[selected_title]['price'];
                document.getElementById('f852_9').value = f852['9'];
        // 856 (URL)
        f856.u = templates[selected_title]['website'];
        // subject and form headings
        subjects_array = templates[selected_title]['permanent_subjects'];
        for (i = 0; i < subjects_array.length; ++i) {
            console.log(subjects_array[i]);
            if (templates[selected_title]['language'] == 'fre') {
                insert = {id: '650', i1: '', i2: '7', a: subjects_array[i], '2': 'ram' };
            }
            else {
                insert = {id: '650', i1: '', i2: '7', a: subjects_array[i], '2': 'fast' };
            }
            insertFieldAuto();
        }
        console.log(templates[selected_title]['form']);
        if (templates[selected_title]['language'] == 'fre') {
            insert = {id: '655', i1: '', i2: '7', a: templates[selected_title]['form'], '2': 'ram' };
        }
        else {
            insert = {id: '655', i1: '', i2: '7', a: templates[selected_title]['form'], '2': 'fast' };
        }
        insertFieldAuto();
        if (templates[selected_title]['corporate_name']) {
            console.log(templates[selected_title]['corporate_name']);
            if (templates[selected_title]['language'] == 'fre') {
                insert = {id: '610', i1: '', i2: '7', a: templates[selected_title]['corporate_name'], '2': 'ram' };
            }
            else {
                insert = {id: '610', i1: '', i2: '7', a: templates[selected_title]['corporate_name'], '2': 'fast' };
            }
        }
        insertFieldAuto();
        if (templates[selected_title]['geographical_subjects']) {
            console.log(templates[selected_title]['geographical_subjects']);
            if (templates[selected_title]['language'] == 'fre') {
                insert = {id: '651', i1: '', i2: '7', a: templates[selected_title]['geographical_subjects'], '2': 'ram' };
            }
            else {
                insert = {id: '651', i1: '', i2: '7', a: templates[selected_title]['geographical_subjects'], '2': 'fast' };
            }
        }
        insertFieldAuto();
        time_start = event.timeStamp;
        console.log('Cataloguing began at: ' + time_start);
    });

// Form actions: main marc fields

// Volume
$('#vol_input').on('blur', function () {
        f_volume = $(this).val();
        console.log('f_volume: ' + f_volume);
    });

// Number
$('#num_input').on('blur', function () {
        f_number = $(this).val();
        console.log('f_number: ' + f_number);
    });

// Date validation
$('#date_input').on('blur', function () {
        // reset of fields that are affected by date input
        f245.a = templates[selected_title]['title'];
                document.getElementById('f245_a').value = f245.a;
        f362.a = '';
        document.getElementById('f362_a').value = '';
        f_date = $(this).val();
        console.log('date entered: ' + f_date);
        f_YYYY = f_date.substring(0, 4);
        f_YY = f_date.substring(2, 4);
        f_MM = f_date.substring(4, 6);

        var plain_date = dateToText(f_date);

        if (f_date.substring(6, 8).length > 0) {
            f_DD = f_date.substring(6, 8);
        }
        else f_DD = '00';
        // apply date to 264c
        f264.c = f_YYYY;
        document.getElementById('f264_c').value = f264.c;
        // apply date to 008
        f008_0710 = f_YYYY;
        f008 = replaceAtPos(f_YYYY, f008, 7);
        // barcode  from template barcode prefix and date
        f852.p = templates[selected_title]['barcode_prefix']+f_DD+f_MM+f_YY;
        document.getElementById('f852_p').value = f852.p;
        // 362
        if (f_volume != '') {
            f362.a = 'Volume ' + f_volume + ', ';
        }
        if (f_number != '') {
            if (templates[selected_title]['language'] == 'fre') {
                f362.a = f362.a + 'num\xE9ro ' + f_number + ' (' + plain_date[1] + ')';
            }
            else {
                f362.a = f362.a + 'number ' + f_number + '  (' + plain_date[0] + ')';
            }
        }
        else {
            if (templates[selected_title]['language'] == 'fre') {
                f362.a = f362.a + '(' + plain_date[1] + ')';
            }
            else {
                f362.a = f362.a + '(' + plain_date[0] + ')';
            }
        }
        if (f362.a.substring(0, 1) == 'n') {
            f362.a = f362.a.charAt(0).toUpperCase() + f362.a.slice(1);
            f245.a = f245.a + ' ' + f_number + ' [' + f_YYYY + '-' + f_MM;
        }
        else {
            f245.a = f245.a + ' [' + f_YYYY + '-' + f_MM;
        }
        if (f_DD == '00' || f_DD == '') {
            f245.a = f245.a + ']';
        }
        else {
            f245.a = f245.a + '-' + f_DD + ']';
        }
        document.getElementById('f245_a').value = f245.a;
        document.getElementById('f362_a').value = f362.a;
        // jump to 245_b
        $('#f505_a').focus();
    });


// From actions: main marc fields
$('#f022_a').on('blur', function () {
        f022.a = $(this).val();
        console.log('022#a: ' + f022.a);
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
    });

$('#f041_a').on('blur', function () {
        f041.a = $(this).val();
        console.log('041#a: ' + f041.a);
    });

$('#f041_h').on('blur', function () {
        f041.h = $(this).val();
        console.log('041#h: ' + f041.h);
    });

$('#f245_i1').on('change', function () {
        f245.i1 = $(this).val();
        console.log('245i1: ' + f245.i1);
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
        document.getElementById('f505_a').value = f245.b;
        f505.a = document.getElementById('f505_a').value;
        $('#f505_a').focus();
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

$('#f310_a').on('blur', function () {
        f310.a = $(this).val();
        console.log('310#a: ' + f310.a);
    });

$('#f505_i1').on('blur', function () {
        f505.i1 = $(this).val();
        console.log('505_i1: ' + f505.i1);
    });

$('#f505_a').on('blur', function () {
        f505.a = $(this).val();
        console.log('505#a: ' + f505.a);
        f245.b = $(this).val().substring(0, $(this).val().indexOf("--")-1);
        document.getElementById('f245_b').value = f245.b;
    });

$('#f852_a').on('blur', function () {
        f852.a = $(this).val();
        console.log('852#a: ' + f852.a);
    });

$('#f852_k').on('blur', function () {
        f852.k = $(this).val();
        console.log('852#k: ' + f852.k);
    });

$('#f852_h').on('blur', function () {
        f852.h = $(this).val();
        console.log('852#h: ' + f852.h);
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

$('#resizer_url').on('blur', function () {
        resizer_url = $(this).val();
        console.log('resier url: ' + resizer_url);
    });

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
    $("#but_website").click(function(event){
        window.open(templates[selected_title]['website']);
    });
    $("#but_website").hover(
        function(){document.getElementById('footer').innerHTML='click to open the periodical\'s website (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_journaux").click(function(event){
        window.open("http://www.journaux.fr/recherche.php?txtRecherche=" + templates[selected_title]['title'] + "&searchscope=58&extended=0&SORT=D&submit.x=0&submit.y=0&submit=Chercher");
    });
    $("#but_journaux").hover(
        function(){document.getElementById('footer').innerHTML='click to search journaux.fr using the current title (will open a new tab)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
    $("#but_google").click(function(event){
        window.open("https://www.google.com/search?q=" + templates[selected_title]['title'] + ' ' + f362.a);
    });
    $("#but_google").hover(
        function(){document.getElementById('footer').innerHTML='click to search the Google using the current title and date (will open a new tab)';},
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

/* Show Tools using either reset button or CTRL+DEL */
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
        $('#pic1').html("<a download='"+f852.p+".jpg' href='images/"+f852.p+".jpg' ><img align='middle' src='resources/resizer.php?url="+resizer_url+"&h=120&fn="+f852.p+".jpg'></a>");
        /*$("<img src='./images/"+im[i]+"' width='24px' height='24px' id = '_am' align='top'></img>" ).appendTo( "#pic"+i );*/
    });    
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

// Link to icebean
$(document).ready(function() {
    $("#icebean_b").click(function(event){
        window.open("./index.html", "_self"); 
    });
    $("#icebean_b").hover(
        function(){document.getElementById('footer').innerHTML='click to switch the Icebean (books cataloguing)';},
        function(){document.getElementById('footer').innerHTML='&nbsp';}
    );
});


$("#content-wrap").resizable({
  handles: 'e', //'East' draggable edge
  resize: function() {
    $("#sidebar").outerWidth($("#main-wrap").innerWidth() - $("#content-wrap").outerWidth());
  }
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