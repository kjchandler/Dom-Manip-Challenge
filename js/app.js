$('#box1').css('background-color','green');


$('#edit-header').html('Kelly Chandler');

$('#para1').css({'font-size': '25px', 'font-weight':'bold'});

$('.box2').hover(function(){
	$('.box2').addClass('spin');
},
	function(){
		$('.box2').removeClass('spin');

	});

$('#button1').click(function(){
	alert('Button was clicked');

});

$('#box3').hover(function(){
	$('#box3').css('background-color', 'green');
},
function(){
	$('#box3').css('background-color', 'red');

});

$('#input1').keyup(function(){
	console.log($('#input1').val());
});

$('#box4').animate({'top':'+=150px', 'left':'+=400px'},10000, function(){});





