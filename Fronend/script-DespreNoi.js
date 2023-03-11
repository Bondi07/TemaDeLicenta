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
    text = body.querySelector('.DespreNoi-text');
    textShcimb = body.querySelector('.text');
    linkuri = body.querySelector('.tooltip1 a');
    linkuri1 = body.querySelector('.tooltip2 a');
    linkuri2 = body.querySelector('.tooltip3 a');
    textTooltip = body.querySelector('.tooltiptext1');
    textt = body.querySelector('.text1');
    text2 = body.querySelector('.text2');
    textCompaniei = body.querySelector('.textCompaniei');

    toggle.addEventListener('click', function(){
        this.classList.toggle('bx-moon');
        if(this.classList.toggle('bx-sun')){
            body.style.background = '#E4E9F7';
            body.style.color = 'black';
            body.style.transform = '0.5s easy';
            box.style.background = 'yellow';
            text.style.color = 'black';
            textShcimb.style.color = 'black';
            linkuri.style.color = 'black';
            linkuri1.style.color = 'black';
            linkuri2.style.color = 'black';
            text2.style.color = 'black';
        }else{
            body.style.background = '#121212';
            body.style.color = 'white';
            body.style.transform = '0.5s easy';
            box.style.background = 'white';
            text.style.color = 'white';
            textShcimb.style.color = 'white';
            linkuri.style.color = 'white';
            linkuri1.style.color = 'white';
            linkuri2.style.color = 'white';
            textTooltip.style.color = 'black';
            textTooltip.style.background = 'white';
            textt.style.color = 'black';
            text2.style.color = 'black';
            textCompaniei.style.color = '#4D455D';
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

/* ZA MENJAJE POZADINE LINKOVA MENIJA */
function mousOver(element){
    element.style.color = 'red';
}
function mousOut(element){
    element.style.color = 'white';
}



/* TEKST KOJI NESTAJE SA ANIMACIJOM */
class TextScremble{
    constructor(el){
        this.el = el
        this.chars = '!<)-_\\/[]{}-=+*^?#+_-$^&____'
        this.update = this.update.bind(this)
    }
    setText(newText){
        const oldText  = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for(let i = 0; i < length; i++){
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 50)
            const end = start + Math.floor(Math.random() * 50)
            this.queue.push({from, to, start, end})
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update(){
        let output = ''
        let complete = 0
        for(let i = 0, n = this.queue.length; i < n; i++){
            let{from, to, start, end, char } = this.queue[i]
            if(this.frame >= end){
                complete++
                output += to
            }else if (this.frame >= start){
                if(!char || Math.random() < 0.28){
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            }else{
                output += from 
            }
        }
        this .el.innerHTML = output
        if(complete == this.queue.length){
            this.resolve()
        }else{
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar(){
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}
const phrases = [
    'CINE SUNTEM NOI ??',
    'DORITI SA STITI CINE SUNTEM NOI ?',
    'NOI SUNTEM O COMPANIE MARE!',
    'NOI SUNTEM "BONDI" !',
    'NOI SUNTEM O FAMILIE !'
]
const el = document.querySelector('.text')
const fx = new TextScremble(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1500)
    })
    counter = (counter + 1) % phrases.length
}
next()
