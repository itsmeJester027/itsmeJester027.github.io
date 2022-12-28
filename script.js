let mon = document.querySelector(".mon");
let tue = document.querySelector(".tues");
let thu = document.querySelector(".thur");
let wed = document.querySelector(".wed");
let fri = document.querySelector(".fri");
let sat = document.querySelector(".sat");
let sun = document.querySelector(".sun");
let am = document.querySelector("#am");
let pm = document.querySelector("#pm");
let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let tit = document.querySelector(".title");


const green = 'rgb('+9+',' +242+','+ 8+')'




setInterval(clock,1000);
function clock(){
    let date = new Date();
    let hrs = date.getHours();
    let secs = date.getSeconds();
    let mins = date.getMinutes();
    let days = date.getDay();

    switch(days){
        case 0: sat.style.color=green; break;
        case 1: mon.style.color=green; break;
        case 2: tue.style.color=green; break;
        case 3: wed.style.color=green; break;
        case 4: thu.style.color=green; break;
        case 5: fri.style.color=green; break;
        case 6: sun.style.color=green; break;
    }

    if(hrs>12 && mins>=1 && secs >=1){
        pm.style.color=green;
    }else{
        pm.style.color=green;
    }
    
    if(secs<10){
        sec.innerHTML = "0"+secs;
    }else{
        sec.innerHTML = secs;
    }

    if(mins<10){
        min.innerHTML="0"+mins;
    }else{
        min.innerHTML=mins;
    }
    hr.innerHTML=hrs;
    
    

}

clock();