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
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const skills = document.querySelectorAll(".skill");
let skillsAnimated = false;

function animateSkills() {
  const skillsSection = document.querySelector(".skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100 && !skillsAnimated) {
    skills.forEach(skill => {
      const circle = skill.querySelector("circle:last-child");
      const percent = circle.style.getPropertyValue("--percent");
      const offset = 314 - (314 * percent) / 100;

      circle.style.strokeDashoffset = offset;
    });

    skillsAnimated = true;
  }
}

window.addEventListener("scroll", animateSkills);







