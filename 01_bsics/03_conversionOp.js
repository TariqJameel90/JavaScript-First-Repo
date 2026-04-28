let score = "33ss"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)    // we convert string in Number 
console.log (valueInNumber);

// when we convert string in Number"33" => 33 
// "33ss"=> NaN
//  true => 1      , false => 0 

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean (isLoggedIn)

console.log (booleanIsLoggedIn);


// 1 = true ;   covert in boolean ,  0 = false;
// "" = false;  ,  when we difine and convert empty string in boolean 
// When we convert string in boolean then result is ...    "tariq" => true;


let someNumber = 36
let stringNumber =  String(someNumber)

console.log(typeof stringNumber);
