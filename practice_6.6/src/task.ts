interface Car {
    model: string;
    price: number;
    dynamic_1: Record<string | number, string>;
    dynamic_2: {
        [key: string | number]: number;
    };
    tuple: [string, number, string]; // string, number, string
}

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(1, 2));

console.log(add("First -", " 1"));

console.log(add("1", 4));


const myCar: Car = {
    model: "Lada",
    price: 1000000,
    dynamic_1: {
        1: "1",
        2: "2",
    },
    dynamic_2: {
        "1": 1,
        2: 2,
    },
    tuple: ["string", 1, "string"],
};

type CarKey = keyof typeof myCar;

const carKeys: CarKey[] = Object.keys(myCar) as CarKey[];

console.log(carKeys);

type PartialCar = Partial<Car>;
type RequiredCar = Required<Car>;
type ReadonlyCar = Readonly<Car>;
type CarModelAndPrice = Pick<Car, 'model' | 'price'>;
type CarWithoutDynamic = Omit<Car, 'dynamic_1' | 'dynamic_2'>;

// Примеры использования утилитарных типов
const partialCar: PartialCar = {
    model: "Lada",
};
const requiredCar: RequiredCar = {
    model: "Lada",
    price: 1000000,
    dynamic_1: {1: "1", 2: "2",},
    dynamic_2: {"1": 1, 2: 2,},
    tuple: ["string", 1, "string"],
};
const readonlyCar: ReadonlyCar = {
    model: "Lada",
    price: 1000000,
    dynamic_1: {1: "1", 2: "2",},
    dynamic_2: {"1": 1, 2: 2,},
    tuple: ["string", 1, "string"],
};
// const ReadonlyCar.model = "Toyota"; // Ошибка: невозможно изменить свойство, так как оно readonly
const carModelAndPrice: CarModelAndPrice = {
    model: "Lada",
    price: 1000000,
};
const carWithoutDynamic: CarWithoutDynamic = {
    model: "Lada",
    price: 1000000,
    tuple: ["string", 1, "string"],
};
