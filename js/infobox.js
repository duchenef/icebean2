/* TEMPLATE (fictitious field) */
$(function() {
    $("#fxxx_blahblah").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'blahblah';
    }).focusout(function () {
        $(".infobox").hide();
    });
});

/* Default infobox (field 008/6)*/
document.getElementById('ib').innerHTML = 'field 008 position 06 - Type of date<BR>\
        				t - Publication date and copyright date<BR>\
        				r - Reprint/reissue date and original date<BR>\
        				s - Single known date/probable date';;

/* MARC FIELDS */
$(function() {
    $("#f008_type_of_date").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 06 - Type of date<BR>\
        				t - Publication date and copyright date<BR>\
        				r - Reprint/reissue date and original date<BR>\
        				s - Single known date/probable date (Dynamic form: displays Date2 in field 008)';
    })
});

$(function() {
    $("#f008_date_1").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 07-10 - Date 1<BR>1-9 - Date digit';
    })
});

$(function() {
    $("#f008_date_2").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 11-14 - Date 2<BR>1-9 - Date digit';
    })
});

$(function() {
    $("#f008_place").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 15-17 - Place of publication, production, or execution<BR>\
        				Three or Two-character alphabetic code<BR>\
        				Common codes (<a target=\'_blank\' href=\'https://www.loc.gov/marc/countries/countries_code.html\'>or full list</a>):<BR>\
        				at	- Australia<BR>\
						be	- Belgium<BR>\
						bcc	- British Columbia<BR>\
						cau	- California<BR>\
						enk	- England<BR>\
						fr	- France<BR>\
						gw	- Germany<BR>\
						ie	- Ireland<BR>\
						ilu	- Illinois<BR>\
						it	- Italy<BR>\
						mau	- Massachusetts<BR>\
						nyu	- New York (State)<BR>\
						onc	- Ontario<BR>\
						quc	- Québec (Province)<BR>\
						sp	- Spain<BR>\
						stk	- Scotland<BR>\
						sz	- Switzerland<BR>\
						xx	- No place, unknown, or undetermined<BR>\
						xxc	- Canada<BR>\
						xxk	- United Kingdom<BR>\
						xxu	- United States<BR>\
						wlk	- Wales';
    })
});

$(function() {
    $("#f008_illustrations").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 18-21 - Illustrations<BR>\
        				Up to four (4) one-character alphabetic codes (recorded in alphabetical order)<BR>\
                        _ - No illustrations (leave blank or enter [space] to erase a value previously entered)\
        				a - Illustrations<BR>\
        				b - Maps<BR>\
						c - Portraits<BR>\
						d - Charts<BR>\
						e - Plans<BR>\
						f - Plates<BR>\
						g - Music<BR>\
						h - Facsimiles [...]<BR>\
						j - Genealogical tables [...]<BR>\
						o - Photographs';
    })
});

$(function() {
    $("#f008_target_audience").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 22 - Target audience<BR>\
        				One-character alphabetic code that describes the intellectual level of the target audience for which the material is intended<BR>\
        				_ - Unknown or not specified (leave blank or enter [space] to erase a value previously entered)<BR>\
						a - Preschool<BR>\
						b - Primary<BR>\
						c - Pre-adolescent<BR>\
						d - Adolescent<BR>\
						e - Adult<BR>\
						f - Specialized<BR>\
						g - General<BR>\
						j - Juvenile';
    })
});

$(function() {
    $("#f008_nature_of_content").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 24-27 - Nature of contents<BR>\
        				Up to four one-character codes that indicate whether a significant part of the item is or contains certain types of material<BR>\
        				_ - (leave blank or enter [space] to erase a value previously entered)<BR>\
						a - Abstracts/summaries<BR>\
						b - Bibliographies<BR>\
						c - Catalogs<BR>\
						d - Dictionaries<BR>\
						e - Encyclopedias<BR>\
						f - Handbooks [...]<BR>\
						k - Discographies<BR>\
						q - Filmographies [...]<BR>\
						r - Directories<BR>\
						s - Statistics';
    })
});

$(function() {
    $("#f008_index").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 31 - Index<BR>\
        				One-character numeric code that indicates whether the item includes an index to its own contents<BR>\
        				0 - No index<BR>\
        				1 - Index present';
    })
});

$(function() {
    $("#f008_literary_form").focusin(function() {
    	var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 33 - Literary form<BR>\
        				One-character code used to indicate the literary form of an item.<BR>\
        				Numeric codes 0 and 1 provide a generic identification of whether or not the item is a work of fiction.<BR>\
        				Alphabetic codes may be used to identify specific literary forms.<BR>\
        				0 - Not fiction (not further specified)<BR>\
						1 - Fiction (not further specified)<BR>\
						d - Dramas<BR>\
						e - Essays<BR>\
						f - Novels<BR>\
						h - Humor, satires, etc.<BR>\
						i - Letters<BR>\
						j - Short stories<BR>\
						m - Mixed forms<BR>\
						p - Poetry<BR>\
						s - Speeches<BR>\
						u - Unknown';
    })
});

$(function() {
    $("#f008_biography").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 34 - Biography<BR>\
                        One-character alphabetic code that indicates whether or not an item contains biographical material,<BR>\
                         and if so, what the biographical characteristics are.<BR>\
                        _ - No biographical material (leave blank or enter [space] to erase a value previously entered)<BR>\
                        a - Autobiography<BR>\
                        b - Individual biography<BR>\
                        c - Collective biography<BR>\
                        d - Contains biographical information';
    })
});

