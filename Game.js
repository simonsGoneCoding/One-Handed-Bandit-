class Game {
  constructor(start) {

    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    document.getElementById('start').addEventListener('click', this.startGame.bind(this)); //binded with startGame() <-- this still referes to Game{} 
    this.spanWallet = document.querySelector('.panel span.wallet');
    this.boards = document.querySelectorAll('div.color');
    this.inputBid = document.getElementById('bid');
    this.spanResult = document.querySelector('.score span.result');
    this.spanGames = document.querySelector('.score span.number');
    this.spanWins = document.querySelector('.score span.win');
    this.spanLoses = document.querySelector('.score span.loss');

    this.render()
  }
  render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    })
    this.spanWallet.textContent = money;
    if (result) {
      result = `You won ${wonMoney}$ `;
    } else if (!result && result !== "") {
      result = `You lost ${bid}$ `;
    }
    this.spanResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLoses.textContent = stats[2];
    this.inputBid.value = "";
  }

  startGame() {
    if (this.inputBid.value < 1) return alert('insufficient founds');
    const bid = Math.floor(this.inputBid.value);
    if (!this.wallet.checkCanPlay(bid)) {
      return alert('insufficient founds or incorrect value')
    }
    this.wallet.changeWallet(bid, '-');

    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.CheckWinner(colors);
    const wonMoney = Result.moneyWinInGame(win, bid);
    this.wallet.changeWallet(wonMoney);
    this.stats.addGameToStatistics();

    this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)
  }
}