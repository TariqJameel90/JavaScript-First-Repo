// JavaScript main 2 trah ke memory hoti hai: Stack memory aur Heap memory.


// 1. Stack Memory: Stack memory main primitive datatypes (jaise number, string, boolean, null, undefined, symbol, bigInt) store hote hain.
//  Stack memory fast hoti hai aur directly value ko store karti hai.

// jab bhi stack memory use hoti hai, ham variable declare karte hain, to us ka hamin copy milta hai,is ko samjhny ka liy diyagram wali misal samjh lain , aur agar ham us variable ko change karte hain, to wo original value ko affect nahi karta hai.

// Example of Stack Memory:
let a = 10; 
let b = a; // b gets a copy of the value of a
b = 20; // Changing b does not affect a
console.log(a); // Output: 10
console.log(b); // Output: 20




// 2. Heap Memory: Heap memory main non-primitive datatypes (jaise objects, arrays, functions) store hote hain.

// or jab bhi heap memory use hoti hai, ham variable declare karte hain, to us variable main ek reference store hota hai, or jab bhi ham koi change karin ga to woh original value ko affect karega, yani original value change ho jayegi.

// Example of Heap Memory:
let obj1 = { name: "Alice" }; // obj1 is an object stored in heap memory
let obj2 = obj1; // obj2 gets a reference to the same object in heap memory

obj2.name = "Bob"; // Changing the name property through obj2

console.log(obj1.name); // Output: "Bob" - because obj1 and obj2 reference the same object 

// Is example main obj1 aur obj2 dono same object ko reference karte hain, is liye jab ham obj2 ke through name property ko change karte hain, to wo change obj1 ke through bhi reflect hota hai, kyunki dono variables same memory location ko point karte hain.



// Summary:
// - Stack memory main primitive datatypes store hote hain, aur wo directly value ko store karte hain.
// - Heap memory main non-primitive datatypes store hote hain, aur wo reference ke through value ko store karte hain.

