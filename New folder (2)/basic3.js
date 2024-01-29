//ARRAYS

const cars = ['BMW', 'Audi',  'Mercedes'];
console.log(cars);

const fruits = ['Apple', 'Mango', 'Litchi']
fruits[1]='Orange'

console.log(fruits)// To change an element in an index

//Array length

console.log(cars.length)

//Array toString()/Join - Coverts an array to strings

console.log(cars.toString())

console.log(cars.join())

console.log(fruits.join('-'))

//Array at()- Returns the value of a specified element from an array. The at() method returns the same as []

console.log(cars.at(2)) //Alternative of = cars[2]


//Array push()-Adds at last

let newFruits = fruits.push("Kiwi")
console.log('new',newFruits)
console.log(fruits)

//Array pop()-Removes from last

let newFruits2 = fruits.pop();
console.log('removed fruit: ',newFruits2)
console.log(fruits)


// Unshift() - add at beginning 

let newCar = cars.unshift("Noha")
console.log('New Car added :',newCar)
console.log('Cars Array after adding :',cars)


//Shift() - remove elements from beginning

let newCar2 = cars.shift()
console.log(' Car removed :',newCar2)
console.log('Cars Array after removing :',cars)


//Arary concat()

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys)

console.log("Children :",myChildren)

const allChild = [...myBoys, ...myGirls];//Another way of concat

console.log("New  way of Children : ",allChild);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const  totalKids = arr1.concat(arr2,arr3)

console.log ("Total Kids are :",totalKids )

//Array Spread 

const  totalKids1 = [...arr1, ...arr2 , ...arr3]

console.log ("Total Kids are :",totalKids1) ;


//Array flat()

const myArr = [[1,2],[3,4],[5,6] ];
const newArr = myArr.flat();

console.log(newArr)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


//Array indexOf() If the element is not found, it returns -1.
console.log(cars.indexOf("BMW"))

//Array lastIndexOf()

console.log(cars.lastIndexOf("BMW"))


//Array includes() -if the element is present or not

console.log(cars.includes("Audi"))


//Array slice()

console.log(fruits.slice(2)) //remove that number of elemts from 1st



//Array splice()


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi") //Here, insert  at position 2 and remove nothing
console.log(fruits2)

fruits2.splice(2,2,"Peach", "Coconut")//----//Here, insert  at position 2 and remove last 2 elements
console.log(fruits2)


//Array sort()/toSorted()

console.log(fruits2.sort())


//Array reverse()/toReversed()

console.log(cars.reverse())


//sort then reverse - desending order

console.log(fruits.sort());
console.log(fruits.reverse());