const name1=document.getElementById('name')
const prenom=document.getElementById('prenom')
const option=document.getElementById('option')
const gender=document.querySelector(".gender")
const dt = document.getElementById('date')
const mail=document.getElementById('mail')
const requires=document.getElementById('req')
const textA=document.getElementById('textA')
/*const skills=document.getElementsByName("skills")*/
const form_tab=document.getElementById('form')
const  err_name=document.getElementById('err_name')
const  err_prenom=document.getElementById('err_prenom')
const  err_mail=document.getElementById('err_mail')
const  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/*function Verif(){}*/
const Verif=()=>{

if(mail.value == ''){
    console.log(err_mail.innerHTML="<p>le champ e-mail est necessaire</p>"
    );
    err_mail.innerHTML="<p>le champ e-mail est necessaire</p>"; 
    err_mail.style.color="red"
    err_mail.style.textShadow="0px 2px 2px 1px red"
    mail.focus()
    return false
}
else
err_mail.innerHTML="";
if (!mail.value.match(validRegex) ){
    err_mail.innerHTML="<p>necessaire d'utilise le @ et le .</p>"; 
    err_mail.style.color="red"
    err_mail.style.textShadow="0px 2px 2px 1px red"
    mail.focus()

}
else
err_mail.innerHTML="";
if ( mail.value == '' || !mail.value.match(validRegex)){
    return false
}

}

const Verif_check=()=>{
    let valid=false
if (document.getElementById("DEVELLOPEMENT").checked) {
    valid=true
}
else if (document.getElementById("SYS ADMIN").checked) {
    valid=true
}
else if (document.getElementById("DEVOPS").checked) {
    valid=true
}
if(valid){
    document.getElementById("msg").innerHTML=""
}
else{
    document.getElementById("msg").innerHTML="Au moins un skill doit etre choisis"
    return false
}

}


const Verif_name=()=>{
        if(name1.value == '' ){
            err_name.innerHTML="le champ nom est necessaire"; 
            err_name.style.color="red"
            err_name.style.textShadow="0px 2px 2px 1px red"
            name1.focus()
           }
           else
           err_name.innerHTML=""; 


    }
    
    const Verif_prenom=()=>{
        if(prenom.value == '' ){
            err_prenom.innerHTML="le champ prenom est necessaire"; 
            err_prenom.style.color="red"
            err_prenom.style.textShadow="0px 2px 2px 1px red"
            name1.focus()
           }
           else 
           err_prenom.innerHTML="";
    }
//  function recupValeurs() {
//         var resultat = "";
//            for (var i = 0; i < skills.length; i++) {
//               if (skills[i].checked) {
//                  resultat += skills[i].value  + ", ";
//               }
//            }
//            return resultat
//       }
      
//      const res=recupValeurs();
    
    const Create_form=()=>{
        let table=`<div><table border='1'><tr><th>champs</td><th>input</th></tr>
        <tr><td>nom</td><td>${name1.value}</td></tr>
        <tr><td>prenom</td><td>${prenom.value}</td></tr>
        <tr><td>date de naissance</td><td>${dt.value}</td></tr>
        <tr><td>email</td><td>${mail.value}</td></tr>
        <tr><td>gender</td><td>${gender.value}</td></tr>
        <tr><td>pays</td><td>${option.value}</td></tr>
        <tr><td>Skills</td><td>${skills.value}</td></tr>
        <tr><td>Experience</td><td>${textA.value}</td></tr>
        </table>
        </div>`
        console.log(table);
        if(!name1.value == '' || !prenom.value == '' || mail.value.match(validRegex))
        form_tab.innerHTML=table
        else
        form_tab.innerHTML="<b>no content</b>"
        
    }
    
    const Create_table=()=>{
        let table="<div><table border='1'><tr><th>champs</th><th>obligation</th></tr><tr><td>nom</td><td>Ne doit pas etre vide</td></tr><tr><td>prenom</td><td>Ne doit pas etre vide</td></tr><tr><td>email</td><td>Ne doit pas etre vide et doit contenu le @ et le .</td></tr></table></div>"
        console.log(requires.innerHTML=table)
        
    }
