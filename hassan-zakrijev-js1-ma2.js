// question 1

const myFunctionExpression = function() {
    console.log("Hassan Zakrijev");
};

myFunctionExpression();

// question 2

const button = document.querySelector(".btn");
button.addEventListener("click", logClick);

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

const button02 = document.querySelector("button");
button02.addEventListener("mouseover", addClass);

function addClass(event){
    event.target.classList.add("hover");
    console.log("hover");
}

// question 5

const button03 = document.querySelector("[data-animal='dog']");
button03.addEventListener("mouseout", removeClass);

function removeClass(event){
    event.target.classList.remove("hover");
    console.log("unhover");
}

// question 6

const litags = document.querySelectorAll("li");

for(let i = 0; i < litags.length; i++){
    litags[i].addEventListener("mouseover", scanItems);
}

function scanItems(event){
    console.log(event.target.dataset.animal);
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

var timer = 0;

function logTime(){
    console.log("hello");
   
    if(timer === 5) {
        clearInterval(interval);
    }
    
    timer++;
    
}

const interval = setInterval(logTime, 500);

// question 10

const placeholderText = document.querySelector("div.container");

function updateText() {
    placeholderText.innerText = "Text updated"
}

setTimeout(updateText, 2000);
