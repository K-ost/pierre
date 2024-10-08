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
    const body = Object.values(children).find(
      (el) => el.className === "spoiler-body"
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
