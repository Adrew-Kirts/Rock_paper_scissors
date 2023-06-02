document.body.style.background = "url('https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg') no-repeat center";

// 2. Créez dans votre page HTML une section qui contient ces trois images sur une même ligne ;
let choiceBox = document.createElement("div");
choiceBox.classList.add("choiceBox");
choiceBox.style.alignItems = "center";
document.body.appendChild(choiceBox);

let divContainer = document.getElementsByClassName("choiceBox")[0];
divContainer.style.display = "flex";
divContainer.style.justifyContent = "center";

let pierreImg = document.createElement("img");
pierreImg.src = "pierre.png";
pierreImg.id = "pierre";
pierreImg.style.margin = "0 10px";
pierreImg.style.maxHeight = "250px";
pierreImg.style.marginTop = "100px"
pierreImg.style.border = "solid 10px"
divContainer.appendChild(pierreImg);

let feuilleImg = document.createElement("img");
feuilleImg.src = "feuille.png";
feuilleImg.id = "feuille";
feuilleImg.style.margin = "0 10px";
feuilleImg.style.maxHeight = "250px";
feuilleImg.style.marginTop = "100px"
feuilleImg.style.border = "solid 10px"
divContainer.appendChild(feuilleImg);

let ciseauxImg = document.createElement("img");
ciseauxImg.src = "ciseaux.png";
ciseauxImg.id = "ciseaux";
ciseauxImg.style.margin = "0 10px";
ciseauxImg.style.maxHeight = "250px";
ciseauxImg.style.marginTop = "100px"
ciseauxImg.style.border = "solid 10px"
divContainer.appendChild(ciseauxImg);

// 3. lorsque l'utilisateur clique sur une image, son choix s'affiche dans la console ;
// 4. Maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur ;
let userChoice = document.createElement("div");
userChoice.id = "userChoice";
userChoice.style.maxWidth = "200px";
userChoice.style.display = "flex";
userChoice.style.justifyContent = "center";
userChoice.style.border = "solid";
userChoice.style.backgroundColor = "cadetblue"
userChoice.style.marginTop = "50px";
userChoice.style.marginLeft = "45%"
userChoice.innerHTML = "&#8593 It's your move! &#8593";
document.body.appendChild(userChoice);

// 5. Créez une div avec l'id computerChoice et y mettre dedans le choix de l'ordinateur
let choiceBoxPc = document.createElement("div");
choiceBoxPc.classList.add("choiceBoxPc");
choiceBoxPc.id = "computerChoice";
choiceBoxPc.style.maxWidth = "200px";
choiceBoxPc.style.display = "flex";
choiceBoxPc.style.justifyContent = "center";
choiceBoxPc.style.border = "solid";
choiceBoxPc.style.backgroundColor = "antiquewhite"
choiceBoxPc.style.marginTop = "10px";
choiceBoxPc.style.marginLeft = "45%"
choiceBoxPc.innerText = "Computer's choice";
document.body.appendChild(choiceBoxPc);

// 6. Ajoutez une div pour afficher le résultat,
let resultBox = document.createElement("div");
resultBox.classList.add("resultBox");
resultBox.id = "resultBox";
resultBox.style.maxWidth = "200px";
resultBox.style.display = "flex";
resultBox.style.justifyContent = "center";
resultBox.style.border = "solid";
resultBox.style.backgroundColor = "white"
resultBox.style.marginTop = "30px";
resultBox.style.marginLeft = "45%"
resultBox.innerText = "Result";
document.body.appendChild(resultBox);

const pierreImage = document.getElementById('pierre');
const feuilleImage = document.getElementById('feuille');
const ciseauxImage = document.getElementById('ciseaux');

let uChoice;

pierreImage.addEventListener('click', () => {
    console.log('rock');
    document.getElementById("userChoice").innerText = "rock";
    uChoice = "rock";
    playGame();
});

feuilleImage.addEventListener('click', () => {
    console.log('paper');
    document.getElementById("userChoice").innerText = "paper";
    uChoice = "paper";
    playGame();
});

ciseauxImage.addEventListener('click', () => {
    console.log('scissors');
    document.getElementById("userChoice").innerText = "scissors";
    uChoice = "scissors";
    playGame();
});

let playerInput = document.getElementById("userChoice").innerText;
let choices = ["rock", "paper", "scissors", "bomb"];

function getComputerChoice() {

    const number = Math.trunc(Math.random() * 3);
    document.getElementById("computerChoice").innerText = choices[number];
    return choices[number];
}

function findWinner(playerChoice, computerChoice) {
    console.log("Result:")
    if (playerChoice == "bomb") {
        console.log("Won - cheater!");
    }
    else if (playerChoice == computerChoice) {
        console.log("Tied");
        document.getElementById("resultBox").innerHTML = "<a style=\"color: grey\">You tied</a>";

    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("Won");
        document.getElementById("resultBox").innerHTML = "<a style=\"color: green\">You won!</a>";

    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("Won");
        document.getElementById("resultBox").innerHTML = "<a style=\"color: green\">You won!</a>";;

    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("Won");
        document.getElementById("resultBox").innerHTML = "<a style=\"color: green\">You won!</a>";;

    }
    else {
        console.log("Lost");
        document.getElementById("resultBox").innerHTML = "<a style=\"color: red\">You lost...</a>";;

    }

}

function playGame() {

    console.log("You chose: ", uChoice);
    let computerChoice = getComputerChoice();
    console.log("Computer chose: ", computerChoice);
    return findWinner(uChoice, computerChoice);
}
