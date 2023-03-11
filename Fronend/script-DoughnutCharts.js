
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
    text = body.querySelector('.doughnut-text');
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


/*DOUGHNAT charts */
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
        var zi = data.map(function(elem){
            return elem.zi; 
        });
        console.log(sumaMarfa);
        var sumaMarfa = data.map(function(elem){
            return elem.sumaMarfa; 
        });
        console.log(profit);
        var profit = data.map(function(elem){
            return elem.profit; 
        });
        console.log(profit);
    
        const ctx = document.getElementById('canvas');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: zi,
              datasets: [{
                label: 'Bani cheltuiti pe marfa',
                data: sumaMarfa,
                borderWidth: 4,
                borderColor: 'red',
                backgroundColor: '#1F8A70'
              },
              {
                label: 'Profit',
                data: profit,
                borderWidth: 4,
                borderColor: 'red',
                backgroundColor: '#537FE7'

              }
            ]
            },
            options: {
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

/* charts 2*/
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
    
        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Venit anuale', 'Vanzari lunare', 'Tranzacti', 'Produse vandute lunar'],
              datasets: [{
                label: [],
                data: [venitAnual,venitLunar,tranzactie,produseVanduteLunar],
                borderWidth: 4,
                borderColor: 'red',
                backgroundColor: ['#1F8A70', '#537FE7', '#609EA2', '#FC7300']
            }]
            },
            options: {
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

/* charts 3 */
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

        var produseVandute = data.map(function(elem){
            return elem.produseVandute; 
        });
        console.log(produseVandute);

        var profitPeZi = data.map(function(elem){
            return elem.profitPeZi; 
        });
        console.log(profitPeZi);
    
        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: zi,
              datasets: [{
                label: 'Vanzari',
                data: vanzari,
                borderWidth: 4,
                borderColor: 'black',
                backgroundColor: '#FDD36A'
            },
            {
                label: 'Produse vandute',
                data: produseVandute,
                borderWidth: 4,
                borderColor: 'black',
                backgroundColor: '#F16767'
            },{
                label: 'Profit pe zi',
                data: profitPeZi,
                borderWidth: 4,
                borderColor: 'black',
                backgroundColor: '#263159'
            }]
            },
            options: {
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

/* charts 4 */
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


        const ctx = document.getElementById('canvas3');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
            labels: luna ,
              datasets: [{
                label: 'Vanzari totale',
                data: vanzariTotale,
                borderWidth: 4,
                borderColor: 'blac',
                backgroundColor: '#DC0000'
            }]
            },
            options: {
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
