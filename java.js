// var Name= "Dayo owns";
// var Car= "BMW";
// var food="and he also likes to eat rice"
// console.log(Name, Car, food);

// let animal="Ram"
// animal="Dog"

// //const pi= 3.142

// var Name= "Dayo";
// var food= "rice";
// var movies="Batman"
// console.log(' My name is ' + Name + ' and I like to eat ' + food + ' and to watch ' + movies);

// var number1= 12

// var number2= 3

// console .log(number1 / number2);

// var age= 12

// console.log(typeof(age))

// // Data types
// //String
// //number
// //BigInteger
// //Boolean
// //undefined
// //null
// //object
// //symbol

// //string
// var school= 'Appclick'

// //Biginteger
// var km = 12222222222
// var is_online= true

// //number
// var age = 22
// console.log(typeof(age));

// var laptop
// console.log(typeof (laptop));

// //null
// var electronics= null
// console.log(typeof (electronics))

// //array
// //var listofballers = ["Dele Alli", 5, true ()]

// //objects
// var user= {
//     name:'Dayo',
//     gender:'Male'
// }

// var brand= Symbol()
// console.log (typeof (brand));

// var todaysDate = new Date()
// console.log(todaysDate. getDate());


// //comparison operators
// //== (Checks for value)
// //!= (inverse of ==)
// //=== (checks for both value and data type)
// //>
// //<
// //<=
// //>

// var num1= 5
// var num2= 5
// console.log(num1 === num2);

// var score= 200
// var age= 16

// console.log (score >= 200 && age >=14)


// var age= 18
// var drivers_licence= true
// console.log (drivers_licence>=true && age >=18)


// //Indexof
// var school= 'appclickade'
// console.log(school.lastIndexOf('p'));

// //match method
// console.log (school.match('ade'));
// console.log(school.matchAll('ade'));
// console.log(school.includes('ade'));


// // alert ('Hello word!!')
// // prompt ('kindly input your name')


// //Number methods
// var age= 16.5
// var newAge= age. toString()
// console.log(typeof(newAge));

// console.log (age. toExponential());
// console.log (age. toFixed());
// console.log (age. valueOf());
// console.log (age. toPrecision(5));

// console.log (Math.PI);

// let speed= 240.9
// console.log(Math.floor(speed));

// console.log (Math.floor(Math.random() * 100));

// var pi= Math.PI
// var radius= 2
// console.log(pi * radius**2);


// //arrays

// var countries= ['Poland', 'Fiji', 'Canada' ]

// console.log(countries.length);
// console.log(countries[0]);

// var Bagpack =[]

// //append to the end of an array
// Bagpack.push('water bottle', 'spoon')
// console.log(Bagpack);

// //adds an items to the begining of an array
// Bagpack.unshift('Book')
// console.log(Bagpack);

// //remove from the end
// Bagpack.pop()
// console.log(Bagpack);
// Bagpack.shift()
// console.log(Bagpack);  


// const s= 'tech, computer, science';
// console.log(s.split(', '));

// console.log(Array.isArray(s));
// console.log(s.indexOf('tech'));

// // const y= 12;
// // if(y>11) {
// //     console.log ('y is more than 11');
// // }

// // const x= 12;
// // if(x>11) {
// //     console.log ('x is more than 11');
// // }

// const x= 10;
// const color= x > 11 ? 'red' : 'blue';

// //function

// function addNum(num1=1, num2=1) {
//     console.log (num1 + num2)
    
// }
// addNum();

// //constructor function
//  class person {
//     constructor(firstName, lastName, dob) {


//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// //instatiate objects

// const person1= new person ('Dayo', 'Ola', '4-12-2000');
// console.log(person1. getFullName());  

// // var passkey= prompt ('kindly input password !')
// // var OriginalPassword= 'appclick'
// // if(passkey== OriginalPassword){
// //     alert('password is correct')
// // }
// // else{
// //     alert('password is incorrect');
// // }

// //an admission validation
// // var Jambscore = prompt ('enter your jambscore')
// // var age= prompt ('kindly input your age')

// // if(Jambscore>=200 && age>=16){
// //     alert('You are eligible')

// // }
// // else if (age>=16 || Jambscore>=180){
// //     alert('you are not eligible but you can visit a private school')
// // }
// // else{
// //     alert('you are not eligible')
// // }

// // var password= prompt('enter your password')


