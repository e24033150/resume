'use strict';

$(function() {

    //settings for slider
    
    var animationSpeed = 1700;
    var pause = 6000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides',$slider);
    var $slides = $('.slide',$slider);
	var height=$slides.height();
	var $block=$('#block');
	var $block2=$('#block2');
	var $text1=$('#text1');
	var $love=$('#love');
	var $white=$('#white');
	var $text2=$('#text2');
	

    var interval;
	
    function startSlider() {
        interval = setInterval(function() {
				
				$white.animate({"paddingLeft":"0%"},400,"swing",function(){});
				$text2.fadeOut(400,"swing");
				$block.animate({"height": "50%"}, 300,"swing", function(){});
				$block2.animate({"height": "25%"}, 300,"swing", function(){});
				$block.animate({"height": "100%"}, 300,"swing", function(){$block.css("top","0");});
				$block2.animate({"height": "100%"}, 300,"swing", function(){$block2.css("top","0");});
				
				$text1.fadeOut(500);
				$white.animate({"paddingLeft":"12%"},400,"swing",function(){});
				
				$block.animate({"height": "0%"}, 400,"swing", function(){if (currentSlide === 2){
					$block.css("background-color","#FFFF00");
					$block.css("bottom","0");
					$block.css("top","auto");
					
				}
				else{
					$block.css("background-color","	#98FB98");
					$block.css("bottom","0");
					$block.css("top","auto");
					
				}});
				$block2.animate({"height": "0%"}, 600,"swing", function(){if (currentSlide === 2){
					$block2.css("background-color","#FFFF00");
					$block2.css("bottom","0");
					$block2.css("top","auto");
					$love.css("color","#FFA500");
					
				}
				else{
					$block2.css("background-color","#98FB98");
					$block2.css("bottom","0");
					$block2.css("top","auto");
					$love.css("color","#2E8B57");
				}});
				
				

				$block.animate({"height": "50%"}, 600,"swing", function(){});
				$block2.animate({"height": "25%"}, 400,"swing", function(){$text1.fadeIn(300);$white.animate({"paddingLeft":"6%"},300,"swing",function(){});$text2.fadeIn(300,"swing");});
				
				
				
			height=$slides.height();
			$slideContainer.animate({'margin-top': '-='+height}, animationSpeed,"swing", function() {
                
				currentSlide++;
				if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-top', 0);
                }
				
            });
			
			
			
        }, pause);
    }
    
	startSlider();

});
