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
