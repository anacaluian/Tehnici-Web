var menuB = document.getElementById("menuButton");
   var menu = document.getElementById("Menu");
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
document.querySelector(".container").addEventListener("click",function(){
    menu.style.display = "none";
});
var mainPage = document.querySelector(".titlu");
mainPage.addEventListener("click",function mainPage(){
  location =  "http://127.0.0.1:5500/proiect.html";
})
