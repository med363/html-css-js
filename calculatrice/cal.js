
var plus=document.getElementById("plus")
var mins=document.getElementById("mins")
var fois=document.getElementById("fois")
var division=document.getElementById("division")
var resultat=document.getElementById("resultat")

function somme(){
    var x=document.getElementById("var1").value
    var y=document.getElementById("var2").value
    console.log('hello');
    console.log(x);
    console.log(y);
    resultat.value=parseInt(x)+parseInt(y)
     //resultat.innerHTML=`<p>hello</p>`

    
}

function sou(){
    var x=document.getElementById("var1").value
    var y=document.getElementById("var2").value
    console.log('hello');
    console.log(x);
    console.log(y);
    resultat.value=(parseInt(x)-parseInt(y))
     //resultat.innerHTML=`<p>hello</p>`

    
}

function prod(){
    var x=document.getElementById("var1").value
    var y=document.getElementById("var2").value
    console.log('hello');
    console.log(x);
    console.log(y);
    resultat.value=parseInt(x)*parseInt(y)
     //resultat.innerHTML=`<p>hello</p>`

    
}

function division(){
    var x=document.getElementById("var1").value
    var y=document.getElementById("var2").value
    console.log('hello');
    console.log(x);
    console.log(y);
    if(y!=0){
    resultat.value=parseInt(x)/parseInt(y)}
    else{
        resultat.value="il faut que le dénominateur different de zero"
    }
     //resultat.innerHTML=`<p>hello</p>`

    
}



//plus.addEventListener('click',somme);

