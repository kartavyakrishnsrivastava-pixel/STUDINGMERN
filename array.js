let a1=[1,11,12,76,98,112]
a2= a1.slice(0,3)
console.log(a1)
console.log(a2)
console.log(typeof a1)  
console.log(a1.concat(a2))
a1[0]=100
console.log(a1)
console.log(a2)
// slice() is used to extract a part of array and return as a new array
// it takes two arguments starting index and ending index
// starting index is inclusive and ending index is exclusive
console.log(a1.toString())
console.log(a1.join(" and "))
console.log(a1.pop())
console.log(a1)
// toString() is used to convert array to string
// join() is used to join all elements of array into a string
// it takes an argument as separator which is used to separate the elements in the string
// pop() is used to remove the last element from the array and return that element
// it modifies the original array
console.log(a1.shift())
console.log(a1)
console.log(a1.push(500))
console.log(a1)
console.log(a1.unshift(50))
console.log(a1)

