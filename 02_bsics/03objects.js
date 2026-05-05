// Objects ko declare karne ke 2 tarike hote hain
// 1. Object Literal
// 2. Constructor Function          


// singleton  : koi bhi constructor jb bnaty hain to wo ek object bnata hai usko singleton kehte hain.

// or jo ham literal se object bnate hain wo singleton nahi hota.
// constructor sa agar bny ga to singleton hoga.


// Object Literal  

const mySym = Symbol("key1");//  

const Jsuser = {
    name: "tariq", 
    [mySym]: "key1",// symbol ko as a property name use kr skty hain.
    age: 22,
    email: "tariq@example.com",
    location: "karachi",
    blogs: ["how to learn js", "js is best"]
}

// console.log(Jsuser.email);// object ke property ko access krne ke liye dot notation use krte hain.

// // is ka ilawa bracket notation bhi use krte hain.

// console.log(Jsuser["email"]);// bracket notation me property email ko string me likhna hota hai.
// // ya dosra tariqa is liya hy kah agar name "full name " yani space ka sath likh hy to . ka sath access nahi kr skty hain to bracket notation use krte hain. jasy "full name" : "tariq ali" to isko access krne ke liye Jsuser["full name"] use krte hain.

// console.log(Jsuser.mySym);// symbol ko as a property name use krne ke liye bracket notation use krte hain. Jsuser[mySym] use krte hain. kyunki mySym ek variable hai jisme symbol store hai. to isko access krne ke liye Jsuser[mySym] use krte hain.

// console.log(Jsuser[mySym]);



// // ab ham object ke andar value ko change kr skty hain.

// Jsuser.age = 23;// dot notation se age ki value change kr di.
// console.log(Jsuser.age);

// Jsuser["location"] = "lahore";// bracket notation se location ki value change kr di.
// console.log(Jsuser.location);

// Jsuser.location = "islamabad";// dot notation se location ki value change kr di.
// console.log(Jsuser.location);

// // ab ham object ko freeze kr skty hain jisse object ki properties ko change nahi kr skty hain.

// //Object.freeze(Jsuser);// object ko freeze kr diya.

// Jsuser.age = 24;// ab age ki value change nahi hogi.
// console.log(Jsuser);

Jsuser.greering = function name(params) {
    console.log("hello JS user");
}
Jsuser.greeringTwo = function name(params) {
    console.log(`hello JS user, ${this.name}`);
}

console.log(Jsuser.greering());
console.log(Jsuser.greeringTwo());



