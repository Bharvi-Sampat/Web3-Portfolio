$(window).on("load", function () {
  $(".navbar-nav a").click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//
function copyEmail() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText("pankajdalmia.2000@gmail.com");
}

//
function copyNum() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText("+91 85918 73424");
}
