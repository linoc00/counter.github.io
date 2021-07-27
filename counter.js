let counter=0;
let increase= document.querySelector(".increase");
let decrease= document.querySelector(".decrease");
let increaset= document.querySelector(".increaset");
let decreaset= document.querySelector(".decreaset");
let reset= document.querySelector(".reset");
increase.addEventListener("click", ()=>{
    counter +=1;
    document.getElementById("number").innerHTML=counter;
});
decrease.addEventListener("click", ()=>{
    counter -=1;
    document.getElementById("number").innerHTML=counter;
});
increaset.addEventListener("click", ()=>{
    counter +=2;
    document.getElementById("number").innerHTML=counter;
});
decreaset.addEventListener("click", ()=>{
    counter -=2;
    document.getElementById("number").innerHTML=counter;
});
reset.addEventListener("click", ()=>{
    counter =0;
    document.getElementById("number").innerHTML=counter;
});

