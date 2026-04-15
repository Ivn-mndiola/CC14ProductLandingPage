const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".book-btn, #book-now").forEach(button => {
  button.addEventListener("click", () => {
    alert(" Booking request sent! We’ll contact you soon.");
  });
});

document.querySelectorAll("a[href^='#'").forEach(link =>{
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        nav.classList.remove("active");
    });
});

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.opacity = "0.85";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.opacity = "1";
  });
});