//function inside calling a function called callback function
const calc = () => {
	return 4 * 4;
}

const printCalc = (callback) => {
	console.log(callback());
}

printCalc(calc);