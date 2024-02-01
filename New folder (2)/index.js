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

//IIFE => Global scope's polutions make problems sometimes so if there is any variable/anything declared we use IIFE to avoid that polution.

(
   function print(){
         console.log("Print")
   }//print()= named IIFE

)(); // to break the IIFE we use ;

((name)=>{

   console.log("Print Again", name)

})("Niha") //Now we can run this


//Named IIFE, Unnamed IIFE, Passing parameters,  Return values, writing 2 IIFEs togather
