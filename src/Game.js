function Game() {
  this.round = new Array
};

Game.prototype.create = function() {
  for (var i = 0; i < 10; ++i) {
    this.round[i] = new Round(i)
  }
}

Game.prototype.update = function(round) {
  if (round.complete) {
    total.add(round.roundNumber, round.score())
  } else {
    console.log("Round " + round.roundNumber + "incomplete")
  }
};
