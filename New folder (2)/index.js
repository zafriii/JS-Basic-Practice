var nickName = "Niha";
let age = 22;
age = 55;
const country = "Bangladesh";
const nationality = "Bengali";
let phnNo = 8801977770;



// console.table([nickName, age, country, nationality,phnNo]);

// Number convertion = If we convert a string to a number -> Number()..string->Nan, null->0, undefined->Nan, boolen->0/1
// typeof(Nan)-> number
//bolean convertion = boolen()..if empty->false, if any value ->true
//String convertion = String()
//String is immutable- it cant't be changed
//Template Literals = String Interpolation

//Spread Operators
 const num = (...a) =>{
    return a;
 }

console.log(num(34,78,56));

