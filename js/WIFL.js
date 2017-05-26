 // JS drop down (hamburger) menu to get to different sections of the website
//$(document).ready(function(){

   
$(".cross").hide();
$(".menu").hide();

$(".hamburger").click(function() {
	$(".menu").slideToggle( "slow", function() {
		$(".hamburger").hide();
		$(".cross").show();
			});
		});

$(".cross").click(function() {
	$(".menu").slideToggle("slow", function() {
		$(".cross").hide();
		$(".hamburger").show();
		});
	});

// JS when an image is clicked the information about that illness through flipping appears;

	$("#lastditch").flip();
	$("#tryagain").flip();
	$("#bitime").flip();
	$("#hope").flip();