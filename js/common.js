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
const reviewsCatalogSlider = carouselCreator("#reviews_catalog", 4);
const productVideos = carouselCreator("#productVideos", 4);

// iconsSlider
const iconsSlider = new Swiper("#icons_slider", {
  slidesPerView: 1,
  spaceBetween: 140,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: `#icons_slider .swiper-button-next`,
    prevEl: `#icons_slider .swiper-button-prev`,
  },
});

// filterbox-subcats
const filterboxSubcats = new Swiper(".filterbox-subcats .swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  breakpoints: {
    920: { slidesPerView: "auto", spaceBetween: 20 },
  },
});

// reviewGallery
const reviewGallery = new Swiper("#reviewGallery .swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: `#reviewGallery .swiper-button-next`,
    prevEl: `#reviewGallery .swiper-button-prev`,
  },
});

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
const recomendBtns = document.querySelectorAll(".js-recommend");
if (recomendBtns) {
  recomendBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
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
  });
}

// Dropdown selects
const selectDropdowns = document.querySelectorAll(".select_dropdown .dropdown-menu");
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

// small_filter-item
const calcRadioButtons = document.querySelectorAll(".small_filter-item input");
if (calcRadioButtons) {
  calcRadioButtons.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const { value, name } = e.target;
      let title = e.target.getAttribute("data-title");

      let child = e.target.closest(".small_filter").children[0];
      let titleCalc = child.children[1];
      let chooseWord = child.children[0].children[0];
      chooseWord.style.display = "none";
      titleCalc.innerHTML = `: <b>${title}</b>`;

      if (name === "quality") {
        child.children[0].children[1].textContent = "Чистота бриллианта";
      }

      document.querySelector(`#featTitle-${name}`).innerHTML = `: <b>${title}</b>`;

      document.querySelectorAll(".feaures_info-details").forEach((el) => {
        if (el.id.includes(name)) {
          el.classList.remove("opened");
        }
      });

      document.querySelector(`#featInfo-${name}-${value}`).classList.add("opened");
    });
  });
}

// Order
const orderLoginBtns = document.querySelectorAll(".js-order_login");
const orderGuestBtns = document.querySelectorAll(".js-order_guest");
const orderRecallBtn = document.querySelector(".js-order_recall");
if (orderLoginBtns || orderGuestBtns) {
  orderLoginBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#order_login").style.display = "block";
      document.querySelector("#order_guest").style.display = "none";
      document.querySelector("#order_recall").style.display = "none";
    });
  });
  orderGuestBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#order_login").style.display = "none";
      document.querySelector("#order_recall").style.display = "none";
      document.querySelector("#order_guest").style.display = "block";
    });
  });
}
if (orderRecallBtn) {
  orderRecallBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#order_login").style.display = "none";
    document.querySelector("#order_recall").style.display = "block";
  });
}

// social scroll
let lastScrollTop = 0;
const socialButtons = document.querySelector(".fixed_socials");
const filterSubcats = document.querySelector(".filterbox-subcats");
const subcatsContainer = document.querySelector(".subcats_container");
if (socialButtons && document.documentElement.clientWidth < 1000) {
  document.addEventListener("scroll", () => {
    let dirPoint = document.pageYOffset || document.documentElement.scrollTop;

    // Filter
    if (filterSubcats) {
      const fromTop = subcatsContainer.getBoundingClientRect().top;
      if (fromTop > 0) {
        filterSubcats.classList.remove("fixed");
        filterSubcats.classList.remove("shown");
      } else {
        filterSubcats.classList.add("fixed");
      }
    }

    if (dirPoint > lastScrollTop) {
      socialButtons.classList.add("hidden");
      if (filterSubcats) {
        filterSubcats.classList.remove("shown");
      }
    } else if (dirPoint < lastScrollTop) {
      socialButtons.classList.remove("hidden");
      if (filterSubcats && filterSubcats.classList.contains("fixed")) {
        filterSubcats.classList.add("shown");
      }
    }
    lastScrollTop = dirPoint;
  });
}

// Header scroll
let lastTop = 0;
const header = document.querySelector(".header");
if (header && document.documentElement.clientWidth > 1000) {
  document.addEventListener("scroll", () => {
    const top = document.documentElement.scrollTop;
    let dirPoint = document.pageYOffset || document.documentElement.scrollTop;

    if (top > 200) {
      header.classList.add("hidden");
      if (dirPoint > lastTop) {
        header.classList.remove("shown");
      } else {
        header.classList.add("shown");
      }
    } else {
      header.classList.remove("shown");
      header.classList.remove("hidden");
    }
    lastTop = dirPoint;
  });
}
