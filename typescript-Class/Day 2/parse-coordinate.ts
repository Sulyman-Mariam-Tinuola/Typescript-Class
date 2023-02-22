// function overloding in typescript
interface coordinate {
    x:number;
    y:number;
}
function parseCoordinateFromObjects(obj: coordinate): coordinate{
return {
    ...obj,
}
}
function parseCoordinateFromNumbers(x:number, y:number): coordinate{
    return{
        x,
        y,
    }
}
function parseCoordinate(obj:coordinate):coordinate;
function parseCoordinate(x:number, y:number): coordinate;
// unknown is any that you have to cast before using.#A safe any
// we use question mark to show optional in typescript
function parseCoordinate(arg1:unknown, arg2?:unknown): coordinate {
let coord:coordinate = {
    x:0,
    y:0,
};
if (typeof arg1 === 'object'){
    coord = {
        ...(arg1 as coordinate)
    }
    
}else {
coord = {
    x:arg1 as number,
    y:arg2 as number,
}
}
return coord;
}
console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({x: 10, y:20}))