
var drumButtonLength = document.querySelectorAll(".drum").length;

for(var i=0; i<drumButtonLength;i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

var buttonInnerHTML = this.innerHTML;
switchStatement(buttonInnerHTML)

buttonAnimation(buttonInnerHTML)
});
}

document.addEventListener("keydown", function(event) {
    switchStatement(event.key)

    buttonAnimation(event.key)
})

function switchStatement(buttonInnerHTML) {
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
   
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;                                     

        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
    
        default:
            console.log(key);
    }
    
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }





// function NewObject(name, age) {
//     this.name = name;
//     this.age = age;
//     this.clean = function() {
//         alert("cleaning");
//     }
// }

// var test = new NewObject(10,10);
// test.clean()




// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function division(num1, num2) {
//     return num1 / num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function calculator(num1, num2, operator) {
//     operator(num1, num2)
// }