function addNumbers(a:number, b:number) {
    return a + b;
}
export default addNumbers;
export const addStrings = (str1: string, str2:string) => {
    `${str1} ${str2}`
}

export const format = (title: string, param: string | number): string => `${title} ${param}`;

export const printFormat = (title: string, param: string | number):void => {
    console.log(format(title,param))
}

export const fetchData = (url:string): Promise <string> =>Promise.resolve(`Data from ${url}`)

function intro (salutation: string, ...names:string[]): string {
return `${salutation} ${names.join(' ')}`
}

// typescript enforces type at compile time not at runtime
export function getName (user: {first:string; last:string;}):string
{
return `${user.first} ${user.last}`
}