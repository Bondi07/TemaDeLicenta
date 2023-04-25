
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

            /*  OVDE MORA DA BUDE I DA PISE PRODUCT A NE PRODUCTS JE NECE DA RADI INACE   */
            out +=  `
                <div class="product"  id="products">
                    <div class="okvir" id="product">
                        <img src="../imagesProduse/${item.nume}.jpg" alt="poze" width="180px" height="350px">
                        <p class=nume>${item.nume}</p>
                        <p class=cantitate>Cantitate: ${item.cantitate}</p>
                        <p class=pret>${item.pret} RON </p>
                    </div>
                </div>
            `; 
            /* za menjanje slika */
            i = i + 1;
        }

        document.querySelector(".products").innerHTML = out;
        
    }
}



/* SEARCH BAR */

document.querySelector('#search').addEventListener('input', filterList);

function filterList(){

    const searchInput = document.querySelector('#search');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.okvir');

    listItems.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = '';
        }else{
            item.style.display = 'none';
        }
    });
}


/* pagination */

