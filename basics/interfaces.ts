//interfaces are like objects with properties and methods
interface Profile {
  readonly name: string;
}

// using interface for defining the structure
const user1: Profile = { name: "Sirisha" };

//class implements interface, it has to implement all the properties and methods. Additional ones can also added.
class Person implements Profile {
  name: string;
  age = 30;
  constructor(personName: string) {
    this.name = personName;
  }
}
//--------------------------
//inheritance can also be implemented for interface
interface Drink {
  name?: string;
  color?: string;
}

interface Soda extends Drink {
  isaerated: boolean;
}

interface Juice extends Drink {
  fruit: string;
}

//here as the class implements Soda which extends Drink - the properties of both classes have to be implemented in the class
class Beverage implements Soda {
  name?: string;
  color?: string;
  isaerated: boolean;

  constructor(hasgas: boolean) {
    this.isaerated = hasgas;
  }
}

//---------------------------

// Interfaces can also be used as function types , this is special way to define instead of Function type

interface sumFn {
  (a: number, b: number): number; //defining anonymous function
}

let addTwo: sumFn = (n1: number, n2: number) => n1 + n2;

////////////////// IMPORTANT NOTE
// No interfaces in JS, only TS has concept of interfaces for defining better structures.
//When TS is compiled to JS there is no interface keyword.
