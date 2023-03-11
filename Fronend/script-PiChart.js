
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
    text = body.querySelector('.pichart-text');
    button = body.querySelector('.button');
    chart = body.querySelector('#canvas');
    chart1 = body.querySelector('#canvas1');
    chart2 = body.querySelector('#canvas2');
    chart3 = body.querySelector('#canvas3');

    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body.style.background = '#E4E9F7';
            body.style.color = 'black';
            body.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
            button.style.background = 'black';
            button.style.color = 'white';
            chart.style.background = '#E4E9F7';
            chart1.style.background = '#E4E9F7';
            chart2.style.background = '#E4E9F7';
            chart3.style.background = '#E4E9F7';

        }else{
            body.style.background = '#121212';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            button.style.background = 'blue';
            button.style.color = 'black';
            chart.style.background = 'white';
            chart1.style.background = 'white';
            chart2.style.background = 'white';
            chart3.style.background = 'white';
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

/* CHARTS */
/* CHART 1 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/VanzariSaptamanale";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var zi = data.map(function(elem){
            return elem.zi; 
        });
        console.log(zi);
        
        var vanzari = data.map(function(elem){
            return elem.vanzari; 
        });
        console.log(vanzari);

        var profitPeZi = data.map(function(elem){
            return elem.profitPeZi; 
        });
        console.log(profitPeZi);


        const ctx = document.getElementById('canvas');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: zi,
            datasets: [{
              label: 'Vanzari',
              data: vanzari,
              borderWidth: 4,
              borderColor: '#939B62',
              backgroundColor: '#1F8A70'
            },
            {
                label: 'Profit pe zi',
                data: profitPeZi,
                borderWidth: 4,
                borderColor: '#FEC868',
                backgroundColor: '#FF8B13'
              }]
          },
          options: {
            elements:{
                line:{
                    tension:0
                }
            },
            scales: {
              y: {
                beginAtZero: true
              },
              x: {
                beginAtZero: true
              }
            }
          }
        });
    }
}

/* CHART 2 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Grafic7";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        
        var zi = data.map(function(elem){
            return elem.zi; 
        });
        console.log(zi);

        var vanzariPeZi = data.map(function(elem){
            return elem.vanzariPeZi; 
        });
        console.log(vanzariPeZi);


        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: zi,
            datasets: [
            {
                label: 'Profit pe zi',
                data: vanzariPeZi,
                borderWidth: 4,
                borderColor: '#FEC868',
                backgroundColor: ['#FF8B13', '#EB455F', '#698269', '#20262E', '#A31ACB', '#3C79F5']
              }]
          },
          options: {
            elements:{
                line:{
                    tension:0
                }
            },
            scales: {
              y: {
                beginAtZero: true
              },
              x: {
                beginAtZero: true
              }
            }
          }
        });
    }
}

/* CHART 3 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Grafic8";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        
        var zi = data.map(function(elem){
            return elem.zi; 
        });
        console.log(zi);

        var vizite = data.map(function(elem){
            return elem.vizite; 
        });
        console.log(vizite);


        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: zi,
            datasets: [
            {
                label: 'Vizite pe o zi',
                data: vizite,
                borderWidth: 4,
                borderColor: '#FFFF',
                backgroundColor: ['#5D3891', '#C92C6D', '#84D2C5', '#F99417', '#3CCF4E', '#000000']
              }]
          },
          options: {
            title: {
                display: true,
                text: "Vanzarile pe o zi"
              },
            elements:{
                line:{
                    tension:0
                }
            },
            scales: {
              y: {
                beginAtZero: true
              },
              x: {
                beginAtZero: true
              }
            }
          }
        });
    }
}


/* CHART 4 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Dashboard";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        
        var venitAnual = data.map(function(elem){
            return elem.venitAnual; 
        });
        console.log(venitAnual);

        var venitLunar = data.map(function(elem){
            return elem.venitLunar; 
        });
        console.log(venitLunar);

        var tranzactie = data.map(function(elem){
            return elem.tranzactie; 
        });
        console.log(tranzactie);

        var produseVanduteLunar = data.map(function(elem){
            return elem.produseVanduteLunar; 
        });
        console.log(produseVanduteLunar);

        var produseVanduteAnual = data.map(function(elem){
            return elem.produseVanduteAnual; 
        });
        console.log(produseVanduteAnual);


        const ctx = document.getElementById('canvas3');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Venit anual', 'Venit Lunar', 'Tranzacti', 'Produse vandute lunar'],
            datasets: [
            {
                // label: ['Venit anual', 'Venit Lunar', 'Tranzacti', 'Produse vandute lunar'],
                data: [venitAnual, venitLunar, tranzactie, produseVanduteLunar],
                borderWidth: 4,
                borderColor: '#FFFF',
                backgroundColor: ['#5D3891', '#C92C6D', '#84D2C5', '#F99417', '#3CCF4E', '#000000']
            }]
          },
          options: {
            title: {
                display: true,
                text: "Vanzarile pe o zi"
              },
            elements:{
                line:{
                    tension:0
                }
            },
            scales: {
              y: {
                beginAtZero: true
              },
              x: {
                beginAtZero: true
              }
            }
          }
        });
    }
}
