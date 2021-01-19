import './style.scss';


class Vehicle{
    name: string;
    /*van be waater, groun, air */
    type: string;
    
    constructor(name: string){
        
        this.name=name;
    }
    move(from: number, to: number): string{
        return `This vehicle is moving from ${from} to ${to}`
    }


}

class GroundVehicle extends Vehicle{
    type: string="ground";
    wheels: number=0;
    constructor (name: string, wheels: number){
        super(name); 
        this.wheels=wheels;
    }
}

class Lorry extends GroundVehicle{
    capacity: number;
    constructor(name: string, wheels: number, capacity: number){
        super(name, wheels);
        this.capacity=capacity;
    }
}


let truck=new Vehicle("ize");
let lorry=new Lorry("ize", 3, 4);
console.log(truck.move(1, 2 ));
console.table(lorry);

