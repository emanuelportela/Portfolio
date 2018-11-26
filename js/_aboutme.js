
// SKILLS

// Bouton All
let all = document.getElementById('btn1');
let design = document.getElementById('btn2');
let langage = document.getElementById('btn3');

 

// Bouton all
all.addEventListener("click", function () { 
   var tous = document.querySelectorAll(".skills");

   for (var i = 0; i < tous.length ; i++) {
      document.querySelectorAll(".skills")[i].style.display="initial"; }
      all.classList.add("btn-clique")
      all.style.color="white"
      langage.classList.remove("btn-clique")
      langage.style.color="#00AFB4"
      design.classList.remove("btn-clique")
      design.style.color="#00AFB4"
})



// Bouton Design

design.addEventListener("click", function () {
   
   let skillsDESIGN = document.querySelectorAll(".skills");

   for (var i = 0; i < skillsDESIGN.length ; i++) {
      
      if (skillsDESIGN[i].classList.contains("design")) {
         document.querySelectorAll(".skills")[i].style.display="initial";
         design.classList.add("btn-clique")
         design.style.color="white"
         all.classList.remove("btn-clique")
         all.style.color="#00AFB4"
         langage.classList.remove("btn-clique")
         langage.style.color="#00AFB4"
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
         langage.classList.add("btn-clique")
         langage.style.color="white"
         all.classList.remove("btn-clique")
         all.style.color="#00AFB4"
         design.classList.remove("btn-clique")
         design.style.color="#00AFB4"
      } 
      else {
         document.querySelectorAll(".skills")[i].style.display="none"; }
   }
})



