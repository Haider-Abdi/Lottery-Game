
var div = $("div");
var items = div.find(".grid__item__img");
var length = $(".grid__item__img").length;
var random = Math.floor(Math.random() * length);
items.removeClass("grid__item__img-correct");
items.eq(random).addClass("grid__item__img-correct");

$("#feedback").hide();
$(".grid__item__img").click(function () {
  $(".grid__item__img").removeClass("grid__item__img-selected");
  $(this).addClass("grid__item__img-selected");

  if ($(this).hasClass("grid__item__img-correct")) {
    $("#feedback__title").text("You have great intuition!");
    $("#feedback__desc").text("You picked the correct card.");
    var img = document.createElement("img");
    img.src = "https://media4.giphy.com/media/ZcUGu59vhBGgbBhh0n/giphy.gif";
    var src = document.getElementById("header");
    src.appendChild(img);
  } else {
    $("#feedback__title").text("Sorry.");
    $("#feedback__desc").text("That is not the correct card.");
    var img = document.createElement("img");
    img.src = "https://media.tenor.com/Fm9jrkIeproAAAAC/loser.gif";
    var src = document.getElementById("header");
    src.appendChild(img);
  }
  $(".grid__item__img-correct").addClass("grid__item__img-correct-finish");
  $("#feedback").show();
});
