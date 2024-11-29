
let slideIndex = 0;
showSlides();
buton();

function buton() {
           function showSlides() {
             document.getElementById("poza1").style.display = 'none';  //ascunde pozele de dinainte de actionarea functiei
             document.getElementById("poza2").style.display = 'none';
             document.getElementById("poza3").style.display = 'none';
             document.getElementById("poza4").style.display = 'none';
             let i;  //liniile urmatoare pornesc slideshow-ul
             let slides = document.getElementsByClassName("mySlides");
             let dots = document.getElementsByClassName("dot");
             for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";
             }
             slideIndex++;
             if (slideIndex > slides.length) {slideIndex = 1}
             for (i = 0; i < dots.length; i++) {
               dots[i].className = dots[i].className.replace(" active", "");
             }
             slides[slideIndex-1].style.display = "block";
             dots[slideIndex-1].className += " active";
             setTimeout(showSlides, 3000);
           }
           return showSlides();
}
