const cvBtn = document.querySelector(".Download-cv-btn");

window.addEventListener("scroll" , ()=>{
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active");
    }
});

document.getElementById("hireMeBtn").addEventListener("click", () => {

  // 1️⃣ Download CV
  const link = document.createElement("a");
  link.href = "assets/Resume.pdf";
  link.download = "Aditya_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // 2️⃣ Scroll to Contact after delay
  setTimeout(() => {
    document.getElementById("Contact").scrollIntoView({
      behavior: "smooth"
    });
  }, 200); // delay in ms
});






