$(window).on("load", function () {
  $(".navbar-nav a").click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});
