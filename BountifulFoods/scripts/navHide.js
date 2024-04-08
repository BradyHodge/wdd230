
    const navbarToggle = document.getElementById("hide-navbar");
    const navbarCollapse = document.getElementById("slide-out-panel");

    navbarToggle.addEventListener("click", function () {
        navbarCollapse.classList.toggle("active");
    });
