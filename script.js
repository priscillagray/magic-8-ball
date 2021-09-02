let adviceDisplayEl= document.getElementById("adviceDisplay")
let showAdviceBtnEl = document.getElementById("adviceBtn")
let addAdviceBtnEl = document.getElementById("addBtn")
let momAdvice= ""
let successMessageEl = document.getElementById("success-message")
const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

showAdviceBtnEl.addEventListener("click", showAdvice)
addAdviceBtnEl.addEventListener("click", newAdvice)

function showAdvice() {
    let randomAdvice = Math.floor(Math.random() * advice.length)
    adviceDisplayEl.textContent= advice[randomAdvice]
}

function newAdvice() {
  
  momAdvice = document.getElementById("newadvice-text").value
   advice.push(momAdvice)
   successMessageEl.textContent="Your advice has been added! Ask your question to see if the advice is sound."
  addAdviceBtnEl.textContent="Add more"

} 


// for ( let i = 0; i < advice.length; i ++){
//     console.log(advice[i])
// }

// stretch goals 
// - more advice
// - add question
// - change colors