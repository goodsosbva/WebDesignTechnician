function solution() {
  const subAtag = document.querySelectorAll(".menu a");
  console.log(subAtag);

  subAtag.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      const subUl = item.nextElementSibling;
      if (subUl) {
        subUl.classList.add("show");
      }
    });
    item.addEventListener("mouseout", function () {
      const subUl = item.nextElementSibling;
      if (subUl) {
        subUl.classList.remove("show");
      }
    });
  });

  let idx = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  function moveSlide() {
    if (idx === 2) {
      slides.forEach(function (slide) {
        slide.classList.add("active");
      });

      for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateY(+${i * 350}px)`;
      }

      setTimeout(function () {
        slides.forEach(function (slide) {
          slide.classList.remove("active");
        });
      }, 50);
    }

    idx = (idx + 1) % totalSlides;
    const slidesContainer = slides[idx];

    slidesContainer.style.transform = `translateY(-${idx * 100}%)`;
  }

  setInterval(moveSlide, 1000);
}

document.addEventListener("DOMContentLoaded", solution);
