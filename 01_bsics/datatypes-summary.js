// Aaj ka lesson main ham datatypes ke baare main bat kaarin gy
// JavaScript main 2 tarah ke datatypes hote hain: Primitive aur Non-Primitive



// primitive or non-primitive datatypes ke beech main farq kya hai? 

// Primitive datatypes directly value ko store karte hain.

// jasy kah let x = 10; main x directly 10 ko store karta hai, aur jab aap x ko kisi aur value assign karte hain, to wo purani value ko overwrite kar deta hai.




// Non-Primitive datatypes reference ke through value ko store karte hain.

//  Jab aap ek non-primitive datatype create karte hain, to wo memory main ek location allocate karta hai aur us location ka reference store karta hai. Jab aap us reference ko kisi aur variable ko assign karte hain, to wo dono variables same memory location ko point karte hain, aur agar aap us memory location ki value ko change karte hain, to dono variables ki value change ho jati hai.

// Example of non-primitive datatype in JavaScript:
let obj1 = { name: "Alice" }; // obj1 is an object
let obj2 = obj1; // obj2 is now referencing the same object as obj1

obj2.name = "Bob"; // Changing the name property through obj2

console.log(obj1.name); // Output: "Bob" - because obj1 and obj2 reference the same object





// Primitive datatypes:
// 1. String: Text ko represent karta hai, jaise "Hello World"

// 2. Number: Numerical values ko represent karta hai, jaise 42, 3.14

// 3. Boolean: True ya False ko represent karta hai

// 4. Null: Koi value nahi hai, yaani empty value ko represent karta hai

// 5. Undefined: Jab variable declare kiya jata hai lekin usko koi value assign nahi ki jati, to wo undefined hota hai

// 6. Symbol: Unique identifier ke liye use hota hai

// 7. BigInt: Large integers ko represent karta hai, jo Number datatype se zyada hote hain jasa kah sakte hain 9007199254740991 se zyada or is ka aakhir main n lagta hai

// 1. String example:
// let myString = "Hello World"; 
// console.log(myString); // Output: "Hello World"

// 2. Number example:
// let myNumber = 42; 
// console.log(myNumber); // Output: 42

// 3. Boolean example:
// let myBoolean = true; 
// console.log(myBoolean); // Output: true

// 4. Null example:
// let myNull = null; 
// console.log(myNull); // Output: null

// 5. Undefined example:
// let myUndefined; 
// console.log(myUndefined); // Output: undefined

// 6. Symbol example:
// let mySymbol = Symbol("unique"); 
// console.log(mySymbol); // Output: Symbol(unique)

// 7. BigInt example:
// let myBigInt = 9007199254740991n; 
// console.log(myBigInt); // Output: 9007199254740991n





// Non-Primitive datatypes:  or is ko Reference datatypes bhi kehte hain, kyunki ye values ko reference ke through store karte hain, na ki directly value ko store karte hain. Non-Primitive datatypes main kuch common types hain:

// 1. Object: Key-value pairs ko represent karta hai, jaise { name: "Alice", age: 30 }

// 2. Array: Ordered list of values ko represent karta hai, jaise [1, 2, 3, 4]

// 3. Function: Reusable block of code ko represent karta hai, jaise
//  function greet() { console.log("Hello!"); }


// Example of Non-Primitive datatypes in JavaScript:

// 1. Object example:
let person = { name: "Alice", age: 30 }; 
console.log(person); // Output: { name: "Alice", age: 30 }

// 2. Array example:
let myArray = [1, 2, 3, 4]; 
console.log(myArray); // Output: [1, 2, 3, 4]

// 3. Function example:
function greet() { 
    console.log("Hello!"); 
}
greet(); // Output: "Hello!"    








// JavaScript main datatypes dynamically typed hote hain, iska matlab hai ki aap variable ko kisi bhi datatype ka value assign kar sakte hain aur wo automatically us datatype ke hisaab se behave karega.

// Example:
let myVariable = "Hello"; // myVariable is a string
myVariable = 42; // Now myVariable is a number
myVariable = true; // Now myVariable is a boolean



// static types kya hote hain? Static types aise programming languages main hote hain jahan aapko variable declare karte waqt uska datatype specify karna padta hai, aur wo datatype change nahi ho sakta. Jaise C++, Java, etc. main static typing hoti hai.

// Example of static typing in Java:
//int myVariable = 42; // myVariable is an integer 







// Very important notes in this lesson:


// Ab ham yahan thora sa summary kar lete hain:

// 1. JavaScript main 2 tarah ke datatypes hote hain: Primitive aur Non-Primitive

// 2. Primitive datatypes directly value ko store karte hain, jabki Non-Primitive datatypes reference ke through value ko store karte hain.

// 3. Primitive datatypes main String, Number, Boolean, Null, Undefined, Symbol, aur BigInt shamil hain.

// 4. Non-Primitive datatypes main Object, Array, aur Function shamil hain.

// 5. JavaScript main datatypes dynamically typed hote hain, iska matlab hai ki aap variable ko kisi bhi datatype ka value assign kar sakte hain aur wo automatically us datatype ke hisaab se behave karega.

// 6. Static types aise programming languages main hote hain jahan aapko variable declare karte waqt uska datatype specify karna padta hai, aur wo datatype change nahi ho sakta. 


//  Ham k6 farq parh lety hain js or typescript main:
// 1. JavaScript dynamically typed language hai, jabki TypeScript statically typed language hai.

/*
2. JavaScript main aapko variable declare karte waqt uska datatype specify karna nahi padta, jabki TypeScript main aapko variable declare karte waqt uska datatype specify karna padta hai.
*/