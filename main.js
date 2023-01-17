var produits = [

    {
        id : 1,
        name : "montre",
        image : "montre.jpg",
        description : "montre Samsung s 4",
        price : 200
    },

    {
        id : 2,
        name : "Iphone",
        image : "montre.jpg",
        description : "montre Samsung s 4",
        price : 200
    },

    {
        id : 3,
        name : "Pc",
        image : "montre.jpg",
        description : "montre Samsung s 4",
        price : 200
    }
]

localStorage.setItem('user' , "wassim" );
var panier = []
if ( localStorage.getItem('cart') != null ){
    panier = localStorage.getItem('cart')
    console.log(panier)
    panier = panier.split(',');
}


// "1,2,3" => [ 1 , 2 , 3 ]


var item = panier.length;
var compteur = document.getElementById("compteur")
if( item > 0 ){
        compteur.style.backgroundColor = "orangered"
        compteur.style.color = "white"
        compteur.style.padding = "5px"
        compteur.style.borderRadius = "50%"
}

  

compteur.innerText = item 
var produitsBlock = document.getElementById("products");


produits.forEach( produit => {


    produitsBlock.innerHTML += `<div class="col-4">
                                        <div class="card" >
                                            <img src="images/${produit.image}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                            <h5 class="card-title"> ${produit.name} </h5>
                                            <p class="card-text"> ${produit.description} </p>
                                            <a href="#" class="btn btn-primary" onclick="ajouterPanier(${produit.id})" >Ajouter aux panier</a>
                                            <a href="#" class="btn btn-danger" onclick="supprimerPanier(${produit.id})" >Enlever aux panier</a>
                                            </div>
                                        </div>
                                </div>`;


} )

function ajouterPanier(id){
    // verification id existe
    if (!existe(panier,id)){
        panier.push(id)
        compteur.innerText = parseInt(compteur.innerText) + 1 ;
        compteur.style.backgroundColor = "orangered"
        compteur.style.color = "white"
        compteur.style.padding = "5px"
        compteur.style.borderRadius = "50%"
    }
    
    localStorage.setItem('cart' , panier );
   
}

function existe( tab , value ){

    var existe = false;
    tab.forEach( element =>{
        //       '1' == 1 , JavaScript Typescript , EcmaScript 
        if ( element == value  ){
            existe = true;
        }
    })

    return existe;

}

function supprimerPanier(id){

    // [ '1' , '2' , '3' ] , '1' // erreur 
    console.log(id.toString())
    var indice = panier.indexOf(id.toString()); // indexOf ( position , -1 )
    console.log(indice);
    if (existe(panier,id)){
        panier.splice(indice,1);
        compteur.innerText = parseInt(compteur.innerText) - 1 ;

        if ( parseInt(compteur.innerText) == 0 ){
            compteur.style.backgroundColor = "transparent"
            compteur.style.color = "black"
            compteur.style.padding = "0"
            compteur.style.borderRadius = "none"
        }
      
    }

    console.log(panier)

}




