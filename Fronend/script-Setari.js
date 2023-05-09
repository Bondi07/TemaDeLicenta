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
const text = body.querySelector('.setari-text');
const testSize = body.querySelector('.test');
const testColor = body.querySelector('.schimbaCuloarea');
const testFont = body.querySelector('.schimbareaFontFamily');
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
            testSize.style.background = '#E4E9F7';
            testSize.style.color = 'black';
            testSize.style.padding = '0px';
            testColor.style.background = '#E4E9F7';
            testColor.style.color = 'black';
            testColor.style.padding = '0px';
            testFont.style.background = '#E4E9F7';
            testFont.style.color = 'black';
            testFont.style.padding = '0px';
            // PITANJE DA LI DA OSTAVIM TAKO DA S MENJA BOJA MENIJA?
            manu.style.background = '#417AC9';
            plavaLinija.style.background = '#1E409F';
            
        }else{
            body1.style.background = '#121212';
            body1.style.color = 'white';
            body1.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            testSize.style.background = 'white';
            testSize.style.color = 'black';
            testSize.style.padding = '20px';
            testColor.style.background = 'white';
            testColor.style.color = 'black';
            testColor.style.padding = '20px';
            testFont.style.background = 'white';
            testFont.style.color = 'black';
            testFont.style.padding = '20px';
            // PIATANJE DA LI DA OSTAVIM ILI NE?
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




