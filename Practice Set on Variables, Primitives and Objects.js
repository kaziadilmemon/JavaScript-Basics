 //Q1: Create a variable of type String and try to add a number to it.
let a="Adil"
let b=36
console.log(a+b)

//Q2: use typeof Operators to find the datatype of the string in last question
console.log(typeof(a+b))

//Q3: Create a const object in javascript can you change it to hold a number later? so the answer is it is not possible it will gives you a error Identifer 'a' has already been declared  as shown in code below:
const a1={
  name:"Adi",
  section:2,
  isprincipal:false
}
// a1=asim
//Q4: Try to add a new key to the const ibject in Q3 were you able to do it
a1['friend']="karan"
a1['name']="Asim"
console.log(a1)

//Q5: Write a js program to create a word-meaning dictionary of 5 words
const dict={
 clever:"quick to understand, learn, and devise or apply ideas; intelligent",
   contentmarketing:"a type of marketing that involves the creation and sharing of online material (such as videos, blogs, and social media posts)",
designing:"acting in a calculating, deceitful way",
scheming:"the activity or practice of making secret and underhand plans",
calculating:"acting in a scheming and ruthlessly determined way."
}
console.log(dict)
console.log(dict.clever)//you can use it for searching only one word
