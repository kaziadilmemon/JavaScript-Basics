console.log("JavaScript Variables & Constants")
var a =45 
var b ="Harry"
var c =null
var d =undefined

// 1) var is globally scoped while let & const are block scoped
{
  var b="Adi"
  
}
console.log(b)
// 2) var can be updated & redeclared within its Scope
var a=4
var a="p"
// let b="Harry"
//   b=4 possible 
// let b=4 not possible

// 3) Constant nor updated not be declared
const author="Adil"

// 4) var Variables are intialized with undefined whereas let and const are not intialized
// 5) let can be updated but not re-declared 
// 6) const must be inialized during declaration unlike let & var

