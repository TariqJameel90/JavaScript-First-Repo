//  IIFE (Immediately Invoked Function Expression)

// 1. IIFE is a function that is executed immediately after it is defined.

(function chai () {
    console.log(`DB connected successfully`);
})();
//  global scope ka pollution sy kai bar problem hota hai to is problem ko solve karne ke liye IIFE ka use kiya jata hai. 
// chai();

(()=>{

})
()