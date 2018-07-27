Var slideindex= 1;
showSlides(slideindex);

function plusSlides(x){
   showSlides(slideindex +=x);
}

function showSlides(x){
   var i;
   var slides= document.getElementsByClassName('slide');
   if (x> slides.length){
      slideindex= 1
}
   if (x<1){
      slideindex=slides.length;
   }
   for (i=0; i<slides.length; i++){
      slides[i].style.display ="none";
   }
   slides[slideindex-1].style.display="block";
}
 //navigation bar stuff  
function makeGray(x){
x.style.backgroundColor="#999999";
}

function makeBlack(x) {
   x.style.backgroundColor="black";
}
   
//slideshow

