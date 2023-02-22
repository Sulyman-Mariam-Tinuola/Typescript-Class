import addNumbers from "./function";

export function printtoFile(text:string, callback: () => void): void {
    console.log(text);
    callback()
}

export function arrayMutate(numbers: number[], mutate: mutationFunction):number[] {
    return numbers.map(mutate)
}

console.log(arrayMutate([1, 2 ,3], (v) => v * 10));

export type mutationFunction = (v: number) => number;

const myNewMutateFunc: mutationFunction = (v: number) => v * 100;

// Returning Function
export function createAdder(num: number) {
    return (val: number) => num + val
}