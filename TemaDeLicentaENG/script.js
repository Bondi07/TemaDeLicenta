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
    body = document.querySelector('body');
    box = body.querySelector('.box');
    body = body.querySelector('.home-section');
    text = body.querySelector('.dash-text');
    chart = body.querySelector('#myChart');
    chart1 = body.querySelector('#piChart');

    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body.style.background = '#E4E9F7';
            body.style.color = 'black';
            body.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
            chart.style.background = '#E4E9F7';
            chart1.style.background = '#E4E9F7';
        }else{
            body.style.background = '#121212';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            chart.style.background = 'white';
            chart1.style.background = 'white';
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







