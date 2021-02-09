document.querySelector("button").addEventListener("click",calc);

function calc(){
var n1= Math.floor(Math.random()*6+1);
var n2= Math.floor(Math.random()*6+1);
var image1="images/dice"+n1+".png";
var image2="images/dice"+n2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(n1>n2){
  alert("Player 1 wins");
}else if (n1===n2) {
  alert("Draw");
}else{
  alert("Player 2 wins");
}

}
