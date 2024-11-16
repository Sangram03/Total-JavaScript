let score =34

//const {scope} =req.body
console.log(typeof score);
console.log(typeof (score));

let score3 ="34"

//const {scope} =req.body
console.log(typeof score3);
console.log(typeof (score3));

let valueInNumber = Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);

let score4 ="34abc"

//const {scope} =req.body
console.log(typeof score4);
console.log(typeof (score4));

let valueInNumber2 = Number(score4)
console.log(typeof score4);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score5 =null

//const {scope} =req.body
console.log(typeof score5);
console.log(typeof (score5));

let valueInNumber3 = Number(score5)
console.log(typeof score5);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);


let score6 =undefined

//const {scope} =req.body
console.log(typeof score6);
console.log(typeof (score6));

let valueInNumber4 = Number(score6)
console.log(typeof score6);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


let score7 =true

//const {scope} =req.body
console.log(typeof score7);
console.log(typeof (score7));

let valueInNumber5 = Number(score7)
console.log(typeof score7);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);


// "33" => 33
// "34abc" => NaN
// true => 1 ; false => 0
//

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Name True
// "" => false
// "hitesh" => true

let someNumber = 33
let  stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)