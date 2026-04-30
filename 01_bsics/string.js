const name = "Tariq Jameel";
const RepoCount = 2;

console.log("My name is " + name + " and I have " + RepoCount + " repositories on GitHub.");

// String interpolation using template literals
console.log(`My name is ${name} and I have ${RepoCount} repositories on GitHub.`);


// Abhi ham String ko define karny ka or sentext dakhty hain jis main "new String()" ka use hota hai. Ye ek string object create karta hai, lekin ye string literal se different hota hai. String literal ek primitive data type hota hai, jabke "new String()" ek object hota hai.

const stringLiteral = "Hello, World!";
const stringObject = new String("Hello, World!");

console.log(typeof stringLiteral); // Output: string
console.log(typeof stringObject);  // Output: object


// is qisam main hamain lenght property milti hai, yani string ki length ko count kar sakte hain.

console.log(stringLiteral.length); // Output: 13
console.log(stringObject.length);  // Output: 13

// or hamin boht sary methods milty hain string ko manipulate karny ke liye, jaise ke toUpperCase(), toLowerCase(), slice(), substring(), replace(), etc.

console.log(stringLiteral.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(stringLiteral.toLowerCase()); // Output: "hello, world!"
console.log(stringLiteral.slice(0, 5));   // Output: "Hello"
console.log(stringLiteral.replace("World", "Everyone")); // Output: "Hello, Everyone!"
console.log(stringLiteral.substring(0, 5)); // Output: "Hello"
console.log(stringLiteral.includes("World")); // Output: true
console.log(stringLiteral.indexOf("World")); // Output: 7 



// string ka sab 20+ position method hota hai, ham in tmam ko 1 1 karke dekhty hain, taki apko samajh main aa jaye ke string ko manipulate karny ke liye kitne sare methods available hain.

// 1. charAt()  is ki misal jasy
console.log(stringLiteral.charAt(0)); // Output: "H"

// 2. charCodeAt() is ki misal jasy
console.log(stringLiteral.charCodeAt(0)); // Output: 72 (ASCII code for 'H')

// 3. concat() is ki misal jasy
console.log(stringLiteral.concat(" How are you?")); // Output: "Hello, World! How are you?"

// 4. endsWith() is ki misal jasy
console.log(stringLiteral.endsWith("!")); // Output: true

// 5. includes() is ki misal jasy
console.log(stringLiteral.includes("World")); // Output: true

// 6. indexOf() is ki misal jasy
console.log(stringLiteral.indexOf("World")); // Output: 7

// 7. lastIndexOf() is ki misal jasy
console.log(stringLiteral.lastIndexOf("o")); // Output: 8

// 8. match() is ki misal jasy
console.log(stringLiteral.match(/o/g)); // Output: ["o", "o"]

// 9. repeat() is ki misal jasy
console.log(stringLiteral.repeat(2)); // Output: "Hello, World!Hello, World!"

// 10. replace() is ki misal jasy
console.log(stringLiteral.replace("World", "Everyone")); // Output: "Hello, Everyone!"

// 11. search() is ki misal jasy
console.log(stringLiteral.search("World")); // Output: 7

// 12. slice() is ki misal jasy
console.log(stringLiteral.slice(0, 5)); // Output: "Hello"  

// 13. split() is ki misal jasy
console.log(stringLiteral.split(", ")); // Output: ["Hello", "World!"]

// 14. startsWith() is ki misal jasy
console.log(stringLiteral.startsWith("Hello")); // Output: true

// 15. substring() is ki misal jasy
console.log(stringLiteral.substring(0, 5)); // Output: "Hello"

// 16. toLowerCase() is ki misal jasy
console.log(stringLiteral.toLowerCase()); // Output: "hello, world!"

// 17. toUpperCase() is ki misal jasy
console.log(stringLiteral.toUpperCase()); // Output: "HELLO, WORLD!"

// 18. trim() is ki misal jasy
const stringWithSpaces = "   Hello, World!   ";
console.log(stringWithSpaces.trim()); // Output: "Hello, World!"

// 19. valueOf() is ki misal jasy
console.log(stringObject.valueOf()); // Output: "Hello, World!"

// 20. localeCompare() is ki misal jasy
console.log(stringLiteral.localeCompare("Hello, World!")); // Output: 0 (strings are equal)

// 21. padStart() is ki misal jasy
console.log(stringLiteral.padStart(20, "*")); // Output: "*******Hello, World!"

// 22. padEnd() is ki misal jasy
console.log(stringLiteral.padEnd(20, "*")); // Output: "Hello, World!*******"

// 23. trimStart() is ki misal jasy
console.log(stringWithSpaces.trimStart()); // Output: "Hello, World!   "

// 24. trimEnd() is ki misal jasy
console.log(stringWithSpaces.trimEnd()); // Output: "   Hello, World!"

// 25. toString() is ki misal jasy
console.log(stringObject.toString()); // Output: "Hello, World!"

// 26. fromCharCode() is ki misal jasy
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"

// 27. fromCodePoint() is ki misal jasy
console.log(String.fromCodePoint(128512)); // Output: "😀"

// 28. raw() is ki misal jasy
console.log(String.raw`Hello\nWorld`); // Output: "Hello\nWorld"

// 29. normalize() is ki misal jasy
const stringWithAccents = "Café";
console.log(stringWithAccents.normalize("NFD").replace(/[\u0300-\u036f]/g, "")); // Output: "Cafe"

// 30. codePointAt() is ki misal jasy
console.log(stringLiteral.codePointAt(0)); // Output: 72 (ASCII code for 'H')



