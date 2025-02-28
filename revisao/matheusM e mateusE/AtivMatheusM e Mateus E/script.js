initHeaderText = ()=>{
    let header = document.getElementyById("header");
    header.innerText = "Página Carrega Totalmente";
}

bindEvents = ()=>{
    initHeaderText();
}

document.addEventListener("DOMContentLoaded",(e)=>{
    bindEvents();
});