$(function() {
    $("#f008_language").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 008 position 35-37 - Language<BR>\
                        Three-character alphabetic code that indicates the language of the item.<BR>\
                        (Dynamic form: value is used to prefill fields 040b and 041a)<BR>\
                        Common codes (<a target=\'_blank\' href=\'https://www.loc.gov/marc/languages/\'>or full list</a>):<BR>\
                        ara - Arabic<BR>\
                        chi - Chinese<BR>\
                        dut - Dutch<BR>\
                        eng - English<BR>\
                        fre - French<BR>\
                        ger - German<BR>\
                        heb - Hebrew<BR>\
                        hin - Hindi<BR>\
                        ita - Italian<BR>\
                        jpn - Japanese<BR>\
                        kor - Korean<BR>\
                        rus - Russian<BR>\
                        spa - Spanish\
                        mul - multiple languages';
    })
});

$(function() {
    $("#f020_a").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 020 subfield a - International Standard Book Number<BR>\
                        10 or 13 characters ISBN code. ISBN 13 must begin with 978 or 979';
    })
});

$(function() {
    $("#f020_q").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 020 subfield q - Qualifying information<BR>\
                        A brief statement of qualifying information concerning the item associated with a number being recorded in subfield a\
                        (paperback)\
                        (hardback) etc..';
    })
});

$(function() {
    $("#f040_a").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 040 subfield a - Cataloging Source: Original cataloging agency<BR>\
                        MARC code for or the name of the organization(s) that created the original bibliographic record<BR>\
                        (use to identify the cataloguer\'s name: non-standard)';
    })
});

$(function() {
    $("#f040_b").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 040 subfield b - Cataloging Source: Language of cataloging<BR>\
                        MARC code for the language of cataloging in the record.<BR>\
                        Dynamic form: prefilled using value of 008 pos. 35-37.<BR>\
                        If left blank, default value will be \'eng\'.<BR>\
                        Common codes (<a target=\'_blank\' href=\'https://www.loc.gov/marc/languages/\'>or full list</a>):<BR>\
                        eng - English<BR>\
                        fre - French<BR>\
                        ger - German<BR>\
                        ita - Italian<BR>\
                        spa - Spanish';
    })
});

$(function() {
    $("#f040_d").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 040 subfield d - Cataloging Source: Modifying agency<BR>\
                        MARC code or the name of the organization responsible for modifying a MARC record.<BR>\
                        (use to identify the modifying cataloguer\'s name: non-standard)';
    })
});

$(function() {
    $("#f041_i1").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 041 indicator 1 - Language Code<BR>\
                        Whether the work is or includes a translation. The first indicator value is assigned from the content of the item itself.<BR>\
                        0 - Item not a translation/does not include a translation<BR>\
                        1 - Item is or includes a translation<BR>\
                        Dynamic form: displays subfield 041#h - Language code of original, displays field 240#al - Uniform Title';
    })
});

$(function() {
    $("#f041_a").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 041 subfield a - Language Code of text<BR>\
                        Language code in the first occurrence of subfield $a is also recorded in 008/35-37 (Language)<BR>\
                        Dynamic form: prefilled using value of 008 pos. 35-37.';
    })
});

$(function() {
    $("#f041_h").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 041 subfield h - Language code of original<BR>\
                        Language code(s) for original language.<BR>\
                        Language code in the first occurrence of subfield $a is also recorded in 008/35-37 (Language)<BR>\
                        Common codes (<a target=\'_blank\' href=\'https://www.loc.gov/marc/languages/\'>or full list</a>):<BR>\
                        ara - Arabic<BR>\
                        chi - Chinese<BR>\
                        dut - Dutch<BR>\
                        eng - English<BR>\
                        fre - French<BR>\
                        ger - German<BR>\
                        heb - Hebrew<BR>\
                        hin - Hindi<BR>\
                        ita - Italian<BR>\
                        jpn - Japanese<BR>\
                        kor - Korean<BR>\
                        rus - Russian<BR>\
                        spa - Spanish<BR>\
                        mul - multiple languages';

    })
});

$(function() {
    $("#f100_i1").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 100 indicator 1 - Main entry - Personal name<BR>\
                        Type of personal name entry element.<BR>\
                        0 - Forename<BR>\
                        1 - Surname (default)<BR>\
                        3 - Family name';
    })
});

$(function() {
    $("#f100_a").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 100 subfield a - Personal name (NR)<BR>\
                        Examples: <BR>\
                        100 1#$aMorgan, John Pierpont,$d1837-1913,$ecollector.<BR>\
                        100 3#$aFarquhar family.<BR>\
                        100 0#$aJohn,$cthe Baptist, Saint.';
    })
});

$(function() {
    $("#f100_d").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 100 subfield d - Dates associated with a name (NR)<BR>\
                        Examples: <BR>\
                        100 1#$aMorgan, John Pierpont,$d1837-1913,$ecollector.<BR>\
                        100 3#$aFarquhar family.<BR>\
                        100 0#$aJohn,$cthe Baptist, Saint.';
    })
});

$(function() {
    $("#f245_i1").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 245 indicator 1 - Title<BR>\
                        Whether a title added entry is made.<BR>\
                        0 - No added entry<BR>\
                        1 - Added entry <BR>\
                        Value 0 is always used when a 1XX heading field is not present in the record.<BR>\
                        Dynamic form: automatically set to 0 if field 100 is removed.';
    })
});

$(function() {
    $("#f245_i2").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 245 indicator 2 - Title<BR>\
                        Nonfiling characters.<BR>\
                        Dynamic form: automatically if the title begins with a definite or undefinite article.<BR>\
                        0 - No nonfiling characters<BR>\
                        1-9 - Number of nonfiling characters<BR>';
    })
});


$(function() {
    $("#f245_a").focusin(function() {
        var ib = document.getElementById('ib');
        $(".infobox").show();
        ib.innerHTML = 'field 245 subfield a - Title<BR>\
                        Title proper and alternative title, excluding the designation of the number or name of a part.';
    })
});