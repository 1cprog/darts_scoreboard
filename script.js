// Main elements
class Player {
    constructor(index, name) {
        this.playerName = document.querySelector(`.helper.player${index + 1} .player_name`);
        this.scoresPlayer = document.querySelector(`.player${index + 1}.scores_left`);
        this.dartsThrown = document.querySelector(`.player${index + 1}.darts_thrown`);
        this.legsWin = document.querySelector(`.player${index + 1}.win_legs`);
        this.name = name;
        this.wins = 0;
        this.darts = 0;
        this.score = 501;
    }
}

const players = [];

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

// Init
const newGame = (event) => {
    const inputs = [...document.querySelectorAll('input[id^="player"]')]
    for (let i = 0; i < inputs.length; i++) {
        let newPlayer = new Player(i, inputs[i].value);
        players.push(newPlayer);
        newPlayer.playerName.innerText = newPlayer.name;
        newPlayer.scoresPlayer.innerText = newPlayer.score;
        newPlayer.dartsThrown.innerText = newPlayer.darts;
        newPlayer.legsWin.innerText = newPlayer.wins;
    }
    const playersInput = document.querySelector('.container_input');
    playersInput.style.display = 'none';
};

const okButton = document.querySelector('button');
okButton.addEventListener('click', calcTrhow);

// initialize players
const initPlayers = () => {
    const playersInput = document.querySelector('.container_input');
    playersInput.style.display = 'block';
    const button = document.querySelector('input.btn');
    button.addEventListener('click', newGame);
};

window.onload = () => {
    initPlayers();
};