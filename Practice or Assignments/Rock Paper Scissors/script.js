alert("Hello!!\nIn this game you need to choose between Rock,Paper or scissors\n1 For Rock\n2 For Scissors\n3 For Paper");
function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// console.log(`${random(1,3)}`);
let NoOfRounds = prompt("Enter how many rounds you would like to play");
let score = 0;
for(let i = 1; i <=NoOfRounds;++i){
    alert(`Current score:

        Your Score = ${score}
        Computer's Score = ${i-score}`);
        let choice = prompt("Enter your choice\n1 For Rock\n2 For Scissors\n3 For Paper");
        let CompChoice = random(1,3);
        if((choice == 1 && CompChoice == 3) || (choice == 2 && CompChoice == 1) || (choice == 3 && CompChoice == 2)){
            alert(`Computer Won this round as it choose ${CompChoice}`);
        }
        else{
            alert(`You Won this round as it choose ${CompChoice}`);
            ++score;
        }
    }
    
alert(`Final score:

    Your Score = ${score}
    Computer's Score = ${NoOfRounds-score}`);

if(score > NoOfRounds-score){
    alert("Unfortunately you won this game!! But dont get arrogant as luck can change anytime");
}
else{
    alert(`Noob!!
    Could not even win against some shitty code written by an amature!!
    dont even think of attempting this again unless you train for a year`)
}