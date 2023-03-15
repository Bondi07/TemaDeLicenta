
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
    text = body.querySelector('.produse-text');

    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body.style.background = '#E4E9F7';
            body.style.color = 'black';
            body.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
        }else{
            body.style.background = '#121212';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
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

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});


/* DODAVANJE PRODUKTA */

let http = new XMLHttpRequest();

http.open('get', 'https://localhost:7111/api/Magazin/Produse', true );

http.send();
http.onload = function(){

    if(this.readyState == 4 && this.status == 200){

        let products = JSON.parse(this.responseText);

        let out = "";
        /* za svaku od slika */
        let i = 0;
        for(let item of products){

            out +=  `
                <div class="product">
                    <div class="okvir">
                        <img src="../imagesProduse/${item.nume}.jpg" alt="poze" width="180px" height="350px">
                        <p class=nume>${item.nume}</p>
                        <p class=cantitate>${item.cantitate}</p>
                        <p class=pret>${item.pret} RON </p>
                    </div>
                </div>
            `; 
            /* za menjanje slika */
            i = i + 1;
        }

        document.querySelector(".products").innerHTML = out;
        console.log(out);
    }
}