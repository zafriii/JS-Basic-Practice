//STRINGS


let str = "Bangladesh"

//String length

console.log(str.length);

//String charAt()

console.log(str.charAt(6));

//String charCodeAt()

console.log(str.charCodeAt(6));

//String at()

console.log(str.at(7));

//String []

console.log(str[4]);

//String toUpperCase()

console.log(str.toUpperCase());

//String toLowerCase()

console.log(str.toLowerCase());

//String concat()

let str2 = 'Sylhet'

let conCat = str2.concat(str);

conCat = str2 + "," + str

console.log(conCat);


//String trim()

let str3 = "   Javascript   "

console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());


//String padStart()
let text = "syl"
let padding = text.padStart(6,"c")
padding = text.padStart(4,"c")

console.log(padding);

//String padEnd()

text = "syl"
let addText = text.padEnd(5,8)

console.log(addText);


//String repeat()

let msg = "Hello"
let repMsg = msg.repeat(3)

console.log(repMsg);

//String replace()

let text2 = "Please visit Microsoft!";
let newText = text2.replace("Microsoft", "Google")

let text3 = "Please visit Microsoft & Microsoft!";
let newText2 = text3.replace(/Microsoft/g, "Google")


let text4 = "Please visit Microsoft!";
let newText3 = text4.replace (/MIRCOSOFT/i, "W3school")

let text5 = "I love dogs & dogs";
let newText4 = text5.replaceAll ("dogs", "cats");

console.log(newText)
console.log(newText2)
console.log(newText3)
console.log(newText4)


//String slice()

let cats = "Mitu, Monu, Tushu"

let newCats = cats.slice(5,17)
console.log(newCats)


//String subString()

let nickName = "Jhon, Willium, Doe"

newName = nickName.substring(4,12)

console.log(newName)

//String IndexOf()
//Both indexOf(), and lastIndexOf() return -1 if the text is not found

let  myFavColor = "My favorite color is Red!"

indexN = myFavColor.indexOf("Red")
indexM = myFavColor.indexOf("red")//-1

console.log(indexN)
console.log(indexM)

// String lastIndexOf()

let  favSport = "I like to play Football, Basketball, Tennis, Volleyball.";

let  favSport1 = "I like to play Football & Football";

lastIndexN = favSport.lastIndexOf(", ")
lastIndexM = favSport.lastIndexOf("Football")

lastIndexY = favSport1.lastIndexOf("Football")

console.log(lastIndexN)
console.log(lastIndexM)
console.log(lastIndexY)


// String search()

let rain = "Its raining & raing since morning"

let rainSearch = rain.search("raining")

console.log(rainSearch)

//String match()

// let matchText = "The rain in SPAIN stays mainly in the plain";

// let matched = matchText.match("ain")

// console.log(matched)


//String includes()

let text6 = "Hello world, welcome to the universe.";

let inText = text6.includes("world");
let inText2 = text6.includes("world",6);

console.log(inText)
console.log(inText2)


// String startsWith()

let start = text6.startsWith("Hello")

let start2 = text6.startsWith("Hello", 0)

let start3 = text6.startsWith("Hello", 5)

console.log(start)
console.log(start2)
console.log(start3)

// StringendsWith()

let end =  text6.endsWith(".")

let end2 = text6.endsWith("universe.", 10)

console.log(end)
console.log(end2)

//Count word in String

let sentence = "JavaScript functions are powerful tools."
let countWords =  sentence.split(' ').length

console.log(countWords)


//Reverse String

let sentence2 = "JavaScript is fun!"
let num = '12345'
let word = 'Sylhet'

let revStr = sentence2.split('').reverse().join('')
let revStr2 = num.split('').reverse().join('')
let revStr3 = word.split('').reverse().join('')

console.log(revStr)

console.log(revStr2)

console.log(revStr3)

//Reverse String with loop

for(let i=word.length-1;i>=0;i--){
    console.log(word[i])
}

//String split()

let splited = word.split('')
let splited1 = word.split('|')

console.log(splited)
console.log(splited1)


//String in Alphabetic order

let order = word.split('').sort().join('')

console.log(order)

//Escape character

let escapes = "We are so called 'vikings' from the north"

console.log(escapes)