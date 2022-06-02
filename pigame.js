
$("#resultc").hide();
var pi = sessionStorage.getItem("pi");
pi = pi.replace(/\s/g, "");
const timer = document.getElementById("pitimer");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
    hr = '0' + hr;
  }

  timer.innerHTML = "Clock: " + hr + ':' + min + ':' + sec;

  setTimeout("timerCycle()", 1000);
}
}
function resetTimer() {
timer.innerHTML = '00:00:00';
}
startTimer();
var score = 0;
var inds = 0;
function myFunction(){
  if ($("#thirdtext").val().trim() == pi.substring(inds, inds+1)){
    score++;
    $("#piscore").text("Score: " + score);
    inds++;
    $("#thirdtext").val("");
    if (score == 1){
      $("#second").text("3");
      $("#third").text(".");
      $("#fourth").text("1");
    }
    else if (score == 2){
      $("#first").text("3");
      $("#second").text(".");
      $("#third").text("1");
      $("#fourth").text("4");
    }
    else if (score == 3){
      $("#first").text(".");
      $("#second").text("1");
      $("#third").text("4");
      $("#fourth").text("1");
    }
    else {
      $("#first").text(pi.substring(inds-4, inds-3));
      $("#second").text(pi.substring(inds-3, inds-2));
      $("#third").text(pi.substring(inds-2, inds-1));
      $("#fourth").text(pi.substring(inds-1, inds));

    }
  }
  else {
      $("#fifth").text(pi.substring(inds, inds+1));
      if (score == 0 || score == 1){
        $("#piscore").text(score + " digit");
      }
      else{
          $("#piscore").text(score + " digits");
      }
      stopTimer();
      $("#pitimer").text($("#pitimer").text() + " elapsed");
  }
}
