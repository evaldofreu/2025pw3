initHeaderText = ()=>{
    let header = document.getElementById("header");
    header.innerText = "Bos";
}

bindEvents = ()=>{
    initHeaderText();
}


document.addEventListener('DOMContentLoaded', (e)=>{
    bindEvents();
});

console.log("Selocoooo");