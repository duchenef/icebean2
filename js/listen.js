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
var added_by_f008_22 = {id: '', a: ''};

// Main marc field variables
var f020 = {id: '020', i1: null, i2: null, a: '', q: ''};
var f040 = {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041 = {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100 = {id: '100', i1: 1, i2: null, a: '', d: '', e: ''};
var f240 = {id: '240', i1: 1, i2: 0, a: '', l: ''};
var f245 = {id: '245', i1: 1, i2: 0, a: '', b: '', c: ''};
var f264_1 = {id: '264', i1: '', i2: 1, a: '', b: '', c:''};
var f264_2 = {id: '264', i1: '', i2: 4, a: '', b: '', c:''};
var f300 = {id: '300', i1: null, i2: null, a: '', b: '', c:'', e:''};
var f336 = {id: '336', i1: null, i2: null, a: 'text', b: 'txt', '2': 'rdacontent'};
var f337 = {id: '337', i1: null, i2: null, a: 'unmediated', b: 'n', '2': 'rdamedia'};
var f338 = {id: '338', i1: null, i2: null, a: 'volume', b: 'nc', '2': 'rdacarrier'};
var f500_1 =  {id: '500', i1: null, i2: null, a: ''};
var f504 =  {id: '500', i1: null, i2: null, a: ''};
var f852 = {id: '852', i1: 1, i2: '', a: '', h: '', i: '', p:'', '9': ''};

// Marc fields default value for reset
var f020_default = {id: '020', i1: null, i2: null, a: '', q: ''};
var f040_default = {id: '040', i1: null, i2: null, a: '', b: 'eng', d: '', e: 'rda'};
var f041_default = {id: '041', i1: 0, i2: null, a: '', h: ''};
var f100_default = {id: '100', i1: 1, i2: null, a: '', d: '', e: ''};
var f240_default = {id: '240', i1: 1, i2: 0, a: '', l: ''};
var f245_default = {id: '245', i1: 1, i2: 0, a: '', b: '', c: ''};
var f246_default = {id: '246', i1: 3, i2: 3, a: '', b: ''};
var f264_default = {id: '264', i1: '', i2: '', a: '', b: '', c:''};
var f300_default = {id: '300', i1: null, i2: null, a: '', b: '', c:'', e:''};
var f500_default = {id: '500', i1: null, i2: null, a: ''};
var f504_default = {id: '504', i1: null, i2: null, a: ''};
var f600_default = {id: '600', i1: '', i2: 7, a: '', d: 'd', '2': 'fast'};
var f611_default = {id: '611', i1: '', i2: 7, a: '', '2': 'fast'};
var f630_default = {id: '630', i1: '', i2: 7, a: '', '2': 'fast'};
var f650_default = {id: '650', i1: '', i2: 7, a: '', '2': 'fast'};
var f651_default = {id: '651', i1: '', i2: 7, a: '', '2': 'fast'};
var f655_default = {id: '655', i1: '', i2: 7, a: '', '2': 'fast'};
var f852_default = {id: '852', i1: 1, i2: '', a: '', h: '', i: '', p:'', '9': ''};

var punctuation = {
                    f100: {a:'', b:'', c:',', d:',', e:',', last:'.'},
                    f240: {a:'', l:'.', last:''},
                    f245: {a:'', b:' :', c: ' /', n: '.', p:'.', last:'.'},
                    f246: {a:'', b:' :', n: '.', p:'.', last:''},
                    f264: {a:'', b:' :', c:',', last:'.'},
                    f300: {a:'', b:' :', c:' ;', last:'.', e:'+'},
                    f500: {a: '', last: '.'},
                    f504: {a: '', last: '.'},
                    f600: {a: '', b: ',', c: ',', d: ',', q: '', last: '.'},
                    f610: {a: '', b: '.', last: '.'},
                    f611: {a: '', last: '.'},
                    f630: {a: '', p: '.', last: '.'},
                    f650: {a: '', x: '', last: '.'},
                    f651: {a: '', z: '', last: '.'},
                    f655: {a: '', last: '.'}
};

var punctuation_undo = [];

/* punctuate subfield dom element and variable using rules in punctuation variable */
function punctuatesf(element, f, sf, lastID) {
    var i = $('#' + element).attr('id');
    var v = $('#' + element).val();
    console.log('i: ' + i + ' v: ' + v);
    var i_up = $('#' + element).prevAll('input[type=text]').eq(0).attr('id');
    var v_up = $('#' + element).prevAll('input[type=text]').eq(0).val();
    var fi = ElemToVar(i)[1];
    var sfi = ElemToVar(i)[2];
    var f_up = ElemToVar(i_up)[1];
    var sf_up = ElemToVar(i_up)[2];
    var fID_p = ElemIDtoStdElemID(i);
    var f_p = ElemToVar(fID_p)[1];
    console.log('current: ' + sfi + ' lastID: ' + lastID + ' sf_up: ' + sf_up);
    if (sf_up == 'i1' || sf_up == 'i2') {
        if (Object.is(lastID, sfi)) {
                console.log('last and current are the same');
                window[fi][sfi] = window[fi][sfi] + punctuation[f_p]['last'];
                punctuation_undo.push([fi, sfi, punctuation[f_p]['last']]);
                console.log('punctuation applied to current: ' + punctuation[f_p]['last']);
        }
        else {
            return;
        }
    }
    else {
        if (sfi == '2' || sfi == '9') {
            return;
        }
        else if (v == '') {
            if (v_up == '') {
                return;
            }
            else {
                if (Object.is(lastID, sf_up)) {
                    console.log('last and up are the same: pass');
                    return;
                }
                else {
                    window[f_up][sf_up] = window[f_up][sf_up] + punctuation[f_p][sf];
                    punctuation_undo.push([f_up, sf_up, punctuation[f_p][sf]]);
                    console.log('punctuation applied to previous subfield: ' + punctuation[f_p][sf]);
                }
            }
        }
        else {
            if (Object.is(lastID, sfi)) {
                console.log('last and current are the same');
                window[fi][sfi] = window[fi][sfi] + punctuation[f_p]['last'];
                punctuation_undo.push([fi, sfi, punctuation[f_p]['last']]);
                console.log('punctuation applied to current: ' + punctuation[f_p]['last']);
            }
            if (v_up == '') {
                return;
            }
            else {
                if (Object.is(lastID, sf_up)) {
                    console.log('last and up are the same: pass');
                    return;
                }
                else {
                window[f_up][sf_up] = window[f_up][sf_up] + punctuation[f_p][sf];
                punctuation_undo.push([f_up, sf_up, punctuation[f_p][sf]]);
                console.log('punctuation applied to previous subfield: ' + punctuation[f_p][sf]);
                }
            }
        }
    }
}

/* punctuate a whole field using the punctuatesf function */
function punctuate(element) {
    var divID = "#" + element + " :input[type=text]";
    var i = $(divID);
    var lastID = 'xxx';
    // look for last subfield with data in field
    for (var e = i.length-1; e >= 0; e = e-1) {
        element = i[e]['id'];
        f = ElemToVar(element)[1];
        sf = ElemToVar(element)[2];
        if (window[f][sf] != '') {
            var newObj = jQuery.extend(true, {}, sf);
            lastID = newObj[0]}
            console.log('lastID is: ' + lastID);
        if (sf == '2' || sf == '9') {lastID == 'xxx'; continue;}
        if (lastID != 'xxx') {break;}
    }
    for (var c = i.length-1; c >= 0; c = c-1) {
        element = i[c]['id'];
        f = ElemToVar(element)[1];
        sf = ElemToVar(element)[2];
        if (sf == 'i1' || sf == 'i2') {
            return;
        }
        else {
            punctuatesf(element, f, sf, lastID);
            console.log('punct ' + f + sf + ' 0', lastID);
        }
    }
}

/* undo last punctuation */
function undoPunct() {
    for (var i = 0, len = punctuation_undo.length; i < len; i++) {
        if (punctuation_undo[i][0]) {
            var f = punctuation_undo[i][0];
            var sf = punctuation_undo[i][1];
            var punct = punctuation_undo[i][2];
            console.log(punctuation_undo[i][0]);
            console.log(window[f][sf]);
            window[f][sf] = window[f][sf].slice(0, window[f][sf].length-punct.length);
            console.log(window[f][sf]);
        }
    }
    punctuation_undo = [];
}

/* String functions */
/* upper case first letter */
function upFirst(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* lower case all but first letter */
function lowerAll(string) {
    return string.toLowerCase();
}

/* function to replace a substring at a given position of a string */
function replaceAtPos(substring, string, position) {
    var endpos = position + substring.length;
    string = string.slice(0, position) + substring + string.slice(endpos, string.length);
    return string;
}

/* function that converts element field id to three variables field id (field and subfield): f100_1_a => f100_1.a, f100_1, a */
function ElemToVar(elementID) {
    var position = elementID.indexOf("_", elementID.indexOf("_") + 1);
    if (position == -1) {position = elementID.indexOf("_");}
    var fullcode = replaceAtPos('.', elementID, position);
    var fieldcode = elementID.substring(0, position);
    var subfieldcode = elementID.substring(position+1, elementID.length);
    return [fullcode, fieldcode, subfieldcode];
}

/* function that converts element field id to three variables field id (field and subfield): f100_1_a => f100_1.a, f100_1, a */
function ElemIDtoStdElemID(elementID) {
    var standardFieldID = elementID.replace(/_[0-9]/g, "");
    return standardFieldID;
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
function reset(field_number, sub, count) {
        var field = 'f' + String(field_number);
        if (count != undefined) {
             field = 'f' + String(field_number) + '_' + count;
        }
        var field_default = 'f' + field_number + '_default';
        var field_div_id = '';
        console.log(field);
        var tmp = (JSON.parse(JSON.stringify(window[field_default])));
        if (sub == undefined) {
            window[field] = tmp;
            for (var key in tmp) {
                
                if (key == 'id') {continue;}
                if (tmp[key] == undefined || tmp[key] == null) { tmp[key] = '';}
                field_div_id = 'f' + field_number + '_' + key;
                document.getElementById(field_div_id).value = tmp[key];
                console.log('field ' + field_div_id + ' has been reset');
            } 
        }
        else {
            window[field][sub] = tmp[sub];
            field_div_id = 'f' + String(field_number) + '_' + sub;
            if (count != undefined) {
                field_div_id = 'f' + String(field_number) + '_' + count  + '_' + sub;
            }
            if (tmp[sub] == undefined) { tmp[sub] = '';}
            document.getElementById(field_div_id).value = '';
            console.log('subfield ' + field_div_id + ' has been reset');
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

/* functions: add field, subfield and indicator based on default field parameters */
/* function:  add new field, param is a set of field default parameters, counter the number of the field for repeatable fields */
function addField(param, counter) {
    var field = undefined;
    field = jQuery('<div/>', {
        id: 'f'+ param.id + '_' + counter,
        class: 'generic', /*'g'+ param.id,*/
        text: param.id + ' '
    });
    // loop through the field's default elements, add them
    for(var property in param) {
        if (property == 2) {
            var numerical_subfield = addSub(property, param.id, param[property], counter);
        }
        else if (property == 'i1') {
            field.append(addInd(property, param.id, param.i1, counter));
        }
        else if (property == 'i2') {
            field.append(addInd(property, param.id, param.i2, counter));
        }
        else if (property == 'id') {
             continue;
        }
        else {
            field.append(addSub(property, param.id, param[property], counter));
        }
    }
    field.append(numerical_subfield);
    field.append("<input type='button' id = 'del_" + param.id + "_" + counter + "' class='del_buttons' value='del'>");
    //console.log("#g"+ param.id);
    $("#g"+ param.id).append(field);

    // loop through the field's default elements, add an event handler for each of them
    for(var prop in param) {
        if (prop == 'id') {
            continue;
        }
        else {
            //console.log(prop);
            eventHandler(param.id, counter, prop);
        }
    }
    deleteField(param.id, counter);
}

/* function: event handler for any new field, to be used from addField() */ 
function eventHandler(id, counter, prop) {
    $("#f"+ id + '_' + counter + '_' + prop).on('blur', function () {
                window['f'+ id + '_' + counter][prop] =  $(this).val();
                console.log('f'+ id + '_' + counter + '_' + prop + ': ' + window['f'+ id + '_' + counter][prop]);
            });
}

/* function: event handler to trigger button that deletes any new field, to be used from addField() */ 
function deleteField(id, counter) {
    $("#del_"+ id + '_' + counter).click(function(event){
                $('#f'+ id + '_' + counter).remove();
                window['f'+ id + '_' + counter] =  undefined;
                console.log('f'+ id + '_' + counter + ': removed');
            });
}

/* function remove field. Parameter is the full div id including the counter, for ex: f655_1 */
function removeField(divID) {
    $('#'+ divID).remove();
    window[divID] =  undefined;
    console.log(divID +': removed');
}

/* function: add new indicator, to be used from addField() */ 
function addInd(inum, field, val, counter) {
    var id = 'f' + field + '_' + counter + '_' + inum;
    //var cl = 'g' + field + '_' + inum;
    var cl = 'generic' + '_' + inum;
    var i = "<label for='" + id + "'>" + inum + "</label>\n<input type='text' class='" + cl + "' id='" + id + "' placeholder='" + inum + "' value='" + val + "' maxlength='1' pattern='[0-9]{1}'>\n";
    if (val == null) {
        i = "<label for='" + id + "'>" + inum + "</label>\n<input type='text' class='" + cl + "' id='" + id + "' disabled='disabled' maxlength='1' pattern='[0-9]{1}'></label>\n";
    }
    return i;
}

/* function: add new subfield, to be used from addField() */ 
function addSub(sub, field, val, counter) {
    var id = 'f' + field + '_' + counter + '_' + sub;
    var cl = 'g' + field + '_' + sub;
    if (val == undefined) {
        var i = "<label for='" + id + "'>" + sub + "</label>\n<input type='text' class='" + cl + "' id='" + id + "'>\n";
    }
    else {
        var i = "<label for='" + id + "'>" + sub + "</label>\n<input type='text' class='" + cl + "' id='" + id + "' value='" + val + "'>\n";
    }
    return i;
} 

/* function: insert new field added with addField functions, add DOM element */
function insertField() {
        var counter = 1;
        var group_id = 'g' + insert.id;
        if ($('#' + group_id).children().last().length) {
            var group_div = $('#' + group_id).children().last().attr('id');
            counter = parseInt(group_div.slice(-1))+1;
            console.log('group id: ' + group_id + ', counter: ' + counter);
        }
        var field_id = 'f' + insert.id + '_' + counter;
        if (subfields == '') {
            console.log('insert field using default parameters: f' + insert.id);
            window[field_id] = $.extend( true, {}, window['f'+ insert.id + '_default'] );
            addField(window[field_id], counter);
        }
        else {
            console.log('insert field using manual parameters: f' + insert.id);
            window[field_id] = $.extend( true, {}, insert );
            addField(insert, counter);
        }
        $('.insert').hide();
        $('#' + field_id + '_i1').focus();
        insert = {id: '', i1: '', i2: ''};
        document.getElementById('field_insert').value = insert.id;

        // bad solution: updates inforbox (late on i1, only works with field count 1)
        $("#main_form input, #main_form select").focusin(function() {
            var ib = document.getElementById('ib');
            id = this.id;
            $(".infobox").show();
            console.log(id);
            ib.innerHTML = infobox_DB[id];
        })
        return field_id;

}

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
        } else {
            $('#f008_date_2').show();
        }
    });

$('#f008_date_1').on('change', function () {
        f008_0710 = $(this).val();
        console.log('captured value: ' +f008_0710);
        f008 = replaceAtPos(f008_0710, f008, 7)
        console.log('008: ' + f008);
    });

$('#f008_date_2').on('blur', function () {
        f008_1114 = $(this).val();
        console.log('captured value: ' +f008_1114);
        f008 = replaceAtPos(f008_1114, f008, 11)
        console.log('008: ' + f008);
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
        if (window['added_by_f008_22'].id != '') {
                removeField(window['added_by_f008_22'].id);
            }
        if (f008_22 == 'j') {
            insert.id = '655';
            window['added_by_f008_22'].id = insertField();
            var field_id = window['added_by_f008_22'].id;
            window[field_id].a = 'Juvenile works';
            window['added_by_f008_22'].a = 'Juvenile works';
            document.getElementById(field_id + '_a').value = window[field_id].a;
        }
        else if ((f008_22 == 'd' || f008_22 == 'c')) {
            insert.id = '655';
            window['added_by_f008_22'].id = insertField();
            var field_id = window['added_by_f008_22'].id;
            window[field_id].a = 'Young adult works';
            window['added_by_f008_22'].a = 'Young adult works';
            document.getElementById(field_id + '_a').value = window[field_id].a;
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
    });

$('#f008_biography').on('blur', function () {
        f008_34 = $(this).val();
        console.log('captured value: ' +f008_34);
        f008 = replaceAtPos(f008_34, f008, 34)
        console.log('008: ' + f008);
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

$('#f852_a').on('blur', function () {
        f852.a = $(this).val();
        console.log('852#a: ' + f852.a);
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
                        // console.log(fast_data);
                        // Fast headings
                        for (var i = 1; i < fast_data.length; i++) {
                            console.log(fast_data[i]);
                            parseFast(fast_data[i]);
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
                    // f245a and f245b
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
                    // f300
                    if (icebean_data[5] != undefined) { 
                        f300.a = icebean_data[5] + ' pages' + plates;
                        document.getElementById('f300_a').value = f300.a;
                    }
                    if (icebean_data[6] != undefined) { 
                        f300.c = icebean_data[6] + ' cm';
                        document.getElementById('f300_c').value = f300.c;
                    }
                    // f852
                    f852.h = icebean_data[4];
                    if (f852.h == 'FIC') { f852.h = 'F'};
                    document.getElementById('f852_h').value = f852.h;
                    if (f852.h.substring(0, 3) > 0 && f852.h.substring(0, 3) < 1000) {
                        f852.j = 'DCX' + f852.h.substring(0, 3);
                    }
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
        //console.log(sf_id + ' --- ' + sf_val);
        fast[sf_id] = sf_val;
    }
    insert = jQuery.extend(true, {}, fast);
    fieldID = insertField();
    populateField(fieldID, fast);

}

function populateField(fieldID, data) {
    for(var property in data) {
            if (property == 'id') {
                 continue;
            }
            else {
                console.log(data);
                console.log(data[property]);
                window[fieldID][property] = data[property]
                if (property != 'punct') {
                    document.getElementById(fieldID +  '_' + property).value = data[property];
                }
            }
    }

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
                //unctuate('f245');
                //punctuate('f246_1');
                //console.log('adding punctuation to f100, f245, f246');
                // post all the variables that match the following pattern (fxxx or fxxx_n) 
                    var pattern = /^f[0-9]{3}(_[0-9])?$/;
                    var post_to_marc2 = {};
                    for (var varName in window) {
                        if ('undefined' === typeof window[varName]) { continue; }
                        if (pattern.test(varName)) {
                            console.log(varName);
                            //console.log(window[varName].punct);
                            if (window[varName].punct != 'no') {
                                punctuate(varName);
                            }
                            post_to_marc2[varName] = window[varName];
                        }
                    }
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