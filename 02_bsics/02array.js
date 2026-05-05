const A_heros = ["Ali","Umar","Khalid"]
const B_heros = ["qasim","tariq","AbRehman"]

// A_heros.push(B_heros)
// console.log(A_heros[3]);
// console.log(A_heros[2]);

const d = A_heros.concat(B_heros) 
//console.log(d);// concat ka liy a value ko nay varable main rakhna hota hy , or push pahly waly main hi merge ho jatahy




// const allHeros = [...A_heros, ...B_heros]
// console.log(allHeros);                        is ko kahty hain spred karna yani bakhair dana or ya zyada istimal main hy is sy ham kai arrays ko iktha kar skta hain.


const another_array = [1,2,3,4,5,6,[7,8,9],12,45,67,[32,44,55,[53]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// ham yahan par data ko array main convert kar skta hain, or ham pahly pta karty hain kya ya array hai ya nahi, is k liy ham Array.isArray() method ka use karte hain, or is main ham jis data ko check karna chahte hain usko as a parameter pass karte hain, or ye method true ya false return karta hai.

// console.log(Array.isArray("tariq"));

// phir ham data ko array main convert kar skta hain, is k liy ham Array ka bad .from() method ka use karte hain, or is main ham jis data ko array main convert karna chahte hain usko as a parameter pass karte hain, or ye method ek new array return karta hai.

// const str = "tariq"
// const arr_from_str = Array.from(str)
// console.log(arr_from_str);

// console.log(Array.from({name:"khan"}));//  interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));













