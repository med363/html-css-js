//js DOM
console.log(document.getElementsByTagName("h1"));//tab
console.log(document.getElementsByTagName("h1")[0]);//obj
console.log(document.getElementsByTagName("h1")[0].innerText);//string
var title1 = document.getElementsByTagName("h1")[0]
var title2 = document.getElementsByTagName("h1")[1]
console.log(document.getElementsByTagName("p")[0].innerText = "welcome to this session");
var paragraphe= document.getElementsByTagName("p")[0]
// acces obj + mod
//amelioration
title1.innerText ="POST title 2"
title1.style.color = "red"
paragraphe.innerText = "welcome to this session"
paragraphe.style = "bleu"
title2.innerText="hello"
//JS Events
const changeColor = ()=>{
    document.getElementsByTagName("h1")[0].style.color="yellow"
}
