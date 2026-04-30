const accountId = 144553
let accountEmail = "tariqjameel.com"
var accountPassword = "1234"
accountCity = "KotAddu"


// accountId = 2   // not allowd
accountEmail = "newhc@hc.com"
accountPassword = "new9999"
accountCity = "newislamabad"


/*

*/


console.table([accountPassword, accountEmail, accountId, accountCity]);



// summary:
// 1. const: constant value ko declare karne ke liye use hota hai, jise change nahi kiya ja sakta.

// 2. let: block-scoped variable ko declare karne ke liye use hota hai, jise change kiya ja sakta hai.

// 3. var: function-scoped variable ko declare karne ke liye use hota hai, jise change kiya ja sakta hai, lekin var ka use ab recommend nahi kiya jata.

// 4. Implicit global variable yani jab variable declare nahi kiya jata, to wo automatically global variable ban jata hai, lekin is tarah ke variable ka use avoid karna chahiye, kyunki ye code ko unpredictable bana sakta hai.