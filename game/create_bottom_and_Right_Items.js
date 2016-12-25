
    var imgBottomName = [];
    var imgRightName= [];

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



