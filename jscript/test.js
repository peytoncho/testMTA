/**
 * @author pcao
 */

$(function(){
	
	//var spring = $("#spring");
	$("#spring").bind("click", function(){
		alert("user hit the DOM");				
	});
	
	$("#summer").click(function(){
		$(this).load("test.txt");
	});
		
});
