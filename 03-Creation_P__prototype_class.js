//class is new before that we used prototype
class Car {
	constructor(doors, engine, color){
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

const civic = new Car(4, 'V6', 'green');

console.log(civic);