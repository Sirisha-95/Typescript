
// INDEX property - to define flexible properties , use case - error handling 
interface ErrorContainer{
    [prop: string]:string // define flexible property types and value
}

const emailError: ErrorContainer={
    email:'Not a valid email id'
}

//Nullish coalescing
const nulldata=undefined; // null or undefined

const defaultVal= nulldata ??  'DEFAULT'; // when null data is undefined or null , it returns default 



//---------------------------
// Type guards
 
class Car{
    drive(){
        console.log('Car class');

    }
}

class Truck{
    drive(){
        console.log('Truck class');
    }

    loadCargo(){
        console.log('loading');
    }
}


type Vehicle = Car | Truck;

function useVehicle(vehicle:Vehicle){
    if(vehicle instanceOf Truck ){  // another way is if('loadCargo' in vehicle)
          vehicle.loadCargo();
    }
}



