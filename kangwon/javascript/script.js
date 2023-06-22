jQuery(document).ready(function(){
    $(".navi>li")
        .mouseover(function(){
            $(this).children(".submenu").stop().slideDown(500);
        })
        .mouseleave(function(){
            $(this).children(".submenu").stop().slideUp(500);
        })

    $(".imgslide a:gt(0)").hide();
    setInterval(function(){
        $(".imgslide a:first-child")
            .fadeOut()
            .next("a")
            .fadeIn()
            .end()
            .appendTo(".imgslide");
    }, 3000)

    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
      });
      $(".btn").click(function () {
        $("#modal").removeClass("active");
      });
});