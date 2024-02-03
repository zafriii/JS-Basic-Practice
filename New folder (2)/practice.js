//Factorial
const factorial = (n) => {
  
    if(n==0 || n==1){
        return  1;
    }
    else{
        return   n * factorial(n-1);
    }
}

let ans = factorial(5)

console.log(ans)

//Power of a number

const power = (b, e) => {
    return b ** e
}

let ans2 = power(2,3)

console.log(ans2)

//Table of  number from 1-10

const table = (n) => {

for(let i=1; i<=10; i++){

    for(let j=1; j<=10; j++){

        let product  = i*j

        console.log(`${i} * ${j} = ${product}`)

        console.log('------------------------');
    }
}

}

let ans4 = table(6)

console.log(ans4)

//Table of a number

const table2 = (n) => {

    for(let i=1; i<=10; i++){
    
            let product  = i*n
    
            console.log(`${i} * ${n} = ${product}`)
    
            console.log('------------------------');
        
    }
    
    }

let ans5 = table2(6)

console.log(ans5)



//Sum of an array

arr =  [5,7,9]
let sum = 0

for (let i=0; i<arr.length; i++){
   
    sum +=  arr[i]
    
    console.log(sum)

}
