interface Container<T>{
    value: T;
}

function getValue<T>(container: Container<T>): T {
    return container.value;
}

const container: Container<number> = {
    value: 10
};

const container2: Container<string> = {
    value: "Hello, world!"
};

console.log(getValue(container));
console.log(getValue(container2));