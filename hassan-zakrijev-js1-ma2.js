// question 1

const myFunctionExpression = function() {
    console.log("Hassan Zakrijev");
};

myFunctionExpression();

// question 2

const ClicMekButton = document.querySelector(".btn");
ClicMekButton.addEventListener("click", logClick);

function logClick(){
    console.log("I was clicked");
}

// question 3

const firstname = document.querySelector("#firstName");
firstname.addEventListener("keydown", keyPress);

function keyPress(event){
    console.log(event.key);
}

// question 4

const button = document.querySelector("button");
button.addEventListener("mouseover", addClass);

function addClass(event){
    event.target.classList.add("hover");
    console.log("hover");
}

// question 5

const button2 = document.querySelector("[data-animal='dog']");
button2.addEventListener("mouseout", removeClass);

function removeClass(event){
    event.target.classList.remove("hover");
    console.log("unhover");
}

// question 6
const animals = document.querySelectorAll("li");

for (let i = 0; i < animals.length; i++) {
    animals[i].addEventListener("mouseover", logTypeOfAnimal)

    function logTypeOfAnimal() {
        console.dir(animals[i].dataset.animal);
    }
}

// question 7

const animal = "cow";

switch(animal) {

    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;
    
    default:
        console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

function sheepNames(sheepname){
    console.log(sheepname);
}

sheep.forEach(sheepNames);

// question 9

var logTimer = 0;

function logTimer(){
    console.log("hello");
   
    if(counter === 5) {
        clearInterval(interval);
    }
    
    counter++;
    
}

const interval = setInterval(logTimer, 500);

// question 10

const container = document.querySelector("div.container");

function updateText() {
    container.innerText = "Text updated"
}

setTimeout(updateText, 2000);
