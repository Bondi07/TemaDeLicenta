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

const form = document.querySelector('#pagini');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    //de pe yt
    const file = document.querySelector('#file');
    formData.append('file', file.files[0], "file.csv");


    for(item of formData){
        console.log(item[0], item[1]);
    }

    console.log('Before fetch call');
    fetch('https://localhost:7111/api/Magazin/ImportTable', {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error(error));
        console.log('Form data sent.');
});









