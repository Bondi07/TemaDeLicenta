/* KAKO SE CITA .CSV FILE SA JAVASCRIPTOM */

const x = document.querySelector("input");

x.addEventListener("change", () => {
    const fr = new FileReader();

    fr.onloadend = e =>{
            let r = fr.result.split("\n").map( e => {
                return e.split(",");
            })

            r.forEach( e =>{

                let m = e.map( e => {
                    return `<td>${e}</td>`
                }).join("")
            

            const ce = document.createElement("tr");
            ce.innerHTML = m;

            if(ce.innerHTML !== ""){
                document.querySelector("table").append(ce)
            }
        });
    }

    fr.readAsText(x.files[0])
})


/* LOGOUT BUTTON */

const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", () => {
    window.location.replace("Setari.html")
})






/* IMPORT .CSV FILE  */
const importButton = document.getElementById('pagini');

importButton.addEventListener('import', async function(e) {
    e.preventDefault();

    const data = new Data(importButton);

    data.append('pagini', document.getElementById('pagini').value);

    try{    
        const res = await  axios.post('https://httpbin.org/post', data)
        console.log(res);

    }catch(e){
        console.log(error);
    }
})







