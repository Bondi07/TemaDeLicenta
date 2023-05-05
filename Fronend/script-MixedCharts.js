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
    text = body.querySelector('.MixedChartsText');
    button = body.querySelector('.button');
    chart = body.querySelector('#canvas');
    chart1 = body.querySelector('#canvas1');
    chart2 = body.querySelector('#canvas2');
    chart3 = body.querySelector('#canvas3');
    chart4 = body.querySelector('#canvas4');
    chart5 = body.querySelector('#canvas5');
    chart6 = body.querySelector('#canvas6');
    chart7 = body.querySelector('#canvas7');


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
            chart5.style.background = '#E4E9F7';
            chart6.style.background = '#E4E9F7';
            chart7.style.background = '#E4E9F7';
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
            chart4.style.background = 'white';
            chart5.style.background = 'white';
            chart6.style.background = 'white';
            chart7.style.background = 'white';
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

/* chart 1 */
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


        const ctx = document.getElementById('canvas');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
            labels: [],
            datasets: [{
                label: 'Clienti multumiti',
                data: clientiMultumiti,
                borderWidth: 4,
                borderColor: 'black',
                backgroundColor: '#FC2947'
            },
            {
                label: 'Clienti nemultumiti',
                data: clientiNemultumiti,
                borderWidth: 4,
                borderColor: 'black',
                backgroundColor: '#19A7CE'
            }]
            },
            options: {
            plugins: {
                title: {
                    display: true,
                    color: "red",
                    text: 'Numar de clienti care sunt multumiti si numar de clienti care sunt nemltumitu',
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
                }
            }
            }
        });
    }
}


