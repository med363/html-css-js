

etudiant1 = {
    "nom"  : "ahmed",
    "prenom" : "ben slama",
    "Notes" : [ [ "physique" , 5  , 2 ] , [ "math" , 14 , 3 ] , [ "francais" , 17 , 1 ] , [ "anglais" , 14 , 1 ]  ],
    "moy":null
     
    } ,
    
    etudiant2 = {
    "nom"  : "morad",
    "prenom" : "ben mhatheb",
    "Notes" : [ [ "physique" , 8  , 2 ] , [ "math" , 17 , 3 ] , [ "francais" , 10 , 1 ] , [ "francais" , 15 , 1 ]  ],
    "moy":null
    
     
    } ,
    
    etudiant3 = {
    "nom"  : "mariem",
    "prenom" : "ben ali",
    "Notes": [ [ "physique" , 10  , 2 ] , [ "math" , 12 , 3 ] , [ "francais" , 12 , 1 ] , [ "francais" , 16 , 1 ]  ],
    "moy":null
    
     
    } 

    function getFullName(elt){
return  elt.nom +' '+elt.prenom

    }
        
        
    

   function calculerMoyGenerale(notes){
    var somMoy = 0
    var somCoef =0
    notes.forEach(matier=>{
        var moyMatier=matier[1]*matier[2];
         somMoy += moyMatier
         somCoef += matier[2]
    })
    return somMoy/somCoef
   }


   console.log(calculerMoyGenerale(etudiant1.Notes))

   console.log(getFullName(etudiant1));


   etudiant1.moy=calculerMoyGenerale(etudiant1.Notes)
   etudiant2.moy=calculerMoyGenerale(etudiant2.Notes)
   etudiant3.moy=calculerMoyGenerale(etudiant3.Notes)

   console.log(etudiant1);

   var etudiants =[]
   etudiants.push(etudiant1)
   etudiants.push(etudiant2)
   etudiants.push(etudiant3)

   function getPremierRong(etudiants){
    var etudiant = etudiants[0]
    for(let i=1;i<etudiants.length;i++){
        if(etudiants[i].moy>etudiant.moy){
            etudiant=etudiants[i]
        }
        
    }
console.log(getFullName(etudiant))
return etudiant.moy
   }

console.log(etudiants);
   console.log(getPremierRong(etudiants));



  