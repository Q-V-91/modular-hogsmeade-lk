/* Full top menu site wide, easier to maintain */

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {

/*-------------------------------Menu goes here-------------------*/

const headimg = '<img class="logopng" src="rsrc/aglogo.png" alt="logo of art gallery"></img>'+
        '<nav>'+
                '<ul class="menu centered padtop">'+
                    '<li><a class="menu" href="index.html">Home</a></li>'+
                    '<li class="menu unroll"><a class="menu" href="yprofile.html">username &ensp;</a>'+
                        '<ul class="insideroll">'+
                            '<li><a class="" href="yprofile.html">Your Profile</a></li>'+
                            '<li><a class="" href="upload.html">Upload</a></li>'+
                            '<li><a class="" href="accountset.html">Account settings</a></li>'+
                        '</ul>'+
                   '</li>'+
                    '<li><a class="menu" href="faq.html">FAQ</a></li>'+
                    '<li><a class="menu" href="tos.html">ToS</a></li>'+
                    '<li><a class="menu" href="aboutus.html">About us</a></li>'+
                '</ul>'+
            '</nav>';


            document.getElementById("topmenu").innerHTML = headimg ; 
    }
}
