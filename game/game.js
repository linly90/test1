
    //var imgMapName= [];



//var  mapMain = document.querySelectorAll('map');
//mapMain=Array.prototype.slice.call(mapMain);
//imgMain = Array.prototype.slice.call(imgMain);











    var imgBottom = document.querySelectorAll('#bottomPanel img');
    //var imgRight = document.querySelectorAll('#contentRight img');

   var main = document.getElementById('contentMain');






    main.addEventListener("click", function(event){
        var currentTarget = event.target;
        if (currentTarget.tagName != 'MAP'){

            var currentName = currentTarget.parentNode.getAttribute('name');

            if(imgBottomName.indexOf(currentName) != -1){

                var currentChildNumber = imgBottomName.indexOf(currentName);
                document.getElementById("bottomPanel").removeChild                  (imgBottom[currentChildNumber]);



                document.getElementById('contentMain').removeChild(imgMain[currentChildNumber]);

                var currentRightImg = document.querySelector('#contentRight #'  +currentName);
                currentRightImg.style.opacity = 1;

            }
        }
    });






