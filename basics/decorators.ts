// Decorators are suitable for meta programming

// Decorator executes when class is defined not instantiated , it excutes when it comes across the constructor

function WithTemplate(template:string, hookId:string){
    console.log('template factory');
    return function(_:Function){
        const hookElem = document.getElementById(hookId);
       // const p= new constructor();
        if(hookElem){
            hookElem.innerHTML=template;
            console.log('elemet',hookElem);
            //hookElem.querySelector('h1')!.textContent= p.name;
        }
    
    }
}

@WithTemplate('<h1>Welcome</h1>','app')
class Person{
    name='Decorator';

    constructor(){
        console.log('Person constructor');
    }
}

//multiple decorators can be added, they are executed in the order they are specified.