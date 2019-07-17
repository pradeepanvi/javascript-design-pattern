//a code that can be use multiple files and multiple times called module.

//create a file calc.js 
const calc = () => {
	return 4 * 3;
}

export default calc;

//import this function to another file
import calc from './calc';

const aNumber = calc();
console.log(`Showing number ${aNumber}`);