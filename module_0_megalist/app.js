// Module 0 Mega List

// Questions:

// HTML

// *******Give five examples of an HTML element.
/* <head>
         <title> 5 examples </title>
</head>
<body>
          <div>
                   <h1> 5 Examples </h1>
                    <p> Hello Nate </p>
          </div>
</body> */

// ***********Give five examples of an HTML attribute.
/* <body class="body">
    <div>
      <h1 id="header"> 5 Examples </h1>
        <input type="text" value="Hello Nate />
        <button type="button">Click me </button>
    </div>
</body> */

// *********What does it mean to “nest elements”?
// A: To have elements inside of each other. Similar to a matryoshka.

// What does it mean to be a child, sibling, or parent element in HTML?
// <body> <---- parent
//     <ul>  <---- child
//       <li> <----sibling of body
//     </ul>
// </body>

// *********What elements are required to set up an HTML page?

// <!DOCTYPE html>
//      <head>
// 	<meta charset = "UTF-8" />
//      </head>
//      <body></body>
// </html>

// ********What element(s) do you know of that are used as a container for other elements?
/* <span>, <div> <head> <body>... */

// // *******Which element is used to link to other webpages?
// <a>
// <a href="http://www.google.com"/></a>

//// ********Which element is used to place an image on your webpage?
// <img/>

// // *******What are the elements used to make lists in HTML?
// <ul>, <ol>

// CSS

// // *******If you had many elements that needed the same styling, how would you style them?  Why?
// Tag
// ID
// Class

// <div id="top" class=main> hello </div>
// ******Why?
// I would give other elements inside the div tag the same class. That way I can style them all by selecting.    .main{} in css

// *******What is the order of specificity when it comes to CSS styling? (From most specific to least)

// Inline => tag=> id => class

// Tag => inline => class => id <---best way

// Class => id => inline => tag

// ********What is one way you know how to center text in an element?
// By giving a class to the element and then selecting that class in css and adding text-align:center;

// JavaScript

// Data Types

// // ***********What are the 5 main data types in JavaScript?
// Number, string, boolean, null,  undefined

// Out of the 5 main data types, which are Primitive and which are Complex?

// ***********Complex datatypes are Objects and Arrays. Because they can be broken down.
// All the other datatypes are Primitive. They can't be broken down.

// ********How would you access the 2nd item in an array called recipes?

// Ex:   var recipes = [“flour”, “spice”]
// recipes[1]

// *********How would you access the “name” property of an object called person?

// Ex:   var person = { name: “joe”, age: 20 }
// person.name

// *********Explain to the best of your knowledge the difference between primitive and complex data types.
// // ***********Complex datatypes are Objects and Arrays. Because they can be broken down.
// // All the other datatypes are Primitive. They can't be broken down.

// ********What are the values that the data type Boolean can be?
// true || false

// Conventions

// ***********Which of the following would be an array, and which would be a boolean?  Remember proper naming conventions.

// recipes ---------array

// recipe ------array

// isRecipe -----boolean

// recipeItem ---boolean

// **********What is global scope?
// A: any variable seen outside of the function
// Which means that you can read and change that variable anywhere in your code.

// Conditionals

// ***********What are conditional statements used for?
// To check if the condition is met

// ***********What are 4 conditional statements?
// The conditional statements in JavaScript are if, else, else if and switch-case statements. They are used for checking a specific condition and executing the code based on the specified condition.

// *********What happens if an "if" statement is true?
// Then that specific condition will be executed

// **********What would be required for an if-else statement to reach the "else if" conditional statement?
// The first "if" condition must be reached and met

// ***********When would you use the "if" conditional statement?
// Id use this statement if you id want to execute a set of code when a condition is true

// ***********When would you use the "else if" conditional statement?
// To check if both conditions are true

// **********When would you use the "else" conditional statement?
// To check if the first condition is false

// Loops

// **********When iterating over an array, what number do you typically begin your iterations at?  Why?
// 0, Arrays are 0 based that start at 0.

// **********What are the 3 statements required when creating a for loop & what do each of them do?
// for(let i = 0; I < arr.length; I++){
// 	// code inside loop
// }

// 1) Initializer 2) Condition; 3)Updation

// ********What data type does ‘i’ represent in a for loop?
// Number

// Functions

// *********To the best of your knowledge, what is the difference between a function expression and a function declaration?
// Function declaration is when you declare a function using the actual 'function' keyword
// Function expression is a function that is assigned to a variable

// ********Which symbols are used to call a function?
// ()

// ***********What is global scope vs local scope? Show something defined in a local scope.
// let num1 = 1 //1 <-global scope

