/*pentru html*/ 

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");

});

/*DARK MODE*/

const toggle = document.getElementById('toggleDark');
const  body = document.querySelector('body');
const  box = body.querySelector('.box');
const  body1 = body.querySelector('.home-section');
const  text = body.querySelector('.area-text');
const  button = body.querySelector('.button');
const  chart = body.querySelector('#canvas');
const  chart1 = body.querySelector('#canvas1');
const  chart2 = body.querySelector('#canvas2');
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
        
        var sumaMarfa = data.map(function(elem){
            return elem.sumaMarfa; 
        });
        
        var profit = data.map(function(elem){
            return elem.profit; 
        });
        

        const ctx = document.getElementById('canvas');
        new Chart(ctx, {
            type: 'polarArea',
            data: {
              labels: zi,
              datasets: [
              {
                label: 'Novac utrosen na robu',
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
              plugins: {
                title: {
                    display: true,
                    color: "green",
                    text: 'Novac potrosen na robu i zarada',
                    padding: {
                      bottom: 40
                  },
                  font: {
                    size: 30
                  }
                }
              },
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
        
        var clientiNemultumiti = data.map(function(elem){
            return elem.clientiNemultumiti; 
        });

        
        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
            type: 'polarArea',
            data: {
              labels: [],
              datasets: [
              {
                label: 'Zadovoljni klijenti',
                data: clientiMultumiti,
                borderWidth: 4,
                borderColor: '#FED049'
              },
              {
                label: 'Nezadovoljni klijenti',
                data: clientiNemultumiti,
                borderWidth: 4,
                borderColor: 'red',
                backgroundColor: '#89375F'

              }]
            },
            options: {
              plugins: {
                title: {
                    display: true,
                    color: "green",
                    text: 'Razlika izmedju zadovoljnih i nezadovoljnih klijenta ',
                    padding: {
                      bottom: 40
                  },
                  font: {
                    size: 30
                  }
                }
              },
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
        
        
        var clientiDinRomani = data.map(function(elem){
            return elem.clientiDinRomani; 
        });
        

        var clientiDinBulgaria = data.map(function(elem){
          return elem.clientiDinBulgaria; 
        });


        var clientiDinAustria = data.map(function(elem){
          return elem.clientiDinAustria; 
        });
        

        const ctx = document.getElementById('canvas2').
        getContext("2d");

        new Chart(ctx, {
            type: 'polarArea',/* radar (area graf chart tipe) */
            data: {
              labels: ['Klijenti iz Srbije', 'Klijenti iz Rumunije', 'Klijenti iz Bugarske', 'Klijenti iz Austrije' ],
              datasets: [
              {
                label: 'Klijenti iz Srbije',
                data: clientiDinSerbia,
                borderWidth: 4,
                borderColor: '#0B2447'
                
              },
              {
                label: 'Klijenti iz Rumunije',
                data: clientiDinRomani,
                borderWidth: 4,
                borderColor: 'red'
              },
              {
                label: 'Klijenti iz Bugarske',
                data: clientiDinBulgaria,
                borderWidth: 4,
                color:'#301E67',
                above: 'green'
              },
              {
                label: 'Klijenti iz Austrije',
                data: clientiDinAustria,
                borderWidth: 4,
                backgroundColor: '#05BFDB',
                borderColor: 'black'
              }]
            },
            options: {
              plugins: {
                title: {
                    display: true,
                    color: "green",
                    text: 'Nasi klijenti iz raznih delova Evrope',
                    padding: {
                      bottom: 40
                  },
                  font: {
                    size: 30
                  }
                }
              },
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


