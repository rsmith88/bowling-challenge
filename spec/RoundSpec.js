describe("Round", function() {

  beforeEach(function() {
    game = new Game();
    round1 = new Round();
  });

  describe("score", function() {
    it("should return the total score of the round", function() {
      expect(round1.score()).toEqual(0);
    });
  });

});
