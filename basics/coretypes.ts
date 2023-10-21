//// OBJECT TYPES
// not required to define the object as below
// const person: { name: string; age: number } = {
//   name: "Sirisha",
//   age: 27,
// };

const person = {
  name: "Sirisha",
  age: 27,
};
console.log(person.name);

//// ARRAY TYPES
const person1 = {
  name: "Sirisha",
  age: 27,
  hobbies: ["travelling", "movies"],
};

for (const hobby of person1.hobbies) {
  console.log(hobby.toUpperCase()); // identifies as string
  // console.log(hobby.match())//throws error here hobby is identified as string here
}

//TUPLE type
const person2: { role: [number, string] } = {
  role: [2, "author"], // tuple
};
person2.role.push("admin"); // push method error is not caught TS.

//ENUM type - human readable and mapped value
enum Role {
  ADMIN = 6,
  READ_ONLY, // read_only will be assigned 7,
  AUTHOR = "AUTHOR",
}

const person3 = {
  role: Role.ADMIN, // tuple
};

//ANY type - better to avoid
