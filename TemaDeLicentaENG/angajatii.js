
/*sidebar*/
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");

});

/*darkside */

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const body1 = body.querySelector('.home-section');
const box = body.querySelector('.box');
const text = body.querySelector('.angajatii-text');
const date = body.querySelector('.angajatii');
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
            date.style.color = 'black';
            manu.style.background = '#417AC9';
            plavaLinija.style.background = '#1E409F';
        }else{  
            body1.style.background = '#121212';
            body1.style.color = 'white';
            body1.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            date.style.color = 'black';
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


/* nacinnn */

let http = new XMLHttpRequest();

http.open('get', 'https://localhost:7111/api/Magazin/Angajati', true );

http.send();
http.onload = function(){

    if(this.readyState == 4 && this.status == 200){

        let angajatii = JSON.parse(this.responseText);

        let out = "";
        
        for(let item of angajatii){

            out +=  `
                <div class="angajatii">
                    <div class="okvir">
                        <img class="poza" src="../imagesAngajatii/${item.prenume}.jpg" alt="poze" width="300px" height="550px">
                        <div class="datele">
                            <p class=prenume>First name: ${item.prenume}</p>
                            <p class=nume>Last name: ${item.nume}</p> 
                            <p class=oras>Town: ${item.oras}</p>
                            <p class=email>E-mail: ${item.email}</p>
                            <p class=pozitie>Position: ${item.pozitie}</p>
                        </div>

                        <a href="#finish">More information</a>

                    </div>  
                </div>

                

            `; 
        }

        document.querySelector(".angajatii").innerHTML = out;
        console.log(out);
    }
}



