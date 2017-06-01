 	let quiz = [false,false,false,false];
	const image = ["reagan.jpg","Teddy.jpg","w-bush.jpg","lincoln.jpg","ike.jpg","ford.jpg","hw-bush.jpg"];
	let imageIndex = Math.round(Math.random()*6);

    const show = () => {
		imageIndex = Math.round(Math.random()*6);
		$('.result').show();
	}

	const judge = () => {
		 for(let a of quiz) {
			if(a === false ) {
				return;
			}
		}
		show();
	}

	

	$('#resultImage').attr("src","imgs/" + image[imageIndex]);
	
	$(function(){
			$("li").click(function(){
				console.log($(this).className)
				$(this).parent().find("li").each(function(){
					$(this).prop("class", "");
					$(this).find("input").prop("checked", "");
				});
				$(this).prop("class", "active");
				$(this).find("input").prop("checked", "1");
			});
		});

	$('.result').hide();
	$('.Q1').click(function() {
		if($(this).find('input:checkbox:checked')) {
			quiz[0] = true;
			judge();
		}
	});
	$('.Q4').click(function() {
		if($(this).find('input:checkbox:checked')) {
			quiz[3] = true;
			judge();
		}
	});

	$('.Q2').click(function() {	
		quiz[1] = true;
		judge();
	});

	$('.Q3').click(function() {
		quiz[2] = true;
		judge();
	});