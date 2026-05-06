// const tenderuser =  new Object();  ya singleton object create krne ka ek aur tareqa hai. new Object() use krke bhi object create kr skty hain. lekin object literal zyada use hota hai.

const tenderuser = {}  // ya non singleton object create krne ka tareqa hai. 

tenderuser.id = "123asd";
tenderuser.name = "tariq";
tenderuser.email = "tariq@example.com";
tenderuser.isLoggedIn = false;
// console.log(tenderuser);

const regularuser = {
    email: "some@example.com",
    fullname: {
        userfullname: "tariq jameel",
        userlastname: "jameel",
        firstname: "tariq"
    }
}

// console.log(regularuser.fullname?.firstname);

const object1 = {1: "a", 2: "b", 3: "c"};    

const object2 = {"4": "d", "5": "e", "6": "f"}; 

//const object3 = Object.assign({}, object1, object2);  ya merge krne ka ek aur tareqa hai. Object.assign() use krke bhi do objects ko merge kr skty hain. 
//console.log(object3);



const object = {object1, object2};
//console.log(object);   // is sy object ke andar object1 aur object2 dono objects aa jate hain. lekin agar ham chahte hain ke object ke andar object1 aur object2 ke properties aa jayein to ham spread operator use kr skty hain.

const objec = {...object1, ...object2};// object spread operator use krke objects ko merge kr skty hain or 90% log spread operator use krte hain.
// console.log(objec); 

const user = [
    {
        id : 1, 
        user : "tariq",
        email : "t@gmail.com"
    },
    {
        id : 2,
        user : "ali",
        email : "ali@example.com"
    },
    {
        id : 3,
        user : "ahmed",
        email : "ahmed@example.com"
    }
]

const userEmail = user[1].email;
// console.log(userEmail);
// console.log(tenderuser);
// console.log(Object.keys(tenderuser));
// console.log(Object.values(tenderuser));
// console.log(Object.entries(tenderuser));
// console.log(tenderuser.hasOwnProperty("email"));





//++++++++++++++++++++++++++++  Destructuring Objects  ++++++++++++++++++++++++++++


//  Ab ham object ko destructure kasy karty hain is ko dakhty hain.

const course = {
    courseName : "js in urdu",
    courseInstructor : "tariq jameel",
    coursePrice : 999
}

// course.courseInstructor      // is tarah ham course object ke andar courseInstructor property ko access kr skty hain.  lakin ya ham nahi karin ga 


// is ki jga ham 1 or santax istimal krengy 

const {courseInstructor: ustad} = course;  
console.log(ustad);


// ++++++++++++ API 
//++++++++ InJson +++++++++++

// {
//     "name" : "tariq",
//     "email" : "tariq@example.com",
//     "password" : "123456"
// }

[
    {},
    {},
    {} 
    
]




