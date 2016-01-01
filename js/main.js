$(document).ready(function(){
	console.log("Yo!");
	$("#menu h2").hover(
		function(){
			$(this).addClass("animated jello");
		}, function(){
			$(this).removeClass("animated jello");
		}
	);
});