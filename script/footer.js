function footer() {
  gsap.from(".footer__div span", {
    y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
    opacity: 0,
    scrollTrigger: {
      trigger: ".footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.9,
    },
  });
}
document.addEventListener("DOMContentLoaded", footer);
