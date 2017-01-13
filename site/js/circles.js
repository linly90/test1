document.addEventListener("scroll", anim);











function anim() {

    var height1 = document.querySelector('#popular').clientHeight;
    var height2 = document.querySelector('#cards').clientHeight;


    if (window.pageYOffset > height1+250 && window.pageYOffset < height2+300) {

        var divPopular = document.querySelector('#circles-row1');
        var divPopular2 = document.querySelector('#circles-row2');
        var firstDiv = document.createElement('div');
        divPopular.appendChild(firstDiv)

        var secondDiv = document.createElement('div');
        divPopular.appendChild(secondDiv);

        var thirdDiv = document.createElement('div');
        divPopular2.appendChild(thirdDiv);

        var forthDiv = document.createElement('div');
        divPopular2.appendChild(forthDiv);

        var template= ` 
        <svg height="220px" width="220px">
            <path class='circle-center' d="M100,150 A70,70 0 1,0 99,150" fill="rgba(0, 9, 30, 0.6)" />
            <path d="M100,150 A70,70 0 1,0 99,150" fill="rgba(255,255,255,0)" stroke="url(#stripes)" stroke-width="15" />
            <linearGradient id="stripes" x1="0" y1="0" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:rgba(0, 15, 56, 0.82);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(2, 140, 134);stop-opacity:1" />
            </linearGradient>
        </svg>`;

        var templateC1= `<h4 class="circle-content">Treasure</h4>
                                <p class="circle-content"> 98%</p>`;


        var templateC2= `<h4 class="circle-content">Mistery</h4>
                                <p class="circle-content"> 92%</p>`;

        var templateC3= `<h4 class="circle-content">Treasure</h4>
                                <p class="circle-content"> 79%</p>`;

        var templateC4= `<h4 class="circle-content">Mistery</h4>
                                <p class="circle-content"> 83%</p>`;





        function circle1(templateC) {
            return firstDiv.innerHTML = template + templateC;

        }


        function circle2(templateC) {
            return secondDiv.innerHTML = template + templateC;
        }


        function circle3(templateC) {

            return thirdDiv.innerHTML = template + templateC;
        }


        function circle4(templateC) {

            return forthDiv.innerHTML = template + templateC;
        }


        setTimeout(circle1(templateC1), 0);
        setTimeout(circle2(templateC2), 400);
        setTimeout(circle3(templateC3), 800);
        setTimeout(circle4(templateC4), 1200);















        document.removeEventListener("scroll", anim)
    }
}



