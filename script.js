const input = document.querySelector("#myInput");
const button = document.querySelector("#mybttn");
const h2 = document.querySelector("#myh2");
const showedScore = document.querySelector("#score");

let n = Math.floor(Math.random() * 100);
let score = 0;

button.onclick = function(){
    let guess = input.value;
    
    if(guess < n){
        h2.textContent = "Too low!";
    }
    else if(guess > n){
        h2.textContent = "Too high!";
    }
    else{
        h2.textContent = "You Win!";
        score++;
        showedScore.textContent = `Score: ${score}`;
        n = Math.floor(Math.random() * 100);
    }
}