// checkout tables http://dartsforum.ru/index.php?showtopic=1373&st=0&p=91589&#entry91589
// Main elements
class Player {
    constructor(index, name) {
        this.activePlayer = document.querySelector(`.helper.player${index + 1}`);
        this.playerName = document.querySelector(`.helper.player${index + 1} .player_name`);
        this.scoresPlayer = document.querySelector(`.player${index + 1}.scores_left`);
        this.dartsThrown = document.querySelector(`.player${index + 1}.darts_thrown`);
        this.legsWin = document.querySelector(`.player${index + 1}.win_legs`);
        this.helper = document.querySelector(`.player${index + 1}.helper ul`);
        this.active = false;
        this.name = name;
        this.wins = 0;
        this.darts = 0;
        this.score = 501;
    }
}

const checkoutTables = {
    'E. Bristow': {
        
    }
};

const players = [];

const refreshVisualisation = () => {

};

const calcTrhow = (event) => {
    event.preventDefault();
    const sum = parseInt(document.querySelector('input').value);

    if (sum > 180) {
        alert('Double check your input');
        return;
    }
    const currentPlayer = players[0].active ? players[0] : players[1];
    if (sum <= currentPlayer.score) {
        currentPlayer.score -= sum;
    }
    currentPlayer.darts += 3;
    if (currentPlayer.score === 0) {
        currentPlayer.wins += 1;
        players.forEach(player => {
            player.score = 501;
            player.darts = 0;
        })
    }
    currentPlayer.scoresPlayer.innerText = currentPlayer.score;
    currentPlayer.dartsThrown.innerText = currentPlayer.darts;
    currentPlayer.legsWin.innerText = currentPlayer.wins;

    players.forEach(player => {
        player.active = !player.active;
        player.activePlayer.classList.toggle('active_player');
    });
    document.querySelector('input').value = '';
};

// Init
const newGame = (event) => {
    const inputs = [...document.querySelectorAll('input[id^="player"]')];
    for (let i = 0; i < inputs.length; i++) {
        let newPlayer = new Player(i, inputs[i].value);
        players.push(newPlayer);
        newPlayer.playerName.innerText = newPlayer.name;
        newPlayer.scoresPlayer.innerText = newPlayer.score;
        newPlayer.dartsThrown.innerText = newPlayer.darts;
        newPlayer.legsWin.innerText = newPlayer.wins;
    }
    players[0].active = !players[0].active;
    players[0].active ? players[0].activePlayer.classList.add('active_player') : players[0].activePlayer.classList.remove('active_player');
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