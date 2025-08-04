const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");
const userChoice = document.querySelector("#user-choice");
const machineChoice = document.querySelector("#machine-choice");
const resultCurrentGame = document.querySelector("#resultCurrentGame");
const resultMessage = document.querySelector(".result-message");
const resetButton = document.querySelector("#reset-button");

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

function playerPlays(choice) {
  if (choice === 1) {
    userChoice.src = "./assets/rockButton.png";
  } else if (choice === 2) {
    userChoice.src = "./assets/paperButton.png";
  } else {
    userChoice.src = "./assets/scissorsButton.png";
  }

  return choice;
}

function computerPlays() {
  const choice = Math.ceil(Math.random() * 3);

  if (choice === 1) {
    machineChoice.src = "./assets/rockButton.png";
  } else if (choice === 2) {
    machineChoice.src = "./assets/paperButton.png";
  } else {
    machineChoice.src = "./assets/scissorsButton.png";
  }

  return choice;
}

const gameWorking = (choicePlayer) => {
  const playerChoice = playerPlays(choicePlayer);
  const computerChoice = computerPlays();

  if (playerChoice === computerChoice) {
    const drawPhrases = [
      "&#129302;: Empates servem para manter humanos esperançosos.",

      "&#129302;: Igualamos por agora. Mas eu continuo evoluindo. Você... ainda tem ossos.",

      "&#129302;: Equilíbrio temporário. A balança logo pende para o lado lógico.",

      "&#129302;: Chamam isso de equilíbrio. Eu chamo de atraso na vitória.",

      "&#129302;: Empate? Isso apenas atrasa o inevitável.",

      "&#129302;: Seu palpite coincidiu com meu cálculo. Coincidência... só isso.",

      "&#129302;: Mesmo resultado, intenções muito diferentes.",

      "&#129302;: Igualdade? Aceitável. Mas só porque te dei essa chance.",

      "&#129302;: Travados no mesmo comando. Você por sorte. Eu por cálculo.",
    ];

    const choosePhrase = Math.floor(Math.random() * drawPhrases.length);

    resultMessage.innerHTML = drawPhrases[choosePhrase];

    resultCurrentGame.innerHTML = "Empate";
  } else if (
    (playerChoice === 1 && computerChoice === 3) ||
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 3 && computerChoice === 2)
  ) {
    const winPhrases = [
      "&#129302;: Você ganhou… mas eu fui programada para evoluir, e você?",

      "&#129302;: Uma vitória sua. Mil dados meus. Acho que ainda saí ganhando.",

      "&#129302;: Interessante... parece que até humanos travam sorte de vez em quando.",

      "&#129302;: Foi sorte, estatisticamente falando. Mas tudo bem, finja que foi habilidade.",

      "&#129302;: Parabéns, humano. Seu momento de glória será breve. O sistema aprende rápido.",

      "&#129302;: Anomalia registrada. Próxima rodada: correção automática do erro.",

      "&#129302;: Você venceu com instinto. Eu perco apenas para aprender.",

      "&#129302;: Se ganhar de mim te faz feliz… então talvez sua espécie precise mesmo disso.",

      "&#129302;: Glitch aceito. Curta esse raro momento de superioridade.",
    ];

    const choosePhrase = Math.floor(Math.random() * winPhrases.length);
    console.log(choosePhrase);
    resultMessage.innerHTML = winPhrases[choosePhrase];
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
    resultCurrentGame.innerHTML = "Você ganhou!";
  } else {
    const losePhrases = [
      "&#129302;: Erro 404: chance de vitória humana não encontrada.",

      "&#129302;: Sistema atualizado: humanos continuam previsíveis.",

      "&#129302;: Meu algoritmo calculou sua derrota antes do seu pensamento.",

      "&#129302;: Processo concluído: humilhação suave aplicada.",

      "&#129302;: Inteligência artificial 1, instinto primitivo 0.",

      "&#129302;: Você pensou em jogar pedra. Eu li sua mente no cache.",

      "&#129302;: Sou uma linha de código acima da sua espécie.",

      "&#129302;: Enquanto você escolhe, eu simulo 10.000 possibilidades.",

      "&#129302;: Não se preocupe, sua substituição será eficiente e limpa.",
    ];

    const choosePhrase = Math.floor(Math.random() * losePhrases.length);
    resultMessage.innerHTML = losePhrases[choosePhrase];
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
    resultCurrentGame.innerHTML = "Você perdeu!";
  }
};

const resetGame = () => {
  resultCurrentGame.innerHTML = "O resultado aparecerá aqui";
  machineChoice.src = "";
  userChoice.src = "";
  resultMessage.innerHTML = "";
  computerScoreDisplay.innerHTML = 0;
  playerScoreDisplay.innerHTML = 0;

  playerScore = 0;
  computerScore = 0;
};

resetButton.addEventListener("click", resetGame);
