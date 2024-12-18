// const ivan = {
// 	id: 1,
// 	userName: "Ivan",
// 	surname: "Ivanov",
// 	coins: 5,
// 	age: 25,
// 	addCoin(amount) {
// 		this.coins += amount;
// 	},
// 	removeCoin(amount) {
// 		this.coins -= amount;
// 	},
// 	getCoins() {
// 		return `Количество монет ${this.coins}`;
// 	},
// };

interface IUser {
    readonly id: number;
    userName: string;
    surname: string;
    coins?: number;
    age: number;

    addCoin(amount: number): void;

    removeCoin(amount: number): void;

    getCoins(): string;
}

interface IUser {
    countChildren: number;
}

interface IGenderUser extends IUser {
    gender: string;
}

class UserFirst implements IGenderUser {
    readonly id: number;
    userName: string;
    surname: string;
    coins?: number;
    age: number;
    countChildren: number;
    gender: string;

    constructor(id: number, userName: string, surname: string, age: number, gender: string, countChildren: number, coins?: number) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.age = age;
        this.countChildren = countChildren;
        this.gender = gender;
        this.coins = coins;
    }

    addCoin(amount: number) {
        if (this.coins !== undefined) {
            this.coins += amount;
        }
    }

    removeCoin(amount: number) {
        if (this.coins !== undefined) {
            this.coins -= amount;
        }
    }

    getCoins() {
        return `Количество монет ${this.coins}`;
    }
}

const marry = new UserFirst(1, "Marry", "M", 20, "girl", 2, 5);
console.log(marry.getCoins());