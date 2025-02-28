initHeaderText = ()=>{
    let header =  document.getElementById("header");
     header.innerText = "Hello World - Pedro e Luís Fabiano "
}
bindEvents = ()=>{
  initHeaderText();
}

document.addEventListener(
    'DOMContentLoaded',(e)=>{
        bindEvents();
    });