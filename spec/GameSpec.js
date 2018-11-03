describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    // round1 = new Round();
  });

  describe("score", function() {
    it("should return the total score of the game", function() {
      expect(game.score()).toEqual(0);
    });
  });

  describe("addRound", function() {
    it("should add the round number and score to scorecard hash", function() {
      game.add(1, 10)
      expect(game._scoreHash).toEqual({1: 10});
      expect(game.score()).toEqual(10);
    });
  });

});