// //  if (password.length <=8){
// //     alert('password should not be less than 8 xxx')
// //  }
// //  else if(!password.includes('@')){
// //     alert('password must have @ sign')
// //  }
// //  else{
// //     alert('password is correct!')
// //  }
 
// //  var number= prompt('enter your number')

// //  if (number>0){
// //     alert('number is positive')
// // }
// // else if (number<0){
// //     alert('number is negative')
// // }
// // else if (number == 0){
// //     alert('number is zero')
// // }
// // else {
// //     alert('This is not a number')
// // }


// //Switch Operator  

// var DayOfWeek = new Date

// switch (DayOfWeek.getDay()) {
//     case 3:
//     console.log('today is wednesday stay sharp');
//     break;
//     case 5:
//     console.log('today is friday stay strong');
//     break;
//     case 1:
//     console.log('today is Monday stay wicked');
//     break;
//     case 0:
//     console.log('today is Sunday stay wicked');
//     break;
// }

// // var number = prompt('enter your number')
// // console.log(Math.random(Math.floor)*10);

// // var RandomNumber= Math.round(Math.random() * 10);
// // var UserInput= prompt ('kindly enter a number from 0-10');

// // if(RandomNumber==UserInput){
// //     // alert(` computer picked ${RandomNumber} Congratulations number matched  `)
// //     alert ("computer picked" + RandomNumber + "Congratulations number matched")  
// // }
// // else{
// //     alert(` Computer picked ${RandomNumber} Try again You lost  `)
// // }

// //Loops
// //For loop (Loops through a block of code in number of times)
// //While loop  (Infinix loop)
// //Do-while loop

// // for (let number = 0; number <= 10; number+2) {
// //    console.log(number);
    
// // }

// for(let num= 1700; num <=3600; num++){
//     if (num % 5==0 && num % 7==0) {
//         console.log(num);
        
//     }
// }

// //FUNCTION (block of code that runs anytime you call it)

// //name function
// function printText() {
//     console.log('hello world');
    
// }

// //anon function
// let bella = function(){
//     console.log('hello from dayo');
// }

// //arroww function
// const Ajoke = () => {
//     console.log('hello world from dayo');
// }

// bella()
// bella()
// bella()
// printText()
// Ajoke()

// const greet =(name)=>{
// console.log(' good morning ' + name);
// }
// greet ('stanley')
// greet ('musa')

// function square( number) {
//     return(
//         `the square of ${number} is: ${number**2}`
//     )
// }
// console.log(square(38));

// function convert( dollar) {
//     return(
//         dollar * 1500
//     )
// }
// console.log(convert(10));

// function convert( degree) {
//     return(
//         (degree * 9/5) +32
//     )
// }
// console.log(convert(1));

// function agecalculator(year){
//     var currentYear = new Date().getFullYear()
    
//     return(
//         currentYear - year
//     )
// }

// console.log(agecalculator(2000));


// function capitalize(string) {
//         return(
//             string.toUpperCase()
//             )  
// }
// console.log(capitalize('girl'));


// //MAP AND FILTER METHODS IN ARRAYS

// var numbers = [1,2,3,4,5,6,7,,8,9,10]

// for(num1 in numbers){
//     console.log(num1 * 2);
// }

// var emails = ['ayo@gmail.com', 'dayo@mail.com']

// for(mail in emails){
// console.log(`${emails[mail]} hello how are you`);
// }


// //map all even numbers

// var newnumbers = [2,3,4,5,6]

// var newnum = newnumbers.map((ade) => {
//     return (
//         ade * 2
//     )
// })

// console.log(newnum);

// //filter

// var filterevennumber = newnumbers.filter((num) => {
//     return(
//         num % 2 == 0
//     )
// })

// console.log(filterevennumber);

// //search filter
// const foodItems = ['amala', 'rice', 'eba', 'egg', 'eggsauce', 'egg plant']
// const search = 'egg';
// const filteredString = foodItems.filter(food => food.includes(search))
// console.log(filteredString);


// //DOM MANIPULATION
// var joke = document.querySelector(' .dayoo')
// console.log(joke);

// // var BTN = document.querySelector('.btn')
// // BTN.addEventListener('click', function () {
// // alert ('button clicked!!!')
// // })


// var dark = document.querySelector('.dark')
// var container= document.querySelector('.container')

