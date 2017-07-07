/* TFunction infobox update */
$(function() {
    $("#main_form input, #main_form select, #f505_a").focusin(function() {
    	var ib = document.getElementById('ib');
        id = this.id;
        $(".infobox").show();
        console.log(id);
        ib.innerHTML = infobox_DB[id];
    })
});

/* Default infobox (field 008/6)*/
$(document).ready(function() {
    document.getElementById('ib').innerHTML = infobox_DB.f008_type_of_date;
});

/* Infobox data */
var infobox_DB =    {
    f008_type_of_date: 'field 008 position 06 - Type of date<BR>\
                        t - Publication date and copyright date<BR>\
                        r - Reprint/reissue date and original date<BR>\
                        s - Single known date/probable date',
    f008_date_1: 'field 008 position 07-10 - Date 1<BR>1-9 - Date digit', 
    f008_date_2: 'field 008 position 11-14 - Date 2<BR>1-9 - Date digit',
    f008_place: 'field 008 position 15-17 - Place of publication, production, or execution<BR>\
                        Three or Two-character alphabetic code<BR>\
                        Common codes (<a target=\'_blank\' href=\'https://www.loc.gov/marc/countries/countries_code.html\'>or full list</a>):<BR>\
                        at  - Australia<BR>\
                        be  - Belgium<BR>\
                        bcc - British Columbia<BR>\
                        cau - California<BR>\
                        enk - England<BR>\
                        fr  - France<BR>\
                        gw  - Germany<BR>\
                        ie  - Ireland<BR>\
                        ilu - Illinois<BR>\
                        it  - Italy<BR>\
                        mau - Massachusetts<BR>\
                        nyu - New York (State)<BR>\
                        onc - Ontario<BR>\
                        quc - Québec (Province)<BR>\
                        sp  - Spain<BR>\
                        stk - Scotland<BR>\
                        sz  - Switzerland<BR>\
                        xx  - No place, unknown, or undetermined<BR>\
                        xxc - Canada<BR>\
                        xxk - United Kingdom<BR>\
                        xxu - United States<BR>\
                        wlk - Wales',  
    f008_illustrations: 'field 008 position 18-21 - Illustrations<BR>\
                        Up to four (4) one-character alphabetic codes (recorded in alphabetical order)<BR>\
                        _ - No illustrations (leave blank (reset) or enter [spaces] to erase previously entered values)\
                        a - Illustrations<BR>\
                        b - Maps<BR>\
                        c - Portraits<BR>\
                        d - Charts<BR>\
                        e - Plans<BR>\
                        f - Plates<BR>\
                        g - Music<BR>\
                        h - Facsimiles [...]<BR>\
                        j - Genealogical tables [...]<BR>\
                        o - Photographs',
    f008_target_audience: 'field 008 position 22 - Target audience<BR>\
                        One-character alphabetic code that describes the intellectual level of the target audience for which the material is intended<BR>\
                        _ - Unknown or not specified (leave blank or enter [space] to erase a value previously entered)<BR>\
                        a - Preschool<BR>\
                        b - Primary<BR>\
                        c - Pre-adolescent<BR>\
                        d - Adolescent<BR>\
                        e - Adult<BR>\
                        f - Specialized<BR>\
                        g - General<BR>\
                        j - Juvenile',
    f008_nature_of_content: 'field 008 position 24-27 - Nature of contents<BR>\
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
                        s - Statistics',
    f008_index: 'field 008 position 31 - Index<BR>\
                        One-character numeric code that indicates whether the item includes an index to its own contents<BR>\
                        (Dynamic form: value is used to display and prefill fields 500_1)<BR>\
                        0 - No index<BR>\
                        1 - Index present',
    f008_literary_form: 'field 008 position 33 - Literary form<BR>\
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
                        u - Unknown',
    f008_biography: 'field 008 position 34 - Biography<BR>\
                        One-character alphabetic code that indicates whether or not an item contains biographical material,<BR>\
                         and if so, what the biographical characteristics are.<BR>\
                        _ - No biographical material (leave blank or enter [space] to erase a value previously entered)<BR>\
                        a - Autobiography<BR>\
                        b - Individual biography<BR>\
                        c - Collective biography<BR>\
                        d - Contains biographical information',
    f008_language: 'field 008 position 35-37 - Language<BR>\
                        Three-character alphabetic code that indicates the language of the item.<BR>\
                        (Dynamic form: value is used to prefill fields 040b and 041a.\
                        Attention: if value is set to fre - French, all the fields previously created when validating field 008 position will be translated to French. This cannot be automatically undone)<BR>\
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
                        mul - multiple languages',
    f020_a: 'field 020 subfield a - International Standard Book Number<BR>\
                        10 or 13 characters ISBN code. ISBN 13 must begin with 978 or 979',
    f020_q: 'field 020 subfield q - Qualifying information<BR>\
                        A brief statement of qualifying information concerning the item associated with a number being recorded in subfield a\
                        (paperback)\
                        (hardback) etc..',
    f040_a: 'field 040 subfield a - Cataloging Source: Original cataloging agency<BR>\
                        MARC code for or the name of the organization(s) that created the original bibliographic record<BR>\
                        (use to identify the cataloguer\'s name: non-standard)<BR>\
                        Dynamic form: used to prefill 852a using the 1st four characters of this code (non-standard).',
    f040_b: 'field 040 subfield b - Cataloging Source: Language of cataloging<BR>\
                        MARC code for the language of cataloging in the record.<BR>\
                        Dynamic form: prefilled using value of 008 pos. 35-37.<BR>\
                        If left blank, default value will be \'eng\'.<BR>\
                        Common codes (<a target=\'_blank\' href=\'https://www.loc.gov/marc/languages/\'>or full list</a>):<BR>\
                        eng - English<BR>\
                        fre - French<BR>\
                        ger - German<BR>\
                        ita - Italian<BR>\
                        spa - Spanish',
    f040_d: 'field 040 subfield d - Cataloging Source: Modifying agency<BR>\
                        MARC code or the name of the organization responsible for modifying a MARC record.<BR>\
                        (use to identify the modifying cataloguer\'s name: non-standard)',
    f041_i1: 'field 041 indicator 1 - Language Code<BR>\
                        Whether the work is or includes a translation. The first indicator value is assigned from the content of the item itself.<BR>\
                        0 - Item not a translation/does not include a translation<BR>\
                        1 - Item is or includes a translation<BR>\
                        Dynamic form: displays subfield 041#h - Language code of original, displays field 240#al - Uniform Title',
    f041_a: 'field 041 subfield a - Language Code of text<BR>\
                        Language code in the first occurrence of subfield $a is also recorded in 008/35-37 (Language)<BR>\
                        Dynamic form: prefilled using value of 008 pos. 35-37.',
    f041_h: 'field 041 subfield h - Language code of original<BR>\
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
                        mul - multiple languages',
    f100_i1: 'field 100 indicator 1 - Main entry - Personal name<BR>\
                        Type of personal name entry element.<BR>\
                        0 - Forename<BR>\
                        1 - Surname (default)<BR>\
                        3 - Family name',
    f100_a: 'field 100 subfield a - Personal name<BR>\
                        Examples: <BR>\
                        100 1#$aMorgan, John Pierpont,$d1837-1913,$ecollector.<BR>\
                        100 3#$aFarquhar family.<BR>\
                        100 0#$aJohn,$cthe Baptist, Saint.',
    f100_q: 'field 100 subfield q - Fuller form of name<BR>\
                        More complete form of part of the name that is in subfield $a.<BR>\
                        Examples: <BR>\
                        100 1#$aMorgan, John Pierpont,$d1837-1913,$ecollector.<BR>\
                        100 1#$aBeeton,$cMrs.$q(Isabella Mary),$d1836-1865.<BR>\
                        100 0#$aJohn,$cthe Baptist, Saint.',
    f100_d: 'field 100 subfield d - Dates associated with a name<BR>\
                        Dates of birth, death, or flourishing or any other date used with a name. A qualifier used with the date (e.g., b., d., ca., fl., ?, cent.) is also contained in subfield $d.<BR>\
                        Examples: <BR>\
                        100 1#$aMorgan, John Pierpont,$d1837-1913,$ecollector.<BR>\
                        100 3#$aFarquhar family.<BR>\
                        100 0#$aJohn,$cthe Baptist, Saint.',
    f100_e: 'field 100 subfield e - Relator term<BR>\
                        Designation of function that describes the relationship between a name and a work, e.g., ed., comp., ill., tr., collector, joint author.<BR>\
                        Examples: <BR>\
                        100 1#$aMorgan, John Pierpont,$d1837-1913,$ecollector.<BR>\
                        100 3#$aFarquhar family.<BR>\
                        100 0#$aJohn,$cthe Baptist, Saint.',
    f240_i1: 'field 240 indicator 1 - Uniform title printed or displayed<BR>\
                        Whether or not the uniform title is printed or displayed.<BR>\
                        0 - Not printed or displayed<BR>\
                        1 - Printed or displayed',
    f240_i2: 'field 240 indicator 2 - Nonfiling characters<BR>\
                        (similar to 245a)',
    f240_a: 'field 240 subfield a - Uniform Title<BR>\
                        (use to identify the item\'s original title: non-standard).',
    f240_l: 'field 240 subfield l - Language of a work<BR>\
                        Name of the language used in a uniform title field.<BR>\
                        (should be identical to 008 pos. 35-35 and to 041a)',
    f245_i1: 'field 245 indicator 1 - Title<BR>\
                        Whether a title added entry is made.<BR>\
                        0 - No added entry<BR>\
                        1 - Added entry <BR>\
                        Value 0 is always used when a 1XX heading field is not present in the record.<BR>\
                        Dynamic form: automatically set to 0 if field 100 is removed.',
    f245_i2: 'field 245 indicator 2 - Title<BR>\
                        Nonfiling characters.<BR>\
                        Dynamic form: automatically if the title begins with a definite or undefinite article.<BR>\
                        0 - No nonfiling characters<BR>\
                        1-9 - Number of nonfiling characters<BR>',
    f245_a: 'field 245 subfield a - Title<BR>\
                        Title proper and alternative title, excluding the designation of the number or name of a part.',
    f245_b: 'field 245 subfield b - Remainder of title<BR>\
                        Data includes parallel titles, titles subsequent to the first (in items lacking a collective title), and other title information.',
    f245_c: 'field 245 subfield c - Statement of responsibility, etc.<BR>\
                        First statement of responsibility and/or remaining data in the field that has not been subfielded by one of the other subfield codes.',
    f246_1_i1: 'field 246 - Varying Form of Title (R)<BR>\
                        Indicator 1 - Note/added entry controller<BR>\
                        0 - Note, no added entry<BR>\
                        1 - Note, added entry<BR>\
                        2 - No note, no added entry<BR>\
                        3 - No note, added entry',
    f246_1_i2: 'field 246 - Varying Form of Title (R)<BR>\
                        Indicator 2 - Type of title<BR>\
                        # - No type specified<BR>\
                        0 - Portion of title<BR>\
                        1 - Parallel title<BR>\
                        2 - Distinctive title<BR>\
                        3 - Other title<BR>\
                        4 - Cover title<BR>\
                        5 - Added title page title<BR>\
                        6 - Caption title<BR>\
                        7 - Running title<BR>\
                        8 - Spine title',
    f246_1_a: 'field 246 - Varying Form of Title (R)<BR>\
                        a - Title proper/short title (NR)<BR>\
                        Title proper and alternative title, excluding the designation of the number or name of a part.',
    f246_1_b: 'field 246 - Varying Form of Title (R)<BR>\
                        b - Remainder of title (NR)<BR>\
                        Data includes parallel titles, titles subsequent to the first (in items lacking a collective title), and other title information.',
    f250_1_a: 'field 250 - 250 - Edition Statement (R)<BR>\
                        subfield a - Edition Statement<BR>\
                        Edition statement that usually consists of numeric and alphabetic characters and accompanying words and/or abbreviations.',
    f264_1_i1: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        Indicator 1 -  Sequence of statements<BR>\
                        # - Not applicable/No information provided/Earliest (Used when a resource is first cataloged.)<BR>\
                        2 - Intervening (Used when the place or publisher changes)<BR>\
                        3 - Current/Latest (Same as 2, but use for the current or latest statement only',
    f264_1_i2: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        Indicator 2 -  Function of entity<BR>\
                        0 - Production<BR>\
                        1 - Publication<BR>\
                        2 - Distribution<BR>\
                        3 - Manufacture<BR>\
                        4 - Copyright notice date',
    f264_1_a: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield a - Place of production, publication, distribution, manufacture',
    f264_1_b: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield b - Name of producer, publisher, distributor, manufacturer',
    f264_1_c: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield c - Date of production, publication, distribution, manufacture, or copyright notice',
    f264_2_i1: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        Indicator 1 -  Sequence of statements<BR>\
                        # - Not applicable/No information provided/Earliest (Used when a resource is first cataloged.)<BR>\
                        2 - Intervening (Used when the place or publisher changes)<BR>\
                        3 - Current/Latest (Same as 2, but use for the current or latest statement only',
    f264_2_i2: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        Indicator 2 -  Function of entity<BR>\
                        0 - Production<BR>\
                        1 - Publication<BR>\
                        2 - Distribution<BR>\
                        3 - Manufacture<BR>\
                        4 - Copyright notice date',
    f264_2_a: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield a - Place of production, publication, distribution, manufacture',
    f264_2_b: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield b - Name of producer, publisher, distributor, manufacturer',
    f264_2_c: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield c - Date of production, publication, distribution, manufacture, or copyright notice',
    f300_a: 'field 300 - Physical Description (R)<BR>\
                        subfield a - Extent (R)<BR>\
                        Number of physical pages, volumes etc. of each type of unit.',
    f300_b: 'field 300 - Physical Description (R)<BR>\
                        subfield b - Other physical details (NR)<BR>\
                        Physical characteristics such as illustrative matter, coloration etc.',
    f300_c: 'field 300 - Physical Description (R)<BR>\
                        subfield c - Dimensions (R)<BR>\
                        Expressed in centimeters, millimeters, or inches.',
    f300_e: 'field 300 - Physical Description (R)<BR>\
                        subfield e - Accompanying material (NR)<BR>\
                        May include a parenthetical physical description of the accompanying material.',
    f490_1_i1: 'field 490 - Series Statement (R)<BR>\
                        Indicator 1 - Series tracing policy<BR>\
                        0 - Series not traced<BR>\
                        1 - Series traced',
    f490_1_a: 'field 490 - Series Statement (R)<BR>\
                        Subfield a - Series statement<BR>\
                        Series title that may also contain a statement of responsibility or other title information.',
    f490_1_v: 'field 490 - Series Statement (R)<BR>\
                        Subfield v - Volume/sequential designation<BR>\
                        Volume number or other sequential designation used in a series statement.',
    f490_1_x: 'field 490 - Series Statement (R)<BR>\
                        Subfield x - International Standard Serial Number<BR>\
                        International Standard Serial Number (ISSN) for a series title given in a series statement.',
    f500_1_a: 'field 500 - General Note (R)<BR>\
                        Subfield a - General note<BR>\
                        Note that provides general information for which a specialized note field (i.e., a specific 5XX field) has not been defined.',
    f500_2_a: 'field 500 - General Note (R)<BR>\
                        Subfield a - General note<BR>\
                        Note that provides general information for which a specialized note field (i.e., a specific 5XX field) has not been defined.',
    f505_1_i1: 'field 505 - Formatted Contents Note (R)<BR>\
                        Indicator 1 - Display constant controller<BR>\
                        Controls the generation of an introductory phrase.<BR>\
                        0 - Contents<BR>\
                        1 - Incomplete contents<BR>\
                        2 - Partial contents<BR>\
                        8 - No display constant generated',
    f505_1_i2: 'field 505 - Formatted Contents Note (R)<BR>\
                        Indicator 2 - Level of content designation<BR>\
                        Level of content designation that has been provided for the data recorded in the field.<BR>\
                        _ - Basic<BR>\
                        0 - Enhanced<BR>',
    f505_1_a: 'field 505 - Formatted Contents Note (R)<BR>\
                        Subfield a - Formatted contents note<BR>\
                        Formatted contents note, whether complete, incomplete, or partial when the second indicator is basic.<BR>',
    f520_i1: "field 520 - Summary, Etc. (R)<BR>\
                        indicator 1 - Display constant controller<BR>\
                        Controls the generation of a display constant preceding the information.<BR>\
                        0 - Subject <BR>\
                        1 - Review <BR>\
                        2 - Scope and content <BR>\
                        3 - Abstract <BR>\
                        4 - Content advice <BR>\
                        8 - No display constant generated (default)<BR>\
                        _ - Summary<BR>", 
    f520_a: 'field 520 - Summary, Etc. (R)<BR>\
                        sufbield a - Summary, etc<BR>\
                        Text of the summary, abstract, review, etc.<BR>\
                        Note: field 520 is normally repeatable, but this is not currently supported by the Icebean 2',
    f521_1_i1: "field 521 - Target Audience Note (R)<BR>\
                        Indicator 1 - Display constant controller<BR>Controls the generation of a display constant preceding the note.<BR>_ - Audience<BR>0 - Reading grade level<BR>1 - Interest age level<BR>2 - Interest grade level<BR>3 - Special audience characteristics<BR>    8 - No display constant generated (default)<BR>",
    f521_1_a: "field 521 - Target Audience Note (R)<BR>\
                        subfield a - Target audience note (R) <BR>\
                        Text of the note.",
    f586_1_i1: "field 586 - Awards Note (R)<BR>\
                        Indicator 1 - Display constant controller<BR>\
                        Controls the generation of an introductory phrase.<BR>\
                        _ - Awards<BR>\
                        8 - No display constant generated (default)<BR>",
    f586_1_a: "field 586 - Awards Note (R)<BR>\
                        subfield a - Display constant controller<BR>\
                        Entire text of the note<BR>\
                        Ex.: 586 __ $aNational Book Award, 1981<BR>",
    f852_i1: 'field 852 indicator 1',
    f852_i2: 'field 852 indicator 2',
    f852_a: 'field 852 subfield a - Location (NR) <BR>\
                        Dynamic form: pre-filled using value of 040a (1st four char.)',
    f852_h: 'field 852 subfield h Classification part (NR) (Dewey) ',
    f852_i: 'field 852 subfield i Item part (R)',
    f852_p: 'field 852 subfield p Piece designation (NR) (Barcode)',
    f852_9: 'field 852 subfield 9 Price',
    help: ' Fill in the blanks! Two important fields are 020#a, as the Icebean cannot look for data on the Internet if no valid ISBN is specified,\
                        and 040#a (or d), as the cataloger\'s code will be used to create and retrieve record and batch files<BR>\
                        Available shortcuts : <BR>\
                        CTRL + ALT + H: show this help sheet<BR>\
                        CTRL + ENTER: submit the current ISBN to the Icebean<BR>\
                        CTRL + INS: insert a new field<BR>\
                        CTRL + HOME: insert a new fast subject heading field<BR>\
                        CTRL + DEL: display the tools<BR>\
                        CTRL + END: display the image resizer tool<BR>\
                        CTRL + ALT + END: reset the cataloging form (All data will be lost)<BR>\
                        CTRL + ALT + I: inspect the content of current user\'s last saved record and batch file<BR>\
                        CTRL + ALT + R: convert onscreen data to a MARC record<BR>\
                        CTRL + ALT + B: copy the last saved MARC record the the batch file<BR>\
                        CTRL + ALT + D: delete the current ISBN (as displayed in 020#a) from the batch file<BR>\
                        CTRL + ALT + C: clear the batch file. All saved data will be lost',
    title_select: 'Template selection.  This will download values and populate the following MARC fields: <BR>f008: place code; frequency code; regularity code; language code<BR>\
                        f022a: ISSN<BR>\
                        f245a: title<BR>\
                        f264a: place of publication; f264b: publisher<BR>\
                        f300a: frequency<BR>\
                        f610, 650 or 650: permanent fast or ram subsject headings<BR>\
                        f655: form (in French or in English)<BR>\
                        f852: classification code; 852p: barcode prefix; 852_9: Price<BR>\
                        f856u: url.',
    vol_input: 'Volume number. This will be used in field 362. Not mandatory',
    num_input: 'Number. This will be used in field 362 and in field 245 if vol. is left empty.',
    date_input: 'Enter date in ISO format: YYYYMMDD or YYYYMM. This will be used in field 245a (ISO format, making it possible to sort issues by date), 264c (year only), 362a, 852p (barcode: Prefix + DDMMYY.',
    f022_a: 'ISSN number. Imported from template.',
    f264_i1: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        Indicator 1 -  Sequence of statements<BR>\
                        # - Not applicable/No information provided/Earliest (Used when a resource is first cataloged.)<BR>\
                        2 - Intervening (Used when the place or publisher changes)<BR>\
                        3 - Current/Latest (Same as 2, but use for the current or latest statement only',
    f264_i2: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        Indicator 2 -  Function of entity<BR>\
                        0 - Production<BR>\
                        1 - Publication<BR>\
                        2 - Distribution<BR>\
                        3 - Manufacture<BR>\
                        4 - Copyright notice date',
    f264_a: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield a - Place of production, publication, distribution, manufacture',
    f264_b: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield b - Name of producer, publisher, distributor, manufacturer',
    f264_c: 'field 264 - Production, Publication, Distribution, Manufacture, and Copyright Notice (R)<BR>\
                        subfield c - Date of production, publication, distribution, manufacture, or copyright notice',
    f310_a: 'Frequency. Imported from template.',
    f362_a: 'Date of publication / Sequential designation. Built from volume, number and date form fields',
    f505_i1: 'field 505 - Formatted Contents Note (R)<BR>\
                        Indicator 1 - Display constant controller<BR>\
                        Controls the generation of an introductory phrase.<BR>\
                        0 - Contents<BR>\
                        1 - Incomplete contents<BR>\
                        2 - Partial contents<BR>\
                        8 - No display constant generated',
    f505_i2: 'field 505 - Formatted Contents Note (R)<BR>\
                        Indicator 2 - Level of content designation<BR>\
                        Level of content designation that has been provided for the data recorded in the field.<BR>\
                        _ - Basic<BR>\
                        0 - Enhanced<BR>',
    f505_a: 'field 505 - Formatted Contents Note (R)<BR>\
                        Subfield a - Formatted contents note<BR>\
                        Type the names of the articles included in the periodical\s issue, separated with a double dash (--). The first item (generally the main title on the magazine\'s cover will be automatically copied to 245b',
    f852_k: 'field 852 - subfield k prefix (NR) (PER for periodicals is default)'
}

/* infobox var assignment for field buttons */
infobox_DB.add_f040_d = infobox_DB.f040_d;
infobox_DB.add_f100_q = infobox_DB.f100_q;
infobox_DB.add_f100_d = infobox_DB.f100_d;
infobox_DB.add_f100_e = infobox_DB.f100_e;
infobox_DB.add_f245_b = infobox_DB.f245_b;
infobox_DB.add_f300_b = infobox_DB.f300_b;
infobox_DB.add_f300_e = infobox_DB.f300_e;
