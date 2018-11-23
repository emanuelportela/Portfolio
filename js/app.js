// Bouton All
let all = document.getElementById('btn1');
let design = document.getElementById('btn2');
let langage = document.getElementById('btn3');

 

// Bouton all
all.addEventListener("click", function () { 
   var tous = document.querySelectorAll(".skills");

   for (var i = 0; i < tous.length ; i++) {
      document.querySelectorAll(".skills")[i].style.display="initial"; }
})



// Bouton Design

design.addEventListener("click", function () {
   
   let skillsDESIGN = document.querySelectorAll(".skills");

   for (var i = 0; i < skillsDESIGN.length ; i++) {
      
      if (skillsDESIGN[i].classList.contains("design")) {
         document.querySelectorAll(".skills")[i].style.display="initial";
      } 
      else {
         document.querySelectorAll(".skills")[i].style.display="none"; }
   }
})

// Bouton Design

langage.addEventListener("click", function () {
   
   let skillsLANGAGE = document.querySelectorAll(".skills");

   for (var i = 0; i < skillsLANGAGE.length ; i++) {
      
      if (skillsLANGAGE[i].classList.contains("langage")) {
         document.querySelectorAll(".skills")[i].style.display="initial";
      } 
      else {
         document.querySelectorAll(".skills")[i].style.display="none"; }
   }
})