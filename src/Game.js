function Game() {
  this.round = new Array
};

Game.prototype.create = function() {
  for (var i = 0; i < 11; ++i) {
    this.round[i] = new Round(i)
  }
}

Game.prototype.update = function() {
  for (var i = 1; i < 11; i++) {
    if (this.round[i].spare || this.round[i].strike) {
      total.add(this.round[i].roundNumber, 0);
    } else {
      total.add(this.round[i].roundNumber, this.round[i].score());
      this.round[i].scoreWithBonus = this.round[i].score();
    }
    if (this.round[i-1].spare) {
      updateSpare(this.round[i], this.round[i-1])
    }
    if (this.round[i-1].strike) {
      updateStrike(this.round[i], this.round[i-1])
    }
  };
};

function updateSpare(currentRound, previousRound) {
  var spareScore = (previousRound.score() + currentRound.firstRollPoints)
  total.add(previousRound.roundNumber, spareScore)
  previousRound.scoreWithBonus = spareScore
};

function updateStrike(currentRound, previousRound) {
  var strikeScore = (previousRound.score() + currentRound.score())
  total.add(previousRound.roundNumber, strikeScore)
  previousRound.scoreWithBonus = strikeScore
};

// function bonusRound(round) {
//   if (round.roundNumber = 11) {
//     if (this.round[i-1].spare) {
//       var spareScore = (this.round[i-1].score() + this.round[i].firstRollPoints)
//       total.add(this.round[i-1].roundNumber, spareScore)
//       this.round[i-1].scoreWithBonus = spareScore
//     }
//     if (this.round[i-1].strike) {
//       var strikeScore = (this.round[(i-1)].score() + this.round[i].score())
//       total.add(this.round[i-1].roundNumber, strikeScore)
//       this.round[i-1].scoreWithBonus = strikeScore
//     }
//   }
// }
