$(function() {
	
	$('#Ann').on('mouseover', function() {
		$(this).css(
		"color","#FFE4B5" );
	});
	$('#Ann').on('mouseout', function(){
		$(this).css(
		"color", "#fffaf0" );
	});
   	
	$('a').on('mouseover', function() {
		$(this).css(
		"color","#FF00FF" );
	});
	$('a').on('mouseout', function(){
		$(this).css(
		"color", "#8B008B" );
	});
	
});
