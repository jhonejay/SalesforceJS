// Normal Export
export const PI = 3.14

export function add(a,b)
{
    console.log(a+b)
}

//export together
const PI1 = 3.14

function add1(a,b)
{
    console.log(a+b)
}
export {PI1,add1}


//export with alias
const PI_DATA = 3.14

function add2(a,b)
{
    console.log(a+b)
}
export {PI_DATA as PI2,add2}


//export with default
export function minus(a,b){
    console.log(a-b)
}

