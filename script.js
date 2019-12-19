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

const gameSettings = {
    gameScore: 501,
    players: [],
    backgroundSelectors: ['playerName', 'dartsThrown', 'legsWin']
};

// checkout tables with different checkout
const checkoutTables = {
    'Unicorn': {
        170: [['T20', 'T20', 'Bull'], []],
        167: [['T20', 'T19', 'Bull'], []],
        164: [['T20', 'T18', 'Bull'], []],
        161: [['T20', 'T17', 'Bull'], []],
        160: [['T20', 'T20', 'D20'], []],
        158: [['T20', 'T20', 'D19'], []],
        157: [['T20', 'T19', 'D20'], []],
        156: [['T20', 'T20', 'D18'], []],
        155: [['T20', 'T19', 'D19'], []],
        154: [['T20', 'T18', 'D20'], []],
        153: [['T20', 'T19', 'D18'], []],
        152: [['T20', 'T20', 'D16'], []],
        151: [['T20', 'T17', 'D20'], []],
        150: [['T20', 'T18', 'D18'], []],
        149: [['T20', 'T19', 'D16'], []],
        148: [['T20', 'T16', 'D20'], []],
        147: [['T20', 'T17', 'D18'], []],
        146: [['T20', 'T18', 'D16'], []],
        145: [['T20', 'T15', 'D20'], []],
        144: [['T20', 'T20', 'D12'], []],
        143: [['T20', 'T17', 'D16'], []],
        142: [['T20', 'T14', 'D20'], []],
        141: [['T20', 'T15', 'D18'], []],
        140: [['T20', 'T20', 'D10'], []],
        139: [['T20', 'T19', 'D11'], []],
        138: [['T20', 'T18', 'D12'], []],
        137: [['T20', 'T19', 'D10'], []],
        136: [['T20', 'T20', 'D8'], []],
        135: [['Bull', 'T15', 'D20'], []],
        134: [['T20', 'T14', 'D16'], []],
        133: [['T20', 'T19', 'D8'], []],
        132: [['Bull', 'T14', 'D20'], []],
        131: [['T20', 'T13', 'D16'], []],
        130: [['T20', '20', 'Bull'], []],
        129: [['T19', 'T16', 'D12'], []],
        128: [['T18', 'T18', 'D10'], []],
        127: [['T20', 'T17', 'D8'], []],
        126: [['T19', '19', 'Bull'], []],
        125: [['Bull', '25', 'Bull'], []],
        124: [['T20', 'T14', 'D11'], []],
        123: [['T19', 'T16', 'D9'], []],
        122: [['T18', 'T18', 'D7'], []],
        121: [['T20', 'T11', 'D14'], []],
        120: [['T20', '20', 'D20'], []],
        119: [['T19', 'T12', 'D13'], []],
        118: [['T20', '18', 'D20'], []],
        117: [['T20', '17', 'D20'], []],
        116: [['T20', '16', 'D20'], []],
        115: [['T20', '15', 'D20'], []],
        114: [['T18', '20', 'D20'], []],
        113: [['T19', '16', 'D20'], []],
        112: [['T20', '12', 'D20'], []],
        111: [['T20', '11', 'D20'], []],
        110: [['T20', '10', 'D20'], ['T20', 'Bull']],
        109: [['T20', '9', 'D20'], []],
        108: [['T18', '14', 'D20'], []],
        107: [['T19', '10', 'D20'], ['T19', 'Bull']],
        106: [['T20', '14', 'D16'], []],
        105: [['T20', '13', 'D16'], []],
        104: [['T19', '15', 'D16'], ['T18', 'Bull']],
        103: [['T19', '10', 'D18'], []],
        102: [['T20', '10', 'D16'], []],
        101: [['T20', '9', 'D16'], ['T17', 'Bull']],
        100: [['T20', 'D20'], []],
        99: [['T19', '10', 'D16'], []],
        98: [['T20', 'D19'], []],
        97: [['T19', 'D20'], []],
        96: [['T20', 'D18'], []],
        95: [['T19', 'D19'], ['Bull', '13', 'D16']],
        94: [['T18', 'D20'], ['Bull', '12', 'D16']],
        93: [['T19', 'D18'], ['Bull', '11', 'D16']],
        92: [['T20', 'D16'], ['Bull', '10', 'D16']],
        91: [['T17', 'D20'], ['Bull', '9', 'D16']],
        90: [['T18', 'D18'], ['T20', 'D15']],
        89: [['T19', 'D16'], []],
        88: [['T20', 'D14'], []],
        87: [['T17', 'D18'], []],
        86: [['T18', 'D16'], []],
        85: [['T15', 'D20'], []],
        84: [['T20', 'D12'], []],
        83: [['T17', 'D16'], []],
        82: [['T14', 'D20'], ['Bull', 'D16']],
        81: [['T15', 'D18'], []],
        80: [['T20', 'D10'], []],
        79: [['T19', 'D11'], []],
        78: [['T18', 'D12'], []],
        77: [['T19', 'D10'], []],
        76: [['T20', 'D8'], []],
        75: [['T17', 'D12'], []],
        74: [['T14', 'D16'], []],
        73: [['T19', 'D8'], []],
        72: [['T16', 'D12'], ['T12', 'D18']],
        71: [['T13', 'D16'], []],
        70: [['T18', 'D8'], []],
        69: [['T19', 'D6'], []],
        68: [['T20', 'D4'], []],
        67: [['T17', 'D8'], []],
        66: [['T10', 'D18'], []],
        65: [['T11', 'D16'], []],
        64: [['T16', 'D8'], []],
        63: [['T13', 'D12'], []],
        62: [['T10', 'D16'], []],
        61: [['25', 'D18'], []],
        60: [['20', 'D20'], []],
        59: [['19', 'D20'], []],
        58: [['18', 'D20'], []],
        57: [['17', 'D20'], []],
        56: [['16', 'D20'], []],
        55: [['15', 'D20'], []],
        54: [['14', 'D20'], []],
        53: [['13', 'D20'], []],
        52: [['12', 'D20'], []],
        51: [['11', 'D20'], []],
        50: [['10', 'D20'], []],
        49: [['9', 'D20'], []],
        48: [['8', 'D20'], []],
        47: [['15', 'D16'], []],
        46: [['10', 'D18'], []],
        45: [['13', 'D16'], []],
        44: [['12', 'D16'], []],
        43: [['11', 'D16'], []],
        42: [['10', 'D16'], []],
        41: [['9', 'D16'], []],
        40: [['D20'], []],
        39: [['7', 'D16'], []],
        38: [['D19'], []],
        37: [['5', 'D16'], []],
        36: [['D18'], []],
        35: [['3', 'D16'], []],
        34: [['D17'], []],
        33: [['1', 'D16'], []],
        32: [['D16'], []],
        31: [['7', 'D12'], []],
        30: [['D15'], []],
        29: [['5', 'D12'], []],
        28: [['D14'], []],
        27: [['3', 'D12'], []],
        26: [['D13'], []],
        25: [['1', 'D12'], []],
        24: [['D12'], []],
        23: [['7', 'D8'], []],
        22: [['D11'], []],
        21: [['5', 'D8'], []],
        20: [['D10'], []],
        19: [['3', 'D8'], []],
        18: [['D9'], []],
        17: [['9', 'D4'], []],
        16: [['D8'], []],
        15: [['7', 'D4'], []],
        14: [['D7'], []],
        13: [['5', 'D4'], []],
        12: [['D6'], []],
        11: [['3', 'D4'], []],
        10: [['D5'], []],
        9: [['1', 'D4'], []],
        8: [['D4'], []],
        7: [['3', 'D2'], []],
        6: [['D3'], []],
        5: [['1', 'D2'], []],
        4: [['D2'], []],
        3: [['1', 'D1'], []],
        2: [['D1'], []],
    },
    'E. Bristow': {
        
    }
};

