
var minHtml = $(".mins");
var secHtml = $(".sec");





//console.log(secHtml[0])


function runMin (){
    var min = 2;
    runSec  ();


    var timerMin= setInterval(function() {
       // console.log(min);
        minHtml[0].innerHTML = min;
            if (min == 0){
                clearInterval(timerMin);
            }
            else {
                min--;
                minHtml[0].innerHTML = min;
                runSec  ()
             }
    }, 63000);    //60000


}

runMin ()




function runSec (){
    sec = 59;
    var timer= setInterval(function() {
           console.log(sec)
            secHtml[0].innerHTML = sec;
            if (sec == 0) clearInterval(timer);
            sec--
        }, 1000);
}









