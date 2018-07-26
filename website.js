function makeGray(x){
x.style.backgroundColor="#999999";
}

function makeBlack(x) {
   x.style.backgroundColor="black";
}
   
//slideshow
var pictures=1;
showDivs(Pictures);

function plusDivs(n){
   showDivs(Pictures+=n);
}

function showDivs(n){
  var i;
  var x =document.getElementsByClassName("pictureSlide");
  if ( n > x.length) {pictures= 1}
  if (n < 1) {pictures= x.length};
  for (i =0;i < x.length; i++){
    x[i].style.display ="none";
  }
  x[pictures-1].style.display ="block" ;

}
