
//	BASIC VARIABLES->VAR

/* 
//  We can REASSIGN values using var and let
    var name = 'John Doe';
    console.log(name);
    name = 'Steven Smith';
    console.log(name);


    var greeting; //    Setting it to undefined
    console.log(greeting);
    greeting = 'Hello';
    console.log(greeting);  //  Give value to the 'greeting'

//  var can only have letters, numbers, _, $
//  name of var can't start with number

//  multi word vars
	var firstName = 'John'; //  camel case naming of var
	var first_name = 'Jonh';    //  underscore naming of var
	var FirstName = 'John'; //  pascal case

 */

//	BASIC VARIABLES->LET,CONST

//  We can REASSIGN values using LET
	/* let name = 'John';
	console.log(name);
	name = 'Steve Smith';
	console.log(name); */

	/*
		const numbers = [1,2,3,4,5];
		numbers = [1,2,3]
		->This is not possible,we can change arrays value,but not the const
	*/
//	CONST->We cant change value,WE MUST INITIALIZE IT WITH VALUE(CAN'T BE UNDEFINED)

//	DATA TYPES
/* const name = 'Jonh Doe';
console.log(typeof name);	//	string

const age = 45;
console.log(typeof age);	// number

const hasKids = true;
console.log(typeof hasKids);	// boolean

const car = null;
console.log(typeof car);	// object->google 'typeof null is object'
	//	let because if we don't define const we get error
let test;
console.log(typeof test);	//	undefined

const sym = Symbol();
console.log(typeof sym);	//	symbol

//	REFERENCE TYPES
	//	they will all come back as objects
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const adress = {
	city: 'Koprivnica',
	state: 'Croatia'
}
console.log(typeof adress);

const today = new Date();
console.log(today),
console.log(typeof today); */

//	TYPE CONVERSION
/* let val;

	//number to string
		val = 5;
		val = String(555);	// convert int 5 to string 5,String(1)->length is 1,String(5)->length is 5
		val = String(4+4);

	//bool to string
	val = String(true);

	//date to string
	val = String(new Date());

	//array to string
	val = String([1,2,34]);

	// toString method
	val = (5).toString();
	val = (true).toString();

	//strings to numbers
	val = Number('5');
	//boolean to number
	val = Number(true);	// gives us 1
	val = Number(false);	//gives us zero
	val = Number(null);	//gives us zero
	val = Number('Hello');	//gives us NaN->not a number,we can't parse string value like that in a number
	val = Number([1,2,3]);	//gives us NaN
			//parse Int
			val = parseInt('199');	// we pass 199 as a string,we get it as a number
			val = parseFloat('130.50');	// we get 131->use toFixed(2) to give 130.50



	//	output
	console.log(val);
	console.log(typeof val);
	console.log(val.length);	//	length only works on strings	-> gives us undefined if we use it on number
	console.log(val.toFixed());	// toFixed only works on numbers,allows to specify decimals,(2) to have 2 decimals,() to have no decimals


 const val1 = String(5);
 const val2 = 6;
 const sum = Number(val1 + val2);	// gives sum as a number
 console.log(sum);	//	11,	if val1 = String(5)--> sum = 56 concatonated 5 and 6
 console.log(typeof sum);	// number,	if val1 = String(5)--> typeof = string

*/

//	MATH
/* const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

	//MATH OBJECT
		
			val = Math.PI;	// gives us PI valeu
			val = Math.E;	//Eulers number

			//round number
			val = Math.round(2.8);	// rounds to 3
			val = Math.round(2.4);	// rounds to 2
			val = Math.ceil(2.4);	//higher round->rounds to 3
			val = Math.floor(2.8);	//lower rounds->rounds to 2
			val = Math.sqrt(64);	//square of 64=8*8(korijen)
			val = Math.abs(3)	//gives absolute number (-3) = 3,3 = 3
			val = Math.pow(8,2);	//	8*8(8 na drugu),pow(8,3)= 8*8*8 = 512
			val = Math.min(2,33,4,1,55,6,3);	//	return smallest value(1)
			val = Math.max(2,33,4,1,55,6,3);	// returns biggest value(55)
			val = Math.random();	//return random FLOAT number
			val = Math.random()	* 20 + 1;	// gives random FLOAT number between 0 and 20
																		//	*	20 + 1 gives random FLOAT Number between 1 and 20
			val = Math.floor(Math.random() * 20 + 1);	//	gives random INT number between 1 and 20

console.log(val); */





