// jQuery(document).ready(function () {
//   $(".navi > li")
//     .mouseover(function () {
//       $(".submenu").stop().slideDown(500);
//     })
//     .mouseout(function () {
//       $(".submenu").stop().slideUp(500);
//     });
// });

// 단일로만 랜더링
// document.addEventListener("DOMContentLoaded", function () {
//   const naviItems = document.querySelectorAll(".navi > li");
//   //   const submenu = document.querySelector(".submenu");

//   naviItems.forEach(function (item) {
//     item.addEventListener("mouseover", function () {
//       const submenu = item.querySelector(".submenu");
//       submenu.style.display = "block";
//       submenu.style.transition = "all 0.5s ease-in-out";
//     });
//     item.addEventListener("mouseout", function () {
//       const submenu = item.querySelector(".submenu");
//       submenu.style.display = "none";
//       submenu.style.transition = "all 0.5s ease-in-out";
//     });
//   });
// });

// 모든 메뉴 렌더링
document.addEventListener("DOMContentLoaded", function () {
  const naviItems = document.querySelectorAll(".navi > li");
  const allSubmenus = document.querySelectorAll(".submenu");

  naviItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      allSubmenus.forEach(function (submenu) {
        submenu.style.display = "block";
        submenu.style.transition = "all 0.5s ease-in-out";
        submenu.style.opacity = "1";
        submenu.style.transform = "translateY(0)";
      });
    });

    item.addEventListener("mouseout", function () {
      // 모든 서브메뉴를 숨기게
      allSubmenus.forEach(function (submenu) {
        submenu.style.display = "none";
        submenu.style.transition = "all 0.5s ease-in-out";
        submenu.style.opacity = "0";
        submenu.style.transform = "translateY(-10px)";
      });
    });
  });
});

// setInterval(function () {
//   $(".slidelist").delay(2000);
//   $(".slidelist").animate({ marginLeft: -1200 });
//   $(".slidelist").delay(2000);
//   $(".slidelist").animate({ marginLeft: -2400 });
//   $(".slidelist").delay(2000);
//   $(".slidelist").animate({ marginLeft: 0 });
//   $(".slidelist").delay(2000);
// });

// function slideTo(position, duration = 500) {
//   const slidelist = document.querySelector(".slidelist");
//   slidelist.style.transition = `margin-left ${duration}ms ease`;
//   slidelist.style.marginLeft = position;
// }

// function startSlider() {
//   // 2초 대기 후 첫 번째 슬라이드
//   setTimeout(() => slideTo("-1200px"), 2000);

//   // 4초 후 두 번째 슬라이드
//   setTimeout(() => slideTo("-2400px"), 4000);

//   // 6초 후 원래 위치로
//   setTimeout(() => slideTo("0px"), 6000);
// }

// // 8초마다 반복
// setInterval(startSlider, 8000);

// // 첫 번째 실행
// startSlider();

function slideUpTo(position, duration = 500) {
  const slidelist = document.querySelector(".slidelist");
  slidelist.style.transition = `margin-top ${duration}ms ease`;
  slidelist.style.marginTop = position;
}

function startVerticalSlider() {
  // 2초 대기 후 첫 번째 슬라이드 (위로)
  setTimeout(() => slideUpTo("-300px"), 2000);

  // 4초 후 두 번째 슬라이드 (더 위로)
  setTimeout(() => slideUpTo("-600px"), 4000);

  // 6초 후 원래 위치로
  setTimeout(() => slideUpTo("0px"), 6000);
}

// 8초마다 반복
setInterval(startVerticalSlider, 8000);

// 첫 번째 실행
startVerticalSlider();

// $(function () {
//   $(".tabmenu > li > a").click(function () {
//     $(this).parent().addClass("active").siblings().removeClass("active");
//     return false;
//   });
// });

// 바닐라 자바스크립트로도 탭 메뉴 구현 (추가)
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tabmenu > li > a");

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // 모든 탭에서 active 클래스 제거
      const allTabs = document.querySelectorAll(".tabmenu > li");
      allTabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      // 클릭한 탭에만 active 클래스 추가
      this.parentElement.classList.add("active");
    });
  });
});

// $(".notice li:first-child").click(function () {
//   $("#layer").addClass("active");
// });

// $(".btn").click(function () {
//   $("#layer").removeClass("active");
// });

// 바닐라 자바스크립트로도 레이어 팝업 구현 (추가)
document.addEventListener("DOMContentLoaded", function () {
  // 공지사항 첫 번째 항목 클릭 시 레이어 팝업 열기
  const firstNoticeItem = document.querySelector(".notice li:first-child");
  if (firstNoticeItem) {
    firstNoticeItem.addEventListener("click", function () {
      const layer = document.getElementById("layer");
      if (layer) {
        layer.classList.add("active");
      }
    });
  }

  // 닫기 버튼 클릭 시 레이어 팝업 닫기
  const closeBtn = document.querySelector(".btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const layer = document.getElementById("layer");
      if (layer) {
        layer.classList.remove("active");
      }
    });
  }
});
