
$('body').append("<div id='div-gpt-ad-1418599326001-0' style='width:300px; height:250px;'></div>");

function waitForElement(){
  googletag.cmd.push(function() {
    googletag.defineSlot('/59676769/MediumRectangle300x250', [300, 250], 'div-gpt-ad-1418599326001-0')
      .addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1418599326001-0'); });
}
// var googletag = googletag || {};
// googletag.cmd = googletag.cmd || [];
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') +
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);

if(typeof googletag !== "undefined"){
	googletag.cmd.push(function() {
	  googletag.defineSlot('/59676769/MediumRectangle300x250', [300, 250], 'div-gpt-ad-1418599326001-0')
	  .addService(googletag.pubads());
	  googletag.pubads().enableSingleRequest();
	  googletag.enableServices();
	});
	googletag.cmd.push(function() { googletag.display('div-gpt-ad-1418599326001-0'); });
}
else{
  setTimeout(function(){
    waitForElement();
  },1000);
}

