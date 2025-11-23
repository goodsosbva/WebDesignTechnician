function solution() {
  const mainMenu = document.querySelectorAll(".main-menu > li");

  mainMenu.forEach(function (menu) {
    menu.addEventListener("mouseover", function (event) {
      const menuItem = this.closest("li");
      const subMenu = menuItem.querySelector(".sub-menu");
      subMenu.classList.add("active");
    });

    menu.addEventListener("mouseout", function (event) {
      const menuItem = this.closest("li");
      const subMenu = menuItem.querySelector(".sub-menu");
      subMenu.classList.remove("active");
    });
  });

  let idx = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function moveSlide() {
    console.log("hello", idx);
    if (idx == 2) {
      slides.forEach(function (slide) {
        slide.classList.add("no-transition");
      });

      for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateY(+${i * 350}px)`;
      }

      setTimeout(function () {
        slides.forEach(function (slide) {
          slide.classList.remove("no-transition");
        });
      }, 50);
    }

    idx = (idx + 1) % totalSlides;
    const slidesContainer = slides[idx];
    slidesContainer.style.transform = `translateY(-${idx * 350}px)`;
  }

  setInterval(moveSlide, 3000);
}

document.addEventListener("DOMContentLoaded", solution);
