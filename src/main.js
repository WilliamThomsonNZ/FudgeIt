const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".nav-animation", { y: "0%", duration: 0.3, stagger: 0.3 });
tl.to(".i-animation", { y: "0%", duration: 0.3, stagger: 0.3 });

//Carousel
