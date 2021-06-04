
var currentSuggestIndexDefault = "suggestall";  //initial default value

/*function setUpPage() {
// connect the autoSubject to the input areas
    $('#fastLookup').autocomplete(   {
          source: autoSubjectExample, 
          minLength: 1,
       select: function(event, ui) {
              $('#exampleXtra').html("&nbsp; Facet <b>"+ getTypeFromTag(ui.item.tag)+ "</b>");
          } //end select
      } 
   ).data( "autocomplete" )._renderItem = function( ul, item ) { formatSuggest(ul, item);};

}  //end setUpPage()*/


function setUpPage() {
// connect the autoSubject to the input areas
    jQuery('#fastLookup').autocomplete(   {
          source: autoSubjectExample, 
          minLength: 1,
       select: function(event, ui) {
              /*jQuery('#exampleXtra').html("&nbsp;"+ getTypeFromTag(ui.item.tag)+ " / "+ ui.item.idroot);*/
              var fast = {};
              fast.id = (ui.item.tag +'').replace('1', '6');
              fast.i1 = ui.item.indicator;
              fast.i2 = '7';
              fast['2'] = 'fast';
              fast.punct = 'no';
              var marcfield = String.fromCharCode(30) + String.fromCharCode(9) + ui.item.tag;
              marcfield = marcfield.replace('1', '6');
              marcfield += String.fromCharCode(9) + ui.item.indicator + String.fromCharCode(9) + '7' + String.fromCharCode(10)
                                                  + 'a' + String.fromCharCode(9);
              if (ui.item.raw == '') var fastcontent = ui.item.auth;
              else var fastcontent = ui.item.raw;
              fastcontent = fastcontent.replace(/\$b/g, String.fromCharCode(10) + 'b' + String.fromCharCode(9));
              fastcontent = fastcontent.replace(/\$c/g, String.fromCharCode(10) + 'c' + String.fromCharCode(9));
              fastcontent = fastcontent.replace(/\$d/g, String.fromCharCode(10) + 'd' + String.fromCharCode(9));
              fastcontent = fastcontent.replace(/\$q/g, String.fromCharCode(10) + 'q' + String.fromCharCode(9));
              fastcontent = fastcontent.replace(/\$x/g, String.fromCharCode(10) + 'x' + String.fromCharCode(9));
              fastcontent = fastcontent.replace(/\$y/g, String.fromCharCode(10) + 'y' + String.fromCharCode(9));
              fastcontent = fastcontent.replace(/\$z/g, String.fromCharCode(10) + 'z' + String.fromCharCode(9));
              
              if (fastcontent.substring(fastcontent.length-1) != ')') fastcontent += '.';
              marcfield += fastcontent + String.fromCharCode(10) + '2' + String.fromCharCode(9) + 'fast' + String.fromCharCode(10) + String.fromCharCode(0);
              marcfield = JSON.stringify(marcfield);
              console.log(marcfield);
              if (ui.item.raw == '') {
                var fastcontent = ui.item.auth;
              }
              else {
                var fastcontent = ui.item.raw;
              }
              if (fastcontent.substring(fastcontent.length-1) != ')') fastcontent += '.';
              if (fastcontent.indexOf('$')>-1) {
                fast.a = fastcontent.slice(0, fastcontent.indexOf('$'));
              }
              else {
                fast.a = fastcontent;
              }
              // indices of $
              var indices = [];
              for(var i=0; i<fastcontent.length;i++) {
                  if (fastcontent[i] === "$") indices.push(i);
              }
              for (var i=0; i<indices.length; i++) {
                var sf = fastcontent.charAt(indices[i]+1);
                fast[sf] = fastcontent.slice(indices[i]+2, indices[i+1])
              }
              fast.i1.replace(/\s/g, '');
              insert = jQuery.extend(true, {}, fast);
              jQuery('#exampleXtra').html("&nbsp" + getTypeFromTag(ui.item.tag) + "&nbsp<button type='button' class='buttons' id='copy-buttonAssign' data-clipboard-target= '#fastAssign'>Copy</button> <div class ='hidden' id='fastAssign' style='display: none;'>" + marcfield + "</div>");
              fieldID = insertFieldAuto();
              populateField(fieldID, fast);         
          } //end select
      } 
   );
}  //end setUpPage()

/*  
    example style - simple reformatting
*/
function autoSubjectExample(request, response) {
  currentSuggestIndex = currentSuggestIndexDefault;
  autoSubject(request, response, exampleStyle);
}

/*
  For this example, replace the common subfield break of -- with  /
  */
  
function exampleStyle(res) {
  return res["auth"].replace("--","/"); 
   
}
