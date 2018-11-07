$(document).ready(function() {
  var total = new Total();
  var game = new Game();
  game.create();

  $('#add-round').click(function() {
    if ($('#roll1').val() === 'strike') {
      var roll1Points = 'strike'
      var roll2Points = 0
    } else if ($('#roll2').val() === 'spare') {
      var roll1Points = parseInt($('#roll1').val());
      var roll2Points = 'spare'
    } else {
      var roll1Points = parseInt($('#roll1').val());
      var roll2Points = parseInt($('#roll2').val());
    }
    game.round[parseInt($('#round').val())].firstRoll(roll1Points);
    game.round[parseInt($('#round').val())].secondRoll(roll2Points);
    game.update(total);
    console.log(total.score());
    outputscore
    $('#current-score').text(total.score().toString());
    $('#round1roll1').text(game.round[1].firstRollPoints.toString());
  });


});
