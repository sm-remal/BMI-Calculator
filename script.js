
const weight = document.querySelector("#weight");
const button = document.querySelector("#button");
const result = document.querySelector(".result");
const score = document.querySelector("#score");

const feet = document.querySelector(".feet");
const inches = document.querySelector(".inches");

button.addEventListener("click", ()=>{
let newWeight = parseFloat(weight.value);
let totalFeet = parseFloat(feet.value * 30.48);
let totalInches = parseFloat(inches.value * 2.54);
let newHeight = totalFeet + totalInches;

    newHeight = newHeight / 100;
    const sqrHeight = newHeight * newHeight;
    const bmi = newWeight / sqrHeight;
    score.textContent = bmi.toFixed(2);
    result.style.display = "block";

    if(score.textContent < 18.6){
        score.style.background = "#f1c40f";
    }else if(score.textContent < 24.9){
        score.style.color = "#FFFFFF"
        score.style.background = "#009432"
    }else{
        score.style.background = "#eb2f06"
    }
})

const reseatButton = document.querySelector(".reseat");
reseatButton.addEventListener("click", function(){
     feet.value = "";
     inches.value = "";
     weight.value = "";
     result.style.display = "none"
     score.textContent = "";
     score.style.background = "";
})

const form = document.querySelector("#form")
form.addEventListener("submit", (even)=>{
    even.preventDefault();
})

