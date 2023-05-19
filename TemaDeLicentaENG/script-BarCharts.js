/*html  */
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const box = body.querySelector('.box');
const body1 = body.querySelector('.home-section');
const headertext = body.querySelector('.text-barChart');
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
          headertext.style.color = 'black';
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
          body1.style.background = '#121212'; /* malo svetlija boja (#282A3A)*/
          body1.style.color = 'white';
          body1.style.transform = '0.5s easy';
          box.style.background = 'white';
          headertext.style.color = 'white';
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


/*pentru html*/ 

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");

});

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



/*Bar charts */
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
            type: 'bar',
            data: {
              labels: zi,
              datasets: [{
                label: 'Money spent on merchandise',
                data: sumaMarfa,
                borderWidth: 4,
                borderColor: 'red'
              },
              {
                label: 'Advantage',
                data: profit,
                borderWidth: 4,
                borderColor: 'green'
              }
            ]
            },
            options: {
              plugins: {
                title: {
                    display: true,
                    color: "blue",
                    text: 'The money spent on the purchase of goods and the minimum earnings from those goods',
                    padding: {
                      bottom: 40
                  },
                  font: {
                    size: 20
                  }
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


/*CAHRT 2 */
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
            type: 'bar',
            data: {
              labels: zi,
              datasets: [{
                label: 'Money spent on merchandise',
                data: vanzariPeZi,
                borderWidth: 4,
                barThickness: 100,
                backgroundColor:'#F5F5F5' ,
                borderColor: '#F2CD5C'
              }]
            },
            options: {
              plugins: {
                title: {
                    display: true,
                    color: "blue",
                    text: 'Earnings during one day of the entire week',
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
                  beginAtZero: true
                }
              }
            }
          });
    }
}

/*CAHRT 3 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Grafic1";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var nrTotalDeAngajati = data.map(function(elem){
            return elem.nrTotalDeAngajati; 
        });
        
        var nrDeMagazine = data.map(function(elem){
            return elem.nrDeMagazine; 
        });
        
        var nrDeMasini = data.map(function(elem){
            return elem.nrDeMasini; 
        });
      

        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: [1, 2],
              datasets: [{
                label: 'Total number of employees',
                data: nrTotalDeAngajati,
                borderWidth: 4,
                backgroundColor:'#F5F5F5' ,
                borderColor: '#F94A29'
              },
              {
                label: 'Number of stores',
                data: nrDeMagazine,
                borderWidth: 4,
                backgroundColor:'#F5F5F5' ,
                borderColor: '#86A3B8'
              },
              {
                label: 'Number of cars',
                data: nrDeMasini,
                borderWidth: 4,
                backgroundColor:'#F5F5F5' ,
                borderColor: '#FFEA20'
              }]
            },
            options: {
              plugins: {
                title: {
                    display: true,
                    color: "blue",
                    text: 'The number of employees, the number of cars and the number of stores in the "BONDI" company',
                    padding: {
                      bottom: 40
                  },
                  font: {
                    size: 20
                  }
                }
              },
              indexAxis: 'x',
              scales:{
                y: {
                  beginAtZero: true,
                }
              }
            }
          });
    }
}

/*GRAF 4 */
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


        const ctx = document.getElementById('canvas3');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: zi,
              datasets: [
              {
                label: 'Number of visits every day',
                data: vizite,
                borderWidth: 4,
                backgroundColor:'#13005A' ,
                borderColor: '#86A3B8'
              }]
            },
            options: {
              plugins: {
                title: {
                    display: true,
                    color: "blue",
                    text: 'Number of visits every day in our store',
                    padding: {
                      bottom: 40
                  },
                  font: {
                    size: 30
                  }
                }
              },
              indexAxis: 'y',
              scales: {
                y: {
                  beginAtZero: true,
                }
              }
            }
          });
    }
}

/*GRAF 5 */
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

        var luna = data.map(function(elem){
          return elem.luna; 
        });

        const ctx = document.getElementById('canvas4');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: luna,
              datasets: [
              {
                label: 'Total sales for one month in 2021',
                data: vanzariTotale,
                borderWidth: 2,
                backgroundColor:'#4E6C50' ,
                borderColor: '#F94A29'
              }]
            },
            options: {
              plugins: {
                title: {
                    display: true,
                    color: "blue",
                    text: 'Earnings throughout 2021 in dinars (DIN)',
                    padding: {
                      bottom: 40
                  },
                  font: {
                    size: 30
                  }
                }
              },
              indexAxis: 'x',
              scales: {
                y: {
                  beginAtZero: true,
                }
              }
            }
          });
    }
}

