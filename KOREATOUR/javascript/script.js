$(document).ready(function () {
  $(".navi > li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(300);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(300);
    });

  // $(".imgslide a:gt(0)").hide();
  // setInterval(function () {
  //   $(".imgslide a:first-child")
  //     .fadeOut()
  //     .next("a")
  //     .fadeIn()
  //     .end()
  //     .appendTo(".imgslide");
  // }, 3000);
});

// 바닐라 자바스크립트 버전
document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".navi > li");

  menuItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var submenu = item.querySelector(".submenu");
      if (submenu) {
        submenu.style.display = "block";
      }
    });

    item.addEventListener("mouseleave", function () {
      var submenu = item.querySelector(".submenu");
      if (submenu) {
        submenu.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".imgslide a");
  let currentIndex = 0;

  // 첫 번째만 보이게
  slides[0].style.display = "block";
  for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  setInterval(function () {
    // 인덱스로 현재 슬라이드 찾기
    const currentSlide = slides[currentIndex];
    const nextIndex = (currentIndex + 1) % slides.length;
    const targetSlide = slides[nextIndex];

    // 현재 슬라이드 fadeOut
    currentSlide.style.transition = "opacity 1s ease";
    currentSlide.style.opacity = "0";

    // 다음 슬라이드 fadeIn
    targetSlide.style.display = "block";
    targetSlide.style.transition = "opacity 1s ease";
    targetSlide.style.opacity = "1";

    // 인덱스 업데이트
    currentIndex = nextIndex;
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const first_notice = document.querySelectorAll(".notice ul")[0];
  const modalWrap = document.getElementById("modalWrap");
  const btn = document.querySelector(".btn");

  console.log("first_notice >> ", first_notice);

  first_notice.addEventListener("click", function () {
    first_notice.classList.add("active");
    modalWrap.classList.add("active");
  });

  btn.addEventListener("click", function () {
    modalWrap.classList.remove("active");
  });
});
