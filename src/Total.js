function Total() {
  this._score = 0;
  this._scoreHash = {};
};

Total.prototype.score = function() {
  return this._score;
};

Total.prototype.add = function(roundNumber, roundScore) {
  console.log('Round number: ' + roundNumber + '  Round Score: ' + roundScore);
  this._scoreHash[roundNumber] = roundScore;
  this._score = totalScore(this._scoreHash);
};

function totalScore(scoreHash) {
  var sum = 0;
    for (var key in scoreHash) {
      sum += scoreHash[key];
    }; return sum
}
