// carouselCreator
function carouselCreator(id, num = 4, space = 24) {
  return new Swiper(id, {
    slidesPerView: 1,
    spaceBetween: space,
    breakpoints: {
      480: { slidesPerView: 2 },
      750: { slidesPerView: 3 },
      1020: { slidesPerView: num },
    },
    pagination: {
      el: `${id} .swiper-pagination`,
      type: "progressbar",
    },
    navigation: {
      nextEl: `${id} .swiper-button-next`,
      prevEl: `${id} .swiper-button-prev`,
    },
  });
}
const reviewsSlider = carouselCreator("#reviews-slider", 5);
const alsolikeSlider = carouselCreator("#alsolike-slider", 4);

// js-foot_title
if (document.documentElement.clientWidth < 1200) {
  const footTitles = document.querySelectorAll(".js-foot_title");
  footTitles.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      btn.nextElementSibling.classList.toggle("open");
    });
  });
}

// nav open / close
document.querySelector(".js-nav_open").addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.toggle("active");
  document.body.classList.toggle("nav_opened");
});

if (document.documentElement.clientWidth < 1200) {
  const navLinks = document.querySelectorAll(".navmenu > ul > li > a");
  const dropNavCloses = document.querySelectorAll(".dropdown_nav-close");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      link.nextElementSibling.classList.toggle("opened");
    });
  });

  dropNavCloses.forEach((close) => {
    close.addEventListener("click", () => {
      close.closest(".dropdown_nav").classList.toggle("opened");
    });
  });
}

// Fancybox
Fancybox.bind("[data-fancybox]", {
  Toolbar: {
    display: {
      left: ["infobar"],
      right: ["close"],
    },
  },
  Thumbs: false,
});

// recommend
const recomendBtn = document.querySelector(".js-recommend");
if (recomendBtn) {
  recomendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = e.target.closest(".recommendbox");
    const hidden = parent.children[0];
    const height = parent.children[0].children[0].offsetHeight;
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      hidden.style.height = height + "px";
      e.target.innerHTML = "&uarr; Скрыть &uarr;";
    } else {
      e.target.classList.remove("active");
      hidden.removeAttribute("style");
      e.target.innerHTML = "&darr; Показать еще &darr;";
    }
  });
}

// Dropdown selects
const selectDropdowns = document.querySelectorAll(
  ".select_dropdown .dropdown-menu"
);
selectDropdowns.forEach((dropdown) => {
  dropdown.children[0].children[0].classList.add("selected");
});
const selectOptions = document.querySelectorAll(".select_dropdown-option");
selectOptions.forEach((option, index) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = e.target.closest(".select_dropdown");
    const toggle = parent.children[0];
    toggle.textContent = e.target.textContent;
    parent.children[1].children[0].children[0].classList.add("selected");

    Object.values(parent.children[1].children).forEach((el) => {
      if (el.children[0].classList.contains("selected")) {
        el.children[0].classList.remove("selected");
      }
    });

    e.target.classList.add("selected");
  });
});

// Video
// const pauseVideoBtn = document.querySelector(".pausebtn");
// const playVideoBtn = document.querySelector(".playbtn");
// const muteVideoBtn = document.querySelector(".mutebtn");
// const unmuteVideoBtn = document.querySelector(".unmutebtn");
// const videobox = document.querySelector("#video_header");
// if (
//   pauseVideoBtn &&
//   playVideoBtn &&
//   muteVideoBtn &&
//   unmuteVideoBtn &&
//   videobox
// ) {
//   pauseVideoBtn.addEventListener("click", () => {
//     videobox.pause();
//     pauseVideoBtn.style.display = "none";
//     playVideoBtn.style.display = "block";
//   });
//   playVideoBtn.addEventListener("click", () => {
//     videobox.play();
//     pauseVideoBtn.style.display = "block";
//     playVideoBtn.style.display = "none";
//   });
//   muteVideoBtn.addEventListener("click", () => {
//     videobox.muted = false;
//     muteVideoBtn.style.display = "none";
//     unmuteVideoBtn.style.display = "block";
//   });
//   unmuteVideoBtn.addEventListener("click", () => {
//     videobox.muted = true;
//     muteVideoBtn.style.display = "block";
//     unmuteVideoBtn.style.display = "none";
//   });
// }
