function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
  var nbDrop = 858;
  function randRange(minNum, maxNum){
      return(Math.random() * (maxNum - minNum + 1) + minNum);
  }
  function createRain(){
      for (1 = 1; i < nbDrop; i++){
          var dropLeft = randRange(0, 1600);
          var dropTop = randRange(-1000, 1400);

          $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
          $('#drop' + i).css('left', dropLeft);
          $('#drop' + i).css('left', dropTop);

      }
  }