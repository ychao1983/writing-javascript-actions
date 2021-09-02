
console.log("Hello World")

const core = require("@action/core");


const firstGreeting =core.getInput("first-greeting");
const secondGreeting =core.getInput("Second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`)
console.log(`Hello ${secondGreeting}`)
if(thirdGreeting){
   console.log(`Hello ${thirdGreeting}`)
}
