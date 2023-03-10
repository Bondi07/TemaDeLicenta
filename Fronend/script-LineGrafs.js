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
    text = body.querySelector('.LineChartsText');
    button = body.querySelector('.button');
    chart = body.querySelector('#canvas');
    chart1 = body.querySelector('#canvas1');
    chart2 = body.querySelector('#canvas2');
    chart3 = body.querySelector('#canvas3');
    chart4 = body.querySelector('#canvas4');


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
            chart4.style.background = '#E4E9F7';
        }else{
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            button.style.background = 'blue';
            chart.style.background = 'white';
            chart1.style.background = 'white';
            chart2.style.background = 'white';
            chart3.style.background = 'white';
            chart4.style.background = 'white';
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
        console.log(zi);
        var vanzari = data.map(function(elem){
            return elem.vanzari; 
        });
        console.log(vanzari[0]);
        var profitPeZi = data.map(function(elem){
            return elem.profitPeZi; 
        });
        console.log(profitPeZi[0]);


        const ctx = document.getElementById('canvas');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: zi,
            datasets: [{
              label: 'Vanzari',
              data: vanzari,
              borderWidth: 4,
              borderColor: 'red'
            },
            {
                label: 'Profit pe zi',
                data: profitPeZi,
                borderWidth: 4,
                borderColor: 'blue'
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
        console.log(luna);
        var vanzariTotale = data.map(function(elem){
            return elem.vanzariTotale; 
        });
        console.log(vanzariTotale);
        


        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: luna,
            datasets: [{
              label: 'Vanzari totale pe o luna',
              data: vanzariTotale,
              borderWidth: 4,
              borderColor: 'red'
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
        console.log(an);

        var vanzariTotale = data.map(function(elem){
            return elem.vanzariTotale; 
        });
        console.log(vanzariTotale);
        


        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: an,
            datasets: [{
              label: 'Vanzari totale pe an',
              data: vanzariTotale,
              borderWidth: 4,
              borderColor: 'green'
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
              label: 'Suma de bani pentru marfa',
              data: sumaMarfa,
              borderWidth: 4,
              borderColor: '#E7B10A'
            },
            {
              label: 'Profit',
              data: profit,
              borderWidth: 4,
              borderColor: '#2B3467'
            }]
          },
          options: {
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
        console.log(zi);

        var vanzariPeZi = data.map(function(elem){
            return elem.vanzariPeZi; 
        });
        console.log(vanzariPeZi);

        const ctx = document.getElementById('canvas4');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: zi,
            datasets: [{
              label: 'Bani facuti intr-o zi',
              data: vanzariPeZi,
              borderWidth: 4,
              borderColor: '#609EA2'
            }]
          },
          options: {
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
