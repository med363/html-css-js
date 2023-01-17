//console.log(document.getElementsByTagName("body")[0].innerText="med")
let colors = ["red","bleu","yellow","green","purple","gray"]
const changeBackground=()=>{
    //random(Int)0->5 r
    let r = Math.random()*5
    console.log(r);
 r=Math.floor(r)
   document.getElementsByTagName("html")[0].style.backgroundColor=colors[r]
    
}