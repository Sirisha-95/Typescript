function add(n1: number, n2: number) {
  //TS automatically infers the type as number
  return n1 + n2;
}

let somevalue: undefined; // is a type in TS

//void
function printResult(): void {
  console.log("Void type");
}

//function as types

let combine: Function;

//functions and callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const value = cb(result);
  console.log(value);
}
//TS knows that the sum is a number without explicitly defining it as number - sum:number
addAndHandle(10, 20, (sum) => {
  console.log(sum);
  return sum; // here although the return type is void, TS doesnt force to not return anything - it means anything that is returned will not be used in addAndHandle func
});
