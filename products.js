document.addEventListener('DOMContentLoaded', function(){
	let text = document.querySelector('.firstrow');
	text.innerHTML = "This is a text made with javascript";

	let table = document.getElementById('smalltable');
	table.style.backgroundColor = "green";
});

function changecolor(){
	let table = document.getElementById('smalltable');
	if( table.style.backgroundColor == "green"){
		table.style.backgroundColor = "red";}
	else{
		table.style.backgroundColor = "green";
	}
}

$(document).ready(function(){
	$('.shto').click(function(){
		let tr = document.createElement('tr');
		let td0 = document.createElement('td');
		let td1 = document.createElement('td');
		$(td1).css("width", "157px");
		$(td0).css("width", "10px");
		let td2 = document.createElement('td');
		let button = document.createElement('button');
		button.innerHTML ="Remove";
		$(button).click(function(){
			$(this).remove(); // remove jquery
			$(td0).remove();
			$(td1).remove();
			$(td2).remove();
		});
		td0.innerHTML = "o";
		td1.innerHTML = $('.inshporta').val() ; //get jquery
		$(td2).append(button); // add jquery
		$(tr).append(td0, td1, td2);
		$('.shporta').append(tr);
	});

	$('.showproducts').click(function(){
		$('#moreproducts').show(); //show jquery
	});
	$('.hideproducts').click(function(){
		$('#moreproducts').hide(); // hide jquery
	});
	$('.handband').click(function(){
		$('.handband').text("Arm band"); // set jquery
	});	
});
