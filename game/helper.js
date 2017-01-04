
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



    currentImg.style.backgroundColor= "green";


//console.log(currentImg)

}


