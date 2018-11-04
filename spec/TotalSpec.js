describe("Total", function() {

  beforeEach(function() {
    game = new Game();
    game.create();
    total = new Total();
  });

  describe("score", function() {
    it("should return the total score of the game", function() {
      expect(total.score()).toEqual(0);
    });
  });

  describe("add", function() {
    it("should add the round number and score to scorecard hash", function() {
      total.add(1, 10);
      expect(total._scoreHash).toEqual({1: 10});
      expect(total.score()).toEqual(10);
    });

    it("should accept round.score as input for round score", function() {
      total.add(1, game.round[0].score());
      expect(total._scoreHash).toEqual({1: 0});
      expect(total.score()).toEqual(0);
    });
  });

});
