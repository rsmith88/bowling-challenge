function Game() {
  this.round = new Array
};

Game.prototype.create = function() {
  for (var i = 0; i < 13; ++i) {
    this.round[i] = new Round(i)
  }
}

Game.prototype.update = function(total) {
  for (var i = 1; i < 13; i++) {
    if (this.round[i].spare || this.round[i].strike) {
      total.add(this.round[i].roundNumber, 0);
    } else {
      total.add(this.round[i].roundNumber, this.round[i].score());
      this.round[i].scoreWithBonus = this.round[i].score();
    }
    if (this.round[i-1].spare) {
      updateSpare(this.round[i], this.round[i-1], total)
    }
    if (this.round[i-1].strike && !this.round[i-2].strike) {
      updateStrike(this.round[i], this.round[i-1], total)
    }
    if (i > 2 && this.round[i-2].strike && this.round[i-2].strike) {
      updateDoubleStrike(this.round[i], this.round[i-1], this.round[i-2], total)
    }
    if (i > 10 ) {
      updateBonus(this.round[i], this.round[i-1], total)
    }
  };
};

function updateSpare(currentRound, previousRound, total) {
  var spareScore = (previousRound.score() + currentRound.firstRollPoints)
  total.add(previousRound.roundNumber, spareScore)
  previousRound.scoreWithBonus = spareScore
};

function updateStrike(currentRound, previousRound, total) {
  var strikeScore = (previousRound.score() + currentRound.score())
  total.add(previousRound.roundNumber, strikeScore)
  previousRound.scoreWithBonus = strikeScore
};

function updateDoubleStrike(currentRound, previousRound, previousRound2, total) {
  var strikeScore = (previousRound.score() + previousRound2.score() + currentRound.firstRollPoints)
  total.add(previousRound2.roundNumber, strikeScore)
  previousRound2.scoreWithBonus = strikeScore
};

function updateBonus(currentRound, previousRound, total) {
  total.add(currentRound.roundNumber, 0);
  currentRound.scoreWithBonus = 0
  if (currentRound.roundNumber === 12 ) {
    total.add(previousRound.roundNumber, 0);
    previousRound.scoreWithBonus = 0
  }
};
