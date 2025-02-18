randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomDice = `./images/dice-six-faces-${randomNumber1}.png`;
document.querySelectorAll("img")[0].setAttribute("src", randomDice);

randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomDice2 = `./images/dice-six-faces-${randomNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent="Draw!";
}