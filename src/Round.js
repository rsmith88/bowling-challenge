function Round() {
  this._score = 0;
  this._complete = false;
  this._strike = false;
  this._spare = false;
};

Round.prototype.score = function() {
  return this._score;
};

Round.prototype.firstRoll = function(roll) {
  if (roll === 'strike') {
    this._score += 10;
    this._strike = true;
  } else {
    this._score += roll;
    this._strike = false;
  }
}
