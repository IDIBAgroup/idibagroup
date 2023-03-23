/*-----------------------------------------------------------------------------------

    Website Name: Idiba Group
    Description: Idiba home page and others
    Author: Idiba group sarl
    Version: 1.0

-----------------------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* ===============================  Navbar Menu  =============================== */

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-top");
      if (windowpos >= 90) {
        siteHeader.addClass("fixed-header");
        scrollLink.addClass("open");
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.removeClass("open");
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    $(".mobile-menu .menu-box").mCustomScrollbar();

    var mobileMenuContent = $(".main-header .menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev(".megamenu").slideToggle(900);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
  
  /*====================== Typing TextEfffect ====================*/

  var tTyped = new Typed("#multiText", {
    strings: ["PRODUCTION", "CONCEPT", "EVENTS", "STUDIO", "MARKETING AGENCY"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1000,
    showCursor: false,
  });

  /* ================= When document is Scrollig, do ===================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* =============================  Var Background image =====================*/

var pageSection = $(".bg-img, section");
 pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
});

  /* ===============================  countUp  =============================== */

  $(".mission-section .count").countUp({
    delay: 10,
    time: 500,
  });

  /* ===============================  tooltip  =============================== */

  $("[data-tooltip-tit]")
    .hover(
      function () {
        $('<div class="div-tooltip-tit"></div>')
          .text($(this).attr("data-tooltip-tit"))
          .appendTo("body")
          .fadeIn("slow");
      },
      function () {
        $(".div-tooltip-tit").remove();
      }
    )
    .mousemove(function (e) {
      $(".div-tooltip-tit").css({ top: e.pageY + 10, left: e.pageX + 20 });
    });
  $("[data-tooltip-sub]")
    .hover(
      function () {
        $('<div class="div-tooltip-sub"></div>')
          .text($(this).attr("data-tooltip-sub"))
          .appendTo("body")
          .fadeIn("slow");
      },
      function () {
        $(".div-tooltip-sub").remove();
      }
    )
    .mousemove(function (e) {
      $(".div-tooltip-sub").css({ top: e.pageY + 60, left: e.pageX + 20 });
    });
});

/* ============================  Preloader page  =========================== */

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
};
Pace.on("done", function () {
  $("#preloader").addClass("isdone");
  $(".loading-text").addClass("isdone");
});

/* ==============================  Scroll back to top ======================== */

$(document).ready(function () {
  "use strict";

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

/* ===============================  Mouse effect  ============================ */

function mousecursor() {
  if ($("body")) {
    const e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");
    let n,
      i = 0,
      o = !1;
    (window.onmousemove = function (s) {
      o ||
        (t.style.transform =
          "translate(" + s.clientX + "px, " + s.clientY + "px)"),
        (e.style.transform =
          "translate(" + s.clientX + "px, " + s.clientY + "px)"),
        (n = s.clientY),
        (i = s.clientX);
    }),
      $("body").on("mouseenter", "a, .cursor-pointer", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      }),
      $("body").on("mouseleave", "a, .cursor-pointer", function () {
        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
          (e.classList.remove("cursor-hover"),
          t.classList.remove("cursor-hover"));
      }),
      (e.style.visibility = "visible"),
      (t.style.visibility = "visible");
  }
}

$(function () {
  mousecursor();
});
/* ==========================  Apparution au defilement ========================== */
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (revealF) {
  observer.observe(revealF);
});

/* ==========================  Initiate glightbox ========================== */
const glightbox = GLightbox({
  selector: ".glightbox",
});

/* ===========  Init swiper slider ========== */

new Swiper(".slides-1", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".slides-3", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

 /* ===============================  slick Carousel  =============================== */
$('.blog-curs .blg-swipe').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.blog-curs .prev',
  nextArrow: '.blog-curs .next',
  dots: false,
  autoplay: true,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1
          }
      }
  ]
});

/* ========================== Phone Country Validation ====================*/
var input = document.querySelector("#phone");
window.intlTelInput(input,{});