// showing checkout help when scores lower than possible for close
const showCheckoutTable = (player) => {
    if (player.score in checkoutTables.Unicorn) {
        checkoutTables.Unicorn[player.score][0].forEach(listItem => {
            const liItem = document.createElement('li');
            liItem.innerText = listItem;
            player.helper.appendChild(liItem)
        });
        player.helper.classList.add('checkout_slider');
    }
};

// Change active player
const changeActivePlayer = () => {
    const togglePlayerBackground = (player, bgClass) => {
        gameSettings.backgroundSelectors.forEach(selector => {
            if (bgClass) {
                player[selector].classList.add('light');
                player[selector].classList.remove('dark');
            } else {
                player[selector].classList.remove('light');
                player[selector].classList.add('dark');
            }
        })
    };
    gameSettings.players.forEach(player => {
        player.active = !player.active;
        if (player.active) {
            // Show checkout table (if possible)
            showCheckoutTable(player);
            togglePlayerBackground(player, true);
            player.activePlayer.classList.add('active_player');
        } else {
            if ([...player.helper.classList].find(nodeElement => nodeElement === 'checkout_slider')) {
                player.helper.classList.remove('checkout_slider');
            }
            player.helper.innerHTML = '';
            togglePlayerBackground(player, false);
            player.activePlayer.classList.remove('active_player');
        }
    });
};

// Calculate throw result and write into players details
const calcTrhow = (event) => {
    event.preventDefault();
    const sum = parseInt(document.querySelector('input').value);

    if (sum > 180) {
        alert('Double check your input');
        return;
    }
    const currentPlayer = gameSettings.players[0].active ? gameSettings.players[0] : gameSettings.players[1];
    if (sum <= currentPlayer.score) {
        currentPlayer.score -= sum;
    }
    currentPlayer.darts += 3;
    if (currentPlayer.score === 0) {
        currentPlayer.wins += 1;
        gameSettings.players.forEach(player => {
            player.score = gameSettings.gameScore;
            player.darts = 0;
        })
    }
    currentPlayer.scoresPlayer.innerText = currentPlayer.score;
    currentPlayer.dartsThrown.innerText = currentPlayer.darts;
    currentPlayer.legsWin.innerText = currentPlayer.wins;

    changeActivePlayer();
    document.querySelector('input').value = '';
};

// Init
const newGame = (event) => {
    const inputs = [...document.querySelectorAll('input[id^="player"]')];
    gameSettings.gameScore = parseInt(document.querySelector('select').value) || gameSettings.gameScore;
    for (let i = 0; i < inputs.length; i++) {
        let newPlayer = new Player(i, inputs[i].value);
        gameSettings.players.push(newPlayer);
        newPlayer.score = gameSettings.gameScore;
        newPlayer.playerName.innerText = newPlayer.name;
        newPlayer.scoresPlayer.innerText = newPlayer.score;
        newPlayer.dartsThrown.innerText = newPlayer.darts;
        newPlayer.legsWin.innerText = newPlayer.wins;
    }
    gameSettings.players[1].active = true;
    changeActivePlayer();

    const playersInput = document.querySelector('.container_input');
    playersInput.style.display = 'none';
};

const okButton = document.querySelector('button');
okButton.addEventListener('click', calcTrhow);

// initialize players
const initPlayers = () => {
    const playersInput = document.querySelector('.container_input');
    // playersInput.style.display = 'block';
    const button = document.querySelector('input.btn');
    button.addEventListener('click', newGame);
};

window.onload = () => {
    initPlayers();
};