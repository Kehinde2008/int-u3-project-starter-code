// Declare variables below to save the different divs of your story.
let picOne = document.querySelector(".option-one");
let boxOne = document.querySelector(".option-one-screen");

let picTwo = document.querySelector(".option-two");
let boxTwo =document.querySelector(".option-two-screen");

let nextStep =document.querySelector(".nextStep");

let jump =document.querySelector(".option-three");
let jump2 =document.querySelector(".option-four");

let draw =document.querySelector(".option-one-end");
let draw2 =document.querySelector(".option-two-end");

let con =document.querySelectorAll(".congrats");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


picOne.addEventListener('click', function(){
    boxOne.style.display="block";
    nextStep.style.display="block";
    jump.style.display="block";
    jump2.style.display="block";
});


picTwo.addEventListener('click', function(){
    boxTwo.style.display="block";
    nextStep.style.display="block";
    jump.style.display="block";
    jump2.style.display="block";
 });



jump.addEventListener('click', function(){
    draw.style.display="block";
    
});

jump2.addEventListener('click', function(){
    draw2.style.display="block";

})