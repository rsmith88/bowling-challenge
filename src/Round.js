function Round(roundNumber) {
  this.roundNumber = roundNumber
  this.firstRollPoints = 0;
  this.secondRollPoints = 0;
  this.strike = false;
  this.spare = false;
  this.scoreWithBonus = 'tbd'
};

Round.prototype.score = function() {
  var score = (this.firstRollPoints + this.secondRollPoints);
  return score;
};

Round.prototype.firstRoll = function(rollPoints) {
  if (rollPoints === 'strike') {
    this.firstRollPoints = 10;
    this.secondRollPoints = 0;
    this.strike = true;
  } else {
    this.firstRollPoints = rollPoints;
    this.strike = false;
  }
}

Round.prototype.secondRoll = function(rollPoints) {
  if (rollPoints === 'spare') {
    this.secondRollPoints = (10 - this.firstRollPoints);
    this.spare = true;
  } else if ((rollPoints + this.firstRollPoints) >= 10) {
    this.secondRollPoints = (10 - this.firstRollPoints);
    this.spare = true;
  } else {
    this.secondRollPoints = rollPoints;
    this.spare = false;
  }
}
