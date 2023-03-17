/*pentru html*/ 
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");

});

/*DARK MODE*/

const toggle = document.getElementById('toggleDark');
    body = document.querySelector('body');
    box = body.querySelector('.box');
    body = body.querySelector('.home-section');
    text = body.querySelector('.setari-text');
    testSize = body.querySelector('.test');
    testColor = body.querySelector('.schimbaCuloarea');
    testFont = body.querySelector('.schimbareaFontFamily');



    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body.style.background = '#E4E9F7';
            body.style.color = 'black';
            body.style.transform = '0.5s easy';
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


        }else{
            body.style.background = '#121212';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
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



