
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
const text = body.querySelector('.pichart-text');
const button = body.querySelector('.button');
const chart = body.querySelector('#canvas');
const chart1 = body.querySelector('#canvas1');
const chart2 = body.querySelector('#canvas2');
const chart3 = body.querySelector('#canvas3');
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
          button.style.background = 'black';
          button.style.color = 'white';
          chart.style.background = '#E4E9F7';
          chart1.style.background = '#E4E9F7';
          chart2.style.background = '#E4E9F7';
          chart3.style.background = '#E4E9F7';
          manu.style.background = '#417AC9';
          plavaLinija.style.background = '#1E409F';

        }else{
          body1.style.background = '#121212';
          body1.style.color = 'white';
          body1.style.transform = '0.5s easy';
          box.style.background = 'white';
          text.style.color = 'white';
          button.style.background = 'blue';
          button.style.color = 'black';
          chart.style.background = 'white';
          chart1.style.background = 'white';
          chart2.style.background = 'white';
          chart3.style.background = 'white';
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
        
        var vanzari = data.map(function(elem){
            return elem.vanzari; 
        });

        var profitPeZi = data.map(function(elem){
            return elem.profitPeZi; 
        });


        const ctx = document.getElementById('canvas');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: zi,
            datasets: [{
              label: 'Prodaja',
              data: vanzari,
              borderWidth: 4,
              borderColor: 'white',
              backgroundColor: '#1F8A70'
            },
            {
                label: 'Zarada tokom dana',
                data: profitPeZi,
                borderWidth: 4,
                borderColor: 'white',
                backgroundColor: '#FF8B13'
              }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "#159895",
                  text: 'Profit u jednom danu tokom nedelje i ukupna prodaja u jednom danu',
                  padding: {
                    bottom: 40
                },
                font: {
                  size: 20  
                }
              }
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

        var vanzariPeZi = data.map(function(elem){
            return elem.vanzariPeZi; 
        });

        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: zi,
            datasets: [
            {
                label: 'Zarada tokom jednog dana',
                data: vanzariPeZi,
                borderWidth: 4,
                borderColor: '#00235B',
                backgroundColor: ['#FF8B13', '#EB455F', '#698269', '#20262E', '#A31ACB', '#3C79F5']
              }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "#159895",
                  text: 'Zarada tokom jednog dana',
                  padding: {
                    bottom: 40
                },
                font: {
                  size: 30
                }
              }
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

        var vizite = data.map(function(elem){
            return elem.vizite; 
        });


        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: zi,
            datasets: [
            {
                label: 'Posete tokom jednog dana',
                data: vizite,
                borderWidth: 4,
                borderColor: 'black',
                backgroundColor: ['#5D3891', '#C92C6D', '#84D2C5', '#F99417', '#3CCF4E', '#000000']
              }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "#159895",
                  text: 'Broj poseta tokom dana u jednoj nedelji',
                  padding: {
                    bottom: 40
                },
                font: {
                  size: 30
                }
              }
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

        var venitLunar = data.map(function(elem){
            return elem.venitLunar; 
        });

        var tranzactie = data.map(function(elem){
            return elem.tranzactie; 
        });

        var produseVanduteLunar = data.map(function(elem){
            return elem.produseVanduteLunar; 
        });


        const ctx = document.getElementById('canvas3');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Godisnji prihod', 'Mesecni prihod', 'Tranzakcije', 'Prodati prodati mesecno'],
            datasets: [
            {
                label: ['Godisnji prihod', 'Mesecni prihod', 'Tranzakcije', 'Prodati prodati mesecno'],
                data: [venitAnual, venitLunar, tranzactie, produseVanduteLunar],
                borderWidth: 5,
                borderColor: 'black',
                backgroundColor: ['#5D3891', '#C92C6D', '#84D2C5', '#F99417', '#3CCF4E', '#000000']
            }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "#159895",
                  text: 'Broj prodatih proizvoda mesecno, godisnji prihod, mesecni prihod i broj tranzakcija tokom meseca',
                  padding: {
                    bottom: 40
                },
                font: {
                  size: 25
                }
              }
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
