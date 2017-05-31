var quiz = [false,false,false,false];
var image = ["reagan.jpg","Teddy.jpg","w-bush.jpg","lincoln.jpg","ike.jpg","ford.jpg","hw-bush.jpg"];
var imageIndex = Math.round(Math.random()*6);
$('#resultImage').attr("src","imgs/" + image[imageIndex]) ;
$('.result').hide();
$('.Q1').click(function() {
	if($(this).find('input:checkbox:checked')) {
		quiz[0] = true;

		for(var a of quiz) {
            if(a === false ) {
            	return;
            }
		}
	 imageIndex = Math.round(Math.random()*6);
      $('.result').show();
	}
});
$('.Q4').click(function() {
	if($(this).find('input:checkbox:checked')) {
		quiz[3] = true;
		for(var a of quiz) {
            if(a === false ) {
            	return;
            }
		}
		imageIndex = Math.round(Math.random()*6);
      $('.result').show();
	}
});

$('.Q2').click(function() {	
		quiz[1] = true;
		for(var a of quiz) {
            if(a === false ) {
            	return;
            }
		}
		imageIndex = Math.round(Math.random()*6);
      $('.result').show();
});

$('.Q3').click(function() {
		quiz[2] = true;
		
		for(var a of quiz) {
            if(a === false ) {
            	return;
            }
		}
		imageIndex = Math.round(Math.random()*6);
      $('.result').show();
});