const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }

  });

}


/* CLOSE MOBILE MENU AFTER CLICKING A LINK */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    if (navMenu) {
      navMenu.classList.remove("active");
    }

    if (menuBtn) {
      menuBtn.textContent = "☰";
    }

  });

});