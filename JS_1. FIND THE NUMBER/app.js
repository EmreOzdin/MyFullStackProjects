let number=document.getElementById("number");
let check=document.getElementById("check");
let try1=document.getElementById("try1");
let button1=document.getElementById("button1");
let number1= Math.floor(Math.random() * 101);
let attemps=document.getElementById("attemps");
let h2=document.getElementById("h2")
let h3=document.getElementById("h3")


check.addEventListener("click", ()=>{
    if(number.value == number1){
        h2.style.fontSize="1.5rem";
        h2.style.color="red";
        h2.innerText=`Congrats, ypu found the chosen number ${number1} on your ${11-Number(try1.innerText)}. attempt`;
        attemps.style.display = "none";
        button1.style.display = "block";
    }
    else if (number.value>number1){
        h2.style.fontSize="1.5rem";
        
    }
})