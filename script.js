// Main elements
const scoresPlayer1 = document.querySelector(`.player1.scores_left`);
const dartsThrown = document.querySelector('.player1.darts_thrown');
const legsWin = document.querySelector('.player1.win_legs');
let wins = 0;
let darts = 0;
var score = 501;

// Init
scoresPlayer1.innerText = score;
dartsThrown.innerText = darts;
legsWin.innerText = wins;

const calcTrhow = (event) => {
    event.preventDefault();
    const sum = parseInt(document.querySelector('input').value);
    if (sum <= score) {
        score -= sum;
    }
    darts += 3;
    if (score === 0) {
        wins += 1;
        score = 501;
        darts = 0;
    }
    scoresPlayer1.innerText = score;
    dartsThrown.innerText = darts;
    legsWin.innerText = wins;

    document.querySelector('input').value = '';
};

const okButton = document.querySelector('button');
okButton.addEventListener('click', calcTrhow);

// initialize players
const initPlayers = () => {
    const playersInput = document.querySelector('.container_input');
    playersInput.style.display = 'block';
};

window.onload = () => {
    initPlayers();
};