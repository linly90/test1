var imgBottomName = [];
var imgRightName= [];






var panel = [];
var num_panel = random(0, imgMain.length-1);
//console.log(num_panel)
for(var i=0; i<3; i++){
    var number= num_panel[i];

    panel.push(imgMain.slice(number, number+1))


}

 console.log(num_panel)

console.log(imgMain)
console.log(panel)

function createImgBotoom () {

    for(var i=0; i<panel.length; i++){


        var img = document.createElement('img');
        img.src = panel[i][0].src;
        img.name = panel[i][0].name;
        document.getElementById('bottomPanel').appendChild(img);
        img.style.width = '100';
        img.style.height = '100';

        imgBottomName.push(img.name)

    }
}createImgBotoom ();



console.log(imgBottomName)


function createImgRight () {

    for(var i=0; i<panel.length; i++){

        var img = document.createElement('img');
        img.src = panel[i][0].src;
        img.name = panel[i][0].name;
        img.id = panel[i][0].name;
        img.style.width = '100';
        img.style.opacity = 0.3;
        document.getElementById('contentRight').appendChild(img);
        imgRightName.push(img.name)
    }
} createImgRight ();






/*

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


*/
