//setInterval -> Will execute after every 2 secs

setInterval( () => {
    console.log("I love Js")
}, 2000
    
)


//setTimeout -> Will execute after 2 secs once

setTimeout( () => {
    console.log("I love Js")
}, 2000
    
)

//Async Await

async function getData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const result = response.json();
  console.log(result)
}

console.log(getData());


