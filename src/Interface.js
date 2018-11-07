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
    $('#current-score').text(total.score().toString());
    $('#round1roll1').text(game.round[1].firstRollPoints.toString());
    $('#round1roll2').text(game.round[1].secondRollPoints.toString());
    $('#round1score').text(game.round[1].scoreWithBonus.toString());
    $('#round2roll1').text(game.round[2].firstRollPoints.toString());
    $('#round2roll2').text(game.round[2].secondRollPoints.toString());
    $('#round2score').text(game.round[2].scoreWithBonus.toString());
    $('#round3roll1').text(game.round[3].firstRollPoints.toString());
    $('#round3roll2').text(game.round[3].secondRollPoints.toString());
    $('#round3score').text(game.round[3].scoreWithBonus.toString());
    $('#round4roll1').text(game.round[4].firstRollPoints.toString());
    $('#round4roll2').text(game.round[4].secondRollPoints.toString());
    $('#round4score').text(game.round[4].scoreWithBonus.toString());
    $('#round5roll1').text(game.round[5].firstRollPoints.toString());
    $('#round5roll2').text(game.round[5].secondRollPoints.toString());
    $('#round5score').text(game.round[5].scoreWithBonus.toString());
    $('#round6roll1').text(game.round[6].firstRollPoints.toString());
    $('#round6roll2').text(game.round[6].secondRollPoints.toString());
    $('#round6score').text(game.round[6].scoreWithBonus.toString());
    $('#round7roll1').text(game.round[7].firstRollPoints.toString());
    $('#round7roll2').text(game.round[7].secondRollPoints.toString());
    $('#round7score').text(game.round[7].scoreWithBonus.toString());
    $('#round8roll1').text(game.round[8].firstRollPoints.toString());
    $('#round8roll2').text(game.round[8].secondRollPoints.toString());
    $('#round8score').text(game.round[8].scoreWithBonus.toString());
    $('#round9roll1').text(game.round[9].firstRollPoints.toString());
    $('#round9roll2').text(game.round[9].secondRollPoints.toString());
    $('#round9score').text(game.round[9].scoreWithBonus.toString());
    $('#round10roll1').text(game.round[10].firstRollPoints.toString());
    $('#round10roll2').text(game.round[10].secondRollPoints.toString());
    $('#round10score').text(game.round[10].scoreWithBonus.toString());
  });


});
