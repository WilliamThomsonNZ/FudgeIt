// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".nav-animation", { y: "0%", duration: 0.3, stagger: 0.3 });
// tl.to(".i-animation", { y: "0%", duration: 0.3, stagger: 0.3 });

//intro Animation

const tl = gsap.timeline();
gsap.to("body", { duration: 0, css: { visibility: "visible" } });

tl.from(".intro-animation span", {
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "power4.out",
  delay: 0.8,
  skewY: 7,
})
  // .from(".intro-animation img", {
  //   duration: 1,
  //   ease: "power4.out",
  //   opacity: 0,
  // })
  .to(".intro-animation-element", {
    opacity: 0,
    duration: 2,
    ease: "expo.inOut",
  })
  .to(".intro-animation-drip", {
    duration: 5,
    ease: "expo.inOut",
    y: "100%",
    delay: -2.3,
  })

  .to(".intro-animation", {
    y: "100%",
    duration: 2,
    delay: -3.5,

    ease: "expo.inOut",
  })
  .to(".nav-animation", {
    y: 0,
    ease: "power4.out",
    duration: 1,
    delay: -3,
    stagger: 0.3,
  });

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

//Form
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  (async () => {
    const form = document.getElementById("contactBtn");
    form.innerHTML = "<img src='src/imgs/loading3.svg'/>";
    await emailjs.sendForm("fudgeit", "fudgeit", "#contact-form");
    form.innerHTML = "&#10003;";
    setTimeout(() => {
      form.innerHTML = "Send";
    }, 2500);
  })().catch((err) => {
    console.log(err);
  });
  event.target.reset();
});
