// toplineSlider
const toplineSlider = new Swiper(".topline .swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".topline-next",
    prevEl: ".topline-prev",
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

// spoiler
function spoilersFunction() {
  const spoilerTitles = document.querySelectorAll(".js-spoiler");
  const spoilerBodies = document.querySelectorAll(".spoiler-body");
  spoilerTitles.forEach((item) => {
    let showTitle = "";
    const isCollapsed = item
      .closest(".spoiler")
      .classList.contains("collapsed");

    if (
      document.documentElement.clientWidth >= 1200 &&
      item.classList.contains("footer_item-title")
    ) {
      return;
    }

    let hideTitle = item.getAttribute("data-title");
    const children = item.closest(".spoiler").children;
    const body = Object.values(children).find((el) =>
      el.classList.contains("spoiler-body")
    );

    item.addEventListener("click", (e) => {
      e.preventDefault();
      const bodyHeight = body.children[0].offsetHeight;

      if (!item.classList.contains("active")) {
        if (isCollapsed) {
          spoilerTitles.forEach((el) => el.classList.remove("active"));
          spoilerBodies.forEach((el) => (el.style.height = "0px"));
        }
        body.style.height = `${bodyHeight}px`;
        item.classList.add("active");
        if (hideTitle) {
          showTitle = item.textContent;
          item.textContent = hideTitle;
        }
      } else {
        body.removeAttribute("style");
        item.classList.remove("active");
        body.style.height = "0px";
        if (hideTitle) {
          item.textContent = showTitle;
        }
      }
    });
  });
}
spoilersFunction();

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

// custom_popup
function openCustomPopup(classname) {
  const openBtns = document.querySelectorAll(classname);
  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(`#${e.target.dataset.id}`).classList.add("opened");
      document.body.classList.add("customPopup_opened");
    });
  });
}
function closeCustomPopup(classname) {
  const customPopupCls = document.querySelectorAll(classname);
  customPopupCls.forEach((cls) => {
    cls.addEventListener("click", () => {
      cls.closest(".custom_popup").classList.remove("opened");
      document.body.classList.remove("customPopup_opened");
    });
  });
}
closeCustomPopup(".custom_popup-backdrop");
closeCustomPopup(".custom_popup-close");
openCustomPopup(".jsCustomPopup");
