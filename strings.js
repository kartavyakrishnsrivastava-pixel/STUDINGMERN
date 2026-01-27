console.log("this is strings tutorial");
// string are use to represent text and are written inside quotes
let a="this is a string"
console.log(a)
let b ="kartavya"
console.log(b)
console.log(typeof b)
// in programming counting starts from 0
console.log(b[0])
console.log(b[1])
console.log(b[2])
console.log(b[3])
console.log(b[4])
console.log(b[5])
console.log(b[6])
console.log(b[7])
console.log(b[8])// it will give undefined because there is no index 8
console.log("length of string b is ",b.length)
// string are immutable means we cannot change the string once created
b[0]="T"// it will not change anything
console.log(b)
// if we put a number greater than the length of string it will give undefined
console.log(b[b.length])// it will give undefined