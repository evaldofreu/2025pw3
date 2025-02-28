    initHeadertext =()=>{
        let header = document.getElementById("header");
        header.innerText = "Hello World";
    }   
    
    bindEvents = ()=>{
        initHeadertext();
    }

document.addEventListener('DOMContentLoaded',(e)=>{
    bindEvents();
});