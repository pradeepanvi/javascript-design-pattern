//create more than one instance called singleton
let instance = null;
class Car {
	constructor(doors, engine, color){
		if(!instance){
			this.doors = doors;
			this.engine = engine;
			this.color = color;
			instance = this;
		} else {
			return instance;
		}
	}
}

const civic = new Car(4, 'V6', 'green');
const honda = new Car(4, 'V8', 'red');

console.log(civic);
console.log(honda);