var main = function() {

  "use strict";

  var buttonClicked,
      id = document.location.search.replace(/^.*?\=/, "");

  if (id === "") window.alert("error");

  $(".button-wrapper").on("mousedown", function(event) {
    buttonClicked = $(this).attr("id");

    $.getJSON("/" + buttonClicked, function(res) {
      console.log(res.message);
    });

    console.log(id);
  });

  $(window).on("mouseup", function(event) {

    console.log("up" + $("#" + buttonClicked).attr("id"));
  });

}

$(document).ready(main);
