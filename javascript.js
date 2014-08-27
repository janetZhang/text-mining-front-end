// Show more with pure javascipt
var myObject = {
	showAll: function(showName,idName){
		document.getElementById(showName).style.display = "none";
		document.getElementById(idName).style.display = "inline";
	}

}
// show more with jquery  
$(document).ready(function(){
	$("#show-more").click(function(){
		$("#show-more").hide(1000);
		$("#hide-items").show(1000);
		});
		
	$("#show-more2").click(function(){
		$("#show-more2").hide(1000);
		$("#hide-catg").show(1000);
	})
})

