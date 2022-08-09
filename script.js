$(window).on("load", function () {
  $(".navbar-nav a").click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//
window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
}
