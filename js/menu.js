/* Full top menu site wide, easier to maintain */

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {

/*-------------------------------Menu goes here-------------------*/

const headimg = 
        '<nav>'+
                '<ul class="menu centered padtop">'+
                    '<li><a class="menu" href="index.html">Home</a></li>'+
                    '<li class="menu"><a class="menu" href="shop.html">Shop</a></li>'+
                    '<li><a class="menu" href="faq.html">FAQ</a></li>'+
                    '<li><a class="menu" href="aboutus.html">About us</a></li>'+
                '</ul>'+
            '</nav>';


            document.getElementById("topmenu").innerHTML = headimg ; 
    }
}
