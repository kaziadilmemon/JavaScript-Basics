/* 1. What will the following print in JavaScript?
console.log("har\"".length) */

let a="har\""
console.log(a.length) // The answer will be 4.


// 2. Explore the includes,start with 8 end with function of a String.

const sentence='Adil is a coder'
const word='coder'
console.log(sentence.includes(word))
console.log(`The Word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence` )

// 3. Write a program to convert a given string to lowercase.

 let b="ADIL"
 console.log(b.toLowerCase())

// 4. Extract amount out of this String "please give RS 1000" 

let ab="please give RS 1000"
let amount=Number.parseInt(ab.slice(15))
console.log(amount)
console.log(typeof amount)

//5. Try to Change 4th Character of a given String were you able to do it.
 let friend="Adil"
friend[3]="e"
console.log(friend) // Friend is not change Because String is Immutable.

