window.onload = () => {
    this.sessionStorage.setItem("username", "nikola");
    this.sessionStorage.setItem("password", "nikola123");
}

var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = () => {return false}


login.onclick = () => {
    if((input[0].value != "") && (input[1] != ""))
    {
        if ((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem("password")))
        {
            form.onsubmit = () => {return 1}
        }
        else
        {
            if ((input[0].value != sessionStorage.getItem("username")))
            {
                input[0].nextElementSibling.textContent = "Username este incorect!";
                setTimeout(() =>{
                    input[0].nextElementSibling.textContent = "";
                },3000);
            }

            if ((input[1].value != sessionStorage.getItem("password")))
            {
                input[1].nextElementSibling.textContent = "Parola este incorecta!";
                setTimeout(() =>{
                    input[1].nextElementSibling.textContent = "";
                },3000);
            }
        }
    }
    else
    {
        if(input[0].value == "")
        {
            input[0].nextElementSibling.textContent = "Campul pentru nume este gol !";
            setTimeout(() =>{
                input[0].nextElementSibling.textContent = "";
            },3000);
        }
        if(input[1].value == "")
        {
            input[1].nextElementSibling.textContent = "Campul pentru parola este gol !";
            setTimeout(() =>{
                input[1].nextElementSibling.textContent = "";
            },3000);
        }

    }

}


