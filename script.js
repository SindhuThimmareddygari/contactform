document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      successMessage.classList.add("show");
  
      
      contactForm.reset();
  
      
      setTimeout(() => {
        successMessage.classList.remove("show");
      }, 3000);
    });
  });
  