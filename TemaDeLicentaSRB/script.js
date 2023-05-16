/* MERGE */
/* OVDE SE UZIMAJU PODACI IZ BAZE PODATAKA I STAVLJAJU SE U KARTICE */
fetch("https://localhost:7111/api/Magazin/Dashboard").then
(function (res){
    return res.json();
}).then(function(products){
    
    let placeholder = document.querySelector("#venit");console.log(document.querySelector("#venit"));
    let placeholder1 = document.querySelector("#venitlunar");console.log(document.querySelector("#venitlunar"));
    let placeholder2 = document.querySelector("#tranzacti");console.log(document.querySelector("#tranzacti"));
    let placeholder3 = document.querySelector("#prVaLunar");console.log(document.querySelector("#prVaLunar"));
    let placeholder4 = document.querySelector("#prVaAnual");console.log(document.querySelector("#prVaAnual"));


    let out = "";
    for(let product of products){
        console.log("produse= ", products);
        placeholder.innerHTML = product.venitAnual;
        placeholder1.innerHTML = product.venitLunar;
        placeholder2.innerHTML = product.tranzactie;
        placeholder3.innerHTML = product.produseVanduteLunar;
        placeholder4.innerHTML = product.produseVanduteAnual;
    
    }   
})  

/* OVDE TREBA DA PREDSTAVIMO DVA GRAFIKA ISTO  POMOCU PODATAKA IZ BAZE PODATAKA */
/*predsatvljeno u grafice.js */



/*pentru html*/ 

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");

});

/*DARK MODE*/

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const box = body.querySelector('.box');
const body1 = body.querySelector('.home-section');
const text = body.querySelector('.dash-text');
const chart = body.querySelector('#myChart');
const chart1 = body.querySelector('#piChart');
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
            chart.style.background = '#E4E9F7';
            chart1.style.background = '#E4E9F7';
            manu.style.background = '#417AC9';
            plavaLinija.style.background = '#1E409F';
        }else{
            body1.style.background = '#121212';
            body1.style.color = 'white';
            body1.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            chart.style.background = 'white';
            chart1.style.background = 'white';
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









