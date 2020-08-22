var main = function() {

var values = [];

  $(".finish-button-wrapper").on("click", function() {
    $(".input-wrapper input").val(function(index, value) {
      values[index] = value;
    });

    console.log(values);

    $.post("/sendinformation", {"values": values}, function(res){
      //buinn að senda a serverinn
      console.log(res.id);

      //window.document.location = "./index.html?id=1234";
    });
  });
}

$(document).ready(main);
