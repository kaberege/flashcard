const myDisplay = document.getElementById("display");
const myPlay = document.getElementById("play");
const myPause = document.getElementById("pause");
const myReplay = document.getElementById("replay");

let [seconds,minutes,hours] = [0,0,0];
let timer = null;
myPlay.addEventListener("click", myInterval);
myPause.addEventListener("click", stopPlay);
myReplay.addEventListener("click", rePlay);

function myShow(){
  seconds++;
  if(seconds == 60){
    seconds = 0;
    minutes++;
    if(minutes == 60){
      minutes = 0;
      hours++;
    }
  }
let h = hours < 10? "0"+ hours : hours;
let m = minutes < 10? "0" + minutes : minutes;
let s = seconds < 10? "0" + seconds : seconds;
myDisplay.innerHTML = h + ":" + m + ":" + s;
}

 function myInterval(){
   if(timer !== null){
   clearInterval(timer);
  } 
  timer = setInterval(myShow,1000);
}

function stopPlay(){
  clearInterval(timer);
}

function rePlay(){
  clearInterval(timer);
  [seconds,minutes,hours] = [0,0,0];
  myDisplay.innerHTML = "00:" +  "00:" + "00";
}