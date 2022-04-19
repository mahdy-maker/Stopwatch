window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById('tens')
    var appendSeconds = document.getElementById('seconds')
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var st=document.getElementById('status');

    var Interval ;
  
    buttonStart.onclick = function() {
        st.innerHTML="started";
        Interval=setInterval(startTimer, 10);
       //10 refare to 10 milli
    }
    
      buttonStop.onclick = function() {
        st.innerHTML="stoped";

         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
        st.innerHTML="reseted";

        clearInterval(Interval);
        tens="00";
        seconds="00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }