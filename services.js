// ndryshimi i ngjyres se background-it
var colors = ["Red", "Blue", "Green", "Yellow", "Orange", "White"];

function color(button){
	switch(button){
		case 0:
		document.querySelector('body').style.backgroundColor = colors[0];
		break;
		case 1:
		document.querySelector('body').style.backgroundColor = colors[1];
		break;
		case 2:
		document.querySelector('body').style.backgroundColor = colors[2];
		break;
		case 3:
		document.querySelector('body').style.backgroundColor = colors[3];
		break;
		case 4:
		document.querySelector('body').style.backgroundColor = colors[4];
		break;
		default:
		document.querySelector('body').style.backgroundColor = colors[5];
		break;
	}
}

// validimi i hyrjeve____________________________________________________________________________________________
function val(x, y, w){
	try{
		if (isNaN(x) || isNaN(y)) {
			throw "not a number";
		}
		else if (x == "" || y == "") {
			throw "empty";
		}
		else{
			switch(w){
				case 0:
					add(x,y);
					break;
				case 1:
					subtract(x,y);
					break;
				case 2:
					multiply(x,y);
					break;
				case 3:
					divide(x,y);
					break;
				case 4:
					compare(x,y);
					break;
				case 5:
					hypotenuse(x,y);
					break;
				case 6:
					percentage(x,y);
					break;
				case 7:
					circle(x,y);
					break;
			}
		}
	}
	catch(error){
		alert("One or both inputs are " + error);
		document.querySelector('.result').innerHTML = "";
	}
}
//llogaritja e hyrjeve_______________________________________________________________________________________________
function add(x, y){
	let z;
	z = parseInt(x)+parseInt(y);
	rezultati(z);
}
function subtract(x, y){
	let z;
	z= x-y;
	rezultati(z);
}
function multiply(x, y){
	let z;
	z= x*y;
	rezultati(z);
}
function divide(x, y){
	let z;
	z= (x/y).toFixed(2);
	document.querySelector('.result').innerHTML = z;
	document.querySelector('.result1').innerHTML = "";
}
function compare(x,y){
	if (x>y) {
		document.querySelector('.result').innerHTML = x+ " is bigger than " +y;
	}
	else if (x < y) {
		document.querySelector('.result').innerHTML = y+" is bigger than "+x;
	}
	else{
		document.querySelector('.result').innerHTML = "Both are equal";
	}
	document.querySelector('.result1').innerHTML = "";
}
function hypotenuse(x,y){
	let a = Math.pow(x,2) + Math.pow(y,2);
	let z = Math.sqrt(a).toFixed(2);
	document.querySelector('.result').innerHTML = z;
	document.querySelector('.result1').innerHTML = "";
}
function percentage(x,y){
	let a = 100*x/y;
	let b = Math.round(a);
	let z = Math.abs(b);
	document.querySelector('.result').innerHTML = x+ " is "+ z + "% of "+ Math.abs(y);
	document.querySelector('.result1').innerHTML = "";
}
function circle(x,y){
	let a = 2*y*Math.pow(x,2);
	let z = a.toFixed(1);
	document.querySelector('.result').innerHTML = z;
	document.querySelector('.result1').innerHTML = "";
}

function rezultati(z){
	if (z>=100 || z<0) {
		let a = z.toExponential();
		document.querySelector('.result').innerHTML = "Decimal: " +z;
		document.querySelector('.result1').innerHTML = "With exponent: "+ a;
	}
	else{
		b = z.toString(2);
		document.querySelector('.result').innerHTML = "Decimal: " + z;
		document.querySelector('.result1').innerHTML = "To binary: " + b;
	}
}

// perdorimi i replace() dhe match()____________________________________________________________________________
function shqip(){
	let text = document.querySelector('.colortext').innerHTML;
	let text1 = text.replace("Choose the background color", "Zgjidhe ngjyrën e prapavijës");
	let text2 = text.match(/background/gi);
		if (document.querySelector('.colortext').innerHTML == "Zgjidhe ngjyrën e prapavijës/background-it"){
			return false;
		}
		else{
			document.querySelector('.colortext').innerHTML = text1+"/"+text2+"-it";
		}
}
function english(){
	let text = document.querySelector('.colortext').innerHTML;
		if (document.querySelector('.colortext').innerHTML == "Choose the background color"){
			return false;
		}
		else{
			document.querySelector('.colortext').innerHTML = "Choose the background color";
		}
}

