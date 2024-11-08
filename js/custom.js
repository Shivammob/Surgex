$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("menu-show");
  });

  // $(".nav-item .nav-link").click(function () {
  //   $(".nav-item .nav-link").removeClass("active");
  //   // $(".tab").addClass("active"); // instead of this do the below
  //   $(this).addClass("active");
  // });

  //   ".custom-cursor".length;
  //   {
  //     var t = document.querySelector(".custom-cursor__cursor"),
  //       i = document.querySelector(".custom-cursor__cursor-two"),
  //       o = document.querySelectorAll("a");
  //     document.addEventListener("mousemove", function (e) {
  //       e.clientX,
  //         e.clientY,
  //         (t.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`);
  //     }),
  //       document.addEventListener("mousemove", function (e) {
  //         var t = e.clientX,
  //           o = e.clientY;
  //         (i.style.left = t + "px"), (i.style.top = o + "px");
  //       }),
  //       document.addEventListener("mousedown", function () {
  //         t.classList.add("click"), i.classList.add("custom-cursor__innerhover");
  //       }),
  //       document.addEventListener("mouseup", function () {
  //         t.classList.remove("click"),
  //           i.classList.remove("custom-cursor__innerhover");
  //       }),
  //       o.forEach((e) => {
  //         e.addEventListener("mouseover", () => {
  //           t.classList.add("custom-cursor__hover");
  //         }),
  //           e.addEventListener("mouseleave", () => {
  //             t.classList.remove("custom-cursor__hover");
  //           });
  //       });
  //   }
});

$(".slide-track").owlCarousel({
  dots: false,
  nav: false,
  loop: true,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 6000,
  autoplaySpeed: 6000,
  autoplayHoverPause: false,
  ltr: true,
  responsive: {
    0: { items: 2, slideBy: 2 },
    300: { items: 3, slideBy: 3 },
    768: { items: 5, slideBy: 5 },
    1199: { items: 7, slideBy: 7 },
    1599: { items: 8, slideBy: 8 },
  },
});

// $(".tab-carousel").owlCarousel({
//   dots: true,
//   nav: false,
//   loop: true,
//   autoplay: true,
//   autoplayHoverPause: false,
//   responsive: {
//     0: { items: 1, slideBy: 0 },
//   },
// });

$(".tab-carousel").owlCarousel({
  autoplay: false,
  dots: true,
  nav: true,
  navText: false,
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
  },
});

let currentYear = document.getElementById("currentYear");
let date = new Date().getFullYear();
currentYear.innerHTML = date;
// console.log(date)

//hide on scroll to top
let scrollBtn = document.getElementById("backtoTop");
let navbar = document.getElementById("navbar");

function scrollFunction() {
  let y = window.scrollY;
  if (y > 100) {
    scrollBtn.className = "back-to-top d-block";
    navbar.classList.add("navbar-pink");
  } else {
    scrollBtn.className = "back-to-top d-none";
    navbar.classList.remove("navbar-pink");
  }
  // console.log(y);
}

window.addEventListener("scroll", scrollFunction);

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 60;
//     // console.log(elementTop, "s", windowHeight, "y", elementVisible)
//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

const images = document.querySelectorAll(".image-container");
const leftContent = document.getElementById("rightContent");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        images.forEach((image) => image.classList.remove("active"));
        entry.target.classList.add("active");
        updateLeftContent(entry.target.dataset.content);
      }
    });
  },
  { threshold: 0.5 }
);

images.forEach((image) => observer.observe(image));

function updateLeftContent(content) {
  const contentMap = {
    "Section 1": `
     <div class="reach-right" id="reachAquire">
    <lottie-player
        src="./js/Reach&Acquire.json"
        background="transparent"
        speed="1"
        loop
        autoplay>
    </lottie-player>
                                </div>
`,
    "Section 2": `<div class="powered-left" id="aimlPowered">
     <lottie-player
        src="./js/AI&ML-powered.json"
        background="transparent"
        speed="1"
        loop
        autoplay>
    </lottie-player>
                                </div>`,
    "Section 3": `<div class="unified-right" id="unifiedDSP">
    <lottie-player
        src="./js/UnifiedDSP&GrowthMarketingPlatformImage.json"
        background="transparent"
        speed="1"
        loop
        autoplay>
    </lottie-player>
                                </div>`,
    "Section 4": `
                                <div class="data-driven-left" id="transparentData">
                                <lottie-player
        src="./js/Transparent&Data-Driven.json"
        background="transparent"
        speed="1"
        loop
        autoplay>
    </lottie-player>
                                </div>`,
  };
  leftContent.innerHTML = contentMap[content];
}

//tab content carousel issue
