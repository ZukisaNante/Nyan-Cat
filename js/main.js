function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
  if (pos == 1000) {
  clearInterval(id);
  } else {
  pos++; 
  elem.style.top = pos + 'px'; 
  elem.style.left = pos + 'px'; 
}
}
}


// image show/hide
/*function myMove() {
  var x = document.getElementById("myAnimation") ;
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  } else {
    x.style.visibility = 'hidden';
  }
}*/