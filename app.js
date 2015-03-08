$(document).ready(function(){
var cl;
var n=16;//var n=$("button[name='resolution']").attr("value");
var l=960/n+"px"; console.log(l);
createGrid(n);
$("#container div").css({"width":l, "height":l});
//var a=$("#container div").length;
//alert("the number of div is "+a);
$("#container div").on("mouseenter",function(){
	$(this).addClass("hover");
});
/*$("#container div").on("mouseleave",function(){
	$(this).removeClass("hover");
});*/

$("button[name='resolution']").on("click",function(){
	n=prompt("Please enter a number of grid per row and column",16);
	l=960/n+"px"; console.log(l);
	$("#container").empty();
	createGrid(n);
	$("#container div").css({"width":l, "height":l});
	$("#container div").on("mouseenter",function(){
		$(this).addClass("hover");
	});
	/*$("#container div").on("mouseleave",function(){
		$(this).removeClass("hover");
	});*/
});

});

function createGrid(n){
for (var i=1;i<=n;i++){
	for (var j=1;j<=n;j++){
		$("#container").append("<div></div>");
		//cl=i.toString()+j.toString();
		//var lastdiv=$("#container div").last();
		//lastdiv.addClass(cl);
	};
	//$("#container").append("<br>");
};
}