// dark.addEventListener('click', function(){
//     container.classList.toggle('dark-mode')
// })

// //functions and methods
// //declaration and definition
// //arguements & parameters
// //call back and higher order function

// //functions and methods

// function sum(a, b){
//     return a + b;
// }

// //default parameter (works when the user is not inputing correct function)

// function calc (a, b=0){
//     return (2 * (a + b));
// }
// calc(2, 3)

// //reset parameters (allows a function to accept any number of arguements)
// function collectThings(x, ...y){
//     console.log(x);
//     console.log(y);
// }
// collectThings(1,2,3,4,5,6,7,8,9);

// //arrow function
// const add = (x, y) =>x + y

// //nested function (deiinfes function inside functiom)
// function outer(){
//     console.log('outer');
//     function inner(){
//         console.log('inner');
//     }
// }
// outer();

// //closure (nested function is a closure, the inner function can be accessed from variables from outer closure)
// function outer(x){
//     function inner (y){
//         return x + y;
//     }
//     return inner;
// }

// const outerReturn = outer(10);

// outerReturn

// //callback function
// function foo(bar){
//     if(itsNights){
//         bar();
//     }
//     if(isDrinkersOverCheckOnlune){
//         bar();
//     }
// }

// //high order function (takes one or more function as arguements and may retuen a function)



// //reverse a number
// function reverse_a_number(n)
// {
//   n = n + "";
//   return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));

// outerReturn(2)

//array

var QuestionBank = [
    {
        question:'who is the CEO of appclick',
        options:['Osimhen','Seyi Adeleke','Seyi Law','Stanley'],
        answer: 'Seyi Adeleke'
    },
    {
        question:'who is the president of Nigeria',
        options:['Obasanjo','Thomas Muller','Moses Blioss','Bola Ahmed Tinubu'],
        answer: 'Bola Ahmed Tinubu'
    },
    {
        question:'what is the capital of Nigeria',
        options:['Ibadan','Abuja','Lagos','Togo'],
        answer: 'Abuja'
    }
]


//dom connection
var question = document.getElementById('question')
var option0 = document.querySelector('.option0')
var option1 = document.querySelector('.option1')
var option2 = document.querySelector('.option2')
var option3 = document.querySelector('.option3')
var i= 0
var next = document.querySelector('.next')
var stat = document.getElementById('stat')
var previous = document.getElementById('previous')
var darkIcon = document.querySelector('.dark-icon')
var container = document.querySelector('.main-container')
var questionCount = QuestionBank.length;
var scoreBoard = document.getElementById('score-board')
var quizContainer = document.getElementById('quiz-container')
var score = 0
var answers = document.getElementById('answers')


//functions
function displayQuestion(){
    question.innerHTML= 'Q.'+ (i+1)+ ' '+ QuestionBank[i].question
    option0.innerHTML= QuestionBank[i].options[0]
    option1.innerHTML= QuestionBank[i].options[1]
    option2.innerHTML= QuestionBank[i].options[2]
    option3.innerHTML= QuestionBank[i]. options[3]
    stat.innerHTML= `Question ${i+1} of ${QuestionBank.length}`//other means of uncreamenting the question count
    // document.getElementById('stat').innerHTML = 'Question ' + (i+1)+ ' of 2'
}



//Question number function
function nextQuestion(){
    if (i < QuestionBank.length -1) {
        i++
        displayQuestion()
    }
    else{
        quizContainer.style.display ='none'
        scoreBoard.style.display = 'block'
    }
    
}
function backtoQuiz(){
    if (i < QuestionBank.length -1) {
        i++
        displayQuestion()
    }
    else{
        scoreBoard.style.display = 'none'
        quizContainer.style.display ='block'
    }
    
}

for(var a = 0; a<QuestionBank.length; a++){
    var list = document.createElement('li')
    list.innerHTML = QuestionBank[a].answer
   answers.appendChild(list)
}
//next function

next.addEventListener('click', nextQuestion)

//previous function
function goBack() {
    if(QuestionBank.length >i){
        i--
        displayQuestion()
    }
    
}
previous.addEventListener('click', goBack)



function CalculateScore(e){
    if(e.innerHTML === question[i].answer && i < QuestionBank.length){
        score=score + 1
    }
}
function updateDateTime() {
    var now = new Date();
    var dateTimeElement = document.getElementById("date-time");
    dateTimeElement.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);


displayQuestion()