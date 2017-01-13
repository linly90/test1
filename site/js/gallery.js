document.addEventListener("scroll", animGallery);











function animGallery() {

    var height1 = document.querySelector('#gallery').clientHeight;
    //var height2 = document.querySelector('#gallery').clientHeight;


    if (window.pageYOffset > height1 + 150) {


        var imgL = document.querySelectorAll('.gallery-left img');
        var imgR = document.querySelectorAll('.gallery-right img');
        for (var i = 0; i < imgL.length; i++) {
            imgL[i].setAttribute('class', 'gallery-left-anim');
            imgR[i].setAttribute('class', 'gallery-right-anim');

        }


        document.removeEventListener("scroll", animGallery)


    }
}


