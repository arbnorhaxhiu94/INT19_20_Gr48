document.addEventListener('DOMContentLoaded', function(){
	var x = document.getElementById("demo");
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(showPosition);
	  } else {
	    x.innerHTML = "Geolocation is not supported by this browser.";
	  }

	function showPosition(position) {
	  x.innerHTML = "Latitude: " + position.coords.latitude.toFixed(4) +
	  "<br>Longitude: " + position.coords.longitude.toFixed(4);
	}

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var color = ctx.createLinearGradient(0,0,400,200);
	color.addColorStop(0, "#2aa2d4");
	color.addColorStop(1, "#00ff55");
	ctx.fillStyle = color;
	ctx.fillRect(0,0,400,200);

	ctx.fillStyle = "white";
	ctx.font = " 30px Arial";
	ctx.fillText("Hello", 170, 100);
	ctx.fill();

	ctx.moveTo(0,0);
	ctx.lineTo(160,75);
	ctx.stroke();
	ctx.moveTo(160,75);
	ctx.lineTo(160, 65);
	ctx.stroke();
	ctx.moveTo(160,75);
	ctx.lineTo(150,80);
	ctx.stroke();

	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d');
	var img = document.querySelector('#hello');
	ctx1.drawImage(img, 130, 50);

	ctx1.font = "30px Arial";
	ctx1.fillStyle = "white";
	ctx1.fillText("Canvas Image", 100,30);
	ctx1.fill();
})