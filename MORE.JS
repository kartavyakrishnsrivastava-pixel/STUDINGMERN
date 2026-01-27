A1=[1,4,5,6,7,77,777,7774]
A2=[11,112,1112,11112,111122]
A3=[22,2222,222,22223,]
A4=A1.concat(A2,A3)
console.log(A4)
// concat() is used to join two or more arrays
// it takes multiple arrays as arguments and join them all together
// multiple commas are used to separate the arrays to be joined
console.log(typeof A4)
console.log(A4.length)
console.log(A4[0])
console.log(A4[A4.length-1])
console.log(A4.splice(0,1))
A4.splice(0,1)

console.log(A4)
// splice() is used to remove or add elements in an array
// it takes two mandatory arguments first is starting index and second is number of elements to be removed
// it can take multiple optional arguments which are the elements to be added at the starting index 