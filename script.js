const galleryImages = document.querySelectorAll(".gallery img");
const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.querySelector(".close-popup");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        popupImage.src = image.src;
        popupImage.alt = image.alt;

        imagePopup.classList.add("show");

    });

});


closePopup.addEventListener("click", function() {

    imagePopup.classList.remove("show");

});


imagePopup.addEventListener("click", function(event) {

    if (event.target === imagePopup) {

        imagePopup.classList.remove("show");

    }

});