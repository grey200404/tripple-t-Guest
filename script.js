// Gallery lightbox
const galleryImages = document.querySelectorAll(".gallery img");
const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.querySelector(".close-popup");

if (imagePopup && popupImage && closePopup) {

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            popupImage.src = image.src;
            popupImage.alt = image.alt;
            imagePopup.classList.add("show");
        });
    });

    closePopup.addEventListener("click", function () {
        imagePopup.classList.remove("show");
    });

    imagePopup.addEventListener("click", function (event) {
        if (event.target === imagePopup) {
            imagePopup.classList.remove("show");
        }
    });
}


// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        const menuIsOpen = navLinks.classList.contains("show");

        menuToggle.setAttribute("aria-expanded", menuIsOpen);

        if (menuIsOpen) {
            menuToggle.textContent = "✕";
            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    });
}
// Close popup or mobile menu with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {

        // Close gallery popup
        if (imagePopup && imagePopup.classList.contains("show")) {
            imagePopup.classList.remove("show");
        }

        // Close mobile navigation
        if (navLinks && navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");

            if (menuToggle) {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }
        }
    }
});