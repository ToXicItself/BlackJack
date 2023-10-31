let DealersCard = []
let PlayersCard = [];
let sum = 0;
let sum1 = 0;
let hasBlackjack = false;
let isAlive = false;
let msg = "";
let mainMsg = document.getElementById("mainMsg");
let dealerSum = document.getElementById("dealersSum");
let playerSum = document.getElementById("playerSum");
let Card1 = document.getElementById("PlayerCards");
let Card2 = document.getElementById("DealersCard");

function StartGame() {

    document.getElementById('startGame').style = "display:none";
    isAlive = true;
    let firstcard_D = Math.floor(Math.random() * 11) + 1;
    let secondcard_D = Math.floor(Math.random() * 11) + 1;
    let firstcard = Math.floor(Math.random() * 11) + 1;
    let secondcard = Math.floor(Math.random() * 11) + 1;
    DealersCard = [firstcard_D, secondcard_D];
    PlayersCard = [firstcard, secondcard];
    sum1 = firstcard_D + secondcard_D;
    sum = firstcard + secondcard;
    renderGame();
}

function renderGame() {

    playerSum.textContent = `Player Total: ${sum}`;
    dealerSum.textContent = `Dealer Total: ${DealersCard[0]}`
    Card2.textContent = `Dealer Cards:  ${DealersCard[0]} `;
    Card1.textContent = `Player Cards:  ${PlayersCard} `;
    if (sum <= 20) {
        msg = "Do you want to draw a another card?"

    }
    else if (sum === 21) {
        msg = "You've got Blackjack !"
        hasBlackjack = true;
        
    }
    else {
        msg = "You're out of the game!"
        isAlive = false;

    }
    mainMsg.textContent = msg;

}

function renderGame1() {

    playerSum.textContent = `Player Total: ${sum}`;
    Card1.textContent = `Player Cards:  ${PlayersCard} `;
    if (sum <= 20) {
        msg = "Do you want to draw a another card?"

    }
    else if (sum === 21) {
        document.getElementById('startGame').style = "display:inline";
        msg = "You've got Blackjack !"
        hasBlackjack = true;
    }
    else {
        document.getElementById('startGame').style = "display:inline";
        msg = "You're out of the game!"
        isAlive = false;
    }
    mainMsg.textContent = msg;

}

function stand() {
    if (isAlive === true && hasBlackjack === false) {

    while (sum1 < 17) {
        let new_Dcard = Math.floor(Math.random() * 11) + 1;
        DealersCard.push(new_Dcard);
        sum1 += new_Dcard;
    }
    if ((sum1 > sum && sum1 < 21) || sum1 === 21) {
        msg = "Dealer Wins";
    }
    else if ((sum > sum1 && sum < 21) || sum === 21) {
        msg = "Player Wins";
    }
    else if(sum1>21 && sum<21){
        msg = "Player Wins";
    }
    else if(sum>21 && sum1<21){
        msg = "Dealer Wins";
    }
    else {
        msg = "Draw"

    }
    
    mainMsg.textContent = msg;
    Card2.textContent = `Dealer Cards:  ${DealersCard} `;
    Card1.textContent = `Player Cards:  ${PlayersCard} `;
    dealerSum.textContent = `Dealer Total: ${sum1}`
    playerSum.textContent = `Player Total: ${sum}`;
    document.getElementById('startGame').style = "display:inline";
    isAlive = false;

}
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        while (sum1 < 17) {
            let new_Dcard = Math.floor(Math.random() * 11) + 1;
            DealersCard.push(new_Dcard);
            sum1 += new_Dcard;

        }
        let new_Card = Math.floor(Math.random() * 11) + 1;
        PlayersCard.push(new_Card);
        msg = `Drawing a new Card`;
        mainMsg.textContent = msg;
        sum += new_Card;
        renderGame1();
    }
}
