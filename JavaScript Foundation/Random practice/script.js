// Odin Project approach!!

const container = document.querySelector("#container");

const content = document.createElement("div");
// content.classList.add("cont");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// My Code

const myContainer = document.querySelector("#container");
//Para = Hello
const myPara = document.createElement("p");
myPara.textContent = "Hello";
myPara.setAttribute ("style","color: red;");
myContainer.appendChild(myPara);

//an <h3> with blue text that says “I’m a blue h3!”
const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.setAttribute("style","color:blue;")
myContainer.appendChild(heading3);

// a <div> with a black border and pink background color

const division = document.createElement("div");
division.setAttribute("style","border: 2px solid black;");
// division.setAttribute("class","division");    //this does work
division.classList.add("division");
division.style["background-color"] = "pink";
container.appendChild(division);

//Inside the division

// const temp = document.querySelector(".division");
const heading1 = document.createElement("h1");
heading1.textContent="I'm in a Div";
division.appendChild(heading1);

// temp.appendChild(heading1); // When using temp thing above

const para2 = document.createElement("p");
para2.textContent = "ME TOO";
division.appendChild(para2);

//Button (Hello World)
const btn = document.querySelector("#btn");
function helloWorld(){
    alert("Hello World");
}
btn.onclick = helloWorld;

//btn2 copy of btn 1 but different method
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function(e){
    console.log(e.target);
    e.target.style.background = "blue";
});