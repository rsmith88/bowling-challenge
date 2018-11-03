function Game() {
  this._score = 0;
  this._scoreHash = {};
};

Game.prototype.score = function() {
  console.log(this._score);
  return this._score;
};

Game.prototype.add = function(roundNumber, roundScore) {
  console.log('Round number: ' + roundNumber + '  Round Score: ' + roundScore);
  this._scoreHash[roundNumber] = roundScore;
  console.log(this._scoreHash);
  this._score = totalScore(this._scoreHash);
};

function totalScore(scoreHash) {
  var sum = 0;
    for (var key in scoreHash) {
      sum += scoreHash[key];
    }; return sum
}
