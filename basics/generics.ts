// There is no translation of Generics in Vanilla JS.

const names: Array<string>=[];  // const names: string[]= [];

//generic promise

const promise:Promise<number>=new Promise((resolve, reject)=>{  // indicating the type returned by Promise here as number, this helps TS to check 
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

// generic function

function merge<T>(objA:T){ // by mentioning U , T it indicates TS these are unknown and understands its interection of the T,U.
    return objA;
}

const result = merge({color:'red'});
console.log(result.color);



function merge1<T extends object,U>(objC:T,objD:U){  // T extends object - indicates the constraint 
    return objD;
}

const result1 = merge1({color:'red'},{name:'Test'});
console.log(result1.name);

//another generic function 

interface Lengthy{
    length:number
}


//using the below generic function any input like string, array can be passed to T without overloading multiple funcs
function countAndDescribe<T extends Lengthy>(element:T){
    if(element.length ===1){
        console.log('Got 0 element of length'+ element.length+'characters');
    }else if(element.length > 1){
        console.log('Got array of '+ element.length+'elements');
    }
}

countAndDescribe(['string1','str2']);

//key of property to tell that the property exists in the object

//Generic class
// the below class can be used for strings, number, object etc...
class DataStore<T extends number | string | boolean>{
  
  private data:T[]=[];

 addItem(item:T){
     this.data.push(item);
  }

  getItems(){
    return [...this.data];
  }
}

const textStore = new DataStore<string>();
textStore.addItem('Str1');
console.log(textStore.getItems());

//-------------------------------------

// Generic utility types - Partial type where all the properties are optional 
//Partial, Readonly


//Union types allow to use either of the mentioned types
// Generic types lock in a particular type
