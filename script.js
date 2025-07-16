// alert button functionality
const learnBtn = document.getElementById("learnMore");
learnBtn.addEventListener("click",function(){
    alert("Welcome to the Brotherhood, Assassin!")
})
// alert button functionality

// optional: Animate text the oppearance after delay
window.addEventListener("load",() => {
    const bio = document.querySelector(".bio-section");
    const quote = document.querySelector(".quote-section");
     bio.style.animationPlayState = "running";
  quote.style.animationPlayState = "running";
}) 


// optional: Animate text the oppearance after delay