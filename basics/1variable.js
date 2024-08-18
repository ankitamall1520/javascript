const accountId = 123456  //used to declare constant
let accountEmail = "anki@gmail.com" //used to declare variable
var accountPassword = "12345" // old method to declare variable bcz of issue in block scope and function scope do not prefer,
accountCity = "Delhi"
let accountState


// accountId= 2// not allowed
accountEmail = "kiki@gmail.com"
accountPassword="54321"
accountCity ="pune"

console.table([accountId ,accountEmail , accountPassword , accountCity , accountState])