describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    round1 = new Round();
  });

  describe("score", function() {
    it("should return the total score of the game", function() {
      expect(game.score()).toEqual(0);
    });
  });

  describe("add", function() {
    it("should add the round number and score to scorecard hash", function() {
      game.add(1, 10);
      expect(game._scoreHash).toEqual({1: 10});
      expect(game.score()).toEqual(10);
    });

    it("should accept round.score as input for round score", function() {
      game.add(1, round1.score());
      expect(game._scoreHash).toEqual({1: 0});
      expect(game.score()).toEqual(0);
    });
  });

});
