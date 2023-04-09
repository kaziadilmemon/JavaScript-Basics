//              String Methods
let name="AdilMemon"
// 1. length: This will tell us about the length of our String.
  console.log(name.length)

// 2. UpperCase() : This method will make our String in Captal Letters.
   console.log(name.toUpperCase())

// 3. LowerCase() : This method will make our String in small Letters.
   console.log(name.toLowerCase())

// 4. slice() : This method extracts a section of a string and returns it as a new string.
console.log(name.slice(2,7))
console.log(name.slice(2)) 

// 5. replace() : This  method returns a new string with the value(s) replaced.
console.log(name.replace("Adil","Asim"))

// 6. concat() : This  method joins two or more strings. 
let name2="Noman"
console.log(name.concat(" is a friend of ",name2))

// 7. trim() : This method removes whitespace from both sides of a string.
let name3="             Faizan           "
console.log(name3) //before trim function
console.log(name3.trim()) //after trim fucntion


