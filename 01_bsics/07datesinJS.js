//   Date 

//  ham yahan par date ka tmam methods dekhenge jo date ke sath use kiye jate hain aur unka output kya hota hai

// 

let myDate = new Date() //  is se hume current date mil jati hai
// console.log(myDate); // output: 2024-06-17T12:34:56.789Z (current date and time in ISO format)

// 1. toString() method: is se hume date ka string representation milta hai, jo human-readable format me hota hai
// example: console.log(myDate.toString()); // output: Mon Jun 17 2024 12:34:56 GMT+0000 (Coordinated Universal Time) (current date and time in human-readable format)

// 2. toISOString() method: is se hume date ka ISO 8601 format me string representation milta hai, jo international standard format hota hai
// example: console.log(myDate.toISOString()); // output: 2024-06-17T12:34:56.789Z (current date and time in ISO format)

// 3. toUTCString() method: is se hume date ka UTC (Coordinated Universal Time) format me string representation milta hai
// example: console.log(myDate.toUTCString()); // output: Mon, 17 Jun 2024 12:34:56 GMT (current date and time in UTC format)

// 4. toJSON() method: is se hume date ka JSON format me string representation milta hai, jo ISO format ke jaisa hota hai
// example: console.log(myDate.toJSON()); // output: 2024-06-17T12:34:56.789Z (current date and time in JSON format)

// 5. toLocaleString() method: is se hume date ka string representation milta hai, jo local time zone aur locale ke hisab se hota hai
// example: console.log(myDate.toLocaleString()); // output: 6/17/2024, 12:34:56 PM (current date and time in local format)

// 6. toLocaleDateString() method: is se hume date ka string representation milta hai, jo local time zone aur locale ke hisab se date ke format me hota hai
// example: console.log(myDate.toLocaleDateString()); // output: 6/17/2024 (current date in local date format)

// 7. toLocaleTimeString() method: is se hume date ka string representation milta hai, jo local time zone aur locale ke hisab se time ke format me hota hai
// example: console.log(myDate.toLocaleTimeString()); // output: 12:34:56 PM (current time in local time format)        

// 8. toTimeString() method: is se hume date ka string representation milta hai, jo time ke format me hota hai
// example: console.log(myDate.toTimeString()); // output: 12:34:56 GMT+0000 (Coordinated Universal Time) (current time in time format)

// 9. toDateString() method: is se hume date ka string representation milta hai, jo date ke format me hota hai
// example: console.log(myDate.toDateString()); // output: Mon Jun 17 2024 (current date in date format)

// 10. toLocaleDateString() method: is se hume date ka string representation milta hai, jo local time zone aur locale ke hisab se date ke format me hota hai
// example: console.log(myDate.toLocaleDateString()); // output: 6/17/2024 (current date in local date format)




// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate);




// ab ham pakistan ka date aur time dekhte hain

// let pakistanDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });
// console.log(pakistanDate); // output: 6/17/2024, 5:34:56 PM (current date and time in Pakistan time zone)

// // is ko thora smajh lety hain to ham ne new Date() se current date aur time liya aur uske baad toLocaleString() method use kiya jisme ham ne "en-US" locale specify kiya aur timeZone option me "Asia/Karachi" specify kiya, jisse hume Pakistan ka current date aur time mil jata hai.


// //ham ny myDate ki type check krty hain to us main us ka result kya aata hai
// // us ka result object aata hai kyunki date ek object hota hai jisme date aur time ke related properties aur methods hote hain
// console.log(typeof myDate);


// // Properties or Methods kya hoti hain?

// // properties wo hoti hain jo kisi object ke attributes ko represent karti hain, jaise ki date object ke case me year, month, day, hours, minutes, seconds etc. ye properties hume date aur time ke specific parts ko access karne me madad karti hain.

// // methods wo hoti hain jo kisi object ke functions hote hain, jaise ki date object ke case me getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds() etc. ye methods hume date aur time ke specific parts ko retrieve karne me madad karti hain.

// // console.log(myDate.getFullYear()); // output: 2024 (current year) 

// let myCreatedDate = new Date("2020-01-15"); // is se hume 1st January 2020 ka date mil jata hai
// console.log(myCreatedDate); // output: 2020-01-01T00:00:00.000Z (1st January 2020 in ISO format)
// console.log(myCreatedDate.toLocaleString()); // output: 1/1/2020 (1st January 2020 in local date format)



// // Ham is trah sa date ko create kar sakte hain aur usko format kar sakte hain apne local time zone ke hisab se.
// const d = new Date()
// const formatted = d.toLocaleString("en-UK")
// console.log(formatted)

// // UK ya sirf format control karta ha , time control nahi karta ha , time control karne ke liye hame time zone specify karna padega
// const d1 = new Date()
// const formatted1 = d1.toLocaleString("en-UK", { timeZone: "Asia/Karachi" })
// console.log(formatted1)
// // or 12 hour format me dekhna ho to hame hour12 option specify karna padega
// const d2 = new Date()
// const formatted2 = d2.toLocaleString("en-UK", { timeZone: "Asia/Karachi", hour12: true })
// console.log(formatted2)
// // or 24 hour format me dekhna ho to hame hour12 option specify karna padega
// const d3 = new Date()
// const formatted3 = d3.toLocaleString("en-UK", { timeZone: "Asia/Karachi", hour12: false })
// console.log(formatted3)








// // timestamp ko date me convert karne ke liye hame new Date() constructor me timestamp pass karna hota hai
// const da = new Date()

// const pkTime = da.toLocaleString("en-GB", {
//   timeZone: "Asia/Karachi" , hour12: true
// })
// console.log(pkTime)



let myCreatedDate1 = new Date("2020-01-15") // is se hume 15th January 2020 ka date mil jata hai

let myTimeStamp = Date.now() // is se hume current date aur time ka timestamp mil jata hai, jo milliseconds me hota hai
// console.log(myTimeStamp); // output: 1623945600000 (current date and time in milliseconds since January 1, 1970)
// console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date ();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getTimezoneOffset());





