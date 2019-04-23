class Game {
  constructor(start) {

    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    document.getElementById('start').addEventListener('click', this.startGame);
    this.spanWallet = document.querySelector('.panel span.wallet');
    this.boards = document.querySelectorAll('div.color');
    this.inputBid = document.getElementById('bid');
    this.spanResult = document.querySelector('.score span.result');
    this.spanGames = document.querySelector('.score span.number');
    this.spanWins = document.querySelector('.score span.win');
    this.spanLoses = document.querySelector('.score span.loss');

    this.render()
  }
  render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result, stats = [0, 0, 0], bid = 0, wonMoney = 0) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    })
    this.spanResult = result;
    this.spanWallet.textContent = money;
    if (result) {
      result = `You won ${wonMoney}`;
    } else if (!result && result !== "") {
      result = `You lose ${bid}`;
    }
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[0];
    this.spanLoses.textContent = stats[0];
  }
  startGame() {

  }
}