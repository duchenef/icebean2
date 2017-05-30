
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
    $('#fastLookup').autocomplete(   {
          source: autoSubjectExample, 
          minLength: 1,
       select: function(event, ui) {
              /*jQuery('#exampleXtra').html("&nbsp;"+ getTypeFromTag(ui.item.tag)+ " / "+ ui.item.idroot);*/
              var fast = {};
              fast.id = (ui.item.tag +'').replace('1', '6');;
              fast.i1 = ui.item.indicator;
              fast.i2 = '7';
              fast['2'] = 'fast';
              var marcfield;
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
