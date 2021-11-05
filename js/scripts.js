function questionTotal (number1, number2, number3, number4, number5) {
  return parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4) + parseInt(number5)
}


$(document).ready(function() {
  $("#radioQuestions").submit(function(event) {
    event.preventDefault();
  let numberTotal = questionTotal (platform, game, color, city, computer);
  const platform = $("input:radio[name=platform]:checked").val();
  const game = $("input:radio[name=game]:checked").val();
  const color = $("input:radio[name=color]:checked").val();
  const city = $("input:radio[name=city]:checked").val();
  const computer = $("input:radio[name=computer]:checked").val();
  
  if (numberTotal > 1) {
    $("#q1prompt").show();
  }
  });
});