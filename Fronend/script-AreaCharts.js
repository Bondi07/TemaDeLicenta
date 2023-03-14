
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
    text = body.querySelector('.area-text');
    button = body.querySelector('.button');
    chart = body.querySelector('#canvas');
    chart1 = body.querySelector('#canvas1');
    chart2 = body.querySelector('#canvas2');

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



/*area charts*/
/* CHART 1 */
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

        const ctx = document.getElementById('canvas');
        new Chart(ctx, {
            type: 'polarArea',
            data: {
              labels: zi,
              datasets: [
              {
                label: 'Bani cheltuiti pe marfa',
                data: sumaMarfa,
                borderWidth: 4,
                backgroundColor: '#2B3A55',
                borderColor: '#FED049'
              },
              {
                label: 'Profit',
                data: profit,
                borderWidth: 4,
                borderColor: '#FC7300'
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                }
              }
            }
          });
    }
}
/*splineArea */
/*CHART 2 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Grafic4";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var clientiMultumiti = data.map(function(elem){
            return elem.clientiMultumiti; 
        });
        console.log(clientiMultumiti);
        
        var clientiNemultumiti = data.map(function(elem){
            return elem.clientiNemultumiti; 
        });
        console.log(clientiNemultumiti);

        
        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
            type: 'polarArea',
            data: {
              labels: [],
              datasets: [
              {
                label: 'Clienti multumiti',
                data: clientiMultumiti,
                borderWidth: 4,
                borderColor: '#FED049'
              },
              {
                label: 'Clienti ne multumiti',
                data: clientiNemultumiti,
                borderWidth: 4,
                borderColor: '#F55050'
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                }
              }
            }
          });
    }
}


/*CHART 3 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Grafic5";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var clientiDinSerbia = data.map(function(elem){
            return elem.clientiDinSerbia; 
        });
        console.log(clientiDinSerbia);
        
        var clientiDinRomani = data.map(function(elem){
            return elem.clientiDinRomani; 
        });
        console.log(clientiDinRomani);

        var clientiDinBulgaria = data.map(function(elem){
          return elem.clientiDinBulgaria; 
        });
        console.log(clientiDinBulgaria);

        var clientiDinAustria = data.map(function(elem){
          return elem.clientiDinAustria; 
        });
        console.log(clientiDinAustria);

        
        const ctx = document.getElementById('canvas2').
        getContext("2d");

        new Chart(ctx, {
            type: 'radar',/* radar (area graf chart tipe) */
            data: {
              labels: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000],

              datasets: [
              {
                label: 'Clienti din Serbia',
                data: clientiDinSerbia,
                borderWidth: 4,
                borderColor: '#FED049'
              },
              {
                label: 'Clienti din Romania',
                data: clientiDinRomani,
                borderWidth: 4,
                borderColor: '#F55050'
              },
              {
                label: 'Clienti din Bulgaria',
                data: clientiDinBulgaria,
                borderWidth: 4,
                borderColor: '#301E67'
              },
              {
                label: 'Clienti din Austria',
                data: clientiDinAustria,
                borderWidth: 4,
                borderColor: '#BFDB38',
                backgroundColor: '#ffff'
              }]
            },
            options: {
              scales: {
                x: {
                  beginAtZero: true
                },
                y: {
                  beginAtZero: true
                }
              }
            }
          });
    }
}



/* AREA CHART FROM CANVAS JS */