// konstruktori____________________________________________________________________________________________________
function Country(name, population, area){
	this.name = name;
	this.population = population;
	this.area = area;
	this.density = function(){
		let res = this.population/this.area;
		return res.toFixed(2);
	}
}

// Perdorimi i Date() funksionit
var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getDay();

switch(new Date().getDay()){
	case 1:
		var weekday = "Monday";
		break;
	case 2:
		var weekday = "Tuesday";
		break;
	case 3:
		var weekday = "Wednesday";
		break;
	case 4:
		var weekday = "Thursday";
		break;
	case 5:
		var weekday = "Friday";
		break;
	case 6:
		var weekday = "Saturday";
		break;
	default:
		var weekday = "Sunday";
		break;
}

//ngarkimi i DOM permbajtjes_________________________________________________________________________________________
document.addEventListener('DOMContentLoaded', function(){
//ngjyra e background-it
	document.body.style.backgroundColor = 'white';

// objektet
	var kosovo = new Country("Kosovo", 1800000, 10850);
	var albania = new Country("Albania", 2800000, 28500);
//kosova
	const emri1 = document.createElement('h3');
	emri1.innerHTML = "Country name: " + kosovo.name;
	emri1.style.marginLeft = "-1em";
	emri1.style.fontWeight = "bold";
	const dendesia1 = document.createElement('li');
	dendesia1.innerHTML = "Population density: " + kosovo.density();
	document.querySelector('.Kosovo').append(emri1, dendesia1);
//shqiperia
	const emri2 = document.createElement('h3');
	emri2.innerHTML = "Country name: " + albania.name;
	emri2.style.fontWeight = "bold";
	emri2.style.marginLeft = "-1em";
	const dendesia2 = document.createElement('li');
	dendesia2.innerHTML = "Population density: " + albania.density();
	document.querySelector('.Albania').append(emri2, dendesia2);

//Data
	document.querySelector('.date').innerHTML = "Date: "+ day +"."+ month +"."+ year ;
	document.querySelector('.day').innerHTML = "Day: " + weekday;

//borders
	var akborders = ["Albania", "Serbia", "Montenegro", "North Macedonia", "Greece", "Kosovo"];
	var aksimborders = ["Montenegro", "Serbia", "North Macedonia", "Greece"];
	var aksimborders1 = ["Montenegro", "North Macedonia"];


	for(let i=0; i<akborders.length-2; i++){
		let li = document.createElement('li');
		li.innerHTML = akborders[i];
		document.querySelector('.kborders').append(li);
	}
	for(let i=2; i<akborders.length; i++){
		let li = document.createElement('li');
		li.innerHTML = akborders[i];
		document.querySelector('.aborders').append(li);
	}
// exec() dhe test()
	var simborders = [/montenegro/i, /Serbia/g, /north macedonia/i, /Greece/g];
	for(let i=0; i<simborders.length; i++){
		var check = simborders[i].test(aksimborders1);
		var print = simborders[i].exec(aksimborders);
		

		if (print) {
			tr = document.createElement('tr');
			td0 = i+1 +".";
			td1 = document.createElement('td');
			td2 = document.createElement('td');

			td1.style.width = "150px";
			td2.style.width = "100px";

			if(check){
				check1 = "True";
				td2.style.color = "blue";
			}
			else{
				check1 = "False";
				td2.style.color = "red";
			}

			td1.innerHTML = print;
			td2.innerHTML = check1;

			var x = tr.append(td0) + tr.append(td1) + tr.append(td2);

			document.querySelector('.similarborders').append(tr);
		}
	}	
});

// slide, fade and animate ____________________________________________________________________________
$(document).ready(function(){
	$('.slider').click(function(){
		$('.shownumbers').slideDown();
	})
	$('.hidebutton').click(function(){
		$('.shownumbers').fadeOut("slow");
	})

	$('.movenumbers').click(function(){
		$('.five').animate({ width: "300px"}, 2000, function(){
			$('.five').animate({width: '30px'}, 1000)
		})
		$('.seven').animate({ width: '200px', height: '200px'}, 2000, function(){
			$('.seven').animate({width: '30px', height: '100px'}, 1000)
		})
	})
})