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
	
		var t=0;
	var str1 = $('#animate1').text();
	var i = 0;
	var typing_inst1 = setInterval(typing1, 100);
	function typing1()
	{
		if(i < str1.length -1)
		{
			$('#animate1').text(str1.substr(0,i) + "_");
			i++;
		}
		else if(i == str1.length-1)
		{
			$('#animate1').text(str1);
			t=1;
			$('#animate2').show();
			clearInterval(typing_inst1);
		}
	}
	
	
	var str2 = $('#animate2').text();
	var j = 0;
	var typing_inst2 = setInterval(typing2, 100);
	function typing2()
	{
		if(t==0)
		{
			$('#animate2').hide();
		}
		else if(j < str2.length -1)
		{
			$('#animate2').text(str2.substr(0,j) + "_");
			j++;
		}
		else if(j == str2.length-1)
		{
			$('#animate2').text(str2);
			clearInterval(typing_inst2);
		}
	}
	
});
