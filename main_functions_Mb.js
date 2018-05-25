function Youpilou() {
	console.log('Youpilou');
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
            if (f008_3537 == 'fre' && insert.id.charAt(0) == '6') {
                window[field_id] = $.extend( true, {}, window['f'+ insert.id + '_default_fr'] );
            }
            else {
                window[field_id] = $.extend( true, {}, window['f'+ insert.id + '_default'] );
            }
            addField(window[field_id], counter);
        }
        else {
            console.log('insert field using manual parameters: f' + insert.id);
            window[field_id] = $.extend( true, {}, insert );
            addField(insert, counter);
        }
        $('.insert').hide();
        // FOCUS on a or c (for 264c)
        if ($('#' + field_id + '_c').length > 0) {
            $('#' + field_id + '_c').focus();
            ib.innerHTML = infobox_DB[field_id + '_c'];
        }
        if ($('#' + field_id + '_a').length > 0) {
            $('#' + field_id + '_a').focus();
            ib.innerHTML = infobox_DB[field_id + '_a'];
        }

        insert = {id: '', i1: '', i2: ''};
            document.getElementById('field_insert').value = insert.id;
                $('#i1_insert').prop('checked', true);
                $('#i2_insert').prop('checked', true);
                document.getElementById('subfields_insert').value = '';
                subfields = '';
                insert = insert = {id: '', i1: '', i2: ''};
            document.getElementById('field_insert').value = insert.id;

        // bad solution: updates infobox (late on i1, only works with field count 1)
        $("#main_form input, #main_form select").focusin(function() {
            var ib = document.getElementById('ib');
            id = this.id;
            $(".infobox").show();
            console.log(id);
            ib.innerHTML = infobox_DB[id];
        })
        return field_id;

}

