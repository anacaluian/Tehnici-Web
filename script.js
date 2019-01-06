   var menuB = document.getElementById("menuButton");
   var menu = document.getElementById("Menu");
   var exclude = document.querySelector(".slideImagini");
   exclude.addEventListener("click",function exit(){
       menu.style.display = "none";
   });
   var exclude2 = document.querySelector(".titlu");
   exclude2.addEventListener("click",function exit(){
       menu.style.display = "none";
   });

   menuB.addEventListener("click",function buton(){
       if(menu.style.display === "none")
                 menu.style.display = "block";
            else
                menu.style.display = "none";

   });

   document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        menu.style.display = "none";
    }
};

 var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3500); // Change image every 2 seconds
}
