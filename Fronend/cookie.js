/* PENTRU COOKIES */

const cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    if (document.cookie.includes("bondi")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if (button.id == "acceptBtn"){
                console.log("functioneaza!");
                document.cookie = "cookieBy= bondi; expires=" + new Date(2024, 0, 1).toUTCString();

            }
        });
    }); 
};

window.addEventListener("load", executeCodes);

