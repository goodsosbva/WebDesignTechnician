function solution() {
  const slidesItem = document.querySelectorAll(".sld");
  let idx = 0;

  slidesItem.forEach(function (item, i) {
    item.style.opacity = i === 0 ? "1" : "0";
    item.style.transition = "0.5s";
  });

  function slide() {
    slidesItem[idx].style.opacity = "0";
    slidesItem[idx].querySelector("img").style.transform = "scale(0.8)";

    idx = (idx + 1) % 3;

    slidesItem[idx].style.opacity = "1";
    slidesItem[idx].querySelector("img").style.transform = "scale(1.0)";
  }

  setInterval(slide, 1000);
}

document.addEventListener("DOMContentLoaded", solution);
