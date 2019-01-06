var menuB = document.getElementById("menuButton");
   var menu = document.getElementById("Menu");
   menuB.addEventListener("click",function buton(){
    if(menu.style.display === "none")
              menu.style.display = "block";
         else
             menu.style.display = "none";

});
var mainPage = document.querySelector(".titlu");
mainPage.addEventListener("click",function mainPage(){
  location =  "http://127.0.0.1:5500/proiect.html";
})

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        menu.style.display = "none";
    }
};

var inPage = document.getElementById("output");
var containerMessage = document.createElement("div");
containerMessage.setAttribute("class","containerMessage");
function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out = "";
        out +=   arr[i].name +":"+ '<br>' + arr[i].message + '<br>' ;
        var par = document.createElement("p");
        par.setAttribute("class","message");
        par.setAttribute("id","message")
        par.innerHTML = out;
        containerMessage.appendChild(par);
    }
     inPage.appendChild(containerMessage);
} 

function getMessage(){
const Http = new XMLHttpRequest();
const url='http://localhost:3000/comments';
Http.open("GET", url,true);
Http.send();
Http.onreadystatechange=(e)=>{   
    if (Http.readyState==4 && Http.status==200)
      {
        console.log(Http.responseText);
        var myArr = JSON.parse(Http.responseText);
        myFunction(myArr);
      }
  
}
}

/*
document.forms["feedback"].addEventListener("submit",getFormData);

function getFormData(e){
    e.preventDefault();
    var nume = document.forms["feedback"]["name"].value;
    var mesaj = document.forms["feedback"]["message"].value;
    var params = "name"+nume +"message"+mesaj;
    var xhr = new XMLHttpRequest();
    xhr.open("POST","post.php",true);
    xhr.setRequestHeader("Content-Type","appication/x-www-form-urlencoded");
    xhr.onload = function(){
        console.log(this.responseText);
    }
xhr.send(params);
}

*/
getMessage();


