// there are many ways to create strings in JavaScript
console.log("this is template literals tutorial");
let realName="kartavya"
let greeting="Good Morning"
console.log(greeting + " " + realName)
// template literals are introduced in ES6
// using template literals we can create string easily by using backticks ``
let name1="rohan"
let greeting1=`Good Morning ${name1}`
console.log(greeting1)  
console.log('Using template literals we can create string in multiple lines easily')
console.log(`${greeting} ${realName}`)
let html=`<h1>This is heading</h1>
<p>This is paragraph</p>`
console.log(html)
// we can also use expression inside template literals
let a=34
let b=56
console.log(`The sum of ${a} and ${b} is ${a+b}`)
console.log('his name is "kartavya"')

// by using template literals we can create string in multiple lines easily without using \n
