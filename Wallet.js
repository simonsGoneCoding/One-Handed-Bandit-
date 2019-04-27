class Wallet {
    constructor(money) {
        let _money = money;
        //getting wallet value 
        this.getWalletValue = () => _money;
        //checking game conditions for playing 
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
                    throw new Error('incorrect format')
                }
            } else {
                console.log(typeof value);
                throw new Error('incorrect number')
            }
        }
    }
}