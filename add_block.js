var $ = jQuery.noConflict();
var cat_url = 'http://babyanimalblocker.com/image.php';
var iframe_src_filters = [
	'ads.cnn',
	'tripleclick',
	'banner',
	'mediaplex',
	'doubleclick',
	'adpage',
	'pointroll',
	'advertising',
	'tellapart',
	'w55c.net',
	'netmng.com',
	'yieldoptimizer.com',
	'2mdn.net',
	"background:transparent",
	'google_ads',
	'blurbiq',
	'adzerk',
	'aswift'
];

var image_bg_filters = [
	'fbcdn-creative-a.akamaihd.net'
];
var image_src_filters = [
	'atdmt.com',
	'adzerk',
	'googlesyndication',
	'doubleclick',
	'serving-sys.com',
	'rfihub.net',
	'2mdn.net',
	'adnxs.com',
	'SponsoredListings',
	'mediaplex.com',
	's.aolcdn',
	'fbcdn-creative-a.akamaihd.net',
	'www.facebook.com%2Fads'
];

var object_data_filters = [
	'googlesyndication.com',
	'serving-sys.com',
	'cdn.mm.atwola.com'
];

var embed_src_filters = [
	'moatads.com',
	'2mdn.net'
];

$(document).ready(function(){
	filterads();
});

function replaceAd(height, width) {

}

function filterads() {

	$("object").each(function() {

		var src= $(this).attr('data');
		if (src === undefined) {
			var src = $(this).attr('id');
		}
		if (src === undefined) {
			var src = '';
		}
		else{
			height = $(this).height();
			width = $(this).width();

			for (var i = 0; i < object_data_filters.length; i++) {
				 if(src.toLowerCase().indexOf(object_data_filters[i]) > -1) {
					$(this).replaceWith( "<img src='"+cat_url+"?width="+width+"&height="+height+"'  style='width: "+width+"px; height:"+height+"px; overflow:visible; '></iframe>" );
				 }
			}
		}

	});

	$("iframe").each(function() {
    	var src= $(this).attr('src');
		if (src === undefined) {
			var src = $(this).attr('id');
		}
		if (src === undefined) {
			var src = '';
		}
			height = $(this).height();
			width = $(this).width();

			for (var i = 0; i < iframe_src_filters.length; i++) {
				 if(src.toLowerCase().indexOf(iframe_src_filters[i]) > -1) {

					$(this).replaceWith(replaceAd(height, width));
				 }
			}

	});

	$("embed").each(function() {
		var src= $(this).attr('src');
		if (src === undefined) {
			var src = $(this).attr('id');
		}
		if (src === undefined) {
			var src = '';
		}
		else{
			height = $(this).height();
			width = $(this).width();
		}

	});

	$("img").each(function() {
    	var src= $(this).attr('src');

		if (src === undefined) {
			var src = $(this).attr('deferredsrc');
		}
		if (src === undefined) {
			var src = $(this).attr('delaysrc');
		}

		if (src === undefined) {
			var src = '';
		}

		height = $(this).height();
		width = $(this).width();

		for (var i = 0; i < image_src_filters.length; i++) {

				 if(src.toLowerCase().indexOf(image_src_filters[i]) > -1 ) {
					 if(src.indexOf('petads') < 1) {
						$(this).replaceWith(replaceAd(height, width));
					 }
			 }
		}

		var bg_img = $(this).css('background-image');
		if(bg_img!='none') {
			for (var i = 0; i < image_bg_filters.length; i++) {
				 if(bg_img.toLowerCase().indexOf(image_bg_filters[i]) > -1 ) {
					$(this).replaceWith(replaceAd(height, width));
				 }
			}
		}
	});
}
$('body').append("<div id='div-gpt-ad-1418599326001-0' style='width:300px; height:250px;'></div>");

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