function insertFieldAuto() {
		console.log(insert.id);
        var counter = 1;
        var group_id = 'g' + insert.id;
        
        if ($('#' + group_id).children().last().length) {
            var group_div = $('#' + group_id).children().last().attr('id');
            counter = parseInt(group_div.slice(-1))+1;
            //console.log('group id: ' + group_id + ', counter: ' + counter);
        }
        var field_id = 'f' + insert.id + '_' + counter;
        
        console.log('insert field using automatic parameters: f' + insert.id);
        window[field_id] = $.extend( true, {}, insert );
        addField(insert, counter);
        insert = {id: '', i1: '', i2: ''};
        document.getElementById('field_insert').value = insert.id;

        // bad solution: updates infobox (late on i1, only works with field count 1)
        $("#main_form input, #main_form select").focusin(function() {
            var ib = document.getElementById('ib');
            id = this.id;
            $(".infobox").show();
            console.log(id);
            ib.innerHTML = infobox_DB[id];
        })
        return field_id;
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
        else if (property == 'id' || property == 'punct') {
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

function populateField(fieldID, data) {
    for(var property in data) {
            if (property == 'id') {
                 continue;
            }
            else {
                //console.log(data);
                //console.log(data[property]);
                window[fieldID][property] = data[property]
                if (property != 'punct') {
                    //console.log(fieldID +  '_' + property);
                    document.getElementById(fieldID +  '_' + property).value = data[property];
                }
            }
    }
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
    var i = "<label for='" + id + "'>" + inum + "</label>\n<input type='text' class='" + cl + "' id='" + id + "' placeholder='" + inum + "' value='" + val + "' maxlength='1' pattern='[0-9 ]{1}'>\n";
    if (val == null) {
        i = "<label for='" + id + "'>" + inum + "</label>\n<input type='text' class='" + cl + "' id='" + id + "' disabled='disabled' maxlength='1' pattern='[0-9 ]{1}'></label>\n";
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

/* function: reset field or subfield to default values */
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

/* punctuate subfield dom element and variable using rules in punctuation variable */
function punctuatesf(element, f, sf, lastID) {
    var i = $('#' + element).attr('id');
    var v = $('#' + element).val();
    //console.log('i: ' + i + ' v: ' + v);
    var i_up = $('#' + element).prevAll('input[type=text]').eq(0).attr('id');
    var v_up = $('#' + element).prevAll('input[type=text]').eq(0).val();
    var fi = ElemToVar(i)[1];
    var sfi = ElemToVar(i)[2];
    var f_up = ElemToVar(i_up)[1];
    var sf_up = ElemToVar(i_up)[2];
    var fID_p = ElemIDtoStdElemID(i);
    var f_p = ElemToVar(fID_p)[1];
    //console.log('current: ' + sfi + ' lastID: ' + lastID + ' sf_up: ' + sf_up);
    if (sf_up == 'i1' || sf_up == 'i2') {
        if (Object.is(lastID, sfi)) {
                //console.log('last and current are the same');
                // This is for 490 when a is alone: a is punctuated, last is not
                if (punctuation[f_p]['last'] == '') {
                    window[fi][sfi] = window[fi][sfi] + punctuation[f_p]['a'];
                    punctuation_undo.push([fi, sfi, punctuation[f_p]['a']]);
                    //console.log('punctuation applied to current using current field\'s value: ' + punctuation[f_p]['a']);
                }
                else {
                    window[fi][sfi] = window[fi][sfi] + punctuation[f_p]['last'];
                    punctuation_undo.push([fi, sfi, punctuation[f_p]['last']]);
                    //console.log('punctuation applied to current: ' + punctuation[f_p]['last']);
                }
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
                    //console.log('last and up are the same: pass');
                    return;
                }
                else {
                    window[f_up][sf_up] = window[f_up][sf_up] + punctuation[f_p][sf];
                    punctuation_undo.push([f_up, sf_up, punctuation[f_p][sf]]);
                    //console.log('punctuation applied to previous subfield: ' + punctuation[f_p][sf]);
                }
            }
        }
        else {
            if (Object.is(lastID, sfi)) {
                //console.log('last and current are the same');
                window[fi][sfi] = window[fi][sfi] + punctuation[f_p]['last'];
                punctuation_undo.push([fi, sfi, punctuation[f_p]['last']]);
                //console.log('punctuation applied to current: ' + punctuation[f_p]['last']);
            }
            if (v_up == '') {
                return;
            }
            else {
                if (Object.is(lastID, sf_up)) {
                    //console.log('last and up are the same: pass');
                    return;
                }
                else {
                window[f_up][sf_up] = window[f_up][sf_up] + punctuation[f_p][sf];
                punctuation_undo.push([f_up, sf_up, punctuation[f_p][sf]]);
                //console.log('punctuation applied to previous subfield: ' + punctuation[f_p][sf]);
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
    // console.log('punctuate ' + element);
    // look for last subfield with data in field
    for (var e = i.length-1; e >= 0; e = e-1) {
        element = i[e]['id'];
        f = ElemToVar(element)[1];
        sf = ElemToVar(element)[2];
        if (window[f][sf] != '') {
            var newObj = jQuery.extend(true, {}, sf);
            lastID = newObj[0]}
            //console.log('lastID is: ' + lastID);
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
            //console.log('punct ' + f + sf + ' 0', lastID);
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
            console.log('punct undo. f: '+ punctuation_undo[i][0] + ', sf: ' + punctuation_undo[i][1] + ', punct: ' + punctuation_undo[i][2]);
            //console.log(window[f][sf]);
            if (window[f] != undefined) {
                console.log(window[f]);
                if (window[f][sf] != undefined) {
                    var punct_len = punct.length;
                    var field_match = window[f][sf].slice(window[f][sf].length-punct.length, window[f][sf].length);
                    console.log('field_match: ' + field_match);
                    if (punct == field_match) {
             	   	  window[f][sf] = window[f][sf].slice(0, window[f][sf].length-punct.length);
                   }
                	console.log('field after punct undo: ' + window[f][sf]);
            	}
            }
        }
    }
    window.punctuation_undo = [];
    console.log('punctuation_undo has been cleared');
    console.log(punctuation_undo);
}

/* Proper nouns */
function properNouns(f, sf, sf_string) {
    $.get('resources/proper_nouns.txt', function(data) {
        var words = sf_string.split(/ |\'/);
        //console.log(words);
        //console.log(data);
        for (var i = 0; i< words.length; i++) {
            if (data.toLowerCase().indexOf(' '+words[i]+',')>-1) {
                //console.log(' '+words[i]+',');
                //console.log(data.toLowerCase().indexOf(' '+words[i]+','));
                var capWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                //console.log(capWord);
                sf_string = sf_string.replace(words[i], capWord);
            }
        }
    //console.log(sf_string);
    window[f][sf] = sf_string;
    document.getElementById(f+'_'+sf).value = sf_string;
    console.log('Proper nouns check has been applied to '+f+sf);
    }, 'text');
}

function parseTitle(full_title) {
    if (full_title.indexOf(':') != -1) {
        f245.a = full_title.slice(0, full_title.indexOf(':'));
        f245.b = full_title.slice(full_title.indexOf(':')+2, full_title.length);
    }
    else { f245.a = f245.a;}
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
}

function parseAuthor(author) {
    var surname = author.slice(author.indexOf(' ')+1, author.length);
    var firstname = author.slice(0, author.indexOf(' '));
    f100.a = surname + ', ' + firstname;
    document.getElementById('f100_a').value = f100.a;
    f852.i = surname.substring(0, 3).toUpperCase();
    document.getElementById('f852_i').value = f852.i;
    f245.c = author;
    document.getElementById('f245_c').value = f245.c;
}

function IDGenerator() {
        return '_' + Math.random().toString(36).substr(2, 9);
     }

// MARC and FILE MANAGEMENT FUNCTIONS
function toMarc() {
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
                    post_to_marc2.usr = {id: user_id};
                    document.getElementById("rec_link").href = "./batch/marcy"+user_id+".mrc";
                    document.getElementById("bat_link").href = "./batch/batch"+user_id+".mrc";
                    //console.log(post_to_marc2);
                    console.log('punctuation has been applied');
                // actual post
                if (/^\d{4}-\d{3}[\dxX]$/.test(f022.a)) {
                    $('#footer').html('marc record has been created and saved (isbn: '+f022.a+')');
                    console.log('writing marc');
                    $.post( 
                        "marc_record.php",
                        post_to_marc2,
                        function(data) {
                        var marc_data = data.split('~');
                        $('#ib').html(marc_data);
                  }
               ); 
               }
               else {
                   $('#footer').html('isbn not set, marc record was not created');
               }
}

function readMarc() {
     console.log('click: read files');
                $.post( 
                  "marc_batch_read.php",
                  { user_id: user_id },
                  function(data) {
                     var read_data = data;
                     $('#ib').html(read_data);
                     $('#footer').html('file inspector has been launched');
                  }
               );  
}

function toBatch() {
    console.log('click: to batch');
                $.post( 
                  "marc_batch.php",
                  { isbn: f022.a, user_id: user_id},
                  function(data) {
                     var marc_batch = data;
                     $('#ib').html(marc_batch);
                     $('#footer').html('the following record was added the batch file: '+f022.a + " " + f245.a + " " + f245.b);
                  }
               ); 
}

function removeFromBatch() {
    console.log('click: remove from batch');
                $.post( 
                  "marc_batch_remove.php",
                  { isbn: f022.a, user_id: user_id },
                  function(data) {
                     var remove_data = data;
                     $('#ib').html(remove_data);
                     $('#footer').html('the following record was removed from the batch file: '+f022.a + " " + f245.a + " " + f245.b);
                  }
               );    
}

function clearBatch() {
    console.log('click: clear batch');
                if (window.confirm("Are you sure?")) {
                    $.post( 
                        "marc_batch_clear.php",
                        { isbn: f022.a, user_id: user_id },
                        function(data) {
                         var clear_data = data;
                         $('#ib').html(clear_data);
                         $('#footer').html('batch has been cleared');
                        }
                    );    
                }
}

function stats() {
    console.log('statistics');
                time_end = event.timeStamp;
                time_diff = time_end - time_start;
                console.log('Cataloguing finished at: ' + time_end);
                console.log('Cataloguing time: ' + (parseInt(time_diff/1000)) + ' seconds');
                cat_stats = f022.a + "\t" + f245.a + "\t" + f245.b + "\t" + "\t" + (parseInt(time_diff/1000)) + "s";
                $('#footer').html('active record: '+f022.a + " " + f245.a + " " + f245.b + " " + '// Cataloguing time: ' + (parseInt(time_diff/1000)) + ' seconds');
                $.post( 
                  "./php/fd_marc_stats.php",
                  { cat_stats: cat_stats, user_id: user_id },
                  function(data) {
                     var stats_data = data;
                     console.log(stats_data);//$('#ib').html(stats_data);
                  }
               );    
}

function helpIB() {
    console.log('click: help')
    ib.innerHTML = infobox_DB['help'];
    $('#footer').html('Displaying help in the infobox');
}

function dateToText(date) {
    var f_YYYY = date.substring(0, 4);
    var f_YY = date.substring(2, 4);
    var f_MM = date.substring(4, 6);
    if (date.substring(6, 8).length > 0) {
        var f_DD = date.substring(6, 8);
    }
    else {
        var f_DD = '00';
    }
    var array = [];
    var english = '';
    var french = '';
    switch (f_MM) {
        case '01': 
            english = 'January';
            french = 'janvier';
            break;
        case '02': 
            english = 'February';
            french = 'f\xE9vrier';
            break;
        case '03': 
            english = 'March';
            french = 'mars';
            break;
        case '04': 
            english = 'April';
            french = 'avril';
            break;
        case '05': 
            english = 'May';
            french = 'mai';
            break;
        case '06': 
            english = 'June';
            french = 'juin';
            break;
        case '07': 
            english = 'July';
            french = 'juillet';
            break;
        case '08': 
            english = 'August';
            french = 'Ao\xFBt';
            break;
        case '09': 
            english = 'September';
            french = 'septembre';
            break;
        case '10': 
            english = 'October';
            french = 'octobre';
            break;
        case '11': 
            english = 'November';
            french = 'novembre';
            break;
        case '12': 
            english = 'December';
            french = 'D\xE9cembre';
            break;
    }
    var plain_date_english;
    var plain_date_french;

    if (f_DD == '' || f_DD == '00') {
        plain_date_english = english + ' ' + f_YYYY;
        plain_date_french = french + ' ' + f_YYYY;
    }
    else {
        plain_date_english =  f_DD + ' ' + english + ' ' + f_YYYY;
        plain_date_french =  f_DD + ' ' + french + ' ' + f_YYYY;
    }

    return [plain_date_english, plain_date_french]
}