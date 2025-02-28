   initHeaderText = ()=>{
        let header = document.getElementById("header");
        header.innerText = "Hello World";
   }
   
   bindEvents = ()=>{
        initHeaderText();
    }
    
    document.addEventListener('DOMContentLoaded',(e)=>{
        bindEvents();
    });