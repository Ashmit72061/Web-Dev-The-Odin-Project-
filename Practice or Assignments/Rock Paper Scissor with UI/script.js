const choice = document.querySelector("#userImg");
const compChoice = document.querySelector("#compImg");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

let move = 0;

rock.addEventListener("click", () => {
    move = 1;
    displayImg(move,choice);});
paper.addEventListener("click", () => {
    move = 2;
    displayImg(move,choice);});
scissor.addEventListener("click", () => {
    move = 3;
    displayImg(move,choice);});

function random(){
    return (Math.floor(Math.random() * 3) + 1);
}

function displayImg(move,parentDiv){
    const userImg = document.createElement("img");
    if (move === 1){
        userImg.src = "images/rock-removebg-preview.png";
    }
    else if (move === 2){
        userImg.src = "images/paper-removebg-preview.png";
    }
    else if (move === 3){
        userImg.src = "images/scissor-removebg-preview.png";
    }
    // choice.removeChild(userImg);
    parentDiv.innerHTML="";
    parentDiv.appendChild(userImg);
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", ()=>{
    let x = random();
    displayImg(x,compChoice);
    winner(x,move);
    console.log(`x=${x} move = ${move}`);
});
let compScore = 0
let userScore = 0
function winner(comp,user){
    if((comp === 1 && user === 2) || (comp === 2 && user === 3) || (comp === 3 && user === 1)){
        //user win
        userScore++;
    }
    else if(comp != user){
        compScore++;
    }
    document.querySelector("#compScore").textContent = compScore;
    document.querySelector("#userScore").textContent = userScore;
}

document.querySelector("#resetScore").addEventListener("click", ()=>{
    compScore = 0;
    userScore = 0;
    document.querySelector("#compScore").textContent = compScore;
    document.querySelector("#userScore").textContent = userScore;
});
