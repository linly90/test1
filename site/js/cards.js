document.addEventListener("scroll", animCards);











function animCards() {

    var height1 = document.querySelector('#cards').clientHeight;
    var height2 = document.querySelector('#gallery').clientHeight;


    if (window.pageYOffset > height1+150 && window.pageYOffset < height2+800) {

        animRightCards();

        var p = document.querySelectorAll('#cards p');

        for(var i=0; i< p.length-1; i++){
            p[i].setAttribute('class', 'p-initial');
        }


        document.removeEventListener("scroll", animCards)

    }
}



function animRightCards(){
    var div = document.querySelectorAll('.cards-right div');

    for(var i=0; i< div.length; i++){
        div[i].setAttribute('class', 'cards-right-anim');
        div[i].style.opacity = '1';
    }

}