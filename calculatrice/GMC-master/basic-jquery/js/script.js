
function makeBold(){
    $("#text").css("fontWeight", "bold");
}

function makeItalic(){
    $("#text").css("fontStyle", "italic");
}

function makeUnderline(){
    $("#text").css("textDecoration", "underline");
}

function changeFontFamily(e) {
    $("#text").css("fontFamily", e.value)
}

function changeFontSize(e) {
    $("#text").css("fontSize", e.value)
}



// // function makeBold(){
// //     document.getElementById("text").style.fontWeight="bold";
// // }

// function makeItalic(){
//     document.getElementById("text").style.fontStyle="italic";
// }

// function makeUnderline(){
//     document.getElementById("text").style.textDecoration="underline";
// }

// function changeFontFamily(e) {
//     document.getElementById("text").style.fontFamily = e.value;
// }

// function changeFontSize(e) {
//     document.getElementById("text").style.fontSize=e.value;
// }