// const sumOf = (num1, num2) => {
//   let num2 = 2 // local scope
//   console.log(num1 + num2)
// }

// *********Can functions call other functions? If so, when would this be useful?
// Yes. It can fire a buttons click event when user click the button

// function outer() {
//     this.inner = function() {
//         alert("hi");
//     }
// }

/* <input type="button" onClick="(new outer()).inner();" value="ACTION">​ */

// DOM

// **************What does interacting with the DOM in Javascript allow us to do?
// Allows you to create elements, and attributes, add styles on the page without using html and css
// update the content, structure, and style of a document using JAVASCRIPT

// ************Why would we need to use JavaScript to manipulate the DOM when we could just type it into the HTML/CSS files directly?
// Because you never know what the user is going to do when they are on your webpage

// **********What does DOM stand for?
// Document Object Model

// **********In your own words, what is the DOM?
// The DOM is the blueprint of the content on the webpage

// **********What are two ways you could add text to an element you created in JavaScript?
// .textContent
// .innerHtml

// If you need a button to be able to respond to a user clicking it, what will you need to add to it?
// Add an event listener
// document.getElementById('button').addEventListener('click', ()=>{})
// Show Me

// ********Write a function declaration named “calibrateScale” that expects two values, “unit” and “howMany”.

// function calibrateScale( unit, howMany ){
//  return console.log(`${unit} : ${howMany}`)
// }
// (test =() =>{

// calibrateScale('pounds',2)
// calibrateScale('tons',334)
// calibrateScale('', 1234)
// })()

// *********Now call that function and pass in the data “pounds” and 0.
// (test = () =>{

// calibrateScale('pounds',0);

// })()

// ********Which of these are arguments and which are parameters?

// function calibrateScale( unit, howMany ){ //<------paramemeters
//  return console.log(`${unit} : ${howMany}`)
// }
// (test = () =>{

// calibrateScale('pounds',2)   // <----- arguments

// })()

// ********Write an object named “door” that has the properties “height” and “width” set to any value you wish.

// let door = {
// 	height: '8 feet',
// 	width: '3 feet'
// }

// *******Write an array named “animals” that has at least 3 strings in it.

// let animals = ['lion','zebra','monkey'];

// If you had an array that looked like this:

// var houses = [“brick”, “brown stone”, “small”, “wooden”]

// ******Write a for-loop and that would iterate over this array and console log every house type.

// for(let i = 0; i < houses.length; i++){
// 	console.log(i)
// }

// *******What is the syntax for giving every element with the class “red” the background color of red? ( Write the css you would need to do this ).

// let myElement = document.getElementsByClassName('red');
// myElement.style.backgroundColor = 'red';

// ********Write a function that takes a string as an argument and returns that string with the letter “s” added to the end of it.  Console.log the returned value.

// function addS(str){
// 	console.log(`${str}s`)
// }
// addS('home') //<----homes

// ******Write a function that takes an array as an argument and returns the last element of that array.  The array size can be any size between 1 - 100.

// const lastItmIs = (arr) =>{
// 	return arr.length -1;
// }

// *********Write a function to assign numbers to a school grade value. The function should take 1 argument, the number value. Your function should console log a grade for the number value provided, either "A", "B", "C", "D", or "F". Can you take it a step further and account for +’s and -’s (ex: A+, A, A-)!

// function schoolGrade(num, val) {
//   if (val === "+") console.log(`${num}+`);
//   if (val === "-") console.log(`${num}-`);
// }
// schoolGrade("A", "-");

// ********Write a function that: Takes one argument, a number. Has a for loop that iterates from 0-10. Each number in the for loop (0-10) will be multiplied by the number given as a parameter to the function log to the console “0 multiplied by 11 equals 0”, “1 multiplied by 11 equals 11”, “2 multiplied by 11 equals 22”, etc.

// function test(num) {
//   for (let i = 0; i < 10; i++) {
//     console.log(i + ` multiplied by ` + `${num} ` + `equals ` + i * `${num}`);
//   }
// }

// test(2);

// // In HTML create a <div> element. In CSS style that div so that it appears as a box on the DOM
// let newDiv = document.createElement("<div>");
// document.body.append(newDiv);
// newDiv.style.backgroundColor = "green";
// newDiv.style.border = "red";

// // Create a button in HTML. Bring that button into Javascript. Add an event listener to that button using JS techniques so that when the button is clicked it executes a for loop.
// /* <html>
//   <body>
//     <button type="button" id="button" class="btn"></button>
//   </body>
// </html>; */

// document.querySelector("#button").addEventListener("click", () => {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// });

// // How would you create an h1 element in JavaScript?
// let newHeader = document.createElement("<h1>");
