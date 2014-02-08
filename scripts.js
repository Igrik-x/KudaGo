$(document).ready(function() {
	$("#popbackground").hide();

	$("#buttons").hide();

	$("#mainmenu").hover(function() {
		$("#popbackground").show();
		$("#buttons").show("slide", {}, 400);

	})

	$(".btn7").click(function() {

		$("#buttons").hide("slide", {}, 500);
		$("#popbackground").hide("puff", {}, 500);

	})
}); 