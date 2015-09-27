$(document).ready(function(){
	$("#mayCast").click(function(){
		$("#mainVid").attr('src','//www.youtube.com/embed/B05hir3Y_0Y')
	});
	$("#juneCast").click(function(){
		$("#mainVid").attr('src','//www.youtube.com/embed/GOuzNAGavAM')
		$("div").animate({left:'250px'});
	});
		});
	});
	/* Template
	$("[month]Cast").click(function(){
		$("#mainVid").attr('src','Youtube Video Link');
	});
	*/
});