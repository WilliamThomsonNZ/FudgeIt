const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".nav-animation", { y: "0%", duration: 0.3, stagger: 0.3 });
tl.to(".i-animation", { y: "0%", duration: 0.3, stagger: 0.3 });

//Mobile Menu
const menuBtn = document.querySelector(".pop-menu"),
  sideNav = document.querySelector(".side-nav"),
  closeBtn = document.getElementById("close-btn"),
  sideList = document.getElementById("side-list");

menuBtn.addEventListener("click", () => {
  sideNav.style.width = "100%";
  closeBtn.style.display = "block";
  setTimeout(() => {
    sideList.style.opacity = "1";
  }, 300);
});

closeBtn.addEventListener("click", () => {
  sideNav.style.width = "0";
  closeBtn.style.display = "none";
  sideList.style.opacity = "0";
});

sideNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-item")) {
    sideNav.style.width = "0";
    closeBtn.style.display = "none";
    sideList.style.opacity = "0";
  }
});
