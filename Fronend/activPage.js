/* DODATI DA OSTANE BOJA KAD KKLIKNESS NA DUGME U MENIJU */

// var header = document.getElementById("myDiv");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) { 
//         current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//     });
// }


/* 2 nacin */
// $(document).ready(function(){
//     $('ul li a').click(function(){
//         $('li a').removeClass("active");
//         $(this).addClass("active");
//     });
// });



var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
}





