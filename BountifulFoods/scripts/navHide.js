
    const navbarToggle = document.getElementById("hide-navbar");
    const navbarCollapse = document.getElementById("nav-links");

    navbarToggle.addEventListener("click", function () {
        navbarCollapse.classList.toggle("active");
    });
