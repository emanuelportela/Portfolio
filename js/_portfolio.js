// PORTFOLIO


// Bouton All
let all1 = document.getElementById('btn4');
let design1 = document.getElementById('btn5');
let site = document.getElementById('btn6');

 

// Bouton all
all1.addEventListener("click", function () { 
   var tout = document.querySelectorAll(".manu");

   for (var i = 0; i < tout.length ; i++) {
      document.querySelectorAll(".manu")[i].style.display="initial"; }
      all1.classList.add("btn-clique")
      all1.style.color="white"
      site.classList.remove("btn-clique")
      site.style.color="#00AFB4"
      design1.classList.remove("btn-clique")
      design1.style.color="#00AFB4"
})



// Bouton Design

design1.addEventListener("click", function () {
   
   let des = document.querySelectorAll(".manu");

   for (var i = 0; i < des.length ; i++) {
      
      if (des[i].classList.contains("design1")) {
         document.querySelectorAll(".manu")[i].style.display="initial";
         design1.classList.add("btn-clique")
         design1.style.color="white"
         all1.classList.remove("btn-clique")
         all1.style.color="#00AFB4"
         site.classList.remove("btn-clique")
         site.style.color="#00AFB4"
      } 
      else {
         document.querySelectorAll(".manu")[i].style.display="none"; }
   }
})

// Bouton Site

site.addEventListener("click", function () {
   
   let web = document.querySelectorAll(".manu");

   for (var i = 0; i < web.length ; i++) {
      
      if (web[i].classList.contains("site")) {
         document.querySelectorAll(".manu")[i].style.display="initial";
         site.classList.add("btn-clique")
         site.style.color="white"
         all1.classList.remove("btn-clique")
         all1.style.color="#00AFB4"
         design1.classList.remove("btn-clique")
         design1.style.color="#00AFB4"
      } 
      else {
         document.querySelectorAll(".manu")[i].style.display="none"; }
   }
})