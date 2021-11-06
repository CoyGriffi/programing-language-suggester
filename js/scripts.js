function questionTotal (number1, number2, number3, number4, number5) {
  return parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4) + parseInt(number5)
}


$(document).ready(function() {
  $("#radioQuestions").submit(function(event) {

  let platform = $("input:radio[name=platform]:checked").val();
  let game = $("input:radio[name=game]:checked").val();
  let color = $("input:radio[name=color]:checked").val();
  let city = $("input:radio[name=city]:checked").val();
  let computer = $("input:radio[name=computer]:checked").val();
  let numberTotal = questionTotal (platform, game, color, city, computer);

  if (numberTotal >= 15) {
    $("#q2prompt, q3prompt, q5prompt").hide();
    $("#q1prompt").show();
    } else if (numberTotal <= 14 && numberTotal >= 7) {
      $("#q1prompt, q3prompt, q5prompt").hide();
      $("#q2prompt").show();
    } else if (numberTotal <= 6 && numberTotal >= 1) {
      $("#q2prompt, q1prompt, q5prompt").hide();
      $("#q3prompt").show();
    } else if (numberTotal < 0) {
      $("#q2prompt, q3prompt, q1prompt").hide();
      $("#q5prompt").show();
    }
    event.preventDefault();
  });
});