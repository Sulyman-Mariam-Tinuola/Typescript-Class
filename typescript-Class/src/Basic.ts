export
let userName: string = "Jack";
let hasLoggedIn: boolean = true;
userName += "Sulyman";
console.log(hasLoggedIn);
let myNunber: number = 12;
let myRex: RegExp = /fool/;
const names: string[] = userName.split('');
const myValues: Array<number> = [5, 6, 8, 5,]
interface person {
    first: string;
    last: string;
}
const myPerson: {
    first: string;
    last: string;
} = {
    first: "Maryam",
    last:"Sulyman",
}
const ids: Record<number, string> = {
    10: "a",
    30: "b"
}
ids[40] = "p"
if (ids[30] === "f") {

}
for(let i = 0; i >=10; i++) {
    console.log(i)
}
[1, 2, 3].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((v) => v*10)