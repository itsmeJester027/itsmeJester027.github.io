

let place = document.querySelector(".content")
let dt = document.querySelector(".date")
let imgs = document.querySelector(".icon")
let cons = document.querySelector(".con")
let cel = document.querySelector(".value")
let api_key = "3b8b376d27ec4b5fb3214405232501"
let values = {
   
}
getLocation()
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        alert("Not applicable to yor Browser");
    }
}

function showPosition(pos){
    let location = pos.coords.latitude+","+pos.coords.longitude
    let lugui = "14.1439950,122.8247590";
    let lnk = "https://api.weatherapi.com/v1/current.json?key=3b8b376d27ec4b5fb3214405232501&q="+location
console.log(lnk)
    fetch(lnk).then((response)=>{
        let data = response.json()

        return data;
    }).then((x)=>{
        
        values.icon = x.current.condition.icon
        values.condi = x.current.condition.text
        values.celsius = x.current.temp_c
        values.name = x.location.name
        values.region = x.location.region
        
    }).then(()=>{
        display()
    })
    function display(){
        dt.innerText= values.day +", "+values.month+" "+values.days+", "+values.year
        imgs.src=values.icon
        cons.innerText = values.condi
        cel.innerText = values.celsius
        place.innerText= values.name+", "+values.region
      
    }
}
date()
setInterval(1000,date)
function date(){
    let dts = new Date();
    let day = dts.getDay()
    var val = ""
    var m = ""
    switch(day){
        case 0: val="Sun"; break;
        case 1: val="Mon";break;
        case 2: val="Tue"; break;
        case 3: val="Wed";  break;
        case 4: val="Thur";  break;
        case 5: val="Fri";  break;
        case 6: val="Sat";  break;

    }
    switch(dts.getMonth()){
        case 0:  m="January"; break;
        case 1:  m="February"; break;
        case 2: m="March"; break;
        case 3: m="April"; break;
        case 4: m= "May"; break;
        case 5:m="June"; break;
        case 6: m="July"; break;
        case 7: m="August"; break;
        case 8: m="September"; break;
        case 9: m="October"; break;
        case 10: m="November"; break;
        case 11: m="December"; break;

    }
    values.day = val
    values.month = m
    values.days = dts.getDay()
    values.year = dts.getFullYear()
}