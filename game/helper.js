
document.querySelector("#helper")
        .addEventListener("click", function(){


                runHelper ();


        });










function runHelper (){
    var currentImgBottom = document.querySelectorAll('#bottomPanel img');
    var rand = getRandom(0, currentImgBottom.length-1);

    var currentImgName = currentImgBottom[rand].name;
    var currentImgNumber= imgMainName.indexOf(currentImgName);

    var currentImg = imgMain[currentImgNumber];




            createRotateHelper(currentImg);


}
function createRotateHelper(currentImg){



    var circleImg = document.createElement('img');
    main.appendChild(circleImg);
    circleImg.src = "images/blink2.png";
    circleImg.id = 'rot';


    circleImg.style.left =  parseInt(currentImg.style.left) -40 + 'px';
    circleImg.style.top = parseInt(currentImg.style.top) -30 + 'px';

    setTimeout(function() {
        main.removeChild(circleImg) ;

    }, 4000);

}

/*
function runHelper (){
    var currentImgBottom = document.querySelectorAll('#bottomPanel img');
    var rand = getRandom(0, currentImgBottom.length-1);

    var currentImgName = currentImgBottom[rand].name;
    var currentImgNumber= imgMainName.indexOf(currentImgName);

    var currentImg = imgMain[currentImgNumber];



    function createRotateHelper(currentImg){


        var divParent = document.createElement("div");
        var parent = currentImg.parentNode;
        parent.insertBefore(divParent, currentImg);
        divParent.appendChild(currentImg);



        var circleImg = document.createElement('img')
        divParent.appendChild(circleImg);
        circleImg.src = "images/blink2.png";
        circleImg.id = 'rot';

        console.log(divParent)



    }
    createRotateHelper(currentImg);
    // currentImg.style.backgroundColor= "green";


//console.log(currentImg)

}*/
