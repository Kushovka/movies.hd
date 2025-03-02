$(".open-popup").click(function (e) {
  e.preventDefault();
  $(".popup-bg").fadeIn(600);
});
$(".fa-solid").click(function () {
  $(".popup-bg").fadeOut(600);
});

$("body").on("click", ".password-control", function () {
  if ($("#password-input").attr("type") == "password") {
    $(this).addClass("view");
    $("#password-input").attr("type", "text");
  } else {
    $(this).removeClass("view");
    $("#password-input").attr("type", "password");
  }
  return false;
});
