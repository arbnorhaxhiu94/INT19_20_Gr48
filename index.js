var a=['images/rock.png','images/i.png','images/t.png', 'images/gmail.png', 'images/p.png'];
var text = ['First image', 'Second image', 'Third image', 'Fourth image', 'Fifth image'];
var b=0;
function next(){
  var c= document.querySelector('#slideimg');
    b++;
    if (b>= a.length) {
      b=0;
    }
  c.src=a[b];
  document.querySelector('#caption').innerHTML = text[b];
}
function prev(){
  var c= document.querySelector('#slideimg');
    b--;
    if (b< 0) {
      b= a.length-1;
    }
  c.src=a[b];
  document.querySelector('#caption').innerHTML = text[b];
}