const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// show menu
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// hide menu
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// animate on scrool initialize
AOS.init();

// gsap animation
// logo
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// nev menu
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});

// toggle menu
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});
// main heading
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});

// info text
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// call to action button
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// main image
gsap.from(".main_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
