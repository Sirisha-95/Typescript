//union types , here using | we define multiple types for an input

function display(ip1: number | string, ip2: number | string) {
  console.log(ip1, ip2);
}

display("hello", 1);

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
