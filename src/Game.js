function Game() {
  this._score = 0
};

Game.prototype.score = function() {
  console.log(this._score);
  return this._score;
};
