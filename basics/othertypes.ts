//union types , here using | we define multiple types for an input

function display(ip1: number | string, ip2: number | string) {
  console.log(ip1, ip2);
}

display("hello", 1);

//---------------------------------
//literal types
function display1(
  ip1: number | string,
  ip2: number | string,
  resultType: "as-number" | "as-text" //literal type
) {
  console.log(ip1, ip2);
  // if (resultType === "as-number-df") {
  // to make sure the entered text is the one of the text defined
  if (resultType === "as-number") {
    console.log(+ip2); // to convert string to number
  }
}

display1("hello", 1, "as-number");

//--------------------------------------------
//TYPE ALIASES / CUSTOM TYPES

type Combine = number | string; //custom type
type CombineDescriptor = "as-number" | "as-text";

function display2(
  ip1: Combine,
  ip2: Combine,
  resultType: CombineDescriptor //literal type
) {
  console.log(ip1, ip2);
  // if (resultType === "as-number-df") {
  // to make sure the entered text is the one of the text defined
  if (resultType === "as-number") {
    console.log(+ip2); // to convert string to number
  }
}

display2("hello", 1, "as-number");

type User = { name: string; age: number };

const u1: User = { name: "siri", age: 27 };

//--------------------------
//UNKNOWN - check the current that is stored in the variable
let userInput: unknown;
userInput = 5;
userInput = "Siri";

let name1: string;
if (typeof userInput === "string") name1 = userInput; //unknow type is more restrictive compared to any type
//In the above case defining userInput:any and not checking the type will not throw compilation error ;

//------------------------
//NEVER type
// example of utility func

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured", 500);
console.log(result); // nothing is returned not even undefined.
// the throw will abrupt the script and will not execute further and doesnt return anything

//----------------------------
