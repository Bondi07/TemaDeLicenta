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
const text = body.querySelector('.LineChartsText');
const button = body.querySelector('.button');
const chart = body.querySelector('#canvas');
const chart1 = body.querySelector('#canvas1');
const chart2 = body.querySelector('#canvas2');
const chart3 = body.querySelector('#canvas3');
const chart4 = body.querySelector('#canvas4');
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
      button.style.background = '#E21818';
      button.style.color = 'white';
      chart.style.background = '#E4E9F7';
      chart1.style.background = '#E4E9F7';
      chart2.style.background = '#E4E9F7';
      chart3.style.background = '#E4E9F7';
      chart4.style.background = '#E4E9F7';
      manu.style.background = '#417AC9';
      plavaLinija.style.background = '#1E409F';

    }else{
      body1.style.background = '#121212';
      body1.style.color = 'white';
      body1.style.transform = '0.5s easy';
      box.style.background = 'white';
      text.style.color = 'white';
      button.style.background = '#FFE15D';
      button.style.color = 'black';
      chart.style.background = 'white';
      chart1.style.background = 'white';
      chart2.style.background = 'white';
      chart3.style.background = 'white';
      chart4.style.background = 'white';
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






/*line charts */
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
          type: 'line',
          data: {
            labels: zi,
            datasets: [{
              label: 'Prodaja',
              data: vanzari,
              borderWidth: 4,
              borderColor: 'red'
            },
            {
                label: 'Profit u jendom danu',
                data: profitPeZi,
                borderWidth: 4,
                borderColor: 'blue'
              }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "red",
                  text: 'Profitu u jednom danu tokom nedelje',
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
              }
            }
          }
        });
    }
}


/* char2 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/VanzariTotale";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var luna = data.map(function(elem){
            return elem.luna; 
        });
        
        var vanzariTotale = data.map(function(elem){
            return elem.vanzariTotale; 
        });


        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: luna,
            datasets: [{
              label: 'Ukupna prodaja za mesec dana',
              data: vanzariTotale,
              borderWidth: 4,
              borderColor: 'red'
            }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "red",
                  text: 'Zarada tokom jednog meseca u godini',
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
              }
            }
          }
        });
    }
}

/* chart3 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/VanzariTotale";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var an = data.map(function(elem){
            return elem.an; 
        });
        

        var vanzariTotale = data.map(function(elem){
            return elem.vanzariTotale; 
        });
        
        
        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: an,
            datasets: [{
              label: 'Ukupna godisnja prodaja',
              data: vanzariTotale,
              borderWidth: 4,
              borderColor: 'green'
            }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "red",
                  text: 'Zarada tokom 2021. godine',
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
              }
            }
          }
        });
    }
}

/* chart4 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Grafic3";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var zi = data.map(function(elem){
            return elem.zi; 
        });
        console.log(zi);

        var sumaMarfa = data.map(function(elem){
            return elem.sumaMarfa; 
        });
        console.log(sumaMarfa);
        
        var profit = data.map(function(elem){
          return elem.profit; 
        });
        console.log(profit);


        const ctx = document.getElementById('canvas3');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: zi,
            datasets: [{
              label: 'Novac za potrebe robe',
              data: sumaMarfa,
              borderWidth: 4,
              borderColor: '#E7B10A'
            },
            {
              label: 'Zarada',
              data: profit,
              borderWidth: 4,
              borderColor: '#2B3467'
            }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "red",
                  text: 'Novac utorsen na kupovinu robe i minimalna zarada od te robe',
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
              x: {
                beginAtZero: true
              }
            }
          }
        });
    }
}

/* chart5 */
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
        

        const ctx = document.getElementById('canvas4');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: zi,
            datasets: [{
              label: 'Novac zaradjen tokom dana',
              data: vanzariPeZi,
              borderWidth: 4,
              borderColor: '#609EA2'
            }]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  color: "red",
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
              x: {
                beginAtZero: true
              }
            }
          }
        });
    }
}
