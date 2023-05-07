/*pentru html*/ 

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");

});

/*DARK MODE*/

const toggle = document.getElementById('toggleDark');
    body = document.querySelector('body');
    box = body.querySelector('.box');
    body = body.querySelector('.home-section');
    text = body.querySelector('.angajat1-text');
    marq = body.querySelector('marquee');
    travel = body.querySelector('.containerTravel marquee');
    imgFudbal = body.querySelector('#gol');
    marq2 = body.querySelector('#marq2');
    animacijaFudbal = body.querySelector('.animacijaFootball');

    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body.style.background = '#E4E9F7';
            body.style.color = 'black';
            body.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
            marq.style.background = '#E4E9F7';
            travel.style.background = '#E4E9F7';
            imgFudbal.style.background = '#E4E9F7';
            marq2.style.background = '#E4E9F7';
            animacijaFudbal.style.background = '#E4E9F7';

        }else{
            body.style.background = '#121212';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            marq.style.background = 'white';
            travel.style.background = 'white';
            imgFudbal.style.background = 'white';
            marq2.style.background = 'white';
            animacijaFudbal.style.background = 'white';

            
        }
    })


/*za menjanje ikonice menija*/    
const toggleMenu = document.getElementById('right');
    right = body.querySelector(".home-content");

    toggleMenu.addEventListener('click', function(){
        this.classList.toggle('bx-chevrons-right');
        if(this.classList.toggle('bx-left-indent')){
            right.style.background = 'bx-chevrons-right';
        }
    })



/* GO TO TOP BUTTON */
const scrollToTopButton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});

