jQuery(document).ready(function () {
  $(".navi > li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  $(".slidelist > ul > li:gt(0)").hide();
  setInterval(function () {
    $(".slidelist > ul > li:first-child")
      .fadeOut(1000)
      .next("li")
      .fadeIn(1000)
      .end()
      .appendTo(".slidelist > ul");
  }, 3000);
});
