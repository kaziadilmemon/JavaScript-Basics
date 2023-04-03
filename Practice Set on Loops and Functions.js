/* 1. Write a Program To print the marks of a student in an object using for loop obj={ harry:98,
               rohan:70,
               akash:7 } */ 
let marks={
  harry:98,
  rohan:70,
  akash:7
}
for(let i=0; i<Object.keys(marks).length;i++){
  console.log("The marks of"+ Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}
/* 2. Write the program in Question 1, using for in loop. */
let marks={
  harry:98,
  rohan:70,
  akash:7
}
for(let key in marks ){
  console.log("the marks of"+ key+ "are" +marks[key])
}
/* 3. Write a program to print "Try Again" untill the user enters the Correct number. */

let cn=48
let i;
while(i!=cn){
  
  i=prompt("Enter a Correct Number")
   console.log("Try Again") }
console.log("You have entered a Correct Number")

/* 4. Write a function to find mean of 5 element */
const mean= (a, b, c, d) => {
  return (a+b+c+d)/4
}
console.log(mean(4, 5, 6, 7))

