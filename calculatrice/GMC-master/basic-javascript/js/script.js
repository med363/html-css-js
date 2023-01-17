function makeBold(){
    document.getElementById("text").style.fontWeight="bold";
}

function makeItalic(){
    document.getElementById("text").style.fontStyle="italic";
}

function makeUnderline(){
    document.getElementById("text").style.textDecoration="underline";
}

function changeFontFamily(event) {
    document.getElementById("text").style.fontFamily = event.value;
}

function changeFontSize(e) {
    document.getElementById("text").style.fontSize=e.value;
}
