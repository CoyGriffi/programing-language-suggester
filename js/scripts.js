$(document).ready(function() {
  $("#question1").change(function(event) {
    event.preventDefault();
  const platform = $("input:radio[name=platform]:checked").val();
  const game = $("input:radio[name=game]:checked").val();
  const color = $("input:radio[name=color]:checked").val();
  const city = $("input:radio[name=city]:checked").val();
  const computer = $("input:radio[name=computer]:checked").val();

  if (platform === "mac" ) {
    $("#q1prompt").show();
    };
  });
});