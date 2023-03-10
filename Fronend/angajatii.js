
/*sidebar*/
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-left-indent");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");

});

/*darkside */

const toggle = document.getElementById('toggleDark');
  body = document.querySelector('body');
  body = body.querySelector('.home-section');
  box = body.querySelector('.box');
  text = body.querySelector('.angajatii-text');
  date = body.querySelector('.angajatii');
  

  toggle.addEventListener('click', function(){
      this.classList.toggle('bx-moon');
      if(this.classList.toggle('bx-sun')){
        body.style.background = '#E4E9F7';
        body.style.color = 'black';
        body.style.transform = '0.5s easy';
        box.style.background = 'yellow';
        text.style.color = 'black';
        date.style.color = 'black';
      }else{  
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transform = '0.5s easy';
        box.style.background = 'white';
        text.style.color = 'white';
        date.style.color = 'black';
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
                    <img class="poza" src="../imagesAngajatii/${item.prenume}.jpg" alt="poze" width="300px" height="450px">
                    <div class="datele">
                      <p class=prenume>Prenume: ${item.prenume}</p>
                      <p class=nume>Nume: ${item.nume}</p> 
                      <p class=oras>Oras: ${item.oras}</p>
                      <p class=salariu>Salariu: ${item.salariu} RON</p>
                      <p class=pozitie>Pozitie: ${item.pozitie}</p>
                    </div>
                  </div>    
                </div>
            `; 
        }

        document.querySelector(".angajatii").innerHTML = out;
        console.log(out);
    }
}