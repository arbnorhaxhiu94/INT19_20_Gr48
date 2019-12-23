function changecolor(){
	let table = document.getElementById('smalltable');
	if( table.style.backgroundColor == "green"){
		table.style.backgroundColor = "red";}
	else{
		table.style.backgroundColor = "green";
	}
}

document.addEventListener('DOMContentLoaded', function(){
	let text = document.querySelector('.firstrow');
	text.innerHTML = "This is a text made with javascript";

	let table = document.getElementById('smalltable');
	table.style.backgroundColor = "green";
});