//OBJECTS


const obj = 
    {
        name: "Niha",
        age:24
    }// Here name & age = Key

console. log(obj.name, obj.age)
console. log(obj["name"], obj["age"])

newAge = obj.age =  30;// Change a value of an object
console.log(newAge);


const fbUser = {}//Can create object like this

fbUser.name = "Niha Zafar"
fbUser.email = "niha@gmail.com"

console.log(fbUser)


const regularUser = {
    email: "niha00@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Niha",
            lastname: "Zafar"
        }
    }
}

console.log(regularUser.fullname.userfullname. firstname)//We can access nested value like this



const users = [
    {
        id: 1,
        email: "nn@gmail.com"
    },
    {
        id: 2,
        email: "hh@gmail.com"
    },
    {
        id: 3,
        email: "hm@gmail.com"
    },
]

// for  (let i=0; i<users.length; i++){
//     console.log(users[i])
// }

console.log(users[0].id, users[0].email)//Acess ing the array element using index

for (const user of users){    
    if (user.email === 'hm@gmail.com'){
        console.log(`This is user ${user.id} with email ${user.email}`);
        break;
    }
}

//Object De-structure

const {id, email} = users;


//Adding Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


const obj3 = { obj1, obj2 }

console.log(obj3) //{{,}}

const obj4 = {...obj1, ...obj2}

console.log(obj4) //{}

const obj5 = Object.assign({}, obj1, obj2)
console.log( obj5)

