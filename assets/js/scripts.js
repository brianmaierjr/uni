// A $( document ).ready() block.
$( document ).ready(function() {

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

});
