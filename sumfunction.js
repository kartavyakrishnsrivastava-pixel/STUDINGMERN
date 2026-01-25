// function sum(a, b) {
//     console.log(a + b);
//     console.log("This line will be executed");
// }
// sum(1,2) 
// sum(5,6);   

function sum(a, b, c=5) {
    return a + b + c;
}

x = sum(3, 4);
y= sum(5, 6);
z= sum(10, 20);

console.log(x);
console.log(y);
console.log(z);

