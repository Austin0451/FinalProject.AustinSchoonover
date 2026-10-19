document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Dark Mode
    // -----------------------------

    const themeButton = document.getElementById("theme-toggle");

    // Check if the visitor previously selected dark mode.
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "Switch Theme";
    }

    // Change the theme when the button is clicked.
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "Switch Theme";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "Switch Theme";
        }
    });

});