
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
//var sounds=["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3","snare.mp3","crash.mp3","crash.mp3"];
for(var i=0;i<numberOfDrumButtons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
  var buttonInnerHtml=this.innerHTML;//selecting Keyboard Key
  makeSound(buttonInnerHtml);
  //this.style.color="white";
});
}

document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
}
);

function makeSound(key)
{
  switch (key) {
    case "w":
         var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
    case "a":
          var audio=new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
    case "s":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
    case "d":
         var audio=new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
   case "j":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
   case "k":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "l":
         var audio=new Audio("sounds/snare.mp3");
         audio.play();
         break;
    default:
         alert("Please enter valid key");

}
}
