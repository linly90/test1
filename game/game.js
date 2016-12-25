
    //var imgMapName= [];
    var imgMainName = [];
    var imgBottomName = [];
    var imgRightName= [];

//var  mapMain = document.querySelectorAll('map');
//mapMain=Array.prototype.slice.call(mapMain);
//imgMain = Array.prototype.slice.call(imgMain);


    var imgMain = document.querySelectorAll('#contentMain img');




  function createImgBotoom () {

      for(var i=0; i<imgMain.length; i++){


          var img = document.createElement('img');
          img.src = imgMain[i].src;
          img.name = imgMain[i].name;
          document.getElementById('bottomPanel').appendChild(img);
          img.style.width = '100';
          img.style.height = '100';

          imgBottomName.push(img.name)
      }
  }createImgBotoom ();






  function createImgRight () {

      for(var i=0; i<imgMain.length; i++){

          var img = document.createElement('img');
          img.src = imgMain[i].src;
          img.name = imgMain[i].name;
          img.id = imgMain[i].name;
          img.style.width = '100';
          img.style.opacity = 0.3;
          document.getElementById('contentRight').appendChild(img);
          imgRightName.push(img.name)
      }
  } createImgRight ();






    var imgBottom = document.querySelectorAll('#bottomPanel img');
    //var imgRight = document.querySelectorAll('#contentRight img');







    var main = document.getElementById('contentMain');

    main.addEventListener("click", function(event){
        var currentTarget = event.target;
        if (currentTarget.tagName != 'MAP'){

            var currentName = currentTarget.parentNode.getAttribute('name');

            if(imgBottomName.indexOf(currentName) != -1){

                var currentChildNumber = imgBottomName.indexOf(currentName);
                document.getElementById("bottomPanel").removeChild(imgBottom[currentChildNumber]);



                document.getElementById('contentMain').removeChild(imgMain[currentChildNumber]);

                var currentRightImg = document.querySelector('#contentRight #'  +currentName);
                currentRightImg.style.opacity = 1;

            }
        }
    });






