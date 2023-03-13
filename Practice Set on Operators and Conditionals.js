/* Question 1: Use logical Operators to find whether the age of a person lies betweeen 10 and 20? */
 let age= prompt("enter your Age")
 if(age<=10 && age>=20)
  alert("the Person Age lies between 10 and 20")
 else
   alert("the Person Age is not lies between 10 and 20")
 console.log("Done")

// /* Question 2: Demonstrate the use of Switch Case Statements in JavaScript*/
 let age= prompt("enter your Age")
 switch(age) {
   case '12':
     console.log("Your Age is 12")
     break
   case '13':
     console.log("Your Age is 13")
     break
   case '18':
     console.log("Your Age is 18")
     break
   case '19':
     console.log("Your Age is 19")
     break
   default:
     console.log("Your Age is not Between 10 and 20")
 }
  
/* Question 3: Write a JavaScript Program to find Whether a number is Divisible by 2 and 3*/
 let num= prompt("enter your Number")
 if(num%2==0 && num%3==0)
 {
   console.log("Your Number is divisible by 2 and 3")
  
 }
 else {
   console.log("Your Number is not divisible by 2 and 3")
 } 
/* Question 4: Write a JavaScript Program to find Whether a number is Divisible by either 2 or 3*/
 let num= prompt("enter your Number")
 if(num%2==0 || num%3==0)
 {
    console.log("Your Number is divisible by 2 and 3")
  
 }

  else {
  console.log("Your Number is not divisible by 2 and 3")
 }
/* Question 5: Print "You Can Drive" or "You cannot Drive" based 
on age being greater than 18 using ternary operator*/
console.log("Enter Your Age")
let Age=20
let a=Age>18 ?"You Can Drive" : "You Cannot Drive"
console.log(a)



