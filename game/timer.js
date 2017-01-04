
var minHtml = $(".mins");
var secHtml = $(".sec");









document.querySelector("button")
        .addEventListener("click", function(){

           runMin ();
        });



function runMin (){

    var point = document.querySelector("#points");

    var secAll = 120;

    var min = 1;

    var sec = 60;
    var timerSec= setInterval(function() {
        // console.log(min);

        point.innerText = " : ";
        minHtml[0].innerHTML = min;
        secHtml[0].innerHTML = Math.floor(sec);
        if (secAll < 0){
            clearInterval(timerSec);
            alert("haha!")

        }


        else if (secAll == 60){

            minHtml[0].innerHTML = min;
            secHtml[0].innerHTML = Math.floor(sec);
            min--;
            sec =60;

        }


        sec--;
        secAll--;
    }, 1000);    //60000






}


