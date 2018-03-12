
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



//	STRINGS
/* const firstName = 'William';
const lastName = 'Johnson';
const age = 36;

let val;

// concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;	//	William Johnson
//append
val = 'Ivan';
val += 'Evačić'	//	IvanEvačić
val = 'Hello, my name is ' + firstName + ' and i am ' + age;	//Hello, my name is William and i am 36
//escaping
val = 'That\'s awesome,I can\'t wait';	//	->'That's awesome,I can't wait'
//length
val = firstName.length;	// counts the numbers of elements in string,no need for ()
//concat method
val = firstName.concat(' ', lastName);//William Johnson
//to upper case
val = firstName.toUpperCase();//WILLIAM
//to lower case
val = firstName.toLowerCase();//william
	//array
val = firstName[0];	//access 1st letter in string
	//indexOf()->left to right
	val = firstName.indexOf('l');	//2->position index of first occurance of 'l' in firstName
	//lastIndexOf()->right to left
	val = firstName.lastIndexOf('l');//3->position index of first occurance of 'l' in firstName

	//charAt()
	val = firstName.charAt('2');//gives l->element that has index 2 starting from left
	//	get last char
	val = firstName.charAt(firstName.length -1);//length of firstName -1,minus the last char because we start from 0
	//	substrings
	val = firstName.substring(0, 4);//goes from index 0-3 and catches the values in that range->Will
	//	slice
	varl = firstName.slice(0,4);//Will
		
		const str = 'Hello there my name is Ivan';
		const tags = 'web design,web development,programming';
		//	splits string into array of chars
		val = str.split('');
		//	splits into array
		val = tags.split(',');

		//replace
		val = str.replace('Ivan', 'Jack');//inside the string,replace Ivan with Jack
		//includes
		val = str.includes('Hello');//	if there is occurance of 'Hello' in string,return true,else false
console.log(val); */

//	TEMPLATE LITERALS
/* const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'London';
let html;
	//without template strings
	html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li></li>Job: ' + job + ' </li><li>City: ' + city + '</li></ul>';

		//	with template strings
			//Alt + 7

		function hello() {
			return 'hello';
		}

		html = `
		<ul>
			<li>Name: ${name}</li>
			<li>Age: ${age}</li>
			<li>Job: ${job}</li>
			<li>City: ${city}</li>
			<li>${2 + 2}</li>
			<li>${hello()}</li>
			<li>${age >= 30 ? 'Over' : 'Under 30'}</li>
		</ul>
		`;
	//append let html value to index.html dynamically
	document.body.innerHTML = html;

 */

 //ARRAYS
		//define arrays
		/*  const numbers = [43, 56, 33, 23, 44, 36, 5];
		 const numbers2 = new Array(22, 45, 33, 76, 54);
		 const fruit = ['Apple', 'Bannana', 'Orange', 'Pear'];
		 const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];	

	let val;

	//get array length
	val = numbers.length;// 7
	//check if is array
	val = Array.isArray(numbers);	// true
	//get single value form array
	val = numbers[0];	//index position->gives 43,ARRAYS ARE ZERO BASED
	//insert to array
	numbers[2] = 100; 	//index position[2] now has value of 100
	//find index of value
	val = numbers.indexOf(36);//gives index position of that number 
 */
	//	MUTATING ARRAYS
		//add to the end of array
		/* numbers.push(250);
		//add to beginning of array
		numbers.unshift(129);
		//removes last element of array
		numbers.pop();
		//remove first element of array
		numbers.shift();

		//splice values
		numbers.splice(1, 3);
		//reverse array
		numbers.reverse();	
		//concatonate arrays
		val = numbers.concat(numbers2);
		//sort arrays of strings
		val = fruit.sort(); */
		// sort arrays of numbers
		/* val = numbers.sort();//sorts wrong
			// sorts as INTENDED,from LOWEST to HIGHEST
		val = numbers.sort(function(x, y){
			return x - y;
		});
			// sorts as INTENDED,from HIGHEST to LOWEST
		val = numbers.sort(function(x, y){
			return y - x;
		}); */

		//	FIND
			//finds first number under 50 in array
			/* 	function under50(num){
					return num < 50;
				}
				val = numbers.find(under50);
			//	over 50
			function over50(num){
				return num > 50;
			}
			val = numbers.find(over50);


	console.log(numbers);
	console.log(val); */

//OBJECT LITERALS

/* 		//	object definition
		const person = {
			firstName: 'Steve',
			lastName: 'Smith',
			age: 36,
			email: 'steve@aol.com',
			hobbies: ['music', 'sports'],
			adress: {
				city: 'Miami',
				state: 'FL'
			},
			getBirthYear: function(){
				return 2017	- this.age;	
			}

		}

let val;
//get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;//print whole array
val = person.hobbies[1];//gives element with index position[1]
val = person.adress.state;
val = person.getBirthYear();
console.log(val);

//	Array of objects
const people = [
	{name: 'John', age: 30},
	{name: 'Ivan', age: 21},
	{name: 'Ratko', age: 26}
];

//	Iterate trough array of objects
for(let i = 0;i < people.length;i++) {
	console.log(people[i]);	//get objects,	get only objects name->(people[i].name)
}
 */

 //	DATES AND TIMES

/* let val;

//Init date object
const today = new Date();//Mon Mar 12 2018 20:39:58 GMT+0100 (CET)
let birthday = new Date('9-10-1981');//Thu Sep 10 1981 00:00:00 GMT+0100 (CET)
birthday = new Date('September 10 1981');//Thu Sep 10 1981 00:00:00 GMT+0100 (CET)

val = birthday;
val = today.getMonth();//current month is march(3),returns 2->zero based[0][1][2->march]
val = today.getDate();//today's date
val = today.getDay();//Monday = 1,February = 2,...etc...
val = today.getFullYear();//2018
val = today.getHours();//20

birthday.setMonth(2);//	Tue Mar 10 1981 00:00:00 GMT+0100 (CET)
birthday.setDate(12);//	Thu Mar 12 1981 00:00:00 GMT+0100 (CET)
birthday.setHours(3);//	Thu Mar 12 1981 03:00:00 GMT+0100 (CET)
console.log(birthday);
console.log(val); */

//IF ,EQUAL

/* const id = 100;
//EQUAL TO VALUE AND TYPE
if(id === 100){
	console.log('CORRECT');//this
}	else {
	console.log('INCORRECT');
}
//NOT EQUAL TO VALUE AND TYPE
if(id !== 100){
	console.log('CORRECT');
}	else {
	console.log('INCORRECT');//this
} */
//

//GREATER OR LESS THEN
/* const id = 100;
if(id >= 200){
	console.log('correct');
}	else	{
	console.log('incorrect');
}

//else if
const color = 'yellow';
if(color === 'red'){
	console.log('Color is red');
}	else if(color === 'blue'){
	console.log('Color is blue');
}
else {
	console.log('Color is something else');
}

//TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');// if id===100,console.log correct,else incorrect

//WITHOUT BRACES
if(id === 100)
	console.log('CORRECT');
else
	console.log('INCORRECT'); */

//SWITCH
const color = 'red';
switch(color){
	case 'red':
		console.log('Color is red');
		break;
	case 'blue':
		console.log('Color is blue');
		break;
	case 'black':
		console.log('Color is black');
		break;
	default:
		//Nothing from above cases
		console.log('Color is something else');
		break;
}