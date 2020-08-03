var random1=Math.floor(Math.random()*6+1);
var random2=Math.floor(Math.random()*6+1);
var image1="dice"+random1+".png";
var image2="dice"+random2+".png";
if( random1 > random2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (random1 === random2)
{
  document.querySelector("h1").innerHTML="Draw";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);