/* char2 */
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
        
        
        const ctx = document.getElementById('canvas1');
        new Chart(ctx, {
            type: 'radar',
            data: {
            labels: zi,
            datasets: [{
                label: 'Bani pentru marfa',
                data: sumaMarfa,
                borderWidth: 4,
                borderColor: 'green'
            },
            {
                label: 'Profit intr-o zi',
                data: profit,
                borderWidth: 4,
                borderColor: 'red'
            }]
            },
            options: {
            plugins: {
                title: {
                    display: true,
                    color: "#F2921D",
                    text: 'Banii cheltuiti pentru achizitionarea de bunuri si castigurile minime din acele bunuri',
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

        var clientiDinGermania = data.map(function(elem){
            return elem.clientiDinGermania; 
        });
        
        const ctx = document.getElementById('canvas2');
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: [1],
            datasets: [{
                label: 'Clienti care vin din Serbia',
                data: clientiDinSerbia,
                borderWidth: 4,
                borderColor: 'blue',
                backgroundColor: 'white'
            },
            {
                label: 'Clienti care vin din Romania',
                data: clientiDinRomani,
                borderWidth: 4,
                borderColor: 'yellow',
                backgroundColor: 'white'
            },
            {
                label: 'Clienti care vin din Bulgaria',
                data: clientiDinBulgaria,
                borderWidth: 4,
                borderColor: 'red',
                backgroundColor: 'white'
            },
            {
                label: 'Clienti care vin din Germania',
                data: clientiDinGermania,
                borderWidth: 4,
                borderColor: 'green',
                backgroundColor: 'white'
            }]
            },
            options: {
            plugins: {
                title: {
                    display: true,
                    color: "#A7727D",
                    text: 'Numar de clienti si tara de unde sunt clienti care au vizitat magazin',
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
var url = "https://localhost:7111/api/Magazin/Grafic6";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var clientiDinKladovo = data.map(function(elem){
            return elem.clientiDinKladovo; 
        });

        var clientiDinBor = data.map(function(elem){
            return elem.clientiDinBor; 
        });
        
        var clientiDinCraiova = data.map(function(elem){
            return elem.clientiDinCraiova; 
        });

        var clientiDinDrobetaTurnSeverin = data.map(function(elem){
            return elem.clientiDinDrobetaTurnSeverin; 
        });


        const ctx = document.getElementById('canvas3');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [1],
                datasets: [{
                    label: 'Numar de clienti din Kladovo',
                    data: clientiDinKladovo,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: '#B0DAFF'
                },
                {
                    label: 'Numar de clienti din Bor',
                    data: clientiDinBor,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: '#F9D949'
                },
                {
                    label: 'Numar de clienti din Craiova',
                    data: clientiDinCraiova,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'blue'
                },
                {
                    label: 'Numar de clienti din Drobeta Turn Severin',
                    data: clientiDinDrobetaTurnSeverin,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'red'
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        color: "#3E54AC",
                        text: 'Numar de clienti din Kladovo si din alte orase',
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
                indexAxis: 'y',
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

        const ctx = document.getElementById('canvas4');
        new Chart(ctx, {
            type: 'line',
            data: {
            labels: zi,
            datasets: [{
                label: 'Vizite in fiecare zi intr-o saptamana',
                data: vizite,
                borderWidth: 4,
                borderColor: '#609EA2'
            }]
            },
            options: {
            plugins: {
                title: {
                    display: true,
                    color: "green",
                    text: 'Vizite in fiecare zi intr-o saptamana',
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

/* chart6 */
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

        var produseVandute = data.map(function(elem){
            return elem.produseVandute; 
        });
        
        var profitPeZi = data.map(function(elem){
            return elem.profitPeZi; 
        });

        const ctx = document.getElementById('canvas5');
        new Chart(ctx, {
            type: 'line',
            data: {
            labels: zi,
            datasets: [{
                label: 'Vanzari',
                data: vanzari,
                borderWidth: 4,
                borderColor: '#609EA2'
            },
            {
                label: 'Produse vandute',
                data: produseVandute,
                borderWidth: 4,
                borderColor: '#DF2E38'
            },
            {
                label: 'Profit pe zi',
                data: profitPeZi,
                borderWidth: 4,
                borderColor: '#E7B10A'
            }]
            },
            options: {
            plugins: {
                title: {
                    display: true,
                    color: "#245953",
                    text: 'Numar de produse vandute, profit si bani cheltuiti din vanzarea produselor',
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


/* chart 7 */
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Grafic2";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var produseVanduteInRomania = data.map(function(elem){
            return elem.produseVanduteInRomania; 
        });

        var produseVanduteInBulgaria = data.map(function(elem){
            return elem.produseVanduteInBulgaria; 
        });
        
        var produseCumparateDinRomania = data.map(function(elem){
            return elem.produseCumparateDinRomania; 
        });

        var produseCumparateDinBulgaria = data.map(function(elem){
            return elem.produseCumparateDinBulgaria; 
        });


        const ctx = document.getElementById('canvas6');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [1],
                datasets: [{
                    label: 'Numar de produse vandute in Romania',
                    data: produseVanduteInRomania,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'blue'
                },
                {
                    label: 'Numar de produse vandute in Bulgaria',
                    data: produseVanduteInBulgaria,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'red'
                },
                {
                    label: 'Numar de produse cumparate in Romania',
                    data: produseCumparateDinRomania,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'blue'
                },
                {
                    label: 'Numar de produse cumparate in Bulgaria',
                    data: produseCumparateDinBulgaria,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'red'
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        color: "red",
                        text: 'Numar de produse vandute si cumparate din Bulgaria si Romania',
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
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}


/* char 8*/
var xmlhttp = new XMLHttpRequest();
var url = "https://localhost:7111/api/Magazin/Angajati";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==  4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        
        var oreLucratePeSaptamana = data.map(function(elem){
            return elem.oreLucratePeSaptamana; 
        });
        
        var oreSuplimentare = data.map(function(elem){
            return elem.oreSuplimentare; 
        });
        
        const ctx = document.getElementById('canvas7');
        new Chart(ctx, {
            type: 'polarArea',
            data: {
            labels: [],
            datasets: [{
                label: 'Ore lucrate pe saptamana',
                data: oreLucratePeSaptamana,
                borderWidth: 4,
                borderColor: 'green'
            },
            {
                label: 'Ore suplimentare',
                data: oreSuplimentare,
                borderWidth: 4,
                borderColor: 'red',
                backgroundColor: 'red'
            }]
            },
            options: {
            plugins: {
                title: {
                    display: true,
                    color: "blue",
                    text: 'Ore suplimentere si ore lucrate pe saptamana pentur fiecare angajat',
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

