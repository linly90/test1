

    var imgBottom = document.querySelectorAll('#bottomPanel img');
    //var imgRight = document.querySelectorAll('#contentRight img');


    var main = document.getElementById('contentMain');
    //console.log(imgBottomName)
    //console.log(imgMainName)









    main.addEventListener("click", function(event){
        var currTarget = event.target;
        if (currTarget.tagName != 'MAP'){

            var currentName = currTarget.parentNode.getAttribute('name');
            console.log(currentName);

            if(imgBottomName.indexOf(currentName) != -1){

                var currentChildNumber = imgBottomName.indexOf(currentName);
                document.getElementById("bottomPanel").removeChild(imgBottom[currentChildNumber]);


                var currentRightImg = document.querySelector('#contentRight #'  +currentName);
                currentRightImg.style.opacity = 1;



                var currentImgIndex = imgMainName.indexOf(currentName)

                console.log(currentImgIndex)
                document.getElementById('contentMain').removeChild(imgMain[currentImgIndex]);


            }
        }
    });






