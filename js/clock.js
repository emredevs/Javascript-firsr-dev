let firstName=prompt("lütfen adinizi giriniz:")
let myName=document.querySelector("div.text1>strong>span#myName")
myName.innerHTML=firstName[0].toLocaleUpperCase() + firstName.slice(1).toLocaleLowerCase();


let days=["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma",]
const newDate = new Date();
document.querySelector("#myClock").innerHTML = newDate.getDay()+"/"+newDate.getMonth()+1+"/"+newDate.getFullYear()+" "+newDate.getHours()+":"+newDate.getMinutes()+":"+newDate.getSeconds()+" "+days[newDate.getDay()];

