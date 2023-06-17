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
const text = body.querySelector('.coockies-text');
const header = body.querySelector('.heder');
const text1 = body.querySelector('.text1');
const text2 = body.querySelector('.text2');
const text3 = body.querySelector('.text3');
const text4 = body.querySelector('.text4');
const manu = body.querySelector(".sidebar");
const plavaLinija = body.querySelector(".line");


    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body1.style.background = '#E4E9F7';
            body1.style.color = 'black';
            body1.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
            header.style.color = 'black';
            text1.style.color = 'black';
            text2.style.color = 'black';
            text3.style.color = 'black';
            text4.style.color = 'black';
            manu.style.background = '#417AC9';
            plavaLinija.style.background = '#1E409F';

        }else{
            body1.style.background = '#121212';
            body1.style.color = 'white';
            body1.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            header.style.color = 'white';
            text1.style.color = 'white';
            text2.style.color = 'white';
            text3.style.color = 'white';
            text4.style.color = 'white';
            manu.style.background = "#0A4D68";
            plavaLinija.style.background = '#4C6793';

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

