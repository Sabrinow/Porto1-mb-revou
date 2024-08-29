var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot")
    if (n > slideIndex.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
}

function validateForm() {
    const name = document.forms["massage-me"]['nickname'].value;
    const datetime = document.forms["massage-me"]["datetime"].value;
    const gender = document.forms["massage-me"]["gender"].value;
    const messages = document.forms["massage-me"]["messages"].value;

    if (name == "" || datetime == "" || gender == "" || messages == "") {
        alert("Tidak Boleh Kosong!")
        return false;
    }

    setSenderUI (name, datetime, gender, messages);

    return false;
}