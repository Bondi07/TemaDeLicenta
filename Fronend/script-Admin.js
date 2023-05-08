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


/* refresh button */
const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', () => {
    location.reload();
}); 




/* PENTRU A LUA .CSV SI TRIMITE CATRE BACK */
document.getElementById('myForm').addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault();
    const selectElement = document.getElementById("pagini");
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedValue = selectedOption.textContent;
    const optgroupLabel = selectedOption.parentNode.label;
    const tableName = optgroupLabel + ' - ' + selectedValue;
    console.log("optgroupLabel = ", optgroupLabel);

    const formData = new FormData();
    formData.append('table', event.target.elements.myFile.files[0]);
    formData.append('tableName', tableName);

    fetch('https://localhost:7111/api/Magazin/ImportTable', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log('File uploaded successfully');
        alert('Data retrieved successfully');

    })
    .catch(error => {
        console.error('Error uploading file', error);
        alert('Data not retrieved successfully');

    });
}






