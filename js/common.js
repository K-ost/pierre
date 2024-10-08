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
  spoilerTitles.forEach((item) => {
    let showTitle = "";

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
