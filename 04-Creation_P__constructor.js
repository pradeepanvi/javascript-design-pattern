//constructor can be use always
class Car {
	constructor(doors, engine, color){
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

class Suv extends Car {
	constructor(doors, engine, color){
		//super keyword will call all the arguments from extends class
		super(doors, engine, color);
		//wheel this is extra property calling itself here
		this.wheels = 4;
	}
}

const civic = new Car(4, 'V6', 'green');
const cx5 = new Suv(4, 'V8', 'red');

console.log(civic);
console.log(cx5);