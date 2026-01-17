window.addEventListener("scroll" , ()=>{
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active");
    }
});

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/ay6598aditya@gmail.com", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    status.innerText = "Message sent successfully ✅";
    conaole.log("send successfull")
    form.reset();
  })
  .catch(error => {
    status.innerText = "Something went wrong ❌";
  });
});



