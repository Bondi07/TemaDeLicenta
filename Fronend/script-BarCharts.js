/*html  */
const toggle = document.getElementById('toggleDark');
    body = document.querySelector('body');
    box = body.querySelector('.box');
    body = body.querySelector('.home-section');
    headertext = body.querySelector('.text-barChart');
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
            headertext.style.color = 'black';
            button.style.background = 'black';
            chart.style.background = '#E4E9F7';
            chart1.style.background = '#E4E9F7';
            chart2.style.background = '#E4E9F7';
            chart3.style.background = '#E4E9F7';
            chart4.style.background = '#E4E9F7';

        }else{
            body.style.background = '#121212'; /* malo svetlija boja (#282A3A)*/
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            headertext.style.color = 'white';
            button.style.background = 'blue';
            chart.style.background = 'white';
            chart1.style.background = 'white';
            chart2.style.background = 'white';
            chart3.style.background = 'white';
            chart4.style.background = 'white';
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
            type: 'bar',
            data: {
              labels: zi,
              datasets: [{
                label: 'Bani cheltuiti pe marfa',
                data: sumaMarfa,
                borderWidth: 4,
                borderColor: 'red'
              },
              {
                label: 'Profit',
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
                    text: 'Banii cheltuiti pentru achizitionarea de bunuri si castigurile minime din acele bunuri',
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
        console.log(zi);
        var vanzariPeZi = data.map(function(elem){
            return elem.vanzariPeZi; 
        });
        console.log(vanzariPeZi);
        
        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: zi,
              datasets: [{
                label: 'Bani cheltuiti pe marfa',
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
                    text: 'Castiguri pe parcursul unei zile din intreaga saptamana',
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
        console.log(nrTotalDeAngajati);
        var nrDeMagazine = data.map(function(elem){
            return elem.nrDeMagazine; 
        });
        console.log(nrDeMagazine);
        var nrDeMasini = data.map(function(elem){
            return elem.nrDeMasini; 
        });
        console.log(nrDeMasini);

        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: [1, 2],
              datasets: [{
                label: 'Numar total de angajati',
                data: nrTotalDeAngajati,
                borderWidth: 4,
                backgroundColor:'#F5F5F5' ,
                borderColor: '#F94A29'
              },
              {
                label: 'Numar de magazine',
                data: nrDeMagazine,
                borderWidth: 4,
                backgroundColor:'#F5F5F5' ,
                borderColor: '#86A3B8'
              },
              {
                label: 'Numar de masini',
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
                    text: 'Numarul de angajati, numarul de masini si numarul de magazine din firma "BONDI"',
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
        console.log(zi);
        var vizite = data.map(function(elem){
            return elem.vizite; 
        });
        console.log(vizite);

        const ctx = document.getElementById('canvas3');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: zi,
              datasets: [
              {
                label: 'Numar de vizite in fiecare zi',
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
                    text: 'Numar de vizite in fiecare zi in magazinul nostru',
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
        console.log(an);

        var vanzariTotale = data.map(function(elem){
            return elem.vanzariTotale; 
        });
        console.log(vanzariTotale);

        var luna = data.map(function(elem){
          return elem.luna; 
        });
        console.log(luna);

        const ctx = document.getElementById('canvas4');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: luna,
              datasets: [
              {
                label: 'Vanzari totale pe o luna in an 2021',
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
                    text: 'Castiguri pe tot parcursul anului 2021 in dinari (DIN)',
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

