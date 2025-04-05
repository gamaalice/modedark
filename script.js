document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("themeSwitcher");
    const body = document.body;

    // Verifica o tema salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeSwitcher.checked = true;
    } else {
        body.classList.add("light");
    }

    // Alterna o tema ao clicar no switch
    themeSwitcher.addEventListener("change", function () {
        if (themeSwitcher.checked) {
            body.classList.remove("light");
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    });
});
