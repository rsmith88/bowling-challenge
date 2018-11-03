function Round() {
  this._score = 0;
  this._complete = false;
};

Round.prototype.score = function() {
  return this._score;
};

Round.prototype.firstRoll = function(roll) {
  if (roll === 'strike') {
    this._score += 10
  } else {
    this._score += roll
  }
}
