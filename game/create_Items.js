

var imgMainName = [];

function Item (name, src, usemap, pozX, pozY){
    this.name = name;
    this.src= src;
    this.usemap = usemap;
    this.drawImg = function(){
        var img = document.createElement('img');
        img.src = this.src;
        img.name = this.name;
        img.setAttribute('usemap', this.usemap);
        document.getElementById('contentMain').appendChild(img);
        img.style.left = pozX;
        img.style.top = pozY;
        imgMainName.push(img.name)
    }
}






    var cat = new Item ("cat", "images/cat.png", "#cat","150", "370");
    cat.drawImg();


    var dreamCatcher = new Item ("dreamCatch", "images/dreamsCatcher.png", "#dreamCatch","650", "20");
    dreamCatcher.drawImg();

    var jar = new Item ("jar", "images/pitcher.png", "#jar","800", "480");
    jar.drawImg();

    var plane = new Item ("plane", "images/plane.png", "#plane","230", "45");
    plane.drawImg();

    var worm = new Item ("worm", "images/worm.png", "#worm","400", "385");
    worm.drawImg();



var imgMain = document.querySelectorAll('#contentMain img');