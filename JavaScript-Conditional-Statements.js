let a=prompt("What is Your Age:")
a=Number.parseInt(a) //Converting String to a number
if(a<0){
  alert("This is not a valid Age")
}
else if(a<9){
  alert("you are too young to drive a car")
}
else if(a>=18){
  alert("you can drive a car")
}
console.log("Done")

//Switch Statement 
 let number="1";
switch(number)
{
  case '1':
    console.log("you get 1st Position")
    break;
    
  case '2':
    console.log("you get 2nd Position")
    break;

  case '3':
    console.log("you get 3rd Position")
    break;

  default :
    console.log("you are not in top order, Hardwork needed a lot and you will be in top 3 next time")
}
console.log("you can",(a<18?"not drive" : "drive"))
