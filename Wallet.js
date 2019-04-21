class Wallet {
    constructor(money) {
        let _money = money;
        //pobieranie zawartosci walleta 
        this.getWalletValue = () => _money;
        //sprawdzanie czy mozna grac 
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false
        }
        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    throw new Error('nieprawidlowy format')
                }
            } else {
                console.log(typeof value);
                throw new Error('nieprawidlowa liczba')
            }
        }
    }
}


// const wallet = new Wallet(200)