
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
const text = body.querySelector('.produse-text');
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
            manu.style.background = '#417AC9';
            plavaLinija.style.background = '#1E409F';
        }else{
            body1.style.background = '#121212';
            body1.style.color = 'white';
            body1.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
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






/* DODAVANJE PRODUKTA */

// let http = new XMLHttpRequest();

// http.open('get', 'https://localhost:7111/api/Magazin/Produse', true );

// http.send();
// http.onload = function(){

//     if(this.readyState == 4 && this.status == 200){

//         let products = JSON.parse(this.responseText);

//         let out = "";
//         /* za svaku od slika */
//         let i = 0;
//         for(let item of products){

//             /*  OVDE MORA DA BUDE I DA PISE PRODUCT A NE PRODUCTS JE NECE DA RADI INACE   */
//             out +=  `
//                 <div class="product"  id="products">
//                     <div class="okvir" id="prod">
//                         <img src="../imagesProduse/${item.nume}.jpg" alt="poze" width="180px" height="350px">
//                         <p class=nume>${item.nume}</p>
//                         <p class=cantitate>Cantitate: ${item.cantitate}</p>
//                         <p class=pret>${item.pret} RON </p>
//                     </div>
//                 </div>
//                 <div id="pagination-container"></div>

//             `; 
//             /* za menjanje slika */
//             i = i + 1;
//         }

//         document.querySelector(".products").innerHTML = out;
        
//     }
// }



/* SEARCH BAR */

document.querySelector('#search').addEventListener('input', filterList);

function filterList(){

    const searchInput = document.querySelector('#search');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.okvir');
    const homeSection = document.querySelector('.home-section');
    const fott = document.querySelector('footer');

    listItems.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = 'grid';
            homeSection.style.height = '100%';
            fott.style.display = '';
        }else{
            item.style.display = 'none';
            homeSection.style.height = '100%';
            fott.style.display = 'none';
        }
    });
}


/* pagination */


const endpoint = 'https://localhost:7111/api/Magazin/Produse';
    const itemsPerPage = 15;
    let currentPage = 0;
    let totalPages;
    let totalProduse;

function fetchData() {
    const url = `${endpoint}?take=${itemsPerPage}&skip=${currentPage * itemsPerPage}`;
    try {
        fetch('https://localhost:7111/api/Magazin/TotalProduse')
            .then(response => response.json())
            .then(nrProduse => {
                if (nrProduse && nrProduse.numar) {
                    totalProduse = nrProduse.numar;
                } else {
                    console.error('Data is not in the expected format:', nrProduse);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } catch (error) {
            console.error('Error:', error);
        }
        if (typeof totalPages === 'undefined' || typeof totalProduse === 'undefined') {
            totalProduse = 124;
        }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data:', data);
            console.log('Total pages:', totalPages);
            totalPages = Math.ceil(totalProduse / itemsPerPage);
            displayData(data);
            createPaginationButtons();
            window.scrollTo(0, 0);
    })
    .catch(error => console.error(error));
    console.log(itemsPerPage);
    console.log(itemsPerPage);
    console.log("data");
}


function displayData(data) {
console.log('displaying data:', data);
const container = document.getElementById("prod");
container.innerHTML = "";

let out = "";
data.forEach(item => {
    out += `
            <div class="product" id="products">
                <div class="okvir" id="prod">
                <img src="../imagesProduse/${item.nume}.jpg" alt="poze" width="180px" height="350px">
                <p class=nume>${item.nume}</p>
                <p class=cantitate>Cantitate: ${item.cantitate}</p>
                <p class=pret>${item.pret} RON </p>
                </div>
            </div>
            <div id="pagination-container"></div>
        `;
    });
    document.querySelector(".products").innerHTML = out;
}

function createPaginationButtons() {
    const container = document.getElementById("pagination-container");
    container.innerHTML = ""; 

    for (let i = 0; i <= totalPages-1; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.classList.add("pagination-btn");
        if (i === currentPage) {
            btn.classList.add("active");
        }
        btn.addEventListener("click", () => {
            currentPage = i;
            fetchData();
        });
        container.appendChild(btn);
    }
}

fetchData();