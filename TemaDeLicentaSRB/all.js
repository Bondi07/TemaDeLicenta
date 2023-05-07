/*pentru html*/ 

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");

});
/*DARK MODE*/

const toggle1 = document.getElementById('toggleDark');
    body = document.querySelector('body');
    box = body.querySelector(".box");
    body = body.querySelector('.home-section');
    text = body.querySelector('.dash-text');
    tx = body.querySelector('.angajatii-text');
    main = body.querySelector('.main');


    toggle1.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body.style.background = '#E4E9F7';
            body.style.color = 'black';
            body.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
            tx.style.color = 'black';
            main.style.color = 'black';

        }else{
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            tx.style.color = 'white';
            main.style.color = 'white';


        }
    })


/*za menjanje ikonice menija */    
const toggleMenu = document.getElementById('right');
    right = body.querySelector(".home-content");

    toggleMenu.addEventListener('click', function(){
        this.classList.toggle('bx-chevrons-right');
        if(this.classList.toggle('bx-left-indent')){
            right.style.background = 'bx-chevrons-right';
        }
    })






/* PENTRU COOKIES */
const cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    if (document.cookie.includes("bondi")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if(button.id == "acceptBtn"){
                document.cookie = "cookieBy= bondi; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

window.addEventListener("load", executeCodes)


