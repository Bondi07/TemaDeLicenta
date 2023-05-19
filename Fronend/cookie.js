/* PENTRU COOKIES */

document.addEventListener("DOMContentLoaded", function() {
    const cookieBox = document.querySelector(".wrapper");
    const buttons = document.querySelectorAll(".button");

    const executeCodes = () => {
        console.log("executeCodes function is running");
        if (document.cookie.includes("cookieBy=bondi=")) return;
        cookieBox.classList.add("show");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                cookieBox.classList.remove("show");

                if (button.id === "acceptBtn") {
                    console.log("Function works!");
                    document.cookie = "cookieBy=bondi; expires=" + new Date(2024, 0, 1).toUTCString();
                }
            });
        });
    };

    executeCodes();
});