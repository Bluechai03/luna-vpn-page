// Variables for navigation
const navList = document.querySelector(".nav__list");
const openMenu = document.querySelector(".nav__menu--open");
const closeMenu = document.querySelector(".nav__menu--close");

// Navigation
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
navList.addEventListener("click", close);

// Open nav menu when hamburger icon is clicked
function show() {
  openMenu.style.opacity = "0";
  closeMenu.style.display = "flex";
  navList.style.display = "flex";
  navList.style.top = "0";
}

// Close nav menu when x icon is clicked
function close() {
  navList.style.top = "-100%";
  closeMenu.style.display = "none";
  openMenu.style.opacity = "1";
}

// Variables for demo section
let ipAddress = document.querySelector(".demo__ip-address");
let statusDemo = document.querySelector(".demo__status");
let imgDemo = document.querySelector("#demo-img");
let btnDemo = document.querySelector("#demo-btn");

let server = document.querySelector("#servers");

// Set colours
let clrConnect = "hsl(79, 100%, 79%)";
let clrDisconnect = "hsl(18, 100%, 72%)";

// An event listener that will call the demo() once the btnDemo is clicked
btnDemo.addEventListener("click", demo);
function demo() {
  // Run code below if the demo button's text is 'Connect'
  if (btnDemo.innerHTML == "Connect") {
    imgDemo.src = "images/illustration_demo-connected.png"; // Change image
    imgDemo.alt =
      "A student sitting on top of an unknown planet using her phone"; // Change alt text for accessibility
    ipAddress.innerHTML = "63.15.38.135"; // Change ip address
    ipAddress.style.color = "hsl(79, 100%, 65%)"; // Change colour of ip address
    statusDemo.innerHTML = `You're now safely connected to ${server.value}!`; // Change text and take the value selected by user in the select element

    // Change look of button
    btnDemo.innerHTML = "Disconnect";
    btnDemo.style.backgroundColor = "transparent";
    btnDemo.style.borderColor = clrDisconnect;
    btnDemo.style.color = clrDisconnect;
  } else {
    // Revert all the changed elements to its original state, aka disconnected state
    imgDemo.src = "images/illustration_demo-disconnected.png"; // Change image
    imgDemo.alt = "A student sitting on top of a location pin"; // Change alt text for accessibility
    ipAddress.innerHTML = "192.168.1.1"; // Change ip address
    ipAddress.style.color = "hsl(0, 98%, 65%)"; // Change colour of ip address
    statusDemo.innerHTML = `Oh no, Your location is exposed!`; // Change text

    // Change look of button
    btnDemo.innerHTML = "Connect";
    btnDemo.style.backgroundColor = "transparent";
    btnDemo.style.borderColor = clrConnect;
    btnDemo.style.color = clrConnect;
  }
}

// Scroll to href when an anchor link is clicked
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // set scroll to smooth
    });
  });
});

// Change background colour of header using Jquery
$(document).ready(function () {
  let scroll_start = 0;
  let startchange = $(".hero"); // Start changing background colour if scrolled past hero section
  let offset = startchange.offset();
  $(document).scroll(function () {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top) {
      // Change colour to this value for the header class when scrolled past
      $(".header").css("background-color", "hsl(244, 14%, 10%, .9)");
    } else {
      // Set background to transparent for the header class
      $(".header").css("background-color", "transparent");
    }
  });
});
console.log("Anna Montero");

// Animation timelines for scroll animation using GSAP toolset
// Hero section
let tlHero = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
  },
});

// Set animation for hero class
tlHero.from(".hero", { x: 400, opacity: 0, duration: 1.5 });

// Features section
let tlFeatures = gsap.timeline({
  scrollTrigger: {
    trigger: ".features",
    start: "top center",
  },
});

// Set animation for text and grid in features section
tlFeatures
  .from("#features-content", { y: 500, opacity: 0, duration: 1 }, "-=1")
  .from(".grid", { x: -300, opacity: 0, duration: 1.5 });

// Pricing section
let tlPricing = gsap.timeline({
  scrollTrigger: {
    trigger: ".pricing",
    start: "top center",
  },
});

// Set animation for text and cards in pricing section
tlPricing
  .from("#pricing-content", { x: -300, opacity: 0, duration: 1 })
  .from("#cards", { x: 300, opacity: 0, duration: 1 }, "-=1.5");

// Demo section
let tlDemo = gsap.timeline({
  scrollTrigger: {
    trigger: ".demo",
    start: "center bottom",
  },
});

// Set animation for image and controls in demo section
tlDemo
  .from(".demo__img", { x: 300, opacity: 0, duration: 1 })
  .from(".demo__controls", { y: -300, opacity: 0, duration: 1 });
