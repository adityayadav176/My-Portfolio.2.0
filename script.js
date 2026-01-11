window.addEventListener("scroll" , ()=>{
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active");
    }
});
