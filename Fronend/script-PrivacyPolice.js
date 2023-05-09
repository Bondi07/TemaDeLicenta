/*pentru html*/ 
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");

});

/*DARK MODE*/

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const box = body.querySelector('.box');
const body1 = body.querySelector('.home-section');
const text = body.querySelector('.PrivacePolice-text');
const manu = body.querySelector(".sidebar");
const plavaLinija = body.querySelector(".line");
const tx = body.querySelector(".text-header");
const tx1 = body.querySelector(".tx1");
const tx2 = body.querySelector(".tx2");
const tx3 = body.querySelector(".tx3");
const tx4 = body.querySelector(".tx4");
const tx5 = body.querySelector(".tx5");
const tx6 = body.querySelector(".tx6");
const tx7 = body.querySelector(".tx7");
const tx8 = body.querySelector(".tx8");
const slika = body.querySelector(".image");



    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body1.style.background = '#E4E9F7';
            body1.style.color = 'black';
            body1.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
            manu.style.background = '#417AC9';
            plavaLinija.style.background = '#1E409F';
            tx.style.color = 'black';
            tx1.style.color = 'black';
            tx2.style.color = 'black';
            tx3.style.color = 'black';
            tx4.style.color = 'black';
            tx5.style.color = 'black';
            tx6.style.color = 'black';
            tx7.style.color = 'black';
            tx8.style.color = 'black';
            slika.style.background = '#E4E9F7';
            slika.style.padding = '0';


        }else{
            body1.style.background = '#121212';
            body1.style.color = 'white';
            body1.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            manu.style.background = "#0A4D68";
            plavaLinija.style.background = '#4C6793';
            tx.style.color = 'white';
            tx1.style.color = 'white';
            tx2.style.color = 'white';
            tx3.style.color = 'white';
            tx4.style.color = 'white';
            tx5.style.color = 'white';
            tx6.style.color = 'white';
            tx7.style.color = 'white';
            tx8.style.color = 'white';
            slika.style.background = 'white';
            slika.style.padding = '10px';

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


