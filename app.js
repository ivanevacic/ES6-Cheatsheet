/*
//	BASIC VARIABLES->VAR

 
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



//	BASIC VARIABLES->LET,CONST

//  We can REASSIGN values using LET
	 let name = 'John';
	console.log(name);
	name = 'Steve Smith';
	console.log(name);

	
		const numbers = [1,2,3,4,5];
		numbers = [1,2,3]
		->This is not possible,we can change arrays value,but not the const

//	CONST->We cant change value,WE MUST INITIALIZE IT WITH VALUE(CAN'T BE UNDEFINED)

//	DATA TYPES
 const name = 'Jonh Doe';
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
console.log(typeof today);

//	TYPE CONVERSION
 let val;

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


//	MATH
 const num1 = 100;
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

console.log(val);



//	STRINGS
 const firstName = 'William';
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
console.log(val);

//	TEMPLATE LITERALS
 const name = 'John';
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



 //ARRAYS
		//define arrays
		  const numbers = [43, 56, 33, 23, 44, 36, 5];
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

	//	MUTATING ARRAYS
		//add to the end of array
		 numbers.push(250);
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
		val = fruit.sort();
		// sort arrays of numbers
		 val = numbers.sort();//sorts wrong
			// sorts as INTENDED,from LOWEST to HIGHEST
		val = numbers.sort(function(x, y){
			return x - y;
		});
			// sorts as INTENDED,from HIGHEST to LOWEST
		val = numbers.sort(function(x, y){
			return y - x;
		});

		//	FIND
			//finds first number under 50 in array
			 	function under50(num){
					return num < 50;
				}
				val = numbers.find(under50);
			//	over 50
			function over50(num){
				return num > 50;
			}
			val = numbers.find(over50);


	console.log(numbers);
	console.log(val);

//OBJECT LITERALS

 		//	object definition
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


 //	DATES AND TIMES

 let val;

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
console.log(val);

//IF ,EQUAL

 const id = 100;
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
}
//

//GREATER OR LESS THEN
 const id = 100;
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
	console.log('INCORRECT');

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

//FUNCTION

//function definition
 function greet(firstName, lastName) {//(firstName = 'John', lastName = 'Doe')	->ES6 WAY
	//if there are no arguments when function is calles
		//default arguments are defined here
		//-> VANILLA WAY
	if(typeof firstName === 'undefined'){firstName = 'Ivan'}
	if(typeof lastName === 'undefined'){lastName = 'Evačić'}
	return `Hello ${firstName} ${lastName}`;
}

//function call
console.log(greet());//greet('Ivan', 'Evačić)

//function expressions
const square = function (x = 3) {//x = 3 is default if no argument is given when calling function
	return x*x;
};

console.log(square());//9
 
///IMMIDIATLEY INVOKABLE FUNCTION EPXRESSIONS -IIFEs

	//FUNCTION WE DECLARE AND RUN  IN THE SAME TIME

	//Used in module pattern
 	(function(){
		console.log('IIFE ran..');
	})();
	(function(name){
		console.log(`Hello ${name}`);
	})('Brad');

	//functions inside objects
	const todo = {
		add: function(){
			console.log('Add todo..');
		},
		edit: function(id){
			console.log(`Edit todo with id ${id}`)
		}
	}
	//object functions can be declared outside object
	todo.delete = function(){
		console.log('Delete todo....');
	}

	//call object function
	todo.add();
	todo.edit(2012);
	todo.delete();
 

 //LOOPS AND ITERATIONS
	//FOR LOOP
	for(let i = 0;i < 11;i++){
		//console.log(i); 0-10
		if(i === 2){
			console.log(`${i} is my favourite number`);//	2 is my favourite number
			continue;
		}
		if(i === 5){
			break;//loop stops when i is 5
		}
		console.log(i);
	} 

	//WHILE LOOP
	 let i = 0;

	while(i < 10){
		console.log(`Number: ${i}`);
		i++;
	}
 
	//DO WHILE
		//this is gonna run even this condition first is not true
		//ALWAYS GONNA RUN ONCE
		 let i = 0;
		do {
			console.log('Number ' + i);
			i++;
		} while(i < 10);
 

//LOOP TROUGH ARRAY
 const cars = ['Ford', 'Chevy', 'Honda'];

for(let i = 0; i < cars.length;i++){
	console.log(cars[i]);
}

//FOREACH
cars.forEach(function(car, index, array){	//(car) is iterator
	console.log(`${index} : ${car}`);//ford,chevy,honda
	console.log(array);
});

//MAP
const users = [
	{id:1, name:'John'},
	{id:2, name:'Karen'},
	{id:3, name:'Tommy'}
];
const ids = users.map(function(user){
	//	returns id of every object in 'users'
	return user.id;
});
console.log(ids);

//FOR IN LOOP

const user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 40
}

for(let x in user){
	//console.log(x);	//gives keys(firstName,lastName,age)
	console.log(`${x} : ${user[x]}`);
		
			firstName: 'John',
			lastName: 'Doe',
			age: 40
}
 

 //WINDOWS METHODS/OBJECTS/PROPERTIES
	///window.console.log(123);

	//alert
	///alert('Hello World!');

	//prompt
	 const input = prompt();
	alert(input);

	//confirm
	 if(confirm('Are you sure')){
		console.log('yes');
	}	else{
		console.log('no');
	} 

	 let val;

	//outher window height and width
	val = window.outerHeight;
	val = window.outerWidth;
	//inner window height and width
	val = window.innerHeight;
	val = window.innerWidth;

	//scroll points
	val = window.scrollY;
	val = window.scrollX;

	//	location object

	val = window.location;
	
		Location {replace: ƒ, assign: ƒ, href: "http://127.0.0.1:5500/index.html",
		ancestorOrigins: DOMStringList, 
		origin: "http://127.0.0.1:5500", …}
	
	val = window.location.hostname;//127.0.0.1
	val = window.location.port;//5500

	 //redirect
	window.location.href = 'http://google.com';	//redirects to google.com
	//reload
	window.location.reload();	//constantly reload 


	//history object
	///window.history.go(-1);	//brings us back whereever we came from (1st link backwards)

	val = window.history.length;//5->number of pages we went before we came here

	//navigator object
	val = window.navigator;
	
		Navigator {vendorSub: "", productSub: "20030107", 
		vendor: "Google Inc.", maxTouchPoints: 0, 
		hardwareConcurrency: 4, …}
		->see console
	
	val = window.navigator.appName;//netscape
	val = window.navigator.appVersion;//5.0 (X11; Linux x86_64) 
																		 AppleWebKit/537.36 (KHTML, like Gecko)
																		Ubuntu 
																		Chromium/64.0.3282.167 
																		Chrome/64.0.3282.167 
																		Safari/537.36

	val = window.navigator.language;//en-US
	
	console.log(val)


//GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;

function test(){
		var a = 4;
		let b = 5;
		const c = 6;
			console.log('Function scope: ', a, b, c);	// 4 5 6
}
test();

//BLOCK LEVEL SCOPE
if(true) {
	//block scope
		var a = 7;
		let b = 8;
		const c = 9;
			console.log('If scope: ', a, b, c);	// 7 8 9
}

for(let a = 0;a < 10; a++) {
	console.log(`Loop: ${a}`);// 0-9 values here,but in global scope stays 7
}

console.log('Global scope: ', a, b, c);//	7 2 3
	// let and cost stayed the same(2 3),var changed from 1 to 7



//	OOP JAVASCRIPT

//	Person constructor
function Person(name, dob) {
	//this.name = 'Brad';//hard code name
	this.name = name;
	 this.age = age;
	//by instiating object console.log is called
	console.log(this); 
	this.birthday = new Date(dob);
	console.log(this);

	//	method
	//calculate age from date of birth
	this.getAge = function(){
		//	calculate difference
		const diff = Date.now() - this.birthday.getTime();
		//	gnerate date based on new Date format
		const ageDate = new Date(diff);
		//	get full year of birth
		return Math.abs(ageDate.getUTCFullYear() - 1970);//calculate age from birthday(unix standard)
	}
}
//call it like this outside of constructor
	//	it gives us Window Object
		console.log(this);

//	instatiate and object
const brad = new Person('Brad', '9-10-1996');
const john = new Person('John', '9-10-1989');
console.log(brad.getAge());	//21


	//BUILT IN CONSTRUCTORS

const name1 = 'Jeff';
const name2 = new String('Jeff');
	//Possible to add data like this
	  name2.foo = 'bar';
console.log(name1);
console.log(name2);	//	Gets string as object
console.log(typeof name1);	//string
console.log(typeof name2);	//object

if(name2 === 'Jeff'){
	console.log('yes');	//	would print yes if there is ==(checks only value,not type)
}	else {
	console.log('No');//prints no because name2 is objects,=== checks if type is thesame,it isnt

}


//	PROTOTYPES

function Person(firstName, lastName, dob) {
	//this.name = 'Brad';//hard code name
	this.firstName = firstName;
	 this.lastName = lastName;
	//by instiating object console.log is called
	 
	this.birthday = new Date(dob);
	
	//	method
	//calculate age from date of birth
	 this.calculateAge = function(){
		//	calculate difference
		const diff = Date.now() - this.birthday.getTime();
		//	gnerate date based on new Date format
		const ageDate = new Date(diff);
		//	get full year of birth
		return Math.abs(ageDate.getUTCFullYear() - 1970);//calculate age from birthday(unix standard)
	}
	console.log(this); 
}

//we can define our class functions here se we don't flood class with them
//calculate age prototype
Person.prototype.calculateAge = function(){
	//	calculate difference
	const diff = Date.now() - this.birthday.getTime();
	//	gnerate date based on new Date format
	const ageDate = new Date(diff);
	//	get full year of birth
	return Math.abs(ageDate.getUTCFullYear() - 1970);//calculate age from birthday(unix standard)
	console.log(this);

	//	THERE IS NO CALCULATE AGE FUNCTION IN CONSOLE.LOG FROM OBJECT FUNCTION
}

//get full name
Person.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
}
//get married
Person.prototype.getsMarried = function(newLastName){
	this.lastName = newLastName;
}

//instantiate new person
const john = new Person('John', 'Wick', '3-21-1996');
const mary = new Person('Mary', 'Johnson', '6-6-1956');
console.log(john.calculateAge());	//21
console.log(john.getFullName());	//john wick
john.getsMarried('Test');
console.log(john.getFullName());	//john test





//	PROTOTYPAL INHERITANCE

//person constructor
function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

//greeting proto method
Person.prototype.greeting = function(){
	return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());	//Hello there John Doe


//customer construction
function Customer(firstName, lastName, phone, membership){
	//we call person function	and 'inherit' values inside call();
	Person.call(this, firstName, lastName);
	this.phone = phone;
	this.membership = membership;
}
//inherit the Person proto function
Customer.prototype = Object.create(Person.prototype);
//make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-666', 'Standard');//Customer {firstName: "Tom", lastName: "Smith", phone: "555-666", membership: "Standard"}
console.log(customer1.greeting());//Hello there Tom Smith
//customer greeting
Customer.prototype.greeting = function(){
	return `Hello there ${this.firstName} ${this.lastName},Welcome to our Company`;
}
console.log(customer1.greeting());//Hello there Tom Smith,Welcome to our Company


//OBJECT.CREATE

const personPrototypes = {
	greeting: function(){
		return `Hello there ${this.firstName} ${this.lastName}`;
	},
	getsMarried: function(newLastName){
		this.lastName = newLastName;
	}
}

const mary = Object.create(personPrototypes);//it will take in prototypes
//add properties
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);//{firstName: "Mary", lastName: "Williams", age: 30}
mary.getsMarried('Thompson');
console.log(mary.greeting());//Hello there Mary Thompson

//	alternative syntax for adding properties
const brad = Object.create(personPrototypes, {
	firstName: {value: 'Brad'},
	lastName: {value:'Zukov'},
	age: {value: 30}
});

console.log(brad);//{firstName: "Brad", lastName: "Zukov", age: 30}
console.log(brad.greeting());//Hello there Brad Zukov


//	ES6 CLASSES

//define class
class Person {
	constructor(firstName, lastName, dob){
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}
	greeting(){
		return `Hello there ${this.firstName} ${this.lastName}`
	}
	calculateAge(){
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	getsMarried(newLastName){
		this.lastName = newLastName;
	}
	//static methods->we can call the without instiating object
	static addNumbers(x, y) {
		return x + y;
	}

}

//create class object
const mary = new Person('Mary', 'Johnson', '11-13-1980');
console.log(mary);//Person {firstName: "Mary", lastName: "Johnson"}
console.log(mary.greeting());//Hello there Mary Johnson
console.log(mary.calculateAge());//37
mary.getsMarried('Test');
console.log(mary);//Person {firstName: "Mary", lastName: "Test"

//static methods testing
//console.log(mary.addNumbers(1, 3));///Uncaught TypeError: mary.addNumbers is not a function
console.log(Person.addNumbers(1, 3));//4


//INHERITANCE

class Person {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	greeting(){
		return `Hello there ${this.firstName} ${this.lastName}`;
	}
}
//extend person class 
class Customer extends Person {
	constructor(firstName, lastName, phone, membership){
		//call person(parent class) constructor
		super(firstName, lastName);
		///everything not in person class,but we want it here
		this.phone = phone;
		this.membership = membership;
	}
	static getMembershipCost() {
		return 500;
	}
}

//instatiate new customer
const john = new Customer('Ivan', 'Evačić', '555-666', 'Premium');
console.log(john);//Customer {firstName: "Ivan", lastName: "Evačić", phone: "555-666", membership: "Premium"}
//call greeting method
console.log(john.greeting());//Hello there Ivan Evačić
			//Person.getMembershipCost wont work,because its Customer's function,Person cannot access it
console.log(Customer.getMembershipCost());//500



//TRY CATCH



	//USING TRY/CATCH WE CAN HANDLE ERRORS WITHOUT STOPING THE ENTIRE SCRIPT
		try {
			//produces reference error(myFunction is not defined)
			//myFunction();
			//produce type error
			null.myFunction();
				//catch returns TypeError
		} catch(e) {	//Catch error
			//ERROR MESSAGE TYPES
				console.log(e);	//ReferenceError: myFunction is not defined
				console.log(e.message);//myFunction is not defined
				console.log(e.name);//ReferenceError
				console.log(e instanceof ReferenceError); //true	//check if error type if reference error(it is => return true);
		} finally {
			//Runs regardless of try/catch
				//THIS WILL ALWAYS RUN
					console.log('Finally runs!');
		}

console.log('Program continues');




//ITERATORS AND GENERATORS

		//iterators->advanced loops that cna be paused
		//generators->functions that can be paused and return multiple values


//iterator example

function nameIterator(names) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < names.length ?
				{value: names[nextIndex++], done: false} :
				{done: true}
		}
	}
}

//create array of names
const namesArr = ['Ivan', 'Jack', 'Rob'];
//init iterator and pass in the namesArr
const names = nameIterator(namesArr);
console.log(names.next());//Ivan,done:false
console.log(names.next());//Jack,done:false
console.log(names.next());//Rob,done:false
console.log(names.next());//done: true


//generators example

//generator function syntax
function* sayNames() {
	yield 'Jack';
	yield 'Jill';
	yield 'John';
}

const name = sayNames();
console.log(name.next());//{value: "Jack", done: false}

*/

//id creator

function* createIDs() {
	let index = 0;

	while(true) {
		yield index++;
	}

}

const gen = createIDs();
console.log(gen.next().value);//0
console.log(gen.next().value);//1
console.log(gen.next().value);//2
console.log(gen.next().value);//3
console.log(gen.next().value);//4
console.log(gen.next().value);//5
console.log(gen.next().value);//6



