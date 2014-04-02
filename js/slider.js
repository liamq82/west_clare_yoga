var Slider = {} || Slider;

Slider.array = null; 

Slider.hideAllInactiveDivs = function() {
	
	if(!Slider.array) {
		Slider.array = $('.slider-div');
	}

	$.each(Slider.array, function(index, object){
		if (! $(object).hasClass("active")) {
			$(object).hide();
		}
	});
}

Slider.toggleDivs = function(event){
		$('.slider-button').unbind('click');
		var newIndex = event.target.id - 1;
		var oldIndex;

		$.each(Slider.array, function(index, object){
			if($(object).hasClass("active")) {
				oldIndex = index;
				$(object).removeClass("active");
			}
		});

		$(Slider.array[newIndex]).addClass("active");
		Slider.moveDivsRight(oldIndex);		
	}


Slider.moveDivsRight = function (startPoint) {

	$(Slider.array[startPoint]).toggle("slide", {direction: 'left'}, 1200, function(){
			
		$.each(Slider.array, function(index, object){
			if ($(object).hasClass("active")) {
				$(object).toggle("slide", {direction: 'right'}, 1200, function() {
					$('.slider-button').on('click', Slider.toggleDivs);
				});

			}			
		});						
	});
}


Slider.start = function() {
	Slider.hideAllInactiveDivs();
	$('.slider-button').on('click', Slider.toggleDivs);
}

$(function() {
	Slider.start();
});