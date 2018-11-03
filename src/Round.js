function Round() {
  this._score = 0;
  this.complete = false;
  this.strike = false;
  this.spare = false;
};

Round.prototype.score = function() {
  return this._score;
};

Round.prototype.firstRoll = function(rollPoints) {
  if (rollPoints === 'strike') {
    this._score = 10;
    this.strike = true;
  } else {
    this._score = rollPoints;
    this.strike = false;
  }
}

Round.prototype.secondRoll = function(rollPoints) {
  if (rollPoints === 'spare') {
    this._score = 10;
    this.spare = true;
    this.complete = false;
  } else if ((rollPoints + this._score) >= 10) {
    this._score = 10;
    this.spare = true;
    this.complete = false;
  } else {
    this._score += rollPoints;
    this.spare = false;
    this.complete = true;
  }
}
