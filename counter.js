let counter=0;
let increase= document.querySelector(".increase");
let decrease= document.querySelector(".decrease");
let increaset= document.querySelector(".increaset");
let decreaset= document.querySelector(".decreaset");
let reset= document.querySelector(".reset");
increase.onclick=function(){
    counter +=1;
    document.getElementById("number").innerHTML=counter;
}
decrease.onclick=function(){
    counter -=1;
    document.getElementById("number").innerHTML=counter;
}
increaset.onclick=function(){
    counter +=2;
    document.getElementById("number").innerHTML=counter;
}
decreaset.onclick=function(){
    counter -=2;
    document.getElementById("number").innerHTML=counter;
}
reset.onclick=function(){
    counter=0;
    document.getElementById("number").innerHTML=counter;
}

