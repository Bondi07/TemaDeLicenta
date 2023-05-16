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
const text = body.querySelector('.MixedChartsText');
const button = body.querySelector('.button');
const chart = body.querySelector('#canvas');
const chart1 = body.querySelector('#canvas1');
const chart2 = body.querySelector('#canvas2');
const chart3 = body.querySelector('#canvas3');
const chart4 = body.querySelector('#canvas4');
const chart5 = body.querySelector('#canvas5');
const chart6 = body.querySelector('#canvas6');
const chart7 = body.querySelector('#canvas7');
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
            chart4.style.background = '#E4E9F7';
            chart5.style.background = '#E4E9F7';
            chart6.style.background = '#E4E9F7';
            chart7.style.background = '#E4E9F7';
            manu.style.background = '#417AC9';
            plavaLinija.style.background = '#1E409F';
        }else{
            body1.style.background = '#121212';
            body1.style.color = 'white';
            body1.style.transform = '0.5s easy';
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
                label: 'Zadovoljni klijenti',
                data: clientiMultumiti,
                borderWidth: 4,
                borderColor: 'black',
                backgroundColor: '#FC2947'
            },
            {
                label: 'Nezadovoljni klijenti',
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
                    text: 'Broj zadovoljnih i nezadovoljnih klijenata',
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
                label: 'Novac za robu',
                data: sumaMarfa,
                borderWidth: 4,
                borderColor: 'green'
            },
            {
                label: 'Zarada tokom dana',
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
                    text: 'Novac utrosen na kupovinu robe i minimalna zarada od te robe',
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
                label: 'Klijenti koji dolaze iz Srbije',
                data: clientiDinSerbia,
                borderWidth: 4,
                borderColor: 'blue',
                backgroundColor: 'white'
            },
            {
                label: 'Klijenti koji dolaze iz Rumunije',
                data: clientiDinRomani,
                borderWidth: 4,
                borderColor: 'yellow',
                backgroundColor: 'white'
            },
            {
                label: 'Klijenti koji dolaze iz Bugarske',
                data: clientiDinBulgaria,
                borderWidth: 4,
                borderColor: 'red',
                backgroundColor: 'white'
            },
            {
                label: 'Klijenti koji dolaze iz Nemacke',
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
                    text: 'Broj klijenata i zemlja iz koje su klijenti koji su posetili nasu radnju',
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
                    label: 'Broj klijenata iz Kladova',
                    data: clientiDinKladovo,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: '#B0DAFF'
                },
                {
                    label: 'Broj klijenata iz Bora',
                    data: clientiDinBor,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: '#F9D949'
                },
                {
                    label: 'Broj klijenata iz Krajove',
                    data: clientiDinCraiova,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'blue'
                },
                {
                    label: 'Broj klijenata iz Drobete Turn Severina',
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
                        text: 'Broj Klijenata iz Kladova i drugih gradova',
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
                label: 'Broj poseta tokom jednog dana u nedelji',
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
                    text: 'Broj poseta tokom jednog dana u nedelji',
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
                label: 'Prodaja',
                data: vanzari,
                borderWidth: 4,
                borderColor: '#609EA2'
            },
            {
                label: 'Broj prodatih prizvoda',
                data: produseVandute,
                borderWidth: 4,
                borderColor: '#DF2E38'
            },
            {
                label: 'Profit tokom dana',
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
                    text: 'Broj prodatih prizvoda, profit i novac potrosen od prodaje priozvoda ',
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
                    label: 'Broj prodatih proizvoda u Rumuniji',
                    data: produseVanduteInRomania,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'blue'
                },
                {
                    label: 'Broj prodatih proizvoda u Bugarskoj',
                    data: produseVanduteInBulgaria,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'red'
                },
                {
                    label: 'Broj kupljenih proizvoda u Rumuniji',
                    data: produseCumparateDinRomania,
                    borderWidth: 4,
                    borderColor: '#E7B10A',
                    backgroundColor: 'blue'
                },
                {
                    label: 'Broj kupljenih proizvoda u Bugarskoj',
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
                        text: 'Broj prodatih i kupljenih proizvoda iz Bugarske i Rumunije',
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
                label: 'Broj radnih sati tokom nedelje',
                data: oreLucratePeSaptamana,
                borderWidth: 4,
                borderColor: 'green'
            },
            {
                label: 'Broj prekovremenih sati',
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
                    text: 'Dodatni sati i radni sati tokom nedelje za svakog zaposlenog',
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

