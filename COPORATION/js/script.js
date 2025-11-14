document.addEventListener("DOMContentLoaded", function () {
  // 간단한 슬라이드 애니메이션
  var currentSlide = 0;
  var slidesUl = document.querySelector(".slides ul");
  var totalSlides = document.querySelectorAll(".slides li").length;

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    slidesUl.style.transition = "margin-top 1s ease";
    slidesUl.style.marginTop = -(currentSlide * 400) + "px";
  }

  // 3초마다 다음 슬라이드로 이동
  setInterval(nextSlide, 3000);
});

// 메뉴 호버 이벤트
document.addEventListener("DOMContentLoaded", function () {
  var nav_li_item = document.querySelectorAll(".navi li");

  nav_li_item.forEach(function (li) {
    li.addEventListener("mouseover", function (event) {
      // 현재 li의 서브메뉴만 보이기
      var submenu = li.querySelector(".submenu");
      if (submenu) {
        submenu.style.display = "block";
      }
    });

    li.addEventListener("mouseleave", function (event) {
      // 현재 li의 서브메뉴만 숨기기
      var submenu = li.querySelector(".submenu");
      if (submenu) {
        submenu.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fnotice = document.querySelectorAll(".notice ul")[0];
  const cbtn = document.querySelector(".btn");
  const modal = document.querySelector(".modal");

  fnotice.addEventListener("click", function () {
    modal.classList.add("active");
  });

  cbtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